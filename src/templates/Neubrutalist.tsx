// templates/NeubrutalistPortfolioTemplate.tsx
import { getResumeDraft } from '../data/ResumeData';
import type { ResumeData } from '../types';

const NeubrutalistTemplate = () => {
  const formData: ResumeData = getResumeDraft();

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow-200 border-8 border-black">
        <p className="text-2xl font-bold text-black">⚠️ NO DATA FOUND ⚠️</p>
      </div>
    );
  }

  const data = formData;

  return (
    <div className="min-h-screen bg-yellow-200">
      {/* Hero Section - Brutalist Style */}
      <div className="border-b-4 border-black bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-6">
            <div className="inline-block bg-black text-white px-4 py-1 rotate-[-2deg]">
              <span className="text-sm font-mono">✦ PORTFOLIO v1.0 ✦</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
              {data.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl border-l-8 border-black pl-4">
              {data.about}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-bold hover:bg-yellow-400 hover:text-black transition-colors border-2 border-black"
                >
                  ✉️ {data.email}
                </a>
              )}
              {data.phone && (
                <a
                  href={`tel:${data.phone}`}
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-bold border-2 border-black hover:bg-yellow-400 transition-colors"
                >
                  📞 {data.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Skills - Brutalist Grid */}
        {data.skills?.length > 0 && (
          <div className="mb-20">
            <div className="bg-black text-white inline-block px-4 py-2 mb-6 rotate-1">
              <h2 className="text-2xl font-black uppercase">// SKILLS.EXE</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.skills.map((skill) => (
                <div key={skill.id} className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
                  <p className="font-black text-lg">{skill.name}</p>
                  <p className="text-sm uppercase mt-1 text-gray-600">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience - Zigzag Layout */}
        {data.experiences?.length > 0 && (
          <div className="mb-20">
            <div className="bg-black text-white inline-block px-4 py-2 mb-6 -rotate-1">
              <h2 className="text-2xl font-black uppercase">// WORK.LOG</h2>
            </div>
            <div className="space-y-8">
              {data.experiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  className={`bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow ${idx % 2 === 0 ? 'ml-0 md:ml-8' : 'mr-0 md:mr-8'}`}
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase">{exp.role}</h3>
                      <p className="text-xl font-bold text-gray-600">{exp.company}</p>
                    </div>
                    <div className="bg-yellow-300 px-3 py-1 border-2 border-black font-mono text-sm">
                      {exp.startDate} → {exp.currentlyWorking ? 'NOW' : exp.endDate}
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects - Bold Cards */}
        {data.projects?.length > 0 && (
          <div className="mb-20">
            <div className="bg-black text-white inline-block px-4 py-2 mb-6 rotate-2">
              <h2 className="text-2xl font-black uppercase">// PROJECTS.DAT</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border-4 border-black p-6 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="absolute -top-3 -right-3 bg-yellow-300 border-2 border-black px-2 py-1 text-xs font-mono font-bold rotate-6">
                    {project.date}
                  </div>
                  <h3 className="text-2xl font-black mb-2">{project.name}</h3>
                  {project.role && <p className="text-sm font-bold text-gray-600 mb-2">ROLE: {project.role}</p>}
                  <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: project.description }} />
                  {project.techStack?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="bg-black text-white px-2 py-0.5 text-xs font-mono">
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
                        className="inline-flex items-center gap-1 bg-black text-white px-4 py-2 font-bold hover:bg-yellow-400 hover:text-black transition-colors"
                      >
                        ▸ LIVE
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 border-2 border-black px-4 py-2 font-bold hover:bg-yellow-400 transition-colors"
                      >
                        ▸ CODE
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages & Certifications - Brutalist Side-by-Side */}
        {(data.languages?.length > 0 || data.certifications?.length > 0) && (
          <div className="grid md:grid-cols-2 gap-8">
            {data.languages?.length > 0 && (
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-black mb-4">🌐 LANGUAGES</h3>
                <div className="flex flex-wrap gap-3">
                  {data.languages.map((lang, idx) => (
                    <span key={idx} className="border-2 border-black px-4 py-2 text-lg font-bold">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {data.certifications?.length > 0 && (
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-black mb-4">🏆 CERTIFICATIONS</h3>
                <ul className="space-y-2">
                  {data.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-black text-xl">✦</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer - Brutalist */}
      <footer className="border-t-4 border-black bg-white mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-sm">
            © {new Date().getFullYear()} {data.name} — BUILT WITH BRUTALISM
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NeubrutalistTemplate;