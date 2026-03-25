// src/utils/resumeData.ts
import type { ResumeData } from "../types";

// Get draft from localStorage or return default
export const getResumeDraft = (): ResumeData => {
  const draft = JSON.parse(localStorage.getItem("resumeDraft") || "{}");

  return {
    name: draft.name || "",
    email: draft.email || "",
    phone: draft.phone || "",
    about: draft.about || "",
    languages: draft.languages || [""],
    certifications: draft.certifications || [""],
    skills: draft.skills || [{ id: Date.now(), name: "", level: "beginner" }],
    projects: draft.projects || [{
      id: Date.now(),
      name: "",
      date: "",
      techStack: [""],
      url: "",
      repo: "",
      description: "",
      role: ""
    }],
    experience: draft.experience || [{
      id: Date.now(),
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      description: ""
    }],
  };
};

// Save resume draft
export const saveResumeDraft = (data: ResumeData) => {
  localStorage.setItem("resumeDraft", JSON.stringify(data));
};

// Step validation
export const validateStep = (step: number, data: ResumeData): boolean => {
  switch (step) {
    case 0: // DETAILS
      const { name, email, phone, about } = data;
      if (!name.trim()) { alert("Full Name is required"); return false; }
      if (!email.trim()) { alert("Email is required"); return false; }
      if (!phone.trim()) { alert("Phone is required"); return false; }
      if (!about.trim()) { alert("About is required"); return false; }
      return true;

    case 1: // SKILLS
      if (!data.skills || data.skills.length === 0 || data.skills.every(s => !s.name.trim())) {
        alert("Add at least one skill");
        return false;
      }
      return true;

    case 2: // PROJECTS
      if (data.projects.length === 0) { alert("Add at least one project"); return false; }
      return true;

    default:
      return true;
  }
};