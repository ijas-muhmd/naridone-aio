import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Monitor from "./pages/Monitor";
import MonitorPromptDetail from "./pages/MonitorPromptDetail";
import Optimization from "./pages/Optimization";
import OptimizationDashboard from "./pages/optimization/OptimizationDashboard";
import OptimizationFixes from "./pages/optimization/OptimizationFixes";
import OptimizationSitemap from "./pages/optimization/OptimizationSitemap";

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
            <Route path="fixes" element={<OptimizationFixes />} />
            <Route path="sitemap" element={<OptimizationSitemap />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
