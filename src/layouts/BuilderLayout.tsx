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
                {/* Step Circle */}
                <div
                  className={`
                    w-16 h-16 flex items-center justify-center text-2xl
                    border-2 transition-all duration-300 cursor-pointer
                    ${activeStep === step.number 
                      ? 'border-[#d2ff2f] bg-[#d2ff2f] text-[#0c0f0a]' 
                      : activeStep > step.number
                        ? 'border-[#41ead4] bg-[#41ead4]/10 text-[#41ead4]'
                        : 'border-white/20 bg-transparent text-white/40'
                    }
                  `}
                >
                  {activeStep > step.number ? '✓' : step.icon}
                </div>

                {/* Step Name */}
                <span
                  className={`
                    mt-4 text-sm font-medium tracking-wider
                    ${activeStep === step.number 
                      ? 'text-[#d2ff2f]' 
                      : activeStep > step.number
                        ? 'text-[#41ead4]'
                        : 'text-white/40'
                    }
                  `}
                >
                  {step.name}
                </span>

                {/* Step Number (small) */}
                <span className="text-xs text-white/20 mt-1">
                  0{step.number}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 border border-[#d2ff2f]/20 px-6 py-3">
            <span className="text-[#d2ff2f] font-mono">
              STEP-0{activeStep}
            </span>
            <span className="text-white/60">
              {steps[activeStep - 1].name}
            </span>
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