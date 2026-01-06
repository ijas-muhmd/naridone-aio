import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@shopify/polaris/build/esm/styles.css";

// Render a simple loading state immediately to prevent Shopware from hiding the iframe
const root = ReactDOM.createRoot(document.getElementById("root")!);

// Show immediate content to prevent iframe from being hidden
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

// After a small delay, render the actual app
// This ensures Shopware sees content immediately and doesn't hide the iframe
// The delay gives time for assets to load and prevents timing issues
setTimeout(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, 300); // Delay to ensure iframe is detected as loaded and assets are ready
