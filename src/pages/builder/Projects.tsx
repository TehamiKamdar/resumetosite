import { useOutletContext } from 'react-router-dom';
import { Plus, X, Github, Link, Calendar, User, Code, FileText } from 'lucide-react';
import Description from '../../components/Description';

type BuilderContext = {
  formData: any; // aap type ResumeData use kar sakte ho
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const Projects = () => {
  const { formData, setFormData } = useOutletContext<BuilderContext>();

  const projects = formData?.projects || [
    {
      id: Date.now(),
      name: '',
      date: '',
      techStack: [''],
      url: '',
      repo: '',
      description: '',
      role: ''
    }
  ];

  // ➕ Add Project
  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: '',
      date: '',
      techStack: [''],
      url: '',
      repo: '',
      description: '',
      role: ''
    };

    setFormData({
      ...formData,
      projects: [...projects, newProject]
    });
  };

  // ❌ Remove Project
  const removeProject = (id: number) => {
    if (projects.length <= 1) return;

    setFormData({
      ...formData,
      projects: projects.filter(p => p.id !== id)
    });
  };

  // ✏️ Update Project Field
  const updateProject = (id: number, field: string, value: any) => {
    const updated = projects.map(p =>
      p.id === id ? { ...p, [field]: value } : p
    );

    setFormData({
      ...formData,
      projects: updated
    });
  };

  // ➕ Add Tech
  const addTechToProject = (projectId: number) => {
    const updated = projects.map(p => {
      if (p.id === projectId) {
        return {
          ...p,
          techStack: [...p.techStack, '']
        };
      }
      return p;
    });

    setFormData({ ...formData, projects: updated });
  };

  // ✏️ Update Tech
  const updateTechInProject = (projectId: number, index: number, value: string) => {
    const updated = projects.map(p => {
      if (p.id === projectId) {
        const tech = [...p.techStack];
        tech[index] = value;
        return { ...p, techStack: tech };
      }
      return p;
    });

    setFormData({ ...formData, projects: updated });
  };

  // ❌ Remove Tech
  const removeTechFromProject = (projectId: number, index: number) => {
    const updated = projects.map(p => {
      if (p.id === projectId && p.techStack.length > 1) {
        return {
          ...p,
          techStack: p.techStack.filter((_, i) => i !== index)
        };
      }
      return p;
    });

    setFormData({ ...formData, projects: updated });
  };

  return (
    <div className="min-h-screen bg-[#0c0f0a]">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-3">
            <span className="text-[#d2ff2f]">Projects</span>
          </h1>
          <p className="text-white/40 text-lg">Showcase your best work and contributions</p>
        </div>

        {/* Projects List */}
        <div className="space-y-8 mb-12">
          {projects.map((project, projectIndex) => (
            <div 
              key={project.id}
              className="bg-white/5 border border-white/10 p-8 hover:border-[#d2ff2f]/30 transition relative"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#d2ff2f]/10 flex items-center justify-center">
                    <span className="text-[#d2ff2f] font-mono font-bold">
                      {(projectIndex + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold">Project #{projectIndex + 1}</h3>
                </div>
                
                {/* Remove Button */}
                {projects.length > 1 && (
                  <button
                    onClick={() => removeProject(project.id)}
                    className="text-white/20 hover:text-[#ff206e] transition p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Project Form Grid */}
              <div className="space-y-6">
                {/* Project Name and Date - Row 1 */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Name */}
                  <div>
                    <label className="flex items-center gap-2 text-white/40 text-xs mb-2 tracking-wider">
                      <FileText className="w-4 h-4" />
                      PROJECT NAME
                    </label>
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                      placeholder="e.g., E-commerce Platform"
                      className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="flex items-center gap-2 text-white/40 text-xs mb-2 tracking-wider">
                      <Calendar className="w-4 h-4" />
                      PROJECT START DATE
                    </label>
                    <input
                      type="date"
                      value={project.date}
                      onChange={(e) => updateProject(project.id, 'date', e.target.value)}
                      placeholder="e.g., 2024 or Jan 2024 - Present"
                      className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition"
                    />
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-2 text-white/40 text-xs tracking-wider">
                      <Code className="w-4 h-4" />
                      TECH STACK
                    </label>
                    <button
                      onClick={() => addTechToProject(project.id)}
                      className="flex items-center gap-1 text-[#41ead4] hover:text-white transition text-xs"
                    >
                      <Plus className="w-3 h-3" /> ADD TECH
                    </button>
                  </div>
                  <div className="space-y-3">
                    {project.techStack.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-3">
                        <input
                          type="text"
                          value={tech}
                          onChange={(e) => updateTechInProject(project.id, techIndex, e.target.value)}
                          placeholder="e.g., React, Node.js, MongoDB"
                          className="flex-1 bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#41ead4] outline-none transition"
                        />
                        {project.techStack.length > 1 && (
                          <button
                            onClick={() => removeTechFromProject(project.id, techIndex)}
                            className="text-white/20 hover:text-[#ff206e] transition"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* URL and Repo - Row 2 */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Live URL */}
                  <div>
                    <label className="flex items-center gap-2 text-white/40 text-xs mb-2 tracking-wider">
                      <Link className="w-4 h-4" />
                      LIVE URL
                    </label>
                    <input
                      type="url"
                      value={project.url}
                      onChange={(e) => updateProject(project.id, 'url', e.target.value)}
                      placeholder="https://yourproject.com"
                      className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition"
                    />
                  </div>

                  {/* Repository Link */}
                  <div>
                    <label className="flex items-center gap-2 text-white/40 text-xs mb-2 tracking-wider">
                      <Github className="w-4 h-4" />
                      REPOSITORY
                    </label>
                    <input
                      type="url"
                      value={project.repo}
                      onChange={(e) => updateProject(project.id, 'repo', e.target.value)}
                      placeholder="https://github.com/username/project"
                      className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition"
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="flex items-center gap-2 text-white/40 text-xs mb-2 tracking-wider">
                    <User className="w-4 h-4" />
                    YOUR ROLE
                  </label>
                  <input
                    type="text"
                    value={project.role}
                    onChange={(e) => updateProject(project.id, 'role', e.target.value)}
                    placeholder="e.g., Lead Developer, UI Designer, Full Stack Developer"
                    className="w-full bg-transparent border-2 border-white/10 p-4 text-white placeholder-white/20 focus:border-[#d2ff2f] outline-none transition"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="flex items-center gap-2 text-white/40 text-xs mb-2 tracking-wider">
                    <FileText className="w-4 h-4" />
                    DESCRIPTION
                  </label>
                  <Description
                    value={project.description}
                    onChange={(e) => updateProject(project.id, 'description', e)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Project Button */}
        <button
          onClick={addProject}
          className="w-full border-2 border-dashed border-white/10 p-8 hover:border-[#d2ff2f] hover:bg-[#d2ff2f]/5 transition group mb-12"
        >
          <div className="flex items-center justify-center gap-2">
            <Plus className="w-5 h-5 text-white/40 group-hover:text-[#d2ff2f] group-hover:rotate-90 transition" />
            <span className="text-white/40 group-hover:text-[#d2ff2f] font-medium">
              ADD ANOTHER PROJECT
            </span>
          </div>
        </button>

        {/* Project Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/5 p-6">
            <div className="text-[#d2ff2f] text-2xl font-bold mb-1">{projects.length}</div>
            <div className="text-white/40 text-sm">Total Projects</div>
          </div>
          <div className="bg-white/5 p-6">
            <div className="text-[#41ead4] text-2xl font-bold mb-1">
              {projects.reduce((acc, p) => acc + p.techStack.filter(t => t.trim()).length, 0)}
            </div>
            <div className="text-white/40 text-sm">Technologies Used</div>
          </div>
          <div className="bg-white/5 p-6">
            <div className="text-[#ff206e] text-2xl font-bold mb-1">
              {projects.filter(p => p.url || p.repo).length}
            </div>
            <div className="text-white/40 text-sm">With Links</div>
          </div>
        </div>
      </div>

      {/* Simple Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5">
        <div className="h-full w-3/6 bg-[#d2ff2f]"></div>
      </div>
    </div>
  );
};

export default Projects;