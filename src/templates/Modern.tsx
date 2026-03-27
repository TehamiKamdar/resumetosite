// templates/ModernPortfolioTemplate.tsx
import { getResumeDraft } from '../data/ResumeData';
import type { ResumeData } from '../types';

const ModernTemplate = () => {
  const formData: ResumeData = getResumeDraft();

  if (!formData) return <div>No data found</div>;

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0f0a] text-white">
        <p>No resume data found. Please complete your resume first.</p>
      </div>
    );
  }

  const data = formData;

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"
        ></div>

        <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center md:text-left md:flex md:justify-between md:items-end gap-8">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="h-1 w-12 bg-[#d2ff2f] rounded-full mb-4"></div>
              </div>
              {data.name && (
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                  {data.name}
                </h1>
              )}
              {data.about && (
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  {data.about}
                </p>
              )}
              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                {data.email && (
                  <a
                    href={`mailto:${data.email}`}
                    className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#d2ff2f] hover:text-slate-900 transition-all duration-300 text-gray-200"
                  >
                    <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {data.email}
                  </a>
                )}
                {data.phone && (
                  <a
                    href={`tel:${data.phone}`}
                    className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#d2ff2f] hover:text-slate-900 transition-all duration-300 text-gray-200"
                  >
                    <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {data.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Blob */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d2ff2f]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Experience Section - Modern Cards */}
        {data.experiences?.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-8 w-1 bg-[#d2ff2f] rounded-full"></div>
              <h2 className="text-3xl font-bold text-slate-800">Experience</h2>
            </div>
            <div className="space-y-6">
              {data.experiences.map((exp, _) => (
                <div
                  key={exp.id}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#d2ff2f]/30"
                >
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-[#d2ff2f] rounded-full"></div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      {exp.role && (
                        <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.role}</h3>
                      )}
                      {exp.company && (
                        <p className="text-[#d2ff2f] font-medium">{exp.company}</p>
                      )}
                    </div>
                    {(exp.startDate || exp.endDate || exp.currentlyWorking) && (
                      <div className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                        {exp.startDate} — {exp.currentlyWorking ? "Present" : exp.endDate}
                      </div>
                    )}
                  </div>
                  {exp.description && (
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section - Modern Grid with Hover Effects */}
        {data.projects?.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-8 w-1 bg-[#d2ff2f] rounded-full"></div>
              <h2 className="text-3xl font-bold text-slate-800">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#d2ff2f] transition-colors">
                        {project.name}
                      </h3>
                      {project.date && (
                        <span className="text-xs text-gray-500">{project.date}</span>
                      )}
                    </div>
                    {project.role && (
                      <p className="text-sm text-[#d2ff2f] mb-2 font-medium">{project.role}</p>
                    )}
                    {project.description && (
                      <p className="text-gray-600 text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{__html: project.description}}>
                        
                      </p>
                    )}
                    {project.techStack?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full group-hover:bg-[#d2ff2f]/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-4 pt-2">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[#d2ff2f] transition-colors group/link"
                        >
                          Live Demo
                          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[#d2ff2f] transition-colors"
                        >
                          GitHub
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section - Modern Pill Design */}
        {(data.skills?.length > 0 || data.languages?.length > 0 || data.certifications?.length > 0) && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.skills?.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                {/* Header */}
                <div className="flex items-center gap-2 mb-5">
                  <svg className="w-5 h-5 text-[#d2ff2f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-lg font-bold text-slate-800">Skills</h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-3">
                  {data.skills.map((skill) => {
                    // Map level to percentage
                    const levelMap: Record<string, string> = {
                      beginner: "25%",
                      intermediate: "50%",
                      advanced: "75%",
                      expert: "100%",
                    };

                    const width = levelMap[skill.level] || "0%"; // fallback if level not defined

                    return (
                      <div key={skill.id}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-gray-500">{skill.level.toUpperCase()}</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#d2ff2f] to-[#b8e62a] rounded-full transition-all duration-500"
                            style={{ width }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {data.languages?.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                  <svg className="w-5 h-5 text-[#d2ff2f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <h3 className="text-lg font-bold text-slate-800">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-sm font-medium hover:from-[#d2ff2f]/20 hover:to-[#d2ff2f]/10 transition-all cursor-default"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {data.certifications?.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                  <svg className="w-5 h-5 text-[#d2ff2f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-lg font-bold text-slate-800">Certifications</h3>
                </div>
                <ul className="space-y-2">
                  {data.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-[#d2ff2f] mt-0.5">▹</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 mt-16 py-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {data.name || 'Portfolio'}. All rights reserved.
            </p>
            <div className="flex gap-4">
              {data.email && (
                <a href={`mailto:${data.email}`} className="text-gray-400 hover:text-[#d2ff2f] transition-colors text-sm">
                  Contact
                </a>
              )}
              <span className="text-gray-300">•</span>
              <span className="text-gray-400 text-sm">Built with ResumeToSite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;