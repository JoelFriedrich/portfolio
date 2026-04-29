import { Coffee, BookOpen, Code, Terminal, Mail, Linkedin, Github, ExternalLink, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-retro-amber selection:text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-retro-bg/80 backdrop-blur-md border-b border-retro-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="font-pixel text-retro-amber text-lg sm:text-xl tracking-tighter">
                JOEL_FRIEDRICH<span className="animate-pulse">_</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 font-mono text-sm uppercase tracking-widest">
              <a href="#business" className="hover:text-retro-amber transition-colors">Business</a>
              <a href="#dev" className="hover:text-retro-amber transition-colors">Dev</a>
              <a href="#blog" className="hover:text-retro-amber transition-colors">Blog</a>
              <a href="#contact" className="hover:text-retro-amber transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
              {/* Mobile menu button could go here, but keeping it minimal for now */}
              <a href="#contact" className="pixel-button text-xs py-1 px-2">Connect</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32">
        
        {/* Hero Section */}
        <section id="hero" className="py-20 flex flex-col items-start justify-center min-h-[70vh]">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-block px-3 py-1 bg-retro-amber/10 border border-retro-amber/30 text-retro-amber font-mono text-xs uppercase tracking-widest mb-4">
              Business Leader & Developer
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-mono leading-tight text-white">
              Building <span className="text-retro-amber">Businesses</span> & <span className="text-retro-green">Software</span> with Purpose.
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
              A business leader with a decade of operational experience in the coffee industry, now building modern digital tools for investors and creators.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#business" className="pixel-button flex items-center gap-2">
                Business Leadership <ChevronRight size={18} />
              </a>
              <a href="#dev" className="pixel-button-green flex items-center gap-2">
                Dev Portfolio <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Business Leadership Section */}
        <section id="business" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-mono text-white">Business Leadership</h2>
            <div className="h-px flex-grow bg-retro-border"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pixel-border p-8 bg-retro-card space-y-4">
              <div className="w-12 h-12 bg-retro-amber/10 flex items-center justify-center border border-retro-amber/30 mb-4">
                <Coffee className="text-retro-amber" />
              </div>
              <h3 className="text-xl font-mono text-white">10+ Years In Coffee</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Over a decade of operational leadership in the coffee business. From supply chain management to customer experience and team growth.
              </p>
            </div>
            
            <div className="pixel-border p-8 bg-retro-card space-y-4">
              <div className="w-12 h-12 bg-retro-amber/10 flex items-center justify-center border border-retro-amber/30 mb-4">
                <Terminal className="text-retro-amber" />
              </div>
              <h3 className="text-xl font-mono text-white">Coaching & Consulting</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Helping business owners navigate operational complexity and scale their vision through strategic coaching and systems design.
              </p>
            </div>

            <a 
              href="https://how-not-to-start-a-coffee-shop.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border p-8 bg-retro-card space-y-4 border-retro-amber/50 hover:border-retro-amber transition-colors group block"
            >
              <div className="w-12 h-12 bg-retro-amber/20 flex items-center justify-center border border-retro-amber mb-4 group-hover:bg-retro-amber/30 transition-colors">
                <BookOpen className="text-retro-amber" />
              </div>
              <h3 className="text-xl font-mono text-white group-hover:text-retro-amber transition-colors">The Upcoming Book</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Distilling 10 years of real-world business leadership into a practical guide for the next generation of entrepreneurs.
              </p>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-retro-amber font-mono text-xs uppercase tracking-tighter bg-retro-amber/10 px-2 py-1">Status: In Progress</span>
                <ExternalLink size={14} className="text-retro-amber opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </div>

          <div className="max-w-3xl space-y-6 pt-8">
            <p className="text-gray-400 leading-relaxed">
              Joel's background is rooted in the "real world" of business. For over 10 years, he led operations in a high-growth coffee business, learning firsthand what it takes to build teams, manage complex logistics, and maintain a focus on quality at scale.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Today, he combines that operational wisdom with technical expertise to build software that solves actual business problems. He doesn't just write code; he builds products that understand the bottom line.
            </p>
          </div>
        </section>

        {/* Developer Portfolio Section */}
        <section id="dev" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-mono text-white">Developer Portfolio</h2>
            <div className="h-px flex-grow bg-retro-border"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project 1: Plot Point */}
            <a 
              href="https://plot-point.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group space-y-6 block"
            >
              <div className="pixel-border aspect-video bg-retro-card overflow-hidden group-hover:border-retro-green transition-colors">
                <div className="w-full h-full bg-gradient-to-br from-retro-green/20 to-retro-bg flex items-center justify-center">
                  <span className="font-pixel text-retro-green text-2xl opacity-50 group-hover:opacity-80 transition-opacity">PLOT_POINT</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-mono text-white group-hover:text-retro-green transition-colors">Plot Point</h3>
                  <div className="flex gap-3">
                    <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  A data-driven creative tool for plot and story development. Built to help writers manage complex narratives and character arcs.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-tighter">
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green transition-colors">React/Vite</span>
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green transition-colors">Supabase</span>
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green transition-colors">Netlify</span>
                </div>
              </div>
            </a>

            {/* Project 2: Our K-List */}
            <a 
              href="https://our-k-list.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group space-y-6 block"
            >
              <div className="pixel-border aspect-video bg-retro-card overflow-hidden group-hover:border-retro-amber transition-colors">
                <div className="w-full h-full bg-gradient-to-br from-retro-amber/20 to-retro-bg flex items-center justify-center">
                  <span className="font-pixel text-retro-amber text-2xl opacity-50 group-hover:opacity-80 transition-opacity">OUR_K_LIST</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-mono text-white group-hover:text-retro-amber transition-colors">Our K-List</h3>
                  <div className="flex gap-3">
                    <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  A dedicated K-drama tracking application for fans. Features rich data integration from TMDB and personalized list management.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-tighter">
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber transition-colors">React/Vite</span>
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber transition-colors">Supabase</span>
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber transition-colors">TMDB API</span>
                </div>
              </div>
            </a>

            {/* Project 3: Stop Scrolling */}
            <a 
              href="https://stopscrollingyoutube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group space-y-6 block"
            >
              <div className="pixel-border aspect-video bg-retro-card overflow-hidden group-hover:border-retro-green transition-colors">
                <div className="w-full h-full bg-gradient-to-br from-retro-green/20 to-retro-bg flex items-center justify-center">
                  <span className="font-pixel text-retro-green text-2xl opacity-50 group-hover:opacity-80 transition-opacity uppercase">STOP_SCROLLING</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-mono text-white group-hover:text-retro-green transition-colors">Stop Scrolling</h3>
                  <div className="flex gap-3">
                    <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  A tool designed to help users break addictive scrolling habits on YouTube and reclaim their time through intentional design.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-tighter">
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green transition-colors">JavaScript</span>
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green transition-colors">Extension</span>
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green transition-colors">Product Design</span>
                </div>
              </div>
            </a>

            {/* Project 4: Caesars' Sister */}
            <a 
              href="https://caesars-sister.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group space-y-6 block"
            >
              <div className="pixel-border aspect-video bg-retro-card overflow-hidden group-hover:border-retro-amber transition-colors">
                <div className="w-full h-full bg-gradient-to-br from-retro-amber/20 to-retro-bg flex items-center justify-center">
                  <span className="font-pixel text-retro-amber text-2xl opacity-50 group-hover:opacity-80 transition-opacity uppercase">CAESARS_SISTER</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-mono text-white group-hover:text-retro-amber transition-colors">Caesars' Sister</h3>
                  <div className="flex gap-3">
                    <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  A sophisticated web application focused on historical data visualization and lineage storytelling.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-tighter">
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber transition-colors">React</span>
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber transition-colors">D3.js</span>
                  <span className="px-2 py-1 bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber transition-colors">Netlify</span>
                </div>
              </div>
            </a>
          </div>

          <div className="pixel-border p-8 bg-retro-card/50 border-dashed">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h4 className="text-white font-mono uppercase">Technical Stack</h4>
                <p className="text-sm text-gray-500">Modern tools for robust digital products.</p>
              </div>
              <div className="flex flex-wrap gap-4 text-retro-green font-mono text-sm">
                <span>[ React/Vite ]</span>
                <span>[ Supabase ]</span>
                <span>[ Netlify ]</span>
                <span>[ JavaScript ]</span>
                <span>[ APIs ]</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-mono text-white">The Blog</h2>
            <div className="h-px flex-grow bg-retro-border"></div>
          </div>

          <div className="space-y-8">
            <div className="pixel-border p-6 bg-retro-card/30 border-dashed">
              <div className="flex items-center gap-3 text-retro-green font-mono">
                <Terminal size={18} />
                <span className="animate-pulse">STREAMS_IDLE: Awaiting content transmission...</span>
              </div>
              <p className="mt-4 text-gray-500 font-mono text-sm">
                Blog posts about business leadership, technical architecture, and product growth are currently in the buffer. Check back soon for the first broadcast.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <button className="pixel-button text-sm">View All Posts</button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-retro-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-mono text-white">Let's Connect</h2>
              <p className="text-gray-400 leading-relaxed">
                Whether you're interested in business coaching, technical collaboration, or just want to talk about coffee, I'd love to hear from you.
              </p>
              <div className="flex gap-6">
                <a href="mailto:joel@joelfriedrich.com" className="text-gray-500 hover:text-retro-amber transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-500 hover:text-retro-amber transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/JoelFriedrich" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-retro-amber transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
            
            <div className="pixel-border p-8 bg-retro-card space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-gray-500">Transmission Channel</label>
                <div className="flex items-center gap-2 text-retro-green font-mono">
                  <ChevronRight size={16} />
                  <span>SECURE_ENCRYPTED_LINK_ESTABLISHED</span>
                </div>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="w-full bg-retro-bg border-2 border-retro-border p-3 font-mono text-sm focus:border-retro-amber outline-none transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  className="w-full bg-retro-bg border-2 border-retro-border p-3 font-mono text-sm focus:border-retro-amber outline-none transition-colors"
                />
                <textarea 
                  placeholder="MESSAGE" 
                  rows={4}
                  className="w-full bg-retro-bg border-2 border-retro-border p-3 font-mono text-sm focus:border-retro-amber outline-none transition-colors"
                ></textarea>
                <button className="pixel-button w-full">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-retro-border bg-retro-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-pixel text-retro-border text-xs">
            © 2026 JOEL_FRIEDRICH // ALL_RIGHTS_RESERVED
          </div>
          <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-retro-amber transition-colors">Top</a>
            <a href="#business" className="hover:text-retro-amber transition-colors">Business</a>
            <a href="#dev" className="hover:text-retro-amber transition-colors">Dev</a>
            <a href="#blog" className="hover:text-retro-amber transition-colors">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
