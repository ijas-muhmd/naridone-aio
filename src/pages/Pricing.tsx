import { useState } from "react";
import { Pricing } from "../components/pricing/Pricing";

export default function PricingPage() {
  const [activePlan, setActivePlan] = useState("FREE");

  const handleSelectPlan = (plan: string, isAnnual: boolean) => {
    console.log(`Selecting plan: ${plan}, Annual: ${isAnnual}`);
    // In a real app, this would trigger a billing flow
    setActivePlan(plan);
  };

  return <Pricing activePlan={activePlan} onSelectPlan={handleSelectPlan} />;
}
