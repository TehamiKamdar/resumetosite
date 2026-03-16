import { useOutletContext } from "react-router-dom";
import { Plus, X } from 'lucide-react';

type BuilderContext = {
  formData: any; // aap type ResumeData use kar sakte ho
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const Skills = () => {
  const { formData, setFormData } = useOutletContext<BuilderContext>();

  const proficiencyLevels = [
    { value: 'beginner', label: 'BEGINNER', color: '#ff206e', width: '25%' },
    { value: 'intermediate', label: 'INTERMEDIATE', color: '#41ead4', width: '50%' },
    { value: 'advanced', label: 'ADVANCED', color: '#d2ff2f', width: '75%' },
    { value: 'expert', label: 'EXPERT', color: '#d2ff2f', width: '100%' }
  ];

  // Add Skill
  const addSkill = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, { id: Date.now() + Math.random(), name: '', level: 'beginner' }]
    }));
  };

  // Remove Skill
  const removeSkill = (id: number) => {
    if (formData.skills.length > 1) {
      setFormData(prev => ({
        ...prev,
        skills: prev.skills.filter((skill: any) => skill.id !== id)
      }));
    }
  };

  // Update Skill
  const updateSkill = (id: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.map((skill: any) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const getLevelColor = (level: string) => {
    const found = proficiencyLevels.find(l => l.value === level);
    return found ? found.color : '#ff206e';
  };

  const getLevelWidth = (level: string) => {
    const found = proficiencyLevels.find(l => l.value === level);
    return found ? found.width : '25%';
  };

  return (
    <div className="min-h-screen bg-[#0c0f0a]">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-3">
            Professional <span className="text-[#d2ff2f]">Skills</span>
          </h1>
          <p className="text-white/40 text-lg">Add your technical and professional skills</p>
        </div>

        {/* Skills List */}
        <div className="space-y-4 mb-8">
          {formData.skills.map((skill: any, index: number) => (
            <div key={skill.id} className="bg-white/5 border border-white/10 p-6 hover:border-[#d2ff2f]/30 transition group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#d2ff2f]/10 flex items-center justify-center">
                  <span className="text-[#d2ff2f] font-mono font-bold">{(index+1).toString().padStart(2,'0')}</span>
                </div>

                {/* Skill Name */}
                <div className="flex-1">
                  <label className="block text-white/40 text-xs mb-2 tracking-wider">SKILL NAME</label>
                  <input
                    type="text"
                    value={skill.name}
                    onChange={e => updateSkill(skill.id, 'name', e.target.value)}
                    placeholder="e.g., React, Python, Project Management"
                    className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition text-lg"
                  />
                </div>

                {/* Proficiency */}
                <div className="w-64">
                  <label className="block text-white/40 text-xs mb-2 tracking-wider">PROFICIENCY LEVEL</label>
                  <select
                    value={skill.level}
                    onChange={e => updateSkill(skill.id, 'level', e.target.value)}
                    className="w-full bg-transparent border-2 border-white/10 p-4 text-white focus:border-[#d2ff2f] outline-none transition appearance-none cursor-pointer"
                    style={{ color: getLevelColor(skill.level) }}
                  >
                    {proficiencyLevels.map(level => (
                      <option key={level.value} value={level.value} className="bg-[#0c0f0a]">{level.label}</option>
                    ))}
                  </select>
                </div>

                {/* Remove */}
                {formData.skills.length > 1 && (
                  <button onClick={() => removeSkill(skill.id)} className="mt-6 text-white/20 hover:text-[#ff206e] transition">
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Visual Bar */}
              <div className="mt-4 ml-14">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1 bg-white/10">
                    <div style={{ width: getLevelWidth(skill.level), backgroundColor: getLevelColor(skill.level) }} className="h-full transition-all duration-500"></div>
                  </div>
                  <span className="text-xs font-mono" style={{ color: getLevelColor(skill.level) }}>{skill.level.toUpperCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Skill Button */}
        <button onClick={addSkill} className="w-full border-2 border-dashed border-white/10 p-6 hover:border-[#d2ff2f] hover:bg-[#d2ff2f]/5 transition group mb-12">
          <div className="flex items-center justify-center gap-2">
            <Plus className="w-5 h-5 text-white/40 group-hover:text-[#d2ff2f] group-hover:rotate-90 transition" />
            <span className="text-white/40 group-hover:text-[#d2ff2f] font-medium">ADD ANOTHER SKILL</span>
          </div>
        </button>

      </div>
    </div>
  );
};

export default Skills;