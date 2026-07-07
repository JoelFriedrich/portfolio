import { useState, useEffect } from 'react';
import { Coffee, BookOpen, Terminal, Mail, Linkedin, Github, ExternalLink, ChevronRight, Sun, Moon, ArrowLeft } from 'lucide-react';
import { blogPosts } from './data/posts';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [view, setView] = useState<'home' | 'blog'>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, [isDarkMode]);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const businessSection = (
    <section id="business" className="space-y-12">
      <div className="flex items-center gap-4">
        <h2 className={`text-3xl transition-colors ${isDarkMode ? 'font-mono text-white' : 'font-serif text-paper-text'}`}>Business Leadership</h2>
        <div className={`h-px flex-grow transition-colors ${isDarkMode ? 'bg-retro-border' : 'bg-paper-border'}`}></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className={`pixel-border p-8 space-y-4 transition-colors ${isDarkMode ? 'bg-retro-card' : 'bg-transparent'}`}>
          <div className={`w-12 h-12 flex items-center justify-center border transition-colors mb-4 ${isDarkMode ? 'bg-retro-amber/10 border-retro-amber/30 text-retro-amber' : 'bg-paper-accent/5 border-paper-accent/20 text-paper-accent'}`}>
            <Coffee />
          </div>
          <h3 className={`text-xl transition-colors ${isDarkMode ? 'font-mono text-white' : 'font-serif text-paper-text font-bold italic'}`}>10+ Years In Coffee</h3>
          <p className={`text-sm leading-relaxed transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif'}`}>
            Over a decade of operational leadership in the coffee business. From supply chain management to customer experience and team growth.
          </p>
        </div>
        
        <div className={`pixel-border p-8 space-y-4 transition-colors ${isDarkMode ? 'bg-retro-card' : 'bg-transparent'}`}>
          <div className={`w-12 h-12 flex items-center justify-center border transition-colors mb-4 ${isDarkMode ? 'bg-retro-amber/10 border-retro-amber/30 text-retro-amber' : 'bg-paper-accent/5 border-paper-accent/20 text-paper-accent'}`}>
            <Terminal />
          </div>
          <h3 className={`text-xl transition-colors ${isDarkMode ? 'font-mono text-white' : 'font-serif text-paper-text font-bold italic'}`}>Coaching & Consulting</h3>
          <p className={`text-sm leading-relaxed transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif'}`}>
            Helping business owners navigate operational complexity and scale their vision through strategic coaching and systems design.
          </p>
        </div>

        <a 
          href="https://how-not-to-start-a-coffee-shop.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`pixel-border p-8 space-y-4 transition-colors group block ${isDarkMode ? 'bg-retro-card border-retro-amber/50 hover:border-retro-amber' : 'bg-transparent border-paper-accent/30 hover:border-paper-accent'}`}
        >
          <div className={`w-12 h-12 flex items-center justify-center border mb-4 transition-colors ${isDarkMode ? 'bg-retro-amber/20 border-retro-amber text-retro-amber group-hover:bg-retro-amber/30' : 'bg-paper-accent/5 border-paper-accent/30 text-paper-accent group-hover:bg-paper-accent/10'}`}>
            <BookOpen />
          </div>
          <h3 className={`text-xl transition-colors ${isDarkMode ? 'font-mono text-white group-hover:text-retro-amber' : 'font-serif text-paper-text font-bold italic group-hover:text-paper-accent underline decoration-paper-accent/20'}`}>The Upcoming Book</h3>
          <p className={`text-sm leading-relaxed transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif'}`}>
            Distilling 10 years of real-world business leadership into a practical guide for the next generation of entrepreneurs.
          </p>
          <div className="pt-2 flex justify-between items-center">
            <span className={`text-xs uppercase tracking-tighter px-2 py-1 transition-colors ${isDarkMode ? 'text-retro-amber font-mono bg-retro-amber/10' : 'text-paper-accent font-serif italic bg-paper-accent/5'}`}>Status: In Progress</span>
            <ExternalLink size={14} className={`transition-opacity ${isDarkMode ? 'text-retro-amber opacity-0 group-hover:opacity-100' : 'text-paper-accent opacity-40 group-hover:opacity-100'}`} />
          </div>
        </a>
      </div>

      <div className="max-w-3xl space-y-6 pt-8">
        <p className={`leading-relaxed transition-colors ${isDarkMode ? 'text-gray-400' : 'text-paper-muted font-serif text-lg italic'}`}>
          Joel's background is rooted in the "real world" of business. For over 10 years, he led operations in a high-growth coffee business, learning firsthand what it takes to build teams, manage complex logistics, and maintain a focus on quality at scale.
        </p>
        <p className={`leading-relaxed transition-colors ${isDarkMode ? 'text-gray-400' : 'text-paper-muted font-serif text-lg italic'}`}>
          Today, he combines that operational wisdom with technical expertise to build software that solves actual business problems. He doesn't just write code; he builds products that understand the bottom line.
        </p>
      </div>
    </section>
  );

  const devSection = (
    <section id="dev" className="space-y-12">
      <div className="flex items-center gap-4">
        <h2 className={`text-3xl transition-colors ${isDarkMode ? 'font-mono text-white' : 'font-serif text-paper-text'}`}>Developer Portfolio</h2>
        <div className={`h-px flex-grow transition-colors ${isDarkMode ? 'bg-retro-border' : 'bg-paper-border'}`}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Project 1: Plot Point */}
        <a 
          href="https://plot-point.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group space-y-6 block"
        >
          <div className={`pixel-border aspect-video overflow-hidden transition-colors ${isDarkMode ? 'bg-retro-card group-hover:border-retro-green' : 'bg-paper-border/20 group-hover:border-paper-accent'}`}>
            <div className={`w-full h-full flex items-center justify-center transition-opacity ${isDarkMode ? 'bg-gradient-to-br from-retro-green/20 to-retro-bg' : 'bg-paper-accent/5'}`}>
              <span className={`font-pixel text-2xl opacity-50 group-hover:opacity-80 transition-opacity ${isDarkMode ? 'text-retro-green' : 'text-paper-accent uppercase'}`}>PLOT_POINT</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h3 className={`text-2xl transition-colors ${isDarkMode ? 'font-mono text-white group-hover:text-retro-green' : 'font-serif text-paper-text font-bold italic group-hover:text-paper-accent underline decoration-paper-accent/20 underline-offset-4'}`}>Plot Point</h3>
              <div className="flex gap-3">
                <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
            </div>
            <p className={`leading-relaxed transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif'}`}>
              A data-driven creative tool for plot and story development. Built to help writers manage complex narratives and character arcs.
            </p>
            <div className={`flex flex-wrap gap-2 text-xs uppercase tracking-tighter ${isDarkMode ? 'font-mono' : 'font-serif italic'}`}>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>React/Vite</span>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>Supabase</span>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>Netlify</span>
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
          <div className={`pixel-border aspect-video overflow-hidden transition-colors ${isDarkMode ? 'bg-retro-card group-hover:border-retro-amber' : 'bg-paper-border/20 group-hover:border-paper-accent'}`}>
            <div className={`w-full h-full flex items-center justify-center transition-opacity ${isDarkMode ? 'bg-gradient-to-br from-retro-amber/20 to-retro-bg' : 'bg-paper-accent/10'}`}>
              <span className={`font-pixel text-2xl opacity-50 group-hover:opacity-80 transition-opacity ${isDarkMode ? 'text-retro-amber' : 'text-paper-accent uppercase'}`}>OUR_K_LIST</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h3 className={`text-2xl transition-colors ${isDarkMode ? 'font-mono text-white group-hover:text-retro-amber' : 'font-serif text-paper-text font-bold italic group-hover:text-paper-accent underline decoration-paper-accent/20 underline-offset-4'}`}>Our K-List</h3>
              <div className="flex gap-3">
                <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
            </div>
            <p className={`leading-relaxed transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif'}`}>
              A dedicated K-drama tracking application for fans. Features rich data integration from TMDB and personalized list management.
            </p>
            <div className={`flex flex-wrap gap-2 text-xs uppercase tracking-tighter ${isDarkMode ? 'font-mono' : 'font-serif italic'}`}>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>React/Vite</span>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>Supabase</span>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>TMDB API</span>
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
          <div className={`pixel-border aspect-video overflow-hidden transition-colors ${isDarkMode ? 'bg-retro-card group-hover:border-retro-green' : 'bg-paper-border/20 group-hover:border-paper-accent'}`}>
            <div className={`w-full h-full flex items-center justify-center transition-opacity ${isDarkMode ? 'bg-gradient-to-br from-retro-green/20 to-retro-bg' : 'bg-paper-accent/5'}`}>
              <span className={`font-pixel text-2xl opacity-50 group-hover:opacity-80 transition-opacity uppercase ${isDarkMode ? 'text-retro-green' : 'text-paper-accent'}`}>STOP_SCROLLING</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h3 className={`text-2xl transition-colors ${isDarkMode ? 'font-mono text-white group-hover:text-retro-green' : 'font-serif text-paper-text font-bold italic group-hover:text-paper-accent underline decoration-paper-accent/20 underline-offset-4'}`}>Stop Scrolling</h3>
              <div className="flex gap-3">
                <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
            </div>
            <p className={`leading-relaxed transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif'}`}>
              A tool designed to help users break addictive scrolling habits on YouTube and reclaim their time through intentional design.
            </p>
            <div className={`flex flex-wrap gap-2 text-xs uppercase tracking-tighter ${isDarkMode ? 'font-mono' : 'font-serif italic'}`}>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>JavaScript</span>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>Extension</span>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-green/10 group-hover:text-retro-green' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>Product Design</span>
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
          <div className={`pixel-border aspect-video overflow-hidden transition-colors ${isDarkMode ? 'bg-retro-card group-hover:border-retro-amber' : 'bg-paper-border/20 group-hover:border-paper-accent'}`}>
            <div className={`w-full h-full flex items-center justify-center transition-opacity ${isDarkMode ? 'bg-gradient-to-br from-retro-amber/20 to-retro-bg' : 'bg-paper-accent/10'}`}>
              <span className={`font-pixel text-2xl opacity-50 group-hover:opacity-80 transition-opacity uppercase ${isDarkMode ? 'text-retro-amber' : 'text-paper-accent'}`}>CAESARS_SISTER</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h3 className={`text-2xl transition-colors ${isDarkMode ? 'font-mono text-white group-hover:text-retro-amber' : 'font-serif text-paper-text font-bold italic group-hover:text-paper-accent underline decoration-paper-accent/20 underline-offset-4'}`}>Caesars' Sister</h3>
              <div className="flex gap-3">
                <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
            </div>
            <p className={`leading-relaxed transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif'}`}>
              A sophisticated web application focused on historical data visualization and lineage storytelling.
            </p>
            <div className={`flex flex-wrap gap-2 text-xs uppercase tracking-tighter ${isDarkMode ? 'font-mono' : 'font-serif italic'}`}>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>React</span>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>D3.js</span>
              <span className={`px-2 py-1 transition-colors ${isDarkMode ? 'bg-retro-border text-gray-400 group-hover:bg-retro-amber/10 group-hover:text-retro-amber' : 'bg-paper-border text-paper-muted group-hover:bg-paper-accent group-hover:text-white'}`}>Netlify</span>
            </div>
          </div>
        </a>
      </div>

      <div className={`pixel-border p-8 border-dashed transition-colors ${isDarkMode ? 'bg-retro-card/50' : 'bg-transparent border-paper-border'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className={`transition-colors ${isDarkMode ? 'text-white font-mono uppercase' : 'text-paper-text font-serif font-bold italic'}`}>Technical Stack</h4>
            <p className="text-sm text-gray-500">Modern tools for robust digital products.</p>
          </div>
          <div className={`flex flex-wrap gap-4 text-sm transition-colors ${isDarkMode ? 'text-retro-green font-mono' : 'text-paper-accent font-serif italic'}`}>
            <span>[ React/Vite ]</span>
            <span>[ Supabase ]</span>
            <span>[ Netlify ]</span>
            <span>[ JavaScript ]</span>
            <span>[ APIs ]</span>
          </div>
        </div>
      </div>
    </section>
  );

  const blogSection = (
    <section id="blog" className="space-y-12">
      <div className="flex items-center gap-4">
        <h2 className={`text-3xl transition-colors ${isDarkMode ? 'font-mono text-white' : 'font-serif text-paper-text'}`}>The Blog</h2>
        <div className={`h-px flex-grow transition-colors ${isDarkMode ? 'bg-retro-border' : 'bg-paper-border'}`}></div>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <div 
            key={post.id}
            onClick={() => {
              setSelectedPostId(post.id);
              setView('blog');
            }}
            className={`pixel-border p-6 border-dashed cursor-pointer hover:border-solid transition-all group ${
              isDarkMode 
                ? 'bg-retro-card/30 border-retro-border/50 hover:border-retro-amber hover:bg-retro-card/50' 
                : 'bg-paper-accent/5 border-paper-border hover:border-paper-accent hover:bg-paper-accent/10'
            }`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
              <span className={`text-xs uppercase tracking-widest ${isDarkMode ? 'font-mono text-retro-green' : 'text-paper-accent font-serif font-bold italic'}`}>
                {post.category} • {post.readTime}
              </span>
              <span className={`text-xs ${isDarkMode ? 'font-mono text-gray-500' : 'font-serif text-paper-muted italic'}`}>
                {post.date}
              </span>
            </div>
            
            <h3 className={`text-xl font-bold mb-2 transition-colors group-hover:underline ${
              isDarkMode ? 'font-mono text-white group-hover:text-retro-amber' : 'font-serif text-paper-text italic group-hover:text-paper-accent'
            }`}>
              {post.title}
            </h3>
            
            <p className={`text-sm leading-relaxed mb-4 transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif'}`}>
              {post.summary}
            </p>
            
            <div className={`flex items-center gap-1 text-xs uppercase tracking-wider font-bold transition-colors ${
              isDarkMode ? 'font-mono text-retro-amber group-hover:text-white' : 'font-serif text-paper-accent group-hover:text-paper-text italic'
            }`}>
              Read Full Post <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8">
        <button 
          onClick={() => {
            setSelectedPostId(null);
            setView('blog');
          }}
          className="pixel-button text-sm"
        >
          View All Posts
        </button>
      </div>
    </section>
  );

  const homeContent = (
    <>
      {/* Hero Section */}
      <section id="hero" className="py-20 flex flex-col items-start justify-center min-h-[70vh]">
        <div className="space-y-6 max-w-3xl">
          <div className={`inline-block px-3 py-1 border text-xs uppercase tracking-widest mb-4 transition-colors ${isDarkMode ? 'bg-retro-amber/10 border-retro-amber/30 text-retro-amber font-mono' : 'bg-paper-accent/5 border-paper-accent/20 text-paper-accent font-serif tracking-normal normal-case italic'}`}>
            Business Leader & Developer
          </div>
          <h1 className={`text-4xl sm:text-6xl md:text-7xl leading-tight transition-colors ${isDarkMode ? 'font-mono text-white' : 'font-serif text-paper-text italic normal-case'}`}>
            Building <span className={isDarkMode ? 'text-retro-amber' : 'text-paper-accent'}>Businesses</span> & <span className={isDarkMode ? 'text-retro-green' : 'text-paper-muted'}>Software</span> with Purpose.
          </h1>
          <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif italic'}`}>
            A business leader with a decade of operational experience in the coffee industry, now building modern digital tools for entrepreneurs, investors and creators.
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

      {isDarkMode ? (
        <>
          {businessSection}
          {devSection}
          {blogSection}
        </>
      ) : (
        <>
          {blogSection}
          {businessSection}
          {devSection}
        </>
      )}

      {/* Contact Section */}
      <section id="contact" className={`py-20 border-t transition-colors ${isDarkMode ? 'border-retro-border' : 'border-paper-border'}`}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className={`text-5xl transition-colors ${isDarkMode ? 'font-mono text-white uppercase' : 'font-serif text-paper-text italic font-bold'}`}>Let's Connect</h2>
          <p className={`leading-relaxed max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif text-xl italic'}`}>
            Whether you're interested in business coaching, technical collaboration, or just want to talk about coffee, I would love to connect.
          </p>
          
          <div className="flex justify-center gap-12 pt-4">
            <a 
              href="mailto:joel@joelfriedrich.com" 
              className={`flex flex-col items-center gap-3 transition-colors group ${isDarkMode ? 'text-gray-500 hover:text-retro-amber' : 'text-paper-muted hover:text-paper-accent'}`}
              aria-label="Email"
            >
              <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all group-hover:scale-110 ${isDarkMode ? 'border-retro-border bg-retro-card' : 'border-paper-border bg-paper-accent/5'}`}>
                <Mail size={28} />
              </div>
              <span className={`text-xs uppercase tracking-widest ${isDarkMode ? 'font-mono' : 'font-serif italic tracking-normal'}`}>Email</span>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex flex-col items-center gap-3 transition-colors group ${isDarkMode ? 'text-gray-500 hover:text-retro-amber' : 'text-paper-muted hover:text-paper-accent'}`}
              aria-label="LinkedIn"
            >
              <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all group-hover:scale-110 ${isDarkMode ? 'border-retro-border bg-retro-card' : 'border-paper-border bg-paper-accent/5'}`}>
                <Linkedin size={28} />
              </div>
              <span className={`text-xs uppercase tracking-widest ${isDarkMode ? 'font-mono' : 'font-serif italic tracking-normal'}`}>LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/JoelFriedrich" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex flex-col items-center gap-3 transition-colors group ${isDarkMode ? 'text-gray-500 hover:text-retro-amber' : 'text-paper-muted hover:text-paper-accent'}`}
              aria-label="GitHub"
            >
              <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all group-hover:scale-110 ${isDarkMode ? 'border-retro-border bg-retro-card' : 'border-paper-border bg-paper-accent/5'}`}>
                <Github size={28} />
              </div>
              <span className={`text-xs uppercase tracking-widest ${isDarkMode ? 'font-mono' : 'font-serif italic tracking-normal'}`}>GitHub</span>
            </a>
          </div>

          <div className={`pt-12 text-xs transition-colors ${isDarkMode ? 'font-mono text-retro-green/40' : 'font-serif text-paper-accent/40 italic'}`}>
            {isDarkMode ? 'READY_FOR_INBOUND_TRANSMISSION' : 'Correspondence welcomed at your convenience.'}
          </div>
        </div>
      </section>
    </>
  );

  const selectedPost = blogPosts.find(p => p.id === selectedPostId);

  const blogPage = (
    <div className="py-12 space-y-20">
      <header className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <button 
          onClick={() => {
            if (selectedPostId) {
              setSelectedPostId(null);
            } else {
              setView('home');
            }
          }}
          className={`flex items-center gap-2 text-sm uppercase tracking-widest transition-colors mb-12 ${isDarkMode ? 'text-retro-amber hover:text-white font-mono' : 'text-paper-accent hover:text-paper-text font-serif italic'}`}
        >
          <ArrowLeft size={16} /> {selectedPostId ? 'Back to Blog List' : 'Back to Home'}
        </button>
      </header>

      {selectedPost ? (
        <article className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-4">
            <div className={`flex items-center gap-4 text-xs uppercase tracking-widest ${isDarkMode ? 'font-mono text-retro-green' : 'text-paper-accent font-serif font-bold italic'}`}>
              <span>{selectedPost.category}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
            </div>
            <h1 className={`text-4xl sm:text-6xl font-bold leading-tight transition-colors ${isDarkMode ? 'font-mono text-white' : 'font-serif text-paper-text italic'}`}>
              {selectedPost.title}
            </h1>
            <div className={`h-1 w-20 transition-colors ${isDarkMode ? 'bg-retro-amber' : 'bg-paper-accent'}`}></div>
          </div>

          <div className={`space-y-6 text-base leading-relaxed ${isDarkMode ? 'text-gray-300 font-sans' : 'text-paper-text font-serif text-lg'}`}>
            {selectedPost.content.map((block, idx) => {
              switch (block.type) {
                case 'paragraph':
                  return (
                    <p key={idx} className="whitespace-pre-line">
                      {block.text}
                    </p>
                  );
                case 'heading':
                  return (
                    <h2 key={idx} className={`text-2xl font-bold pt-8 pb-2 transition-colors ${isDarkMode ? 'font-mono text-retro-amber' : 'font-serif text-paper-text italic underline decoration-paper-accent/20 underline-offset-4'}`}>
                      {block.text}
                    </h2>
                  );
                case 'quote':
                  return (
                    <blockquote key={idx} className={`pl-6 border-l-4 italic my-8 transition-colors ${isDarkMode ? 'border-retro-amber text-gray-400 bg-retro-card/20 p-4 font-mono text-sm' : 'border-paper-accent text-paper-muted bg-paper-accent/5 p-4'}`}>
                      {block.text}
                    </blockquote>
                  );
                case 'list':
                  return (
                    <ol key={idx} className="list-decimal pl-6 space-y-3">
                      {block.items?.map((item, itemIdx) => (
                        <li key={itemIdx} className="pl-2">
                          {item}
                        </li>
                      ))}
                    </ol>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Author info & subscription */}
          <div className={`border-t pt-12 mt-16 transition-colors ${isDarkMode ? 'border-retro-border' : 'border-paper-border'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-lg ${isDarkMode ? 'border-retro-amber text-retro-amber bg-retro-card' : 'border-paper-accent text-paper-accent bg-paper-accent/5'}`}>
                  JF
                </div>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'font-mono text-white' : 'font-serif text-paper-text italic'}`}>Joel Friedrich</h4>
                  <p className="text-xs text-gray-500">Business Leader & Developer</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedPostId(null);
                  setTimeout(() => {
                    const el = document.getElementById('newsletter-box');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="pixel-button text-xs"
              >
                Join Newsletter
              </button>
            </div>
          </div>
        </article>
      ) : (
        <div className="space-y-16">
          <div className="space-y-4">
            <h1 className={`text-5xl sm:text-7xl transition-colors ${isDarkMode ? 'font-mono text-white' : 'font-serif text-paper-text italic font-bold'}`}>The Blog</h1>
            <p className={`text-xl max-w-2xl transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif italic'}`}>
              Thoughts on business leadership, software architecture, and the intersection of physical and digital operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                onClick={() => setSelectedPostId(post.id)}
                className={`pixel-border p-8 cursor-pointer transition-all group ${
                  isDarkMode 
                    ? 'bg-retro-card/20 border-retro-border/50 hover:border-retro-amber hover:bg-retro-card/30' 
                    : 'bg-paper-accent/5 border-paper-border hover:border-paper-accent hover:bg-paper-accent/10'
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                  <span className={`text-xs uppercase tracking-widest ${isDarkMode ? 'font-mono text-retro-green' : 'text-paper-accent font-serif font-bold italic'}`}>
                    {post.category} • {post.readTime}
                  </span>
                  <span className={`text-xs ${isDarkMode ? 'font-mono text-gray-500' : 'font-serif text-paper-muted italic'}`}>
                    {post.date}
                  </span>
                </div>
                
                <h2 className={`text-3xl font-bold mb-4 transition-colors group-hover:underline ${
                  isDarkMode ? 'font-mono text-white group-hover:text-retro-amber' : 'font-serif text-paper-text italic'
                }`}>
                  {post.title}
                </h2>
                
                <p className={`leading-relaxed mb-6 transition-colors ${isDarkMode ? 'text-gray-400 font-sans' : 'text-paper-muted font-serif text-lg'}`}>
                  {post.summary}
                </p>
                
                <div className={`flex items-center gap-1 text-sm uppercase tracking-wider font-bold transition-colors ${
                  isDarkMode ? 'font-mono text-retro-amber group-hover:text-white' : 'font-serif text-paper-accent group-hover:text-paper-text italic'
                }`}>
                  Read Article <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}

            {/* Newsletter section */}
            <div 
              id="newsletter-box"
              className={`pixel-border p-12 border-dashed flex flex-col items-center justify-center text-center space-y-6 transition-colors ${isDarkMode ? 'bg-retro-card/10' : 'bg-paper-border/5'}`}
            >
              <div className={`w-16 h-16 border-2 flex items-center justify-center rounded-full transition-colors ${isDarkMode ? 'border-retro-border text-retro-amber' : 'border-paper-border text-paper-accent'}`}>
                <Terminal size={32} />
              </div>
              <div className="space-y-2">
                <h3 className={`text-xl transition-colors ${isDarkMode ? 'font-mono text-white' : 'font-serif text-paper-text italic font-bold'}`}>Subscribe to the List</h3>
                <p className={`text-sm transition-colors ${isDarkMode ? 'text-gray-500' : 'text-paper-muted font-serif'}`}>Get notified when new articles are published.</p>
              </div>
              <div className="flex w-full max-w-sm gap-2">
                <input 
                  type="email" 
                  placeholder="YOUR@EMAIL.COM"
                  className={`flex-grow border-2 p-3 outline-none transition-colors ${isDarkMode ? 'bg-retro-bg font-mono text-xs border-retro-border text-white focus:border-retro-amber' : 'bg-white font-serif text-sm border-paper-border focus:border-paper-accent'}`}
                />
                <button className="pixel-button px-4">Join</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'selection:bg-retro-amber selection:text-black' : 'selection:bg-paper-accent selection:text-white'}`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? 'bg-retro-bg/80 border-retro-border' : 'bg-paper-bg/80 border-paper-border'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className={`font-pixel text-lg sm:text-xl tracking-tighter ${isDarkMode ? 'text-retro-amber' : 'text-paper-accent'}`}>
                JOEL_FRIEDRICH<span className="animate-pulse">_</span>
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className={`hidden md:flex space-x-8 text-sm uppercase tracking-widest ${isDarkMode ? 'font-mono text-gray-300' : 'font-serif normal-case tracking-normal text-paper-text'}`}>
                <a 
                  href="#business" 
                  onClick={(e) => {
                    if (view !== 'home') {
                      e.preventDefault();
                      setView('home');
                      setTimeout(() => {
                        const el = document.getElementById('business');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="hover:text-retro-amber transition-colors"
                >
                  Business
                </a>
                <a 
                  href="#dev" 
                  onClick={(e) => {
                    if (view !== 'home') {
                      e.preventDefault();
                      setView('home');
                      setTimeout(() => {
                        const el = document.getElementById('dev');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="hover:text-retro-amber transition-colors"
                >
                  Dev
                </a>
                <a 
                  href="#blog" 
                  onClick={(e) => {
                    if (view !== 'home') {
                      e.preventDefault();
                      setView('home');
                      setTimeout(() => {
                        const el = document.getElementById('blog');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="hover:text-retro-amber transition-colors"
                >
                  Blog
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    if (view !== 'home') {
                      e.preventDefault();
                      setView('home');
                      setTimeout(() => {
                        const el = document.getElementById('contact');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="hover:text-retro-amber transition-colors"
                >
                  Contact
                </a>
              </div>

              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-retro-amber hover:bg-retro-amber/10' : 'text-paper-accent hover:bg-paper-accent/10'}`}
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <div className="md:hidden">
                <a href="#contact" className="pixel-button text-xs py-1 px-2">Connect</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32">
        {view === 'home' ? homeContent : blogPage}
      </main>

      {/* Footer */}
      <footer className={`py-12 border-t transition-colors ${isDarkMode ? 'border-retro-border bg-retro-card' : 'border-paper-border bg-paper-border/10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className={`text-xs transition-colors ${isDarkMode ? 'font-pixel text-retro-border' : 'font-serif italic text-paper-muted'}`}>
            {isDarkMode ? '© 2026 JOEL_FRIEDRICH // ALL_RIGHTS_RESERVED' : 'Joel Friedrich. All thoughts recorded 2026.'}
          </div>
          <div className={`flex gap-8 text-xs uppercase tracking-widest text-gray-600 transition-colors ${isDarkMode ? 'font-mono' : 'font-serif normal-case tracking-normal'}`}>
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
