import { useOutletContext } from "react-router-dom";
import { User, Mail, Phone, Info, Globe, Award, Plus, X } from 'lucide-react';

type BuilderContext = {
  formData: any; // aap type ResumeData use kar sakte ho
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const Details = () => {
  const { formData, setFormData } = useOutletContext<BuilderContext>();

  // Input Handlers remain same but remove local useState
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLanguageChange = (index: number, value: string) => {
    const updatedLanguages = [...formData.languages];
    updatedLanguages[index] = value;
    setFormData(prev => ({ ...prev, languages: updatedLanguages }));
  };

  const handleCertificationChange = (index: number, value: string) => {
    const updatedCertifications = [...formData.certifications];
    updatedCertifications[index] = value;
    setFormData(prev => ({ ...prev, certifications: updatedCertifications }));
  };

  const addLanguage = () => setFormData(prev => ({ ...prev, languages: [...prev.languages, ''] }));
  const removeLanguage = (index: number) => {
    if(formData.languages.length > 1){
      setFormData(prev => ({ ...prev, languages: prev.languages.filter((_, i) => i !== index) }));
    }
  };

  const addCertification = () => setFormData(prev => ({ ...prev, certifications: [...prev.certifications, ''] }));
  const removeCertification = (index: number) => {
    if(formData.certifications.length > 1){
      setFormData(prev => ({ ...prev, certifications: prev.certifications.filter((_, i) => i !== index) }));
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0f0a]">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-3">
            Personal <span className="text-[#d2ff2f]">Details</span>
          </h1>
          <p className="text-white/40 text-lg">Tell us about yourself to get started</p>
        </div>

        {/* Form Grid */}
        <div className="space-y-8">
          {/* Personal Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="group">
              <label className="flex items-center gap-2 text-white/60 text-sm mb-2 group-focus-within:text-[#d2ff2f] transition">
                <User className="w-4 h-4" />
                FULL NAME <span className="text-[#ff206e]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., Sarah Chen"
                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] focus:bg-white/10 outline-none transition"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label className="flex items-center gap-2 text-white/60 text-sm mb-2 group-focus-within:text-[#d2ff2f] transition">
                <Mail className="w-4 h-4" />
                EMAIL <span className="text-[#ff206e]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="sarah@example.com"
                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] focus:bg-white/10 outline-none transition"
              />
            </div>

            {/* Phone */}
            <div className="group md:col-span-2">
              <label className="flex items-center gap-2 text-white/60 text-sm mb-2 group-focus-within:text-[#d2ff2f] transition">
                <Phone className="w-4 h-4" />
                PHONE NUMBER
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] focus:bg-white/10 outline-none transition"
              />
            </div>
          </div>

          {/* About */}
          <div className="group">
            <label className="flex items-center gap-2 text-white/60 text-sm mb-2 group-focus-within:text-[#d2ff2f] transition">
              <Info className="w-4 h-4" />
              ABOUT <span className="text-[#ff206e]">*</span>
            </label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleInputChange}
              placeholder="Write a brief introduction about yourself, your passion, and what drives you..."
              className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] focus:bg-white/10 outline-none transition resize-none"
            />
            <div className="text-right mt-1">
              <span className="text-white/20 text-xs">{formData.about.length}/500</span>
            </div>
          </div>

          {/* Languages Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#d2ff2f]" />
                <h2 className="text-xl font-semibold text-white">Languages</h2>
              </div>
              <button
                onClick={addLanguage}
                className="flex items-center gap-2 text-[#d2ff2f] hover:text-white transition group"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition" />
                <span className="text-sm font-medium">ADD LANGUAGE</span>
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={lang}
                    onChange={(e) => handleLanguageChange(index, e.target.value)}
                    placeholder="e.g., English (Native), Spanish (Fluent)"
                    className="flex-1 bg-white/5 border border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] focus:bg-white/10 outline-none transition"
                  />
                  {formData.languages.length > 1 && (
                    <button
                      onClick={() => removeLanguage(index)}
                      className="text-white/40 hover:text-[#ff206e] transition p-2"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#41ead4]" />
                <h2 className="text-xl font-semibold text-white">Certifications</h2>
              </div>
              <button
                onClick={addCertification}
                className="flex items-center gap-2 text-[#41ead4] hover:text-white transition group"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition" />
                <span className="text-sm font-medium">ADD CERTIFICATION</span>
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={cert}
                    onChange={(e) => handleCertificationChange(index, e.target.value)}
                    placeholder="e.g., AWS Certified Solutions Architect"
                    className="flex-1 bg-white/5 border border-white/10 p-4 text-white placeholder-white/20 focus:border-[#41ead4] focus:bg-white/10 outline-none transition"
                  />
                  {formData.certifications.length > 1 && (
                    <button
                      onClick={() => removeCertification(index)}
                      className="text-white/40 hover:text-[#ff206e] transition p-2"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simple Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5">
        <div className="h-full w-0/5 bg-[#d2ff2f]"></div>
      </div>
    </div>
  );
};

export default Details;