// templates/previews/ModernPreview.tsx
const ModernPreview = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-50 via-white to-gray-50 p-3">
      <div className="space-y-2">
        {/* Header */}
        <div className="h-6 w-3/4 bg-slate-800 rounded"></div>
        <div className="h-3 w-full bg-slate-300 rounded"></div>
        <div className="h-3 w-2/3 bg-slate-300 rounded"></div>
        
        {/* Experience Card */}
        <div className="mt-3 bg-white rounded-lg p-2 shadow-sm">
          <div className="h-3 w-1/3 bg-slate-800 rounded mb-1"></div>
          <div className="h-2 w-1/2 bg-green-300 rounded"></div>
        </div>
        
        {/* Skill Bar */}
        <div className="mt-2">
          <div className="flex justify-between text-[8px]">
            <span className="bg-slate-600 h-1 w-8"></span>
            <span className="bg-slate-400 h-1 w-4"></span>
          </div>
          <div className="h-1 bg-gray-200 rounded mt-1">
            <div className="h-full w-3/4 bg-[#d2ff2f] rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernPreview;