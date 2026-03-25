import { useEffect, useState } from "react";
import type { ResumeData } from "../../layouts/BuilderLayout";
import { useNavigate } from "react-router-dom";
import ModernTemplate from "../../templates/ModernTemplate";

const templates = [
  {
    id: 'modern',
    name: 'Modern Clean',
    description: 'Modern Clean',
    component: ModernTemplate,
    previewBg: 'bg-white'
  }
]

const Template = () => {
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('resumeDraft');
    if (stored) {
      setResumeData(JSON.parse(stored));
    }
  }, []);

  if (!resumeData) {
    alert('Please fill up the resume form');
    navigate('/builder/details');
  }

  if (selectedTemplate) {
    const Template = templates.find(t => t.id === selectedTemplate)?.component;
    if (!Template) return <div>Template not found</div>;

    return (
      <div className="min-h-screen bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <button
            onClick={() => setSelectedTemplate(null)}
            className="mb-6 flex items-center gap-2 text-[#d2ff2f] hover:text-[#b8e62a] transition-colors"
          >
            ← Back to templates
          </button>
          <Template data={resumeData} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Choose Your Template</h1>
          <p className="text-gray-400">Select a design for your resume website</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-[#d2ff2f] transition-all cursor-pointer group"
              onClick={() => setSelectedTemplate(template.id)}
            >
              {/* Preview Area */}
              <div className="h-48 bg-gray-700 relative overflow-hidden">
                <div className={`${template.previewBg} p-4 h-full`}>
                  {/* Mini preview of the template */}
                  <div className="text-xs">
                    <div className="h-2 w-16 bg-gray-800 mb-2"></div>
                    <div className="h-1 w-24 bg-gray-400 mb-2"></div>
                    <div className="h-1 w-20 bg-gray-400 mb-3"></div>
                    <div className="h-2 w-20 bg-gray-800 mb-1"></div>
                    <div className="h-1 w-full bg-gray-300 mb-1"></div>
                    <div className="h-1 w-3/4 bg-gray-300"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[#d2ff2f] font-medium">Preview →</span>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold mb-1">{template.name}</h3>
                <p className="text-gray-400 text-sm">{template.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Template;