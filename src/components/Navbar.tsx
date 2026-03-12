import { ArrowRight, FileText } from 'lucide-react';

const Navbar = () =>{
  return(
    <nav className="border-b border-[#d2ff2f]/20 bg-[#0c0f0a]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-8 h-8 text-[#d2ff2f]" />
              <span className="text-xl font-bold text-white">ResumeToSite</span>
            </div>
            <div className="md:flex items-center gap-8">
              <a href="#features" className="text-white/80 hover:text-[#d2ff2f] transition">Features</a>
              <a href="#how-it-works" className="text-white/80 hover:text-[#d2ff2f] transition">How It Works</a>
              <a href="#pricing" className="text-white/80 hover:text-[#d2ff2f] transition">Pricing</a>
              <a href="#testimonials" className="text-white/80 hover:text-[#d2ff2f] transition">Testimonials</a>
            </div>
            <button className="bg-[#d2ff2f] text-[#0c0f0a] px-6 py-2 font-semibold hover:bg-[#d2ff2f]/90 transition flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar