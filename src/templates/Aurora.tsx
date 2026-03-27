// templates/AuroraGlassPortfolioTemplate.tsx
import { getResumeDraft } from '../data/ResumeData';
import type { ResumeData } from '../types';

const AuroraGlassTemplate = () => {
  const formData: ResumeData = getResumeDraft();

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white">
          <p>✨ No resume data found. Please complete your resume first.</p>
        </div>
      </div>
    );
  }

  const data = formData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section - Glass Card */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-white text-sm">Available for opportunities</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {data.name}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                {data.about}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {data.email && (
                  <a
                    href={`mailto:${data.email}`}
                    className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white border border-white/20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {data.email}
                  </a>
                )}
                {data.phone && (
                  <a
                    href={`tel:${data.phone}`}
                    className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white border border-white/20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {data.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Skills Section - Glass Grid */}
          {data.skills?.length > 0 && (
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Skills & Expertise</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="backdrop-blur-xl bg-white/10 rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <p className="text-white font-semibold text-lg">{skill.name}</p>
                    <p className="text-white/60 text-sm mt-1 capitalize">{skill.level}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Timeline */}
          {data.experiences?.length > 0 && (
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Journey</h2>
              <div className="space-y-6">
                {data.experiences.map((exp, idx) => (
                  <div key={exp.id} className="relative pl-8 md:pl-12">
                    {idx !== data.experiences.length - 1 && (
                      <div className="absolute left-3 md:left-5 top-8 bottom-0 w-px bg-gradient-to-b from-white/40 to-transparent"></div>
                    )}
                    <div className="absolute left-0 top-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <p className="text-purple-300 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-white/60 text-sm">
                          {exp.startDate} — {exp.currentlyWorking ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      <p className="text-white/70 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Grid */}
          {data.projects?.length > 0 && (
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Featured Work</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {data.projects.map((project) => (
                  <div key={project.id} className="group backdrop-blur-xl bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                          {project.name}
                        </h3>
                        <span className="text-white/40 text-sm">{project.date}</span>
                      </div>
                      {project.role && (
                        <p className="text-purple-300 text-sm mb-2 font-medium">{project.role}</p>
                      )}
                      <p className="text-white/70 text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: project.description }} />
                      {project.techStack?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.map((tech, idx) => (
                            <span key={idx} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
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
                            className="inline-flex items-center gap-1 text-sm text-white hover:text-pink-300 transition-colors"
                          >
                            Live Demo →
                          </a>
                        )}
                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-white hover:text-pink-300 transition-colors"
                          >
                            GitHub →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages & Certifications - Glass Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {data.languages?.length > 0 && (
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🌐</span> Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.languages.map((lang, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/20 rounded-full text-white text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {data.certifications?.length > 0 && (
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🏆</span> Certifications
                </h3>
                <ul className="space-y-2">
                  {data.certifications.map((cert, idx) => (
                    <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                      <span className="text-pink-400">▹</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/20 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} {data.name} — Crafted with ✨
            </p>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AuroraGlassTemplate;