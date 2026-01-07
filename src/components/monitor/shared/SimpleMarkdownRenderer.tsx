
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface SimpleMarkdownRendererProps {
    text: string;
}

export const SimpleMarkdownRenderer: React.FC<SimpleMarkdownRendererProps> = ({ text }) => {
    if (!text) return null;

    // Use a custom renderer for paragraphs to detect and highlight brands
    // NOTE: For now, using standard rendering with GFM support (Tables, etc.)
    // Highlighting logic can be added via custom components or regex replacement before rendering if needed.
    
    // Simple preprocessing to highlight "Rossignol" or competitor brands if needed in the future
    // For now, we rely on the bolding returned by the LLM (which we improved in the prompt).

    return (
        <div className="markdown-content" style={{ fontSize: '14px', lineHeight: '1.6', color: '#202223' }}>
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                    // Style tables properly
                    table: ({node, ...props}) => (
                        <div style={{ overflowX: 'auto', marginBottom: '16px', border: '1px solid #e1e3e5', borderRadius: '8px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }} {...props} />
                        </div>
                    ),
                    thead: ({node, ...props}) => <thead style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e1e3e5' }} {...props} />,
                    th: ({node, ...props}) => <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#202223' }} {...props} />,
                    td: ({node, ...props}) => <td style={{ padding: '12px 16px', borderBottom: '1px solid #f1f2f4' }} {...props} />,
                    // Style headings
                    h1: ({node, ...props}) => <h1 style={{ fontSize: '20px', fontWeight: 700, marginTop: '24px', marginBottom: '16px', color: '#202223' }} {...props} />,
                    h2: ({node, ...props}) => <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '20px', marginBottom: '12px', color: '#202223' }} {...props} />,
                    h3: ({node, ...props}) => <h3 style={{ fontSize: '16px', fontWeight: 600, marginTop: '16px', marginBottom: '8px', color: '#202223' }} {...props} />,
                    // Style lists
                    ul: ({node, ...props}) => <ul style={{ paddingLeft: '20px', marginBottom: '16px' }} {...props} />,
                    ol: ({node, ...props}) => <ol style={{ paddingLeft: '20px', marginBottom: '16px' }} {...props} />,
                    li: ({node, ...props}) => <li style={{ marginBottom: '4px' }} {...props} />,
                    // Style paragraphs
                    p: ({node, ...props}) => <p style={{ marginBottom: '16px' }} {...props} />,
                    // Highlighting bold text with a slight background for emphasis
                    strong: ({node, ...props}) => <strong style={{ fontWeight: 700, color: '#1a1a1a' }} {...props} />
                }}
            >
                {text}
            </ReactMarkdown>
        </div>
    );
};
