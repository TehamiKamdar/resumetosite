// DetailsPage.jsx
import React, { useState } from 'react';

const Details = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    about: '',
    languages: [''],
    certifications: ['']
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLanguageChange = (index, value) => {
    const updatedLanguages = [...formData.languages];
    updatedLanguages[index] = value;
    setFormData(prev => ({
      ...prev,
      languages: updatedLanguages
    }));
  };

  const handleCertificationChange = (index, value) => {
    const updatedCertifications = [...formData.certifications];
    updatedCertifications[index] = value;
    setFormData(prev => ({
      ...prev,
      certifications: updatedCertifications
    }));
  };

  const addLanguage = () => {
    setFormData(prev => ({
      ...prev,
      languages: [...prev.languages, '']
    }));
  };

  const addCertification = () => {
    setFormData(prev => ({
      ...prev,
      certifications: [...prev.certifications, '']
    }));
  };

  const removeLanguage = (index) => {
    if (formData.languages.length > 1) {
      const updatedLanguages = formData.languages.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        languages: updatedLanguages
      }));
    }
  };

  const removeCertification = (index) => {
    if (formData.certifications.length > 1) {
      const updatedCertifications = formData.certifications.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        certifications: updatedCertifications
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0f0a] p-8">
      {/* Header with Steps */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-[#d2ff2f]">resume</span>.to.site
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-[#d2ff2f] text-sm font-mono">STEP 01</span>
            <span className="text-white/40">/</span>
            <span className="text-white/60 text-sm">DETAILS</span>
          </div>
        </div>
        <div className="w-20 h-[2px] bg-[#d2ff2f] mt-2"></div>
      </div>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto">
        <div className="border-2 border-[#d2ff2f]/20 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">
            Personal <span className="text-[#d2ff2f]">Information</span>
          </h2>

          {/* Personal Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-white/60 text-sm tracking-wider">
                FULL NAME <span className="text-[#ff206e]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/30 focus:border-[#d2ff2f] outline-none transition"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-white/60 text-sm tracking-wider">
                EMAIL <span className="text-[#ff206e]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/30 focus:border-[#d2ff2f] outline-none transition"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-white/60 text-sm tracking-wider">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 234 567 8900"
                className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/30 focus:border-[#d2ff2f] outline-none transition"
              />
            </div>
          </div>

          {/* About */}
          <div className="space-y-2 mb-8">
            <label className="text-white/60 text-sm tracking-wider">
              ABOUT <span className="text-[#ff206e]">*</span>
            </label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleInputChange}
              placeholder="Tell us about yourself, your goals, and what makes you unique..."
              className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/30 focus:border-[#d2ff2f] outline-none transition resize-none"
            />
          </div>

          {/* Languages Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <label className="text-white/60 text-sm tracking-wider">
                LANGUAGES
              </label>
              <button
                onClick={addLanguage}
                className="text-[#d2ff2f] border-2 border-[#d2ff2f] px-4 py-2 text-sm font-semibold hover:bg-[#d2ff2f] hover:text-[#0c0f0a] transition flex items-center gap-2"
              >
                + ADD LANGUAGE
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={lang}
                    onChange={(e) => handleLanguageChange(index, e.target.value)}
                    placeholder="e.g., English, Spanish, French"
                    className="flex-1 bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/30 focus:border-[#d2ff2f] outline-none transition"
                  />
                  {formData.languages.length > 1 && (
                    <button
                      onClick={() => removeLanguage(index)}
                      className="text-[#ff206e] border-2 border-[#ff206e] w-12 h-12 flex items-center justify-center text-xl hover:bg-[#ff206e] hover:text-[#0c0f0a] transition"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <label className="text-white/60 text-sm tracking-wider">
                CERTIFICATIONS
              </label>
              <button
                onClick={addCertification}
                className="text-[#41ead4] border-2 border-[#41ead4] px-4 py-2 text-sm font-semibold hover:bg-[#41ead4] hover:text-[#0c0f0a] transition flex items-center gap-2"
              >
                + ADD CERTIFICATION
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={cert}
                    onChange={(e) => handleCertificationChange(index, e.target.value)}
                    placeholder="e.g., AWS Certified, Google Analytics, etc."
                    className="flex-1 bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/30 focus:border-[#41ead4] outline-none transition"
                  />
                  {formData.certifications.length > 1 && (
                    <button
                      onClick={() => removeCertification(index)}
                      className="text-[#ff206e] border-2 border-[#ff206e] w-12 h-12 flex items-center justify-center text-xl hover:bg-[#ff206e] hover:text-[#0c0f0a] transition"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Progress & Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t-2 border-[#d2ff2f]/20">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[#d2ff2f]"></div>
              <span className="text-white/40 text-sm">ALL FIELDS WITH <span className="text-[#ff206e]">*</span> ARE REQUIRED</span>
            </div>
            
            <div className="flex gap-4">
              <button className="border-2 border-[#d2ff2f] text-[#d2ff2f] px-8 py-4 font-semibold hover:bg-[#d2ff2f] hover:text-[#0c0f0a] transition">
                SAVE DRAFT
              </button>
              <button className="bg-[#d2ff2f] text-[#0c0f0a] px-8 py-4 font-semibold hover:bg-[#d2ff2f]/90 transition flex items-center gap-2">
                NEXT: SKILLS →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;