import { Save, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

type ResumeData = {
  fullName: string;
  email: string;
  phone: string;
  about: string;
  languages: string[];
  certifications: string[];
};

const BuilderLayout = () => {
  const steps = [
    { number: 1, name: "DETAILS", path: "details" },
    { number: 2, name: "SKILLS", path: "skills" },
    { number: 3, name: "PROJECTS", path: "projects" },
    { number: 4, name: "EXPERIENCE", path: "experience" },
    { number: 5, name: "THEME", path: "theme" },
    { number: 6, name: "PUBLISH & PREVIEW", path: "preview" }
  ];

  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  // Load draft
  const draft = JSON.parse(localStorage.getItem('resumeDraft') || '{}');
  const [formData, setFormData] = useState<ResumeData>({
    fullName: draft.fullName || '',
    email: draft.email || '',
    phone: draft.phone || '',
    about: draft.about || '',
    languages: draft.languages || [''],
    certifications: draft.certifications || ['']
  });

  // Validation per step
  const validateStep = () => {
    switch(activeStep) {
      case 0: {
        const { fullName, email, phone, about } = formData;
        if (!fullName.trim()) { alert("Name is required"); return false; }
        if (!email.trim()) { alert("Email is required"); return false; }
        if (!phone.trim()) { alert("Phone is required"); return false; }
        if (!about.trim()) { alert("About is required"); return false; }
        return true;
      }
      case 1: {
        if (formData.languages.length === 0) { alert("Add at least one language"); return false; }
        return true;
      }
      default:
        return true;
    }
  }

  const saveDataToLocal = () => {
    localStorage.setItem('resumeDraft', JSON.stringify(formData));
  }

  // Next / Back
  const handleNextStep = () => {
    if(!validateStep()) return;

    saveDataToLocal();
    if (activeStep < steps.length - 1) {
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);
      navigate(`/builder/${steps[nextStep].path}`);
    }
  }

  const handleBackStep = () => {
    if (activeStep > 0) {
      const prevStep = activeStep - 1;
      setActiveStep(prevStep);
      navigate(`/builder/${steps[prevStep].path}`);
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0f0a] p-6 flex flex-col">
      
      {/* STEP Indicator */}
      <div className="text-center mb-12 text-xl font-bold text-[#d2ff2f]">
        STEP {steps[activeStep].number.toString().padStart(2, '0')}: {steps[activeStep].name}
      </div>

      {/* Step Content */}
      <div className="flex-1">
        <Outlet context={{ formData, setFormData }} />
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-8">
        <button 
          onClick={handleBackStep} 
          disabled={activeStep === 0}
          className="px-6 py-3 border border-white/20 text-white/60 hover:border-white/40 hover:text-white transition"
        >
          Back
        </button>

        <div className="flex gap-4">
          <button 
            onClick={() => { saveDataToLocal(); alert('Draft Saved') }} 
            className="flex items-center gap-2 border border-white/20 text-white/60 px-6 py-3 font-mono hover:border-white/40 hover:text-white transition group"
          >
            <Save className="w-4 h-4 group-hover:rotate-12 transition" />
            SAVE DRAFT
          </button>

          <button 
            onClick={handleNextStep} 
            className="flex items-center gap-2 bg-[#d2ff2f] text-[#0c0f0a] px-8 py-3 font-semibold font-mono hover:bg-[#d2ff2f]/90 transition group"
          >
            NEXT
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuilderLayout;