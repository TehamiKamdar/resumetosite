import { FileText } from "lucide-react"

const Footer = () =>{
  return(
      <footer className="border-t border-[#d2ff2f]/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-[#d2ff2f]" />
                <span className="font-bold text-white">ResumeToSite</span>
              </div>
              <p className="text-white/60">Transform your resume into a stunning portfolio website.</p>
            </div>
            {["Product", "Company", "Resources"].map((section, i) => (
              <div key={i}>
                <h4 className="font-bold text-white mb-4">{section}</h4>
                <ul className="space-y-2">
                  {[1,2,3].map((j) => (
                    <li key={j}><a href="#" className="text-white/60 hover:text-[#d2ff2f] transition">Link {j}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40">
            © 2024 ResumeToSite. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer;