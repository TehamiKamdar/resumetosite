// templates/previews/NeubrutalistPreview.tsx
const NeubrutalistPreview = () => {
  return (
    <div className="h-full w-full bg-yellow-200 p-3">
      <div className="bg-white border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <div className="h-3 w-20 bg-black text-white text-[6px] px-1 mb-1 inline-block">PORTFOLIO</div>
        <div className="h-4 w-full bg-black mb-1"></div>
        <div className="h-2 w-3/4 bg-gray-300 mb-1"></div>
        <div className="flex gap-1 mt-1">
          <div className="h-2 w-8 bg-black"></div>
          <div className="h-2 w-8 border border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default NeubrutalistPreview;