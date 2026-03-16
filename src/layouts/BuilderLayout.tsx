import { useState } from "react";
import { Outlet } from "react-router-dom";

const BuilderLayout = () => {
  const steps = [
    { number: 1, name: "Details", icon: "📋" },
    { number: 2, name: "Skills", icon: "⚡" },
    { number: 3, name: "Experience", icon: "💼" },
    { number: 4, name: "Theme", icon: "🎨" },
    { number: 5, name: "Publish & Preview", icon: "🚀" }
  ];

  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#0c0f0a] p-6">
      {/* Main Container */}
      <div className="w-full">
  {/* Steps Container */}
  <div className="relative">
    {/* Steps */}
    <div className="relative flex justify-around">
      {steps.map((step) => (
        <div
          key={step.number}
          className="flex flex-col items-center"
          onClick={() => setActiveStep(step.number)}
        >

          {/* Step Name - Sirf Active Step Ke Liye */}
          {activeStep === step.number && (
            <span className="mt-4 text-sm font-mono text-[#d2ff2f] tracking-wider">
              STEP {step.number.toString().padStart(2, '0')}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Step Content */}
      <div className="w-full mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default BuilderLayout;