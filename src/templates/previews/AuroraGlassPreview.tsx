// templates/previews/AuroraGlassPreview.tsx
const AuroraGlassPreview = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-3 relative overflow-hidden">
      {/* Aurora Effect */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-pink-500 rounded-full blur-xl opacity-30"></div>
      
      {/* Glass Card */}
      <div className="relative backdrop-blur-sm bg-white/10 rounded-lg p-2 border border-white/20">
        <div className="h-3 w-16 bg-white/60 rounded mb-1"></div>
        <div className="h-2 w-full bg-white/30 rounded mb-1"></div>
        <div className="h-2 w-3/4 bg-white/30 rounded"></div>
        
        {/* Skills */}
        <div className="flex gap-1 mt-2">
          <div className="h-2 w-8 bg-white/40 rounded"></div>
          <div className="h-2 w-8 bg-white/40 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default AuroraGlassPreview;