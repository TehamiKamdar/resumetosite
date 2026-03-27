// Template.tsx (updated)
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { templates } from "../../templates";

const Template = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('resumeDraft');
    if (!stored) {
      alert('Please fill up the resume form');
      navigate('/builder/details');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0c0f0a] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Choose Your Template</h1>
          <p className="text-gray-400">Select a design for your resume website</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => {
            const PreviewComponent = template.preview;
            
            return (
              <div
                key={template.id}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-[#d2ff2f] transition-all cursor-pointer group"
                onClick={() => navigate(`/builder/theme/${template.id}`)}
              >
                {/* Preview Area - Now shows actual template preview */}
                <div className={`h-48 ${template.previewBg} relative overflow-hidden`}>
                  <PreviewComponent />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[#d2ff2f] font-medium">Click to Preview →</span>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-semibold">{template.name}</h3>
                    {!template.isPremium && (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Free</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2">{template.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Simple Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5">
        <div className="h-full w-4/5 bg-[#d2ff2f]"></div>
      </div>
    </div>
  );
}

export default Template;