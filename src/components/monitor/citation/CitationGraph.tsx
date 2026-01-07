import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Card, Text, BlockStack, Icon, Tooltip, InlineStack, Button, ButtonGroup } from '@shopify/polaris';
import { InfoIcon, MaximizeIcon, PlusIcon, MinusIcon, ViewIcon } from '@shopify/polaris-icons';
import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { forceRadial } from 'd3-force-3d';

export function CitationGraph({ data }: { data: any }) {
    const [GraphComp, setGraphComp] = useState<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
    const [isLoaded, setIsLoaded] = useState(false);

    const extraRenderers = useMemo(() => [new CSS2DRenderer()], []);

    const fgRef = useRef<any>();

    useEffect(() => {
        // Dynamically import graph libraries
        import('react-force-graph-3d').then(mod => {
            setGraphComp(() => mod.default);
            setIsLoaded(true);
        });
    }, []);

    const [highlightNodes, setHighlightNodes] = useState(new Set());
    const [highlightLinks, setHighlightLinks] = useState(new Set());
    const [hoverNode, setHoverNode] = useState<any>(null);

    const [zoomLevel, setZoomLevel] = useState(1);

    const updateHighlight = useCallback(() => {
        setHighlightNodes(highlightNodes);
        setHighlightLinks(highlightLinks);
    }, [highlightNodes, highlightLinks]);

    // Handle 2D/3D Mode Switching
    useEffect(() => {
        if (!fgRef.current) return;

        const fg = fgRef.current;
        
        if (viewMode === '2d') {
            // Lock Camera for 2D view
            // Move camera to a "top-down" or front view relative to the flat plane
            // numDimensions(2) usually projects to X,Y plane (Z=0)
            const distance = 1600; // Increased distance for 2D view to see the wider spread
            // Ensure cameraPosition exists before calling
            if (fg.cameraPosition) {
                fg.cameraPosition(
                    { x: 0, y: 0, z: distance }, // Position
                    { x: 0, y: 0, z: 0 },        // LookAt
                    1000                         // Transition ms
                );
            }

            // Disable Rotation controls
            const controls = fg.controls ? fg.controls() : undefined;
            if (controls) {
                controls.enableRotate = false;
                controls.enableZoom = true;
                controls.enablePan = true;
            }
        } else {
            // Enable Rotation for 3D Mode
            const controls = fg.controls ? fg.controls() : undefined;
            if (controls) {
                controls.enableRotate = true;
            }
        }
    }, [viewMode, isLoaded]);

    const handleNodeClick = useCallback((node: any) => {
        if (!fgRef.current) return;
        
        // Aim at node from distance
        const distance = 150;
        const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

        fgRef.current.cameraPosition(
            { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
            node, // lookAt ({ x, y, z })
            2000  // ms transition duration
        );
    }, []);

    // Loop to check zoom level - separate effect since we modified the previous one
    useEffect(() => {
        if (!fgRef.current) return;
        
        let animationFrameId: number;
        
        const checkZoom = () => {
            if (fgRef.current) {
                const camera = fgRef.current.camera();
                const distance = camera.position.length();
                setZoomLevel(distance);

                // Perspective Scaling Logic
                const nodes = data.nodes || [];
                if (nodes.length > 0) {
                    nodes.forEach((node: any) => {
                        if (node.cssObject) {
                            const scaleWrapper = node.cssObject.querySelector('.node-scale-wrapper');
                            if (scaleWrapper) {
                                // In 2D mode, scaling might need adjustment or be disabled?
                                // Let's keep it but maybe clamp differently.
                                // If 2D, camera Z is fixed distance, but panning might change perspective?
                                // Actually CSS2D is always screen space.
                                // In 2D orthographic-like view, we might want uniform scale.
                                // But here we use perspective camera even for "2D" view.
                                
                                const nodePos = new THREE.Vector3(node.x, node.y, node.z || 0);
                                const distToCamera = camera.position.distanceTo(nodePos);
                                
                                // Closer nodes should feel larger; far nodes stay tiny
                                const rawScale = 900 / distToCamera; 
                                const scale = Math.min(Math.max(rawScale, 0.08), 2.5); 
                                
                                scaleWrapper.style.transform = `scale(${scale})`;
                            }
                        }
                    });
                }
            }
            animationFrameId = requestAnimationFrame(checkZoom);
        };
        
        checkZoom();
        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [viewMode, data]);

    const handleNodeHover = useCallback((node: any) => {
        highlightNodes.clear();
        highlightLinks.clear();
        if (node) {
            highlightNodes.add(node);
            data.links.forEach((link: any) => {
                if (link.source.id === node.id || link.target.id === node.id) {
                    highlightLinks.add(link);
                    highlightNodes.add(link.source);
                    highlightNodes.add(link.target);
                }
            });
        }

        setHoverNode(node || null);
        updateHighlight();
    }, [data.links, updateHighlight, highlightNodes, highlightLinks]);

    const handleLinkHover = useCallback((link: any) => {
        highlightNodes.clear();
        highlightLinks.clear();

        if (link) {
            highlightLinks.add(link);
            highlightNodes.add(link.source);
            highlightNodes.add(link.target);
        }

        updateHighlight();
    }, [updateHighlight, highlightNodes, highlightLinks]);

    const hoverHandlerRef = useRef<(node: any) => void>(() => {});
    const clickHandlerRef = useRef<(node: any) => void>(() => {});

    useEffect(() => {
        hoverHandlerRef.current = handleNodeHover;
    }, [handleNodeHover]);

    useEffect(() => {
        clickHandlerRef.current = handleNodeClick;
    }, [handleNodeClick]);

    // Apply custom forces for better spacing
    useEffect(() => {
        if (fgRef.current) {
            const fg = fgRef.current;
            // Galaxy-like spacing: Strong repulsion, long links, weak center
            
            // 1. Repulsion (Charge) - pushes nodes apart
            // Much stronger to create "galaxy" spread
            fg.d3Force('charge').strength(viewMode === '2d' ? -3000 : -5000); 
            fg.d3Force('charge').distanceMax(viewMode === '2d' ? 2000 : 4000); // Allow repulsion to work at larger distances

            // 2. Link Force - controls distance of connected nodes
            // Longer distance for cleaner look, but shorter than topic radius to form clusters
            // In 2D, we might need shorter links to prevent overlaps or keep things tighter if spread is too wide
            // Or longer if it's too clumped. User said "not enough separation" in 2D.
            // Let's try slightly longer links in 2D to help them fan out.
            fg.d3Force('link').distance(viewMode === '2d' ? 400 : 300); 
            
            // 3. Center Force - pulls everything to middle
            // Weaken it so the middle isn't too dense (relaxed core)
            // Standard d3 center strength is often 1.0, reducing it relaxes the pull
            if (fg.d3Force('center')) {
                fg.d3Force('center').strength(0); // Disable standard center force to allow radial layout
            }

            // 4. Radial Force for Topics - Create a "Shell"
            // Pushes topics to a specific radius, keeping the center empty
            // Radius much larger than link distance to ensure distinct clusters
            const topicRadius = viewMode === '2d' ? 1200 : 1000; // Distance from center
            fg.d3Force('radial', forceRadial(topicRadius, 0, 0, 0).strength((node: any) => {
                // Only apply strong radial force to topics to arrange them in a shell
                return node.group === 'topic' ? 1.0 : 0; 
            }));
            
            // Re-heat simulation
            fg.d3ReheatSimulation();
        }
    }, [GraphComp, data]);

    // Imperative update of nodes style to avoid re-rendering entire graph on hover
    useEffect(() => {
        if (data && data.nodes) {
            data.nodes.forEach((node: any) => {
                if (node.cssObject) {
                    const isDimmed = hoverNode && !highlightNodes.has(node);
                    node.cssObject.style.opacity = isDimmed ? '0.2' : '1';
                    
                    // Highlight Ring for Logos
                    const imgContainer = node.cssObject.querySelector('.logo-container');
                    if (imgContainer) {
                         if (!isDimmed && hoverNode) {
                             imgContainer.style.boxShadow = '0 0 0 2px #4f46e5';
                             imgContainer.style.transform = 'translate(-50%, -50%) scale(1.2)'; // MAINTAIN TRANSLATE
                         } else {
                             imgContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
                             imgContainer.style.transform = 'translate(-50%, -50%) scale(1)'; // MAINTAIN TRANSLATE
                         }
                    }
                }
            });
        }
    }, [hoverNode, highlightNodes, data]);


    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                // Add a small delay to ensure layout has settled
                setTimeout(() => {
                    if (containerRef.current) {
                        setDimensions({
                            width: containerRef.current.clientWidth,
                            height: 600
                        });
                    }
                }, 100);
            }
        };

        window.addEventListener('resize', updateDimensions);
        // Call immediately and again shortly after
        updateDimensions();
        setTimeout(updateDimensions, 500);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const nodeThreeObject = useCallback((node: any) => {
        const group = new THREE.Group();
        
        // No invisible mesh needed for CSS2D interactions if we use DOM events
        // But we keep a tiny invisible one just in case the library expects something
        const geometry = new THREE.SphereGeometry(1);
        const material = new THREE.MeshBasicMaterial({ opacity: 0, transparent: true });
        const mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);

        // 2. HTML Content via CSS2DObject
        const nodeEl = document.createElement('div');
        // Fix for alignment: Make the root element 0x0 and center content from there
        // This ensures the "origin" of the node is exactly at the center of this container
        nodeEl.style.width = '0px';
        nodeEl.style.height = '0px';
        nodeEl.style.display = 'flex';
        nodeEl.style.alignItems = 'center';
        nodeEl.style.justifyContent = 'center';
        
        nodeEl.style.zIndex = '1'; 
        nodeEl.style.pointerEvents = 'auto'; // Enable interactions directly on DOM element
        nodeEl.style.userSelect = 'none';
        nodeEl.style.cursor = 'pointer';
        nodeEl.style.position = 'relative'; // Anchor for children

        // Attach Event Listeners to DOM Element
        nodeEl.addEventListener('mouseenter', () => {
            if (hoverHandlerRef.current) hoverHandlerRef.current(node);
        });
        nodeEl.addEventListener('mouseleave', () => {
             if (hoverHandlerRef.current) hoverHandlerRef.current(null);
        });
        nodeEl.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop propagation to scene
            if (clickHandlerRef.current) clickHandlerRef.current(node);
        });

        // Initial Styles (Opacity will be updated imperatively)
        nodeEl.style.opacity = '1';
        nodeEl.style.transition = 'opacity 0.2s ease-in-out';

        if (node.group === 'topic') {
            const label = document.createElement('div');
            label.textContent = node.name;
            // Updated styling for Topics
            label.style.color = '#5c5f62'; 
            label.style.background = 'rgba(255, 255, 255, 0.7)'; 
            label.style.padding = '4px 8px';
            label.style.borderRadius = '4px';
            label.style.border = '1px solid rgba(200, 200, 200, 0.5)'; 
            label.style.borderLeft = `3px solid ${node.color || '#8b5cf6'}`; 
            label.style.fontSize = '12px';
            label.style.fontWeight = '600';
            label.style.whiteSpace = 'nowrap';
            label.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
            
            // Center label
            label.style.position = 'absolute';
            label.style.top = '50%';
            label.style.left = '50%';
            label.style.transform = 'translate(-50%, -50%)';
            
            nodeEl.appendChild(label);
        } else {
            // Domain Node
            // Wrap in scale wrapper so we can shrink distant favicons
            const scaleWrapper = document.createElement('div');
            scaleWrapper.className = 'node-scale-wrapper';
            scaleWrapper.style.position = 'relative';
            scaleWrapper.style.width = '0px';
            scaleWrapper.style.height = '0px';
            scaleWrapper.style.display = 'flex';
            scaleWrapper.style.alignItems = 'center';
            scaleWrapper.style.justifyContent = 'center';
            scaleWrapper.style.transformOrigin = 'center';

            // Logo Container
            const logoSize = '32px';
            const imgContainer = document.createElement('div');
            imgContainer.className = 'logo-container'; // Class for imperative selection
            imgContainer.style.width = logoSize;
            imgContainer.style.height = logoSize;
            imgContainer.style.borderRadius = '50%'; 
            imgContainer.style.background = '#fff';
            imgContainer.style.overflow = 'hidden';
            imgContainer.style.display = 'flex';
            imgContainer.style.alignItems = 'center';
            imgContainer.style.justifyContent = 'center';
            imgContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            // Absolute Center Logo
            imgContainer.style.position = 'absolute';
            imgContainer.style.top = '50%';
            imgContainer.style.left = '50%';
            imgContainer.style.transform = 'translate(-50%, -50%)';
            
            imgContainer.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
            
            // Note: Box shadow highlight logic moved to imperative effect
            
            const img = document.createElement('img');
            img.src = `https://www.google.com/s2/favicons?domain=${node.name}&sz=64`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'contain';
            
            img.onerror = () => {
                img.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.textContent = (node.name || '?').charAt(0).toUpperCase();
                fallback.style.width = '100%';
                fallback.style.height = '100%';
                fallback.style.display = 'flex';
                fallback.style.alignItems = 'center';
                fallback.style.justifyContent = 'center';
                fallback.style.fontWeight = 'bold';
                fallback.style.color = '#fff';
                fallback.style.background = node.color || '#ccc';
                imgContainer.appendChild(fallback);
            };

            imgContainer.appendChild(img);
            scaleWrapper.appendChild(imgContainer); 
            nodeEl.appendChild(scaleWrapper);

            // --- Tooltip / Context Popover ---
            const tooltip = document.createElement('div');
            tooltip.className = 'node-tooltip';
            tooltip.style.position = 'absolute';
            tooltip.style.bottom = '24px'; // 16px (half logo) + 8px margin
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.background = '#fff';
            tooltip.style.padding = '8px 12px';
            tooltip.style.borderRadius = '8px';
            tooltip.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            tooltip.style.border = '1px solid #e1e3e5';
            tooltip.style.minWidth = '180px';
            tooltip.style.zIndex = '100';
            tooltip.style.display = 'none'; // Hidden by default
            tooltip.style.pointerEvents = 'none';
            tooltip.style.textAlign = 'center';

            // Tooltip Content
            if (node.group === 'topic') {
                const promptList = node.topPrompts ? node.topPrompts.map((p: string) => `<div style="font-size: 10px; color: #5c5f62; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">• ${p}</div>`).join('') : '';
                const sov = node.sov || 0;
                let sovColor = '#ef4444'; // Red (Low)
                if (sov > 60) sovColor = '#10b981'; // Green (High)
                else if (sov > 30) sovColor = '#f59e0b'; // Amber (Medium)

                tooltip.innerHTML = `
                    <div style="font-weight: 600; font-size: 13px; color: #202223; margin-bottom: 4px; border-bottom: 1px solid #f1f2f4; padding-bottom: 4px;">Category: ${node.name}</div>
                    
                    <div style="margin-bottom: 8px;">
                         <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                            <span style="font-size: 11px; color: #6d7175;">AI Visibility Score</span>
                            <span style="font-size: 11px; font-weight: 700; color: ${sovColor};">${sov}%</span>
                         </div>
                         <div style="width: 100%; height: 4px; background: #e1e3e5; border-radius: 2px;">
                            <div style="width: ${sov}%; height: 100%; background: ${sovColor}; border-radius: 2px;"></div>
                         </div>
                    </div>

                    <div style="font-size: 11px; color: #6d7175; margin-bottom: 6px;">
                        <span style="font-weight: 600; color: #202223;">${node.citationCount || 0}</span> Sources citing this category
                    </div>
                    ${promptList ? `
                        <div style="font-size: 10px; font-weight: 600; color: #202223; margin-bottom: 2px;">Driving Search Prompts:</div>
                        ${promptList}
                    ` : ''}
                `;
            } else {
                // Domain Node Context
                const citationCount = node.citationCount || node.val || 1;
                let typeLabel = 'Recommendation Source';
                if (node.group === 'competitor') typeLabel = 'Competitor';
                else if (node.group === 'owned') typeLabel = 'Your Brand';
                else if (node.group === 'social') typeLabel = 'Social Discussion';
                else if (node.group === 'editorial') typeLabel = 'Editorial / Blog';
                
                // Sentiment Logic
                let sentimentLabel = "--";
                let sentimentColor = "#202223";
                if (node.avgSentiment !== null && node.avgSentiment !== undefined) {
                    if (node.avgSentiment >= 60) {
                        sentimentLabel = "Positive";
                        sentimentColor = "#10b981";
                    } else if (node.avgSentiment <= 40) {
                        sentimentLabel = "Negative";
                        sentimentColor = "#ef4444";
                    } else {
                        sentimentLabel = "Neutral";
                        sentimentColor = "#d97706"; // Amber/Orange
                    }
                }
                
                // "Mentions You" Logic
                const mentionsYou = node.myMentions > 0;
                const mentionLabel = mentionsYou ? "Visible" : "Missing";
                const mentionColor = mentionsYou ? "#10b981" : "#d97706";

                const promptList = node.topPrompts ? node.topPrompts.map((p: string) => `<div style="font-size: 10px; color: #5c5f62; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">• ${p}</div>`).join('') : '';
                
                // Brands Discussed List (For non-competitor nodes)
                let brandList = '';
                if (node.topBrands && node.topBrands.length > 0 && node.group !== 'competitor' && node.group !== 'owned') {
                    brandList = node.topBrands.map((b: string) => `<span style="background: #f1f2f4; color: #202223; padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-right: 4px; margin-bottom: 4px; display: inline-block;">${b}</span>`).join('');
                }

                tooltip.innerHTML = `
                    <div style="font-weight: 600; font-size: 13px; color: #202223; margin-bottom: 2px;">${node.name}</div>
                    <div style="font-size: 11px; color: ${node.color}; font-weight: 500; margin-bottom: 6px;">${typeLabel}</div>
                    
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; border-top: 1px solid #f1f2f4; border-bottom: 1px solid #f1f2f4; padding: 6px 0; margin-bottom: 6px;">
                         <div style="text-align: center; flex: 1;">
                            <div style="font-size: 10px; color: #6d7175;">Citations</div>
                            <div style="font-weight: 600; font-size: 12px; color: #202223;">${citationCount}</div>
                        </div>
                         <div style="text-align: center; flex: 1; border-left: 1px solid #f1f2f4;">
                            <div style="font-size: 10px; color: #6d7175;">Sentiment</div>
                            <div style="font-weight: 600; font-size: 12px; color: ${sentimentColor};">${sentimentLabel}</div>
                        </div>
                         <div style="text-align: center; flex: 1; border-left: 1px solid #f1f2f4;">
                            <div style="font-size: 10px; color: #6d7175;">Status</div>
                            <div style="font-weight: 600; font-size: 12px; color: ${mentionColor};">${mentionLabel}</div>
                        </div>
                    </div>

                    ${brandList ? `
                        <div style="margin-bottom: 6px;">
                            <div style="font-size: 10px; font-weight: 600; color: #202223; margin-bottom: 4px;">Brands Discussed:</div>
                            <div style="display: flex; flex-wrap: wrap;">${brandList}</div>
                        </div>
                    ` : ''}

                    ${promptList ? `
                        <div style="padding-top: 2px;">
                            <div style="font-size: 10px; font-weight: 600; color: #202223; margin-bottom: 2px;">Top Prompts:</div>
                            ${promptList}
                        </div>
                    ` : ''}
                `;
            }
            nodeEl.appendChild(tooltip);

            // Label
            const text = document.createElement('div');
            text.className = 'node-label'; 
            text.textContent = node.name;
            text.style.color = '#374151';
            text.style.background = 'rgba(255, 255, 255, 0.9)';
            text.style.padding = '2px 6px';
            text.style.borderRadius = '3px';
            text.style.fontSize = '10px';
            text.style.whiteSpace = 'nowrap';
            
            // Position Label below
            text.style.position = 'absolute';
            text.style.top = '24px'; // 16px (half logo) + 8px margin
            text.style.left = '50%';
            text.style.transform = 'translateX(-50%)';

            // Start hidden, let the loop handle visibility
            text.style.opacity = '0';
            text.style.transition = 'opacity 0.2s ease';
            nodeEl.appendChild(text);
        }

        const cssObject = new CSS2DObject(nodeEl);
        cssObject.position.set(0, 0, 0);
        group.add(cssObject);

        // Store reference to update later
        node.cssObject = nodeEl;

        return group;
    }, []); // Only create once! Dependencies are handled via refs and imperative updates


    // Effect to update label visibility based on zoom AND handle Tooltip visibility
    useEffect(() => {
        const threshold = 180; 
        
        if (data && data.nodes) {
            data.nodes.forEach((node: any) => {
                if (node.cssObject) {
                    const label = node.cssObject.querySelector('.node-label');
                    const tooltip = node.cssObject.querySelector('.node-tooltip');

                    // Label Visibility (Zoom dependent)
                    if (label) {
                        const showLabel = zoomLevel < threshold;
                        label.style.opacity = showLabel ? '1' : '0';
                        label.style.visibility = showLabel ? 'visible' : 'hidden';
                        label.style.display = showLabel ? 'block' : 'none';
                    }

                    // Tooltip Visibility (Hover dependent)
                    // We check if this node is the hoverNode
                    if (tooltip) {
                        if (hoverNode && hoverNode.id === node.id) {
                            tooltip.style.display = 'block';
                            tooltip.style.opacity = '1';
                            // Ensure it's on top of everything
                            node.cssObject.style.zIndex = '1000'; 
                        } else {
                            tooltip.style.display = 'none';
                            tooltip.style.opacity = '0';
                            node.cssObject.style.zIndex = '1';
                        }
                    }
                }
            });
        }
    }, [zoomLevel, data, hoverNode]); // Added hoverNode dependency

    const handleZoomIn = useCallback(() => {
        if (!fgRef.current) return;
        const camera = fgRef.current.camera();
        const currentPos = camera.position;
        // Move 20% closer
        fgRef.current.cameraPosition(
            { x: currentPos.x * 0.8, y: currentPos.y * 0.8, z: currentPos.z * 0.8 },
            { x: 0, y: 0, z: 0 },
            500
        );
    }, []);

    const handleZoomOut = useCallback(() => {
        if (!fgRef.current) return;
        const camera = fgRef.current.camera();
        const currentPos = camera.position;
        // Move 20% further
        fgRef.current.cameraPosition(
            { x: currentPos.x * 1.2, y: currentPos.y * 1.2, z: currentPos.z * 1.2 },
            { x: 0, y: 0, z: 0 },
            500
        );
    }, []);

    const handleResetView = useCallback(() => {
        if (!fgRef.current) return;
        const distance = viewMode === '2d' ? 1600 : 800;
        fgRef.current.cameraPosition(
            { x: 0, y: 0, z: distance }, 
            { x: 0, y: 0, z: 0 },
            1000
        );
    }, [viewMode]);

    if (!GraphComp) return (
        <Card>
            <div style={{ height: 600, background: '#f9fafb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text as="p" tone="subdued">Loading 3D Graph...</Text>
            </div>
        </Card>
    );

    return (
        <Card>
            <BlockStack gap="400">
                {/* Header Section */}
                <div style={{ padding: '8px 4px 0 4px' }}>
                    <BlockStack gap="200">
                        <InlineStack align="space-between" blockAlign="start">
                            <div style={{ flex: 1, paddingRight: '16px' }}>
                                <BlockStack gap="100">
                                    <InlineStack gap="200" align="start" blockAlign="center">
                                        <Text as="h2" variant="headingSm">Citation Galaxy</Text>
                                        <div style={{ padding: '2px 6px', background: '#f1f2f4', borderRadius: '4px', fontSize: '11px', color: '#6d7175', fontWeight: 500 }}>
                                            BETA
                                        </div>
                                    </InlineStack>
                                    <Text as="p" variant="bodySm" tone="subdued">
                                        Explore the semantic universe of your brand. Central hubs represent key search topics, 
                                        surrounded by orbiting domains that influence AI visibility. Clusters farther apart have less semantic overlap.
                                    </Text>
                                </BlockStack>
                            </div>
                            
                            <InlineStack gap="200" blockAlign="center">
                                {/* View Mode Toggle */}
                                <ButtonGroup variant="segmented">
                                    <Button 
                                        pressed={viewMode === '3d'} 
                                        onClick={() => setViewMode('3d')}
                                        size="micro"
                                    >
                                        3D View
                                    </Button>
                                    <Button 
                                        pressed={viewMode === '2d'} 
                                        onClick={() => setViewMode('2d')}
                                        size="micro"
                                    >
                                        2D Flat
                                    </Button>
                                </ButtonGroup>
                                <Button icon={MaximizeIcon} onClick={handleResetView} size="micro" accessibilityLabel="Reset View" />
                            </InlineStack>
                        </InlineStack>
                    </BlockStack>
                </div>

                <div 
                    ref={containerRef} 
                    style={{ 
                        height: 600, 
                        overflow: 'hidden', 
                        borderRadius: '12px', 
                        border: '1px solid #e1e3e5',
                        background: '#ffffff',
                        position: 'relative'
                    }}
                >
                    <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                        {/* Zoom Controls Only - Mode Toggle Moved to Header */}
                        <div style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '8px', padding: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #e1e3e5' }}>
                            <div 
                                onClick={handleZoomIn}
                                style={{ padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #f1f2f4' }}
                                title="Zoom In"
                            >
                                <Icon source={PlusIcon} tone="base" />
                            </div>
                            <div 
                                onClick={handleZoomOut}
                                style={{ padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                title="Zoom Out"
                            >
                                <Icon source={MinusIcon} tone="base" />
                            </div>
                        </div>
                    </div>

                    <GraphComp
                        ref={fgRef}
                        graphData={data}
                        numDimensions={viewMode === '2d' ? 2 : 3}
                        width={dimensions.width}
                        height={dimensions.height}
                        extraRenderers={extraRenderers} // Pass CSS2DRenderer
                        nodeThreeObject={nodeThreeObject}
                        nodeLabel="name"
                        backgroundColor="#ffffff"
                        
                        // Link styling
                        linkColor={(link: any) => highlightLinks.has(link) ? '#4f46e5' : '#e5e7eb'}
                        linkWidth={(link: any) => highlightLinks.has(link) ? 2 : 1}
                        linkOpacity={0.6} // Increased base opacity for better visibility
                        linkCurvature={0.25}
                        
                        // Interaction
                        onNodeClick={handleNodeClick}
                        onNodeHover={handleNodeHover}
                        onLinkHover={handleLinkHover}

                        showNavInfo={false}
                        enableNodeDrag={false}
                        warmupTicks={100}
                        cooldownTicks={0}
                    />
                    
                    {/* Legend Overlay */}
                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        zIndex: 1000,
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #e1e3e5',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(4px)'
                    }}>
                        <BlockStack gap="200">
                            <Text as="p" variant="bodyXs" fontWeight="bold" tone="subdued">NODE TYPES</Text>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: 10, height: 10, borderRadius: '2px', background: '#8b5cf6' }}></div>
                                    <Text as="span" variant="bodyXs">Topics (Text)</Text>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }}></div>
                                    <Text as="span" variant="bodyXs">Owned Domains (Logos)</Text>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }}></div>
                                    <Text as="span" variant="bodyXs">Competitors (Logos)</Text>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }}></div>
                                    <Text as="span" variant="bodyXs">Editorial (Logos)</Text>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#9ca3af' }}></div>
                                    <Text as="span" variant="bodyXs">Other (Logos)</Text>
                                </div>
                            </div>
                        </BlockStack>
                    </div>

                    {/* Navigation Controls Overlay */}
                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1000,
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: '1px solid #e1e3e5',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'center',
                        pointerEvents: 'none' // Let clicks pass through if needed, but text selection might be wanted? usually instructional overlays are ignored
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#9ca3af' }}></div>
                            <Text as="span" variant="bodyXs" tone="subdued">Left-click: Rotate</Text>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#9ca3af' }}></div>
                            <Text as="span" variant="bodyXs" tone="subdued">Scroll: Zoom</Text>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#9ca3af' }}></div>
                            <Text as="span" variant="bodyXs" tone="subdued">Right-click: Pan</Text>
                        </div>
                    </div>
                </div>
            </BlockStack>
        </Card>
    );
}

