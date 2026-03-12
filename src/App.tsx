import { ArrowRight, Check, Star, Zap, FileText, Sparkles, Globe, Code } from 'lucide-react';
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-[#0c0f0a] font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav className="border-b border-[#d2ff2f]/20 bg-[#0c0f0a]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-8 h-8 text-[#d2ff2f]" />
              <span className="text-xl font-bold text-white">ResumeToSite</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
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

      {/* Hero Section */}
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
              <button className="bg-[#d2ff2f] text-[#0c0f0a] px-8 py-4 font-semibold text-lg hover:bg-[#d2ff2f]/90 transition flex items-center justify-center gap-2">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-[#d2ff2f] text-[#d2ff2f] px-8 py-4 font-semibold text-lg hover:bg-[#d2ff2f]/10 transition">
                See Examples
              </button>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
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

      {/* Features Section */}
      <section id="features" className="bg-[#0c0f0a] border-y border-[#d2ff2f]/20 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Powerful features to help you create the perfect portfolio that stands out
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Instant Generation", desc: "Upload your resume and get your portfolio in seconds" },
              { icon: Globe, title: "Custom Domain", desc: "Use your own domain name for a professional look" },
              { icon: Code, title: "Developer Friendly", desc: "Export code or use our hosting solution" },
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 p-8 hover:bg-white/10 transition">
                <feature.icon className="w-12 h-12 text-[#d2ff2f] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Three simple steps to transform your resume into a stunning portfolio
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Upload Resume", desc: "Upload your PDF resume - we support all formats" },
              { step: "02", title: "Customize Design", desc: "Choose from our beautiful templates and customize" },
              { step: "03", title: "Publish & Share", desc: "Get your live portfolio link and share it anywhere" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-[#d2ff2f]/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#0c0f0a] border-y border-[#d2ff2f]/20 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              No hidden fees. Cancel anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Free", price: "$0", features: ["1 Portfolio", "Basic Templates", "Resume Parsing"] },
              { name: "Pro", price: "$12", features: ["Unlimited Portfolios", "All Templates", "Custom Domain", "Analytics"], popular: true },
              { name: "Business", price: "$29", features: ["Everything in Pro", "Team Access", "API Access", "Priority Support"] },
            ].map((plan, i) => (
              <div key={i} className={`bg-white/5 p-8 ${plan.popular ? 'border-2 border-[#d2ff2f]' : ''}`}>
                {plan.popular && (
                  <div className="bg-[#d2ff2f] text-[#0c0f0a] px-4 py-1 inline-block text-sm font-bold mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-6">{plan.price}<span className="text-lg text-white/60">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/80">
                      <Check className="w-5 h-5 text-[#d2ff2f]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 font-semibold transition ${
                  plan.popular 
                    ? 'bg-[#d2ff2f] text-[#0c0f0a] hover:bg-[#d2ff2f]/90' 
                    : 'border border-[#d2ff2f] text-[#d2ff2f] hover:bg-[#d2ff2f]/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Loved by Professionals</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Join thousands of satisfied users who transformed their careers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white/5 p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#d2ff2f] text-[#d2ff2f]" />
                  ))}
                </div>
                <p className="text-white/80 mb-6">
                  "ResumeToSite helped me land my dream job. My portfolio looks amazing and it took just minutes to create!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#41ead4]"></div>
                  <div>
                    <div className="font-bold text-white">John Doe</div>
                    <div className="text-white/60">Software Engineer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#d2ff2f]/20 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="text-[#d2ff2f] block mt-2">Career Journey?</span>
          </h2>
          <p className="text-white/60 text-xl mb-8">
            Join thousands of professionals who've already upgraded their online presence
          </p>
          <button className="bg-[#d2ff2f] text-[#0c0f0a] px-12 py-5 font-bold text-xl hover:bg-[#d2ff2f]/90 transition flex items-center gap-2 mx-auto">
            Create Your Portfolio Now <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default App
