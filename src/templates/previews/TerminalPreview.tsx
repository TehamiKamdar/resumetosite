// templates/previews/TerminalPreview.tsx
const TerminalPreview = () => {
  return (
    <div className="h-full w-full bg-black p-3 font-mono">
      {/* Terminal Dots */}
      <div className="flex gap-1 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>
      
      {/* Terminal Content */}
      <div className="space-y-1 text-[8px] text-green-400">
        <div className="flex gap-1">
          <span>$</span>
          <span className="text-white">portfolio.sh</span>
        </div>
        <div className="h-2 w-20 bg-green-400/30 rounded"></div>
        <div className="h-2 w-16 bg-green-400/30 rounded"></div>
        <div className="mt-1">
          <span className="text-green-400">➜</span>
          <span className="ml-1">projects/</span>
        </div>
        <div className="h-1 w-24 bg-green-400/20 rounded"></div>
      </div>
    </div>
  );
};

export default TerminalPreview;