// FullPageLoader.jsx
const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 bg-[#0c0f0a] z-50 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d2ff2f] blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff206e] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#41ead4] blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(210, 255, 47, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(210, 255, 47, 0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Main Content */}
      <div className="relative text-center max-w-md w-full px-6">
        {/* Top Corner Decorations */}
        <div className="absolute -top-12 left-0 w-24 h-24 border-t-4 border-l-4 border-[#d2ff2f]"></div>
        <div className="absolute -top-12 right-0 w-24 h-24 border-t-4 border-r-4 border-[#ff206e]"></div>
        <div className="absolute -bottom-12 left-0 w-24 h-24 border-b-4 border-l-4 border-[#41ead4]"></div>
        <div className="absolute -bottom-12 right-0 w-24 h-24 border-b-4 border-r-4 border-[#d2ff2f]"></div>

        {/* Animated Logo/Icon */}
        <div className="relative mb-12">
          <div className="flex justify-center gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-16 bg-[#d2ff2f] animate-bounce"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  backgroundColor: i === 0 ? '#d2ff2f' : i === 1 ? '#ff206e' : '#41ead4'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Main Text */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Reading your
          <span className="text-[#d2ff2f] block mt-2">resume</span>
        </h2>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2 mb-8">
          <span className="text-2xl text-white/60 animate-pulse">please</span>
          <span className="text-2xl text-white/60 animate-pulse [animation-delay:0.2s]">wait</span>
          <span className="text-2xl text-white/60 animate-pulse [animation-delay:0.4s]">.</span>
          <span className="text-2xl text-white/60 animate-pulse [animation-delay:0.6s]">.</span>
          <span className="text-2xl text-white/60 animate-pulse [animation-delay:0.8s]">.</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 mb-12 max-w-sm mx-auto">
          <div className="h-full w-full bg-[#d2ff2f] animate-progress origin-left"></div>
        </div>

        {/* Powered by Groq */}
        <div className="flex items-center justify-center gap-3 text-sm">
          <div className="h-px w-8 bg-[#d2ff2f]/30"></div>
          <span className="text-white/40">powered by</span>
          <span className="text-[#d2ff2f] font-bold text-lg tracking-widest">GROQ</span>
          <div className="h-px w-8 bg-[#d2ff2f]/30"></div>
        </div>

        {/* AI Badge */}
        <div className="mt-6 inline-flex items-center gap-2 border border-[#d2ff2f]/20 px-4 py-2">
          <span className="w-2 h-2 bg-[#d2ff2f] animate-pulse"></span>
          <span className="text-white/40 text-xs">AI PROCESSING</span>
        </div>
      </div>

      {/* Add these styles to your CSS file */}
      <style>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          20% { transform: scaleX(0.2); }
          40% { transform: scaleX(0.4); }
          60% { transform: scaleX(0.6); }
          80% { transform: scaleX(0.8); }
          95% { transform: scaleX(0.95); }
          100% { transform: scaleX(1); }
        }
        .animate-progress {
          animation: progress 3s ease-in-out infinite;
          transform-origin: left;
        }
      `}</style>
    </div>
  );
};

export default FullPageLoader;