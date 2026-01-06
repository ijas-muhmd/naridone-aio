import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Monitor from "./pages/Monitor";
import MonitorPromptDetail from "./pages/MonitorPromptDetail";
import Optimization from "./pages/Optimization";
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
          <Route path="optimization" element={<Optimization />} />
          <Route path="pricing" element={<PricingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
