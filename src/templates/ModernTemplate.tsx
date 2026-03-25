// templates/ModernTemplate.tsx
import { ResumeData } from '../types';

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate = ({ data }: ModernTemplateProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 font-sans">
      {/* Header Section */}
      <div className="border-b-4 border-[#d2ff2f] pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {data.name || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {data.email && <span>📧 {data.email}</span>}
          {data.phone && <span>📞 {data.phone}</span>}
        </div>
      </div>

      {/* About Section */}
      {data.about && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-1 border-b border-gray-300">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.about}</p>
        </section>
      )}

      {/* Experience Section */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-1 border-b border-gray-300">
            Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {exp.startDate} - {exp.currentlyWorking === "true" ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects Section */}
      {data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-1 border-b border-gray-300">
            Projects
          </h2>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id}>
                <div className="flex flex-wrap justify-between items-start">
                  <h3 className="font-bold text-gray-800">{project.name}</h3>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                {project.role && (
                  <p className="text-sm text-gray-600 mb-1">Role: {project.role}</p>
                )}
                {project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-3 mt-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-1 border-b border-gray-300">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {data.skills.map((skill) => (
              <div key={skill.id} className="flex justify-between items-center">
                <span className="text-gray-700">{skill.name}</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages & Certifications */}
      {(data.languages.length > 0 || data.certifications.length > 0) && (
        <div className="grid md:grid-cols-2 gap-4">
          {data.languages.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-1 border-b border-gray-300">
                Languages
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.languages.map((lang, idx) => (
                  <span key={idx} className="text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </section>
          )}

          {data.certifications.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-1 border-b border-gray-300">
                Certifications
              </h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {data.certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;