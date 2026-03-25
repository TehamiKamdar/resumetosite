import { useParams, useNavigate } from "react-router-dom";
import { templates } from "../templates";

const TemplateLayout = () => {
  const { themeId } = useParams();
  const navigate = useNavigate();

  const selected = templates.find(t => t.id === themeId);
  const Template = selected?.component;

  if (!Template) return <div className="text-black p-10">Template not found</div>;

  return (
    <div className="min-h-screen bg-[#0c0f0a]">

      {/* 🔹 Header */}
      <div className="sticky top-0 z-50 bg-[#0c0f0a]/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Left - Back */}
          <button
            onClick={() => navigate("/builder/theme")}
            className="text-[#d2ff2f] hover:text-[#b8e62a] transition"
          >
            ← Back
          </button>

          {/* Center - Title */}
          <h2 className="text-white font-semibold text-lg text-center">
            {selected.name}
          </h2>

          {/* Right - Export */}
          <button
            className="bg-[#d2ff2f] text-black px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#b8e62a] transition"
          >
            Export
          </button>

        </div>
      </div>

      {/* 🔹 Template Content */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <Template />
        </div>
      </div>

    </div>
  );
};

export default TemplateLayout;