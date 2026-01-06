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
