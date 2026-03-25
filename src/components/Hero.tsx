import { ArrowRight, Sparkles, UploadIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import ResumeUploader from './ResumeUploader';
// import type { ResumeData } from './ResumeUploader';
// import { useState } from 'react';
// import ResumeBuilderForm from './ResumeBuilderForm';

function Hero(){
  // const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  // const [extractedData, setExtractedData] = useState<ResumeData | null>(null);
  // const [showBuilder, setShowBuilder] = useState(false);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) setUploadedFile(file);
  // };
  const navigate = useNavigate();

  return(
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#d2ff2f]/10 px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#d2ff2f]" />
              <span className="text-[#d2ff2f] text-sm font-semibold">AI-Powered Portfolio Generator</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Turn Your Resume Into a
              <span className="text-[#d2ff2f] block mt-2">Stunning Portfolio</span>
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Transform your boring PDF resume into an interactive, modern portfolio website in minutes. No coding required. Just upload and impress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('/builder/details')} className="bg-[#d2ff2f] text-[#0c0f0a] px-8 py-4 font-semibold text-lg hover:bg-[#d2ff2f]/90 transition flex items-center justify-center gap-2 cursor-pointer">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <label className="border border-[#d2ff2f] text-[#d2ff2f] px-8 py-4 font-semibold text-lg hover:bg-[#d2ff2f]/10 transition flex items-center justify-center gap-2 cursor-pointer">
                Upload your Resume <UploadIcon className='w-5 h-5' />
                <input type="file" name="resume-upload" accept='.pdf' className='hidden' id="" onChange={handleChange} />
              </label>
              {/* {uploadedFile && (
                // <ResumeUploader
                //   file={uploadedFile}
                //   autoProcess={true}
                //   onExtracted={(data) => {
                //     setExtractedData(data);
                //     setShowBuilder(true);
                //     setUploadedFile(null);  // clean
                //     // builder show kar do
                //   }}
                // />
              )} */}
              {/* {showBuilder && extractedData && (
                // <ResumeBuilderForm
                //   initialData={extractedData}
                //   onNext={(updatedData) => {
                //     // yahan theme selection page pe jaao ya updatedData save karo
                //     console.log('Updated Data ready for portfolio:', updatedData);
                //     // setShowThemeSelection(true); // next step
                //   }}
                // />
              )} */}
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-[#41ead4] border-2 border-[#0c0f0a]"></div>
                ))}
              </div>
              <div className="text-white">
                <span className="font-bold text-[#d2ff2f]">10,000+</span>
                <span className="text-white/60"> portfolios created</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#d2ff2f]/20 blur-3xl"></div>
            <div className="bg-gradient-to-br from-[#d2ff2f]/10 to-transparent p-1">
              <div className="bg-[#0c0f0a] p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-[#ff206e]"></div>
                  <div className="w-3 h-3 bg-[#41ead4]"></div>
                  <div className="w-3 h-3 bg-[#d2ff2f]"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-white/10 w-3/4"></div>
                  <div className="h-8 bg-white/10 w-full"></div>
                  <div className="h-8 bg-white/10 w-5/6"></div>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="h-24 bg-[#d2ff2f]/20"></div>
                    <div className="h-24 bg-[#ff206e]/20"></div>
                    <div className="h-24 bg-[#41ead4]/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero;