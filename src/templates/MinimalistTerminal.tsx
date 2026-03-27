// templates/TerminalPortfolioTemplate.tsx
import { getResumeDraft } from '../data/ResumeData';
import type { ResumeData } from '../types';
import { useState } from 'react';

const MinimalistTerminalTemplate = () => {
  const formData: ResumeData = getResumeDraft();
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'experience'>('about');

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-green-400 font-mono">
        <p>$ No resume data found. Please complete your resume first.</p>
      </div>
    );
  }

  const data = formData;

  // const typewriterText = `> ${data.name} — ${data.about?.slice(0, 60)}...`;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Terminal Header */}
      <div className="border-b border-green-400/30 bg-black/90 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-green-400/60 ml-2">bash — portfolio.sh</span>
            <div className="flex-1"></div>
            <div className="flex gap-4 text-xs">
              <button
                onClick={() => setActiveTab('about')}
                className={`hover:text-green-300 transition-colors ${activeTab === 'about' ? 'text-green-400 border-b border-green-400' : 'text-green-400/60'}`}
              >
                ~/about
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`hover:text-green-300 transition-colors ${activeTab === 'projects' ? 'text-green-400 border-b border-green-400' : 'text-green-400/60'}`}
              >
                ~/projects
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`hover:text-green-300 transition-colors ${activeTab === 'experience' ? 'text-green-400 border-b border-green-400' : 'text-green-400/60'}`}
              >
                ~/experience
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ASCII Header */}
        <div className="mb-12 text-center">
          <pre className="text-xs sm:text-sm text-green-400/80 overflow-x-auto">
{`   _____                _   _                 
  / ____|              | | (_)                
 | (___   ___ _ __ ___ | |_ _  ___  _ __  ___ 
  \\___ \\ / _ \\ '__/ _ \\| __| |/ _ \\| '_ \\/ __|
  ____) |  __/ | | (_) | |_| | (_) | | | \\__ \\
 |_____/ \\___|_|  \\___/ \\__|_|\\___/|_| |_|___/
                                               `}
          </pre>
          <div className="mt-4 text-green-400/80 text-sm">
            <span className="text-green-400">$</span> whoami
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">{data.name}</h1>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            {data.email && (
              <a href={`mailto:${data.email}`} className="text-green-400/70 hover:text-green-400 transition-colors flex items-center gap-1">
                <span>📧</span> {data.email}
              </a>
            )}
            {data.phone && (
              <a href={`tel:${data.phone}`} className="text-green-400/70 hover:text-green-400 transition-colors flex items-center gap-1">
                <span>📞</span> {data.phone}
              </a>
            )}
          </div>
        </div>

        {/* Tab Content */}
        <div className="border border-green-400/30 rounded-lg p-6 bg-black/50">
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div>
                <div className="text-green-400 mb-2">$ cat about.txt</div>
                <p className="text-green-400/80 leading-relaxed">{data.about}</p>
              </div>

              {data.skills?.length > 0 && (
                <div>
                  <div className="text-green-400 mb-2">$ skills --list</div>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill) => (
                      <span key={skill.id} className="px-3 py-1 border border-green-400/30 rounded text-sm">
                        {skill.name} <span className="text-green-400/50">[{skill.level}]</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {data.languages?.length > 0 && (
                <div>
                  <div className="text-green-400 mb-2">$ languages --spoken</div>
                  <div className="flex flex-wrap gap-2">
                    {data.languages.map((lang, idx) => (
                      <span key={idx} className="px-3 py-1 border border-green-400/30 rounded text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {data.certifications?.length > 0 && (
                <div>
                  <div className="text-green-400 mb-2">$ certs --verify</div>
                  <ul className="space-y-1">
                    {data.certifications.map((cert, idx) => (
                      <li key={idx} className="text-green-400/70 text-sm">
                        ✓ {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <div className="text-green-400 mb-4">$ ls -la ./projects/</div>
              <div className="space-y-4">
                {data.projects?.map((project) => (
                  <div key={project.id} className="border-l-2 border-green-400 pl-4 py-2 hover:border-green-300 transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <h3 className="text-green-400 font-bold">{project.name}</h3>
                      <span className="text-xs text-green-400/50">{project.date}</span>
                    </div>
                    {project.role && <p className="text-sm text-green-400/60 mt-1">role: {project.role}</p>}
                    {project.description && (
                      <p className="text-green-400/70 text-sm mt-2" dangerouslySetInnerHTML={{ __html: project.description }} />
                    )}
                    {project.techStack?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.map((tech, idx) => (
                          <span key={idx} className="text-xs text-green-400/50">[{tech}]</span>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-4 mt-3">
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 hover:text-green-300 transition-colors">
                          → live
                        </a>
                      )}
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 hover:text-green-300 transition-colors">
                          → repo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div>
              <div className="text-green-400 mb-4">$ cat experience.log</div>
              <div className="space-y-6">
                {data.experiences?.map((exp) => (
                  <div key={exp.id} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="text-green-400 font-bold">{exp.role}</h3>
                        <p className="text-green-400/70 text-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs text-green-400/50">
                        {exp.startDate} — {exp.currentlyWorking ? 'present' : exp.endDate}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-green-400/70 text-sm mt-2">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-green-400/40 text-xs border-t border-green-400/30 pt-6">
          <p>$ echo "© {new Date().getFullYear()} {data.name} | Built with ResumeToSite"</p>
          <p className="mt-1">~</p>
        </div>
      </div>
    </div>
  );
};

export default MinimalistTerminalTemplate;