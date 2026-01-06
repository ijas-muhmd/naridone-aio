import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Monitor from "./pages/Monitor";
import MonitorPromptDetail from "./pages/MonitorPromptDetail";
import Optimization from "./pages/Optimization";
import OptimizationDashboard from "./pages/optimization/OptimizationDashboard";
import OptimizationAutopilot from "./pages/optimization/OptimizationAutopilot";
import OptimizationFixes from "./pages/optimization/OptimizationFixes";
import OptimizationRedirects from "./pages/optimization/OptimizationRedirects";
import OptimizationSitemap from "./pages/optimization/OptimizationSitemap";
import PricingPage from "./pages/Pricing";

export default function App() {
  // #region agent log
  const logDataApp = {location:'App.tsx:15',message:'App component rendering',data:{path:window.location.pathname,search:window.location.search},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'};
  console.log('[DEBUG]', logDataApp);
  fetch('http://127.0.0.1:7244/ingest/6bfb1ca9-3ae3-4e08-97f6-3f15aea87cf6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logDataApp)}).catch(e=>console.error('[DEBUG] Log send failed:',e));
  // #endregion
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/app" replace />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="monitor">
            <Route index element={<Monitor />} />
            <Route path="prompts/:id" element={<MonitorPromptDetail />} />
          </Route>
          <Route path="optimization" element={<Optimization />}>
            <Route index element={<OptimizationDashboard />} />
            <Route path="automate" element={<OptimizationAutopilot />} />
            <Route path="fixes" element={<OptimizationFixes />} />
            <Route path="redirects" element={<OptimizationRedirects />} />
            <Route path="sitemap" element={<OptimizationSitemap />} />
          </Route>
          <Route path="pricing" element={<PricingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
