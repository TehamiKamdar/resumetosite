// SkillsPage.jsx
import React, { useState } from 'react';
import { Plus, X, Save, ArrowRight, Code, Zap, Star } from 'lucide-react';

const SkillsPage = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: '', level: 'beginner' }
  ]);

  const proficiencyLevels = [
    { value: 'beginner', label: 'BEGINNER', color: '#ff206e', width: '25%' },
    { value: 'intermediate', label: 'INTERMEDIATE', color: '#41ead4', width: '50%' },
    { value: 'advanced', label: 'ADVANCED', color: '#d2ff2f', width: '75%' },
    { value: 'expert', label: 'EXPERT', color: '#d2ff2f', width: '100%' }
  ];

  const addSkill = () => {
    setSkills([...skills, { 
      id: Date.now() + Math.random(), 
      name: '', 
      level: 'beginner' 
    }]);
  };

  const removeSkill = (id) => {
    if (skills.length > 1) {
      setSkills(skills.filter(skill => skill.id !== id));
    }
  };

  const updateSkill = (id, field, value) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ));
  };

  const getLevelColor = (level) => {
    const found = proficiencyLevels.find(l => l.value === level);
    return found ? found.color : '#ff206e';
  };

  const getLevelWidth = (level) => {
    const found = proficiencyLevels.find(l => l.value === level);
    return found ? found.width : '25%';
  };

  return (
    <div className="min-h-screen bg-[#0c0f0a]">
      {/* Simple Header */}
      <div className="border-b border-[#d2ff2f]/10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#d2ff2f] flex items-center justify-center">
                <span className="text-[#0c0f0a] font-bold">R</span>
              </div>
              <span className="text-white font-semibold">resume.to.site</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#d2ff2f]"></div>
                <span className="text-white/40 text-sm">STEP 2/5</span>
              </div>
              <span className="text-white/20">|</span>
              <span className="text-[#d2ff2f] font-medium">SKILLS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#d2ff2f] mb-2">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-mono tracking-wider">STEP 02</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-3">
            Professional <span className="text-[#d2ff2f]">Skills</span>
          </h1>
          <p className="text-white/40 text-lg">Add your technical and professional skills</p>
        </div>

        {/* Skills List */}
        <div className="space-y-4 mb-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className="bg-white/5 border border-white/10 p-6 hover:border-[#d2ff2f]/30 transition group"
            >
              <div className="flex items-start gap-4">
                {/* Skill Number */}
                <div className="w-10 h-10 bg-[#d2ff2f]/10 flex items-center justify-center">
                  <span className="text-[#d2ff2f] font-mono font-bold">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Skill Name Input */}
                <div className="flex-1">
                  <label className="block text-white/40 text-xs mb-2 tracking-wider">
                    SKILL NAME
                  </label>
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                    placeholder="e.g., React, Python, Project Management"
                    className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition text-lg"
                  />
                </div>

                {/* Proficiency Level */}
                <div className="w-64">
                  <label className="block text-white/40 text-xs mb-2 tracking-wider">
                    PROFICIENCY LEVEL
                  </label>
                  <select
                    value={skill.level}
                    onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                    className="w-full bg-transparent border-2 border-white/10 p-4 text-white focus:border-[#d2ff2f] outline-none transition appearance-none cursor-pointer"
                    style={{ color: getLevelColor(skill.level) }}
                  >
                    {proficiencyLevels.map(level => (
                      <option key={level.value} value={level.value} className="bg-[#0c0f0a]">
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Remove Button */}
                {skills.length > 1 && (
                  <button
                    onClick={() => removeSkill(skill.id)}
                    className="mt-6 text-white/20 hover:text-[#ff206e] transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Visual Proficiency Bar */}
              <div className="mt-4 ml-14">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1 bg-white/10">
                    <div 
                      className="h-full transition-all duration-500"
                      style={{ 
                        width: getLevelWidth(skill.level),
                        backgroundColor: getLevelColor(skill.level)
                      }}
                    ></div>
                  </div>
                  <span 
                    className="text-xs font-mono"
                    style={{ color: getLevelColor(skill.level) }}
                  >
                    {skill.level.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Skill Button */}
        <button
          onClick={addSkill}
          className="w-full border-2 border-dashed border-white/10 p-6 hover:border-[#d2ff2f] hover:bg-[#d2ff2f]/5 transition group mb-12"
        >
          <div className="flex items-center justify-center gap-2">
            <Plus className="w-5 h-5 text-white/40 group-hover:text-[#d2ff2f] group-hover:rotate-90 transition" />
            <span className="text-white/40 group-hover:text-[#d2ff2f] font-medium">
              ADD ANOTHER SKILL
            </span>
          </div>
        </button>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white/5 p-6">
            <div className="text-[#d2ff2f] text-2xl font-bold mb-1">{skills.length}</div>
            <div className="text-white/40 text-sm">Total Skills</div>
          </div>
          <div className="bg-white/5 p-6">
            <div className="text-[#41ead4] text-2xl font-bold mb-1">
              {skills.filter(s => s.level === 'expert' || s.level === 'advanced').length}
            </div>
            <div className="text-white/40 text-sm">Advanced+</div>
          </div>
          <div className="bg-white/5 p-6">
            <div className="text-[#ff206e] text-2xl font-bold mb-1">
              {skills.filter(s => s.level === 'beginner').length}
            </div>
            <div className="text-white/40 text-sm">Learning</div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center gap-3">
            <Star className="w-4 h-4 text-[#d2ff2f]" />
            <span className="text-white/30 text-sm">Showcase what you're best at</span>
          </div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 border border-white/20 text-white/60 px-6 py-3 hover:border-white/40 hover:text-white transition group">
              <Save className="w-4 h-4 group-hover:rotate-12 transition" />
              SAVE DRAFT
            </button>
            <button className="flex items-center gap-2 bg-[#d2ff2f] text-[#0c0f0a] px-8 py-3 font-semibold hover:bg-[#d2ff2f]/90 transition group">
              NEXT: EXPERIENCE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>

      {/* Simple Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5">
        <div className="h-full w-2/5 bg-[#d2ff2f]"></div>
      </div>
    </div>
  );
};

export default SkillsPage;