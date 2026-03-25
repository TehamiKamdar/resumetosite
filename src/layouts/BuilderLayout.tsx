// BuilderLayout.tsx
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Save, ArrowRight, ArrowLeft } from "lucide-react";
import { getResumeDraft, saveResumeDraft } from "../data/ResumeData";
import type { ResumeData } from "../types";

const BuilderLayout: React.FC = () => {
  const steps = [
    { number: 1, name: "DETAILS", path: "details" },
    { number: 2, name: "SKILLS", path: "skills" },
    { number: 3, name: "PROJECTS", path: "projects" },
    { number: 4, name: "EXPERIENCE", path: "experience" },
    { number: 5, name: "THEME", path: "theme" },
    { number: 6, name: "PUBLISH & PREVIEW", path: "preview" },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const pathToStep: Record<string, number> = steps.reduce(
    (acc, step, idx) => ({ ...acc, [`/builder/${step.path}`]: idx }),
    {}
  );

  const [activeStep, setActiveStep] = useState(pathToStep[location.pathname] || 0);
  const [formData, setFormData] = useState<ResumeData>(getResumeDraft());

  // Sync active step with URL
  useEffect(() => {
    setActiveStep(pathToStep[location.pathname] || 0);
  }, [location.pathname]);

  // Validation per step
  const validateStep = (): boolean => {
    switch (activeStep) {
      case 0: { // DETAILS
        const { name, email, phone, about } = formData;
        if (!name.trim()) { alert("Full Name is required"); return false; }
        if (!email.trim()) { alert("Email is required"); return false; }
        if (!phone.trim()) { alert("Phone is required"); return false; }
        if (!about.trim()) { alert("About is required"); return false; }
        return true;
      }
      case 1: // SKILLS
        if (!formData.skills?.length || formData.skills.every(s => !s.name.trim())) {
          alert("Add at least one skill"); return false;
        }
        return true;
      case 2: // PROJECTS
        if (!formData.projects?.length) { alert("Add at least one project"); return false; }
        return true;
      default:
        return true;
    }
  };

  const handleNextStep = () => {
    if (!validateStep()) return;
    saveResumeDraft(formData);

    if (activeStep < steps.length - 1) {
      const nextStep = activeStep + 1;
      navigate(`/builder/${steps[nextStep].path}`);
    }
  };

  const handleBackStep = () => {
    if (activeStep > 0) {
      const prevStep = activeStep - 1;
      navigate(`/builder/${steps[prevStep].path}`);
    }
  };

  const handleSaveDraft = () => {
    saveResumeDraft(formData);
    alert("Draft Saved!");
  };

  return (
    <div className="min-h-screen bg-[#0c0f0a] p-6 flex flex-col">
      {/* Header Step */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-[#d2ff2f] text-center">
          STEP {steps[activeStep].number.toString().padStart(2, "0")}: {steps[activeStep].name}
        </h2>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-4xl mx-auto w-full">
        <Outlet context={{ formData, setFormData }} />
      </div>

      {/* Footer Buttons */}
      <div className="max-w-4xl mx-auto flex justify-between mt-12 border-t border-white/10 pt-6">
        <button
          type="button"
          onClick={handleBackStep}
          disabled={activeStep === 0}
          className="flex items-center gap-2 border border-white/20 text-white/60 px-6 py-3 font-mono hover:border-white/40 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK
        </button>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleSaveDraft}
            className="flex items-center gap-2 border border-white/20 text-white/60 px-6 py-3 font-mono hover:border-white/40 hover:text-white transition"
          >
            <Save className="w-4 h-4" />
            SAVE DRAFT
          </button>

          <button
            type="button"
            onClick={handleNextStep}
            className="flex items-center gap-2 bg-[#d2ff2f] text-[#0c0f0a] px-6 py-3 font-semibold font-mono hover:bg-[#d2ff2f]/90 transition"
          >
            NEXT
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuilderLayout;