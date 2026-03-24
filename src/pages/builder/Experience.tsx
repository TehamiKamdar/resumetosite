// Experience.jsx
import { Plus, X, Building, User, Calendar, CheckCircle, Briefcase } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

type BuilderContext = {
  formData: any; // aap type ResumeData use kar sakte ho
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const Experience = () => {
  const { formData, setFormData } = useOutletContext<BuilderContext>();

  if (!formData) return null;

  const experiences = formData.experiences || [];

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [
        ...(prev.experiences || []),
        {
          id: Date.now(),
          company: '',
          role: '',
          startDate: '',
          endDate: '',
          currentlyWorking: false,
          description: ''
        }
      ]
    }));
  };

  const removeExperience = (id) => {
    setFormData(prev => {
      const list = prev.experiences || [];
      if (list.length <= 1) return prev;

      return {
        ...prev,
        experiences: list.filter(exp => exp.id !== id)
      };
    });
  };

  const updateExperience = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      experiences: (prev.experiences || []).map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const toggleCurrentlyWorking = (id) => {
    setFormData(prev => ({
      ...prev,
      experiences: (prev.experiences || []).map(exp => {
        if (exp.id === id) {
          return {
            ...exp,
            currentlyWorking: !exp.currentlyWorking,
            endDate: !exp.currentlyWorking ? '' : exp.endDate
          };
        }
        return exp;
      })
    }));
  };

  return (
    <div className="min-h-screen bg-[#0c0f0a]">

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-3">
            Professional <span className="text-[#d2ff2f]">Experience</span>
          </h1>
          <p className="text-white/40 text-lg">Add your professional journey and work history</p>
        </div>

        {/* Experience List */}
        <div className="space-y-8 mb-12">
          {experiences.map((exp, expIndex) => (
            <div
              key={exp.id}
              className="bg-white/5 border border-white/10 p-8 hover:border-[#d2ff2f]/30 transition relative"
            >
              {/* Experience Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#d2ff2f]/10 flex items-center justify-center">
                    <span className="text-[#d2ff2f] font-mono font-bold">
                      {(expIndex + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold">Experience #{expIndex + 1}</h3>
                </div>

                {/* Remove Button */}
                {experiences.length > 1 && (
                  <button
                    onClick={() => removeExperience(exp.id)}
                    className="text-white/20 hover:text-[#ff206e] transition p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Experience Form Grid */}
              <div className="space-y-6">
                {/* Company and Role - Row 1 */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div>
                    <label className="flex items-center gap-2 text-white/40 text-xs mb-2 tracking-wider">
                      <Building className="w-4 h-4" />
                      COMPANY
                    </label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                      placeholder="e.g., Google, Microsoft, Startup Name"
                      className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition"
                    />
                  </div>

                  {/* Role/Position */}
                  <div>
                    <label className="flex items-center gap-2 text-white/40 text-xs mb-2 tracking-wider">
                      <User className="w-4 h-4" />
                      ROLE / POSITION
                    </label>
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                      placeholder="e.g., Senior Software Engineer, Product Manager"
                      className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition"
                    />
                  </div>
                </div>

                {/* Dates - Row 2 */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Start Date */}
                  <div>
                    <label className="flex items-center gap-2 text-white/40 text-xs mb-2 tracking-wider">
                      <Calendar className="w-4 h-4" />
                      START DATE
                    </label>
                    <input
                      type="date"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      placeholder="e.g., Jan 2022"
                      className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition"
                    />
                  </div>

                  {/* End Date */}
                  <div>
                    <label className="flex items-center gap-2 text-white/40 text-xs mb-2 tracking-wider">
                      <Calendar className="w-4 h-4" />
                      END DATE
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                        placeholder="e.g., Dec 2023"
                        disabled={exp.currentlyWorking}
                        className={`w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition ${exp.currentlyWorking ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Currently Working Checkbox */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleCurrentlyWorking(exp.id)}
                    className={`w-6 h-6 border-2 flex items-center justify-center transition ${exp.currentlyWorking
                        ? 'bg-[#d2ff2f] border-[#d2ff2f]'
                        : 'border-white/20 hover:border-[#d2ff2f]'
                      }`}
                  >
                    {exp.currentlyWorking && <CheckCircle className="w-4 h-4 text-[#0c0f0a]" />}
                  </button>
                  <span className="text-white/60 text-sm">I currently work here</span>
                </div>

                {/* Description */}
                <div>
                  <label className="flex items-center gap-2 text-white/40 text-xs mb-2 tracking-wider">
                    <Briefcase className="w-4 h-4" />
                    DESCRIPTION / ACHIEVEMENTS
                  </label>
                  <textarea
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    rows={4}
                    placeholder="Describe your responsibilities, achievements, technologies used, and impact..."
                    className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition resize-none"
                  />
                </div>
              </div>

              {/* Current Status Badge */}
              {exp.currentlyWorking && (
                <div className="absolute top-8 right-16">
                  <span className="bg-[#d2ff2f]/10 text-[#d2ff2f] text-xs font-mono px-3 py-1 border border-[#d2ff2f]/30">
                    CURRENT
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add Experience Button */}
        <button
          onClick={addExperience}
          className="w-full border-2 border-dashed border-white/10 p-8 hover:border-[#d2ff2f] hover:bg-[#d2ff2f]/5 transition group mb-12"
        >
          <div className="flex items-center justify-center gap-2">
            <Plus className="w-5 h-5 text-white/40 group-hover:text-[#d2ff2f] group-hover:rotate-90 transition" />
            <span className="text-white/40 group-hover:text-[#d2ff2f] font-medium">
              ADD ANOTHER EXPERIENCE
            </span>
          </div>
        </button>

        {/* Experience Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/5 p-6">
            <div className="text-[#d2ff2f] text-2xl font-bold mb-1">{experiences.length}</div>
            <div className="text-white/40 text-sm">Total Experiences</div>
          </div>
          <div className="bg-white/5 p-6">
            <div className="text-[#41ead4] text-2xl font-bold mb-1">
              {experiences.filter(exp => exp.currentlyWorking).length}
            </div>
            <div className="text-white/40 text-sm">Current Positions</div>
          </div>
          <div className="bg-white/5 p-6">
            <div className="text-[#ff206e] text-2xl font-bold mb-1">
              {new Set(experiences.map(exp => exp.company).filter(c => c)).size}
            </div>
            <div className="text-white/40 text-sm">Companies</div>
          </div>
        </div>
      </div>

      {/* Simple Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5">
        <div className="h-full w-4/6 bg-[#d2ff2f]"></div>
      </div>
    </div>
  );
};

export default Experience;