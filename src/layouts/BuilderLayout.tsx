// BuilderLayout.tsx
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Save, ArrowRight, ArrowLeft } from "lucide-react";

// Type for resume data
export type Skill = { id: number; name: string; level: string };

export type Project = { id: number; name: string; date: string; techStack: string[]; url: string; repo: string; description: string; role: string; };

export type Experience = { id: number; name: string; date: string; techStack: string[]; url: string; repo: string; description: string; role: string; };

export type ResumeData = {
  fullName: string;
  email: string;
  phone: string;
  about: string;
  languages: string[];
  certifications: string[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
};

const BuilderLayout: React.FC = () => {
  const steps = [
    { number: 1, name: "DETAILS", path: "details" },
    { number: 2, name: "SKILLS", path: "skills" },
    { number: 3, name: "PROJECTS", path: "projects" },
    { number: 4, name: "EXPERIENCE", path: "experience" },
    { number: 5, name: "THEME", path: "theme" },
    { number: 6, name: "PUBLISH & PREVIEW", path: "preview" },
  ];

  // Map path → step number (0-based)
  const pathToStep: Record<string, number> = {
    "/builder/details": 0,
    "/builder/skills": 1,
    "/builder/projects": 2,
    "/builder/experience": 3,
    "/builder/theme": 4,
    "/builder/preview": 5,
  };

  const location = useLocation();
  const navigate = useNavigate();

  // Active step synced with route
  const [activeStep, setActiveStep] = useState(pathToStep[location.pathname] || 0);

  useEffect(() => {
    setActiveStep(pathToStep[location.pathname] || 0);
  }, [location.pathname]);

  // Load draft from localStorage
  const draft = JSON.parse(localStorage.getItem("resumeDraft") || "{}");
  const [formData, setFormData] = useState<ResumeData>({
    fullName: draft.fullName || "",
    email: draft.email || "",
    phone: draft.phone || "",
    about: draft.about || "",
    languages: draft.languages || [""],
    certifications: draft.certifications || [""],
    skills: draft.skills || [{ id: Date.now(), name: "", level: "beginner" }],
    projects: draft.projects || [{ id: Date.now(), name: '', date: '', techStack: [''], url: '', repo: '', description: '', role: '' }],
    experience: draft.experience || [{ id: Date.now(), company: '', role: '', startDate: '', endDate: '', currentlyWorking: false, description: '' }],
  });

  // Save draft
  const saveDataToLocal = () => {
    localStorage.setItem("resumeDraft", JSON.stringify(formData));
  };

  // Validation per step
  const validateStep = (): boolean => {
    switch (activeStep) {
      case 0: // DETAILS
        const { fullName, email, phone, about } = formData;
        if (!fullName.trim()) {
          alert("Full Name is required");
          return false;
        }
        if (!email.trim()) {
          alert("Email is required");
          return false;
        }
        if (!phone.trim()) {
          alert("Phone is required");
          return false;
        }
        if (!about.trim()) {
          alert("About is required");
          return false;
        }
        return true;

      case 1: // SKILLS
        if (!formData.skills || formData.skills.length === 0 || formData.skills.every(s => !s.name.trim())) {
          alert("Add at least one skill");
          return false;
        }
        return true;

      case 2: 
        if (formData.projects.length === 0) {
          alert("Add at least one project");
          return false;
        }
        return true;
      

      default:
        return true;
    }
  };

  // Next / Back navigation
  const handleNextStep = () => {
    if (!validateStep()) return;

    saveDataToLocal();
    if (activeStep < steps.length - 1) {
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);
      navigate(`/builder/${steps[nextStep].path}`);
    }
  };

  const handleBackStep = () => {
    if (activeStep > 0) {
      const prevStep = activeStep - 1;
      setActiveStep(prevStep);
      navigate(`/builder/${steps[prevStep].path}`);
    }
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
            onClick={() => { saveDataToLocal(); alert("Draft Saved"); }}
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