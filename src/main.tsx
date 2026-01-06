import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@shopify/polaris/build/esm/styles.css";

// #region agent log
const logData = {location:'main.tsx:8',message:'main.tsx execution started',data:{timestamp:Date.now(),userAgent:navigator.userAgent,url:window.location.href},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'};
console.log('[DEBUG]', logData);
fetch('http://127.0.0.1:7244/ingest/6bfb1ca9-3ae3-4e08-97f6-3f15aea87cf6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData)}).catch(e=>console.error('[DEBUG] Log send failed:',e));
// #endregion

// Render a simple loading state immediately to prevent Shopware from hiding the iframe
const rootElement = document.getElementById("root");

// #region agent log
const logData2 = {location:'main.tsx:12',message:'root element check',data:{rootExists:!!rootElement,rootId:rootElement?.id},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'};
console.log('[DEBUG]', logData2);
fetch('http://127.0.0.1:7244/ingest/6bfb1ca9-3ae3-4e08-97f6-3f15aea87cf6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData2)}).catch(e=>console.error('[DEBUG] Log send failed:',e));
// #endregion

if (!rootElement) {
  // #region agent log
  const logData3 = {location:'main.tsx:16',message:'ERROR: root element not found',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'};
  console.error('[DEBUG]', logData3);
  fetch('http://127.0.0.1:7244/ingest/6bfb1ca9-3ae3-4e08-97f6-3f15aea87cf6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData3)}).catch(e=>console.error('[DEBUG] Log send failed:',e));
  // #endregion
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

// Show immediate content to prevent iframe from being hidden
// #region agent log
const logData4 = {location:'main.tsx:20',message:'Rendering initial loading state',data:{time:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'};
console.log('[DEBUG]', logData4);
fetch('http://127.0.0.1:7244/ingest/6bfb1ca9-3ae3-4e08-97f6-3f15aea87cf6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData4)}).catch(e=>console.error('[DEBUG] Log send failed:',e));
// #endregion

root.render(
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    backgroundColor: '#fff'
  }}>
    <div>Loading...</div>
  </div>
);

// #region agent log
const logData5 = {location:'main.tsx:33',message:'Initial render completed',data:{time:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'};
console.log('[DEBUG]', logData5);
fetch('http://127.0.0.1:7244/ingest/6bfb1ca9-3ae3-4e08-97f6-3f15aea87cf6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData5)}).catch(e=>console.error('[DEBUG] Log send failed:',e));
// #endregion

// After a small delay, render the actual app
// This ensures Shopware sees content immediately and doesn't hide the iframe
// The delay gives time for assets to load and prevents timing issues
setTimeout(() => {
  // #region agent log
  const logData6 = {location:'main.tsx:38',message:'Rendering full app after delay',data:{delay:300,time:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'};
  console.log('[DEBUG]', logData6);
  fetch('http://127.0.0.1:7244/ingest/6bfb1ca9-3ae3-4e08-97f6-3f15aea87cf6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData6)}).catch(e=>console.error('[DEBUG] Log send failed:',e));
  // #endregion
  
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // #region agent log
    const logData7 = {location:'main.tsx:48',message:'Full app render completed',data:{time:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'};
    console.log('[DEBUG]', logData7);
    fetch('http://127.0.0.1:7244/ingest/6bfb1ca9-3ae3-4e08-97f6-3f15aea87cf6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData7)}).catch(e=>console.error('[DEBUG] Log send failed:',e));
    // #endregion
  } catch (error) {
    // #region agent log
    const logData8 = {location:'main.tsx:52',message:'ERROR: App render failed',data:{error:error instanceof Error?error.message:String(error),stack:error instanceof Error?error.stack:undefined},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'};
    console.error('[DEBUG]', logData8);
    fetch('http://127.0.0.1:7244/ingest/6bfb1ca9-3ae3-4e08-97f6-3f15aea87cf6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData8)}).catch(e=>console.error('[DEBUG] Log send failed:',e));
    // #endregion
    throw error;
  }
}, 300); // Delay to ensure iframe is detected as loaded and assets are ready
