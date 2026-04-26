import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import './App.css';
import TraditionsExplorer from './TraditionsExplorer';
import DecolonialCompass from './DecolonialCompass';
import DBR from './DBR';
import MycelialLearning from './MycelialLearning';
import TransparencyTrap from './TransparencyTrap';
import TemporalMismatch from './TemporalMismatch';
import LearningAcrossGap from './LearningAcrossGap';
import MycelialDBR from './MycelialDBR';
import ScalableIntelligence from './ScalableIntelligence';
import AIGenre from './AIGenre';
import CBLGenre from './CBLGenre';

type Page = 'home' | 'traditions' | 'compass' | 'dbr' | 'mycelial' | 'trap' | 'temporal' | 'gap' | 'mycelialdbr' | 'scalable' | 'aigenre' | 'cblgenre';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: string) => setCurrentPage(page as Page);

  if (currentPage === 'traditions') {
    return (
      <div>
        <button
          onClick={() => setCurrentPage('home')}
          className="fixed top-4 left-4 z-40 bg-stone-800/80 backdrop-blur-sm hover:bg-stone-700 px-4 py-2 rounded border border-stone-600 text-sm text-stone-200 font-serif transition-colors"
        >
          ← Portfolio
        </button>
        <TraditionsExplorer />
      </div>
    );
  }

  if (currentPage === 'compass') {
    return <DecolonialCompass onNavigate={navigate} />;
  }

  if (currentPage === 'dbr') {
    return <DBR onNavigate={navigate} />;
  }

  if (currentPage === 'mycelial') {
    return <MycelialLearning onNavigate={navigate} />;
  }

  if (currentPage === 'trap') {
    return <TransparencyTrap onNavigate={navigate} />;
  }

  if (currentPage === 'temporal') {
    return <TemporalMismatch onNavigate={navigate} />;
  }

  if (currentPage === 'gap') {
    return <LearningAcrossGap onNavigate={navigate} />;
  }

  if (currentPage === 'mycelialdbr') {
    return <MycelialDBR onNavigate={navigate} />;
  }

  if (currentPage === 'scalable') {
    return <ScalableIntelligence onNavigate={navigate} />;
  }

  if (currentPage === 'aigenre') {
    return <AIGenre onNavigate={navigate} />;
  }

  if (currentPage === 'cblgenre') {
    return <CBLGenre onNavigate={navigate} />;
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;1,8..60,300;1,8..60,400&display=swap');
        body { background: #f5ede0; }
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'Source Serif 4', Georgia, serif; }
        .texture-bg {
          background-color: #f5ede0;
          background-image:
            radial-gradient(ellipse at 20% 50%, rgba(139, 90, 43, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(74, 115, 80, 0.05) 0%, transparent 50%);
        }
        .leaf-border::before {
          content: '✦';
          color: #7a5c2e;
          opacity: 0.3;
          margin-right: 0.5rem;
        }
      `}</style>

      <main className="texture-bg min-h-screen text-stone-900 font-body">

        {/* Navigation */}
        <nav className="sticky top-0 w-full bg-amber-50/90 backdrop-blur-md border-b border-amber-900/20 z-50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="font-display text-xl font-semibold text-stone-800 tracking-wide">
              Ferry Boschman
            </h1>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="text-stone-600 hover:text-amber-800 transition-colors">About</a>
              <a href="#projects" className="text-stone-600 hover:text-amber-800 transition-colors">Work</a>
              <a href="#contact" className="text-stone-600 hover:text-amber-800 transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4">
                  Personal page - Research and writings
                </p>
                <h2 className="font-display text-5xl md:text-6xl text-stone-800 leading-tight mb-6">
                  Research at the<br />
                  <em className="text-amber-800">edge of knowing</em>
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed max-w-xl mb-8">
                  Education, decolonial learning, sustainability transitions, and systems thinking — built with and for communities, not extracted from them.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="#projects"
                    className="bg-green-800 hover:bg-green-700 text-amber-50 px-7 py-3 rounded font-semibold text-sm transition-colors font-sans"
                  >
                    View Work
                  </a>
                  <a
                    href="#contact"
                    className="border border-amber-800/40 hover:bg-amber-800/10 text-amber-900 px-7 py-3 rounded font-semibold text-sm transition-colors font-sans"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
              <div className="hidden md:block w-48 opacity-20 select-none text-center text-7xl leading-none">
                🌿
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-t border-amber-900/15" />
        </div>

        {/* About */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-2">About</p>
            <h3 className="font-display text-3xl text-stone-800 mb-10">Research Focus</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 border border-amber-900/15 p-7 rounded-lg">
                <div className="w-8 h-0.5 bg-green-700 mb-5" />
                <h4 className="font-display text-xl font-semibold mb-4 text-green-900">Inquiry</h4>
                <p className="text-stone-600 leading-relaxed">
                  Decolonial learning paradigms, sustainability transitions, challenge-based learning, epistemological pluralism, and the political economy of educational AI.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-900/15 p-7 rounded-lg">
                <div className="w-8 h-0.5 bg-amber-700 mb-5" />
                <h4 className="font-display text-xl font-semibold mb-4 text-amber-900">Practice</h4>
                <ul className="text-stone-600 space-y-2.5 leading-relaxed">
                  <li className="flex gap-2"><span className="text-amber-700 shrink-0">—</span>Educational Design Research</li>
                  <li className="flex gap-2"><span className="text-amber-700 shrink-0">—</span>Systems Analysis</li>
                  <li className="flex gap-2"><span className="text-amber-700 shrink-0">—</span>Frontend Development (React, TypeScript)</li>
                  <li className="flex gap-2"><span className="text-amber-700 shrink-0">—</span>Knowledge Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-t border-amber-900/15" />
        </div>

        {/* Projects */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-2">Work</p>
            <h3 className="font-display text-3xl text-stone-800 mb-10">Recent Projects</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <ProjectCard
                title="Circular Economy & Learning"
                description="CBL pedagogy for circular economy with material justice focus"
                tags={["Education", "Sustainability", "Pedagogy"]}
                accent="green"
              />
              <ProjectCard
                title="Decolonial Data Critique"
                description="Analysis of data colonialism in education technology"
                tags={["Research", "AI", "Epistemology"]}
                accent="terracotta"
              />
              <ProjectCard
                title="Mycelial Learning Framework"
                description="Alternative learning paradigm for non-scalable knowledge"
                tags={["Learning Theory", "Systems Thinking"]}
                accent="amber"
              />
              <ProjectCard
                title="Wiki Knowledge System"
                description="LLM-maintained research wiki for education scholarship"
                tags={["Knowledge Management", "Tools"]}
                accent="green"
                onClick={() => setCurrentPage('traditions')}
              />
              <ProjectCard
                title="Communication Traditions Explorer"
                description="Research instrument for non-Western knowledge traditions and decolonial pedagogy"
                tags={["Research", "Pedagogy", "Knowledge Systems"]}
                accent="terracotta"
                onClick={() => setCurrentPage('traditions')}
              />
              <ProjectCard
                title="Decolonial Learning Compass"
                description="Five recursive provocations for interrupting the learning trap at the moment of programme design"
                tags={["LLL Policy", "Decolonial", "Programme Design"]}
                accent="amber"
                onClick={() => setCurrentPage('compass')}
              />
              <ProjectCard
                title="Design Based Research"
                description="Seven-phase iterative methodology with mycelial integration for educational design research"
                tags={["Methodology", "DBR", "Research"]}
                accent="green"
                onClick={() => setCurrentPage('dbr')}
              />
              <ProjectCard
                title="Mycelial Learning Framework"
                description="Seven-article research programme on epistemic violence, temporal mismatch, AI genre-formation, and decolonial pedagogy"
                tags={["Research Programme", "Decolonial", "AI"]}
                accent="terracotta"
                onClick={() => setCurrentPage('mycelial')}
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-t border-amber-900/15" />
        </div>

        {/* Contact */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-2">Contact</p>
            <h3 className="font-display text-3xl text-stone-800 mb-4">Get in Touch</h3>
            <p className="text-stone-500 mb-10 max-w-md">Open to collaboration, discussion, and slow scholarship.</p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:fboschman@hotmail.com"
                className="flex items-center gap-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-900/20 text-stone-700 px-5 py-3 rounded transition-colors text-sm font-sans"
              >
                <Mail size={16} className="text-amber-800" />
                Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-900/20 text-stone-700 px-5 py-3 rounded transition-colors text-sm font-sans"
              >
                <Linkedin size={16} className="text-amber-800" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-900/20 text-stone-700 px-5 py-3 rounded transition-colors text-sm font-sans"
              >
                <Github size={16} className="text-amber-800" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-amber-900/15 py-8 px-6 mt-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3">
            <p className="text-xs text-stone-400 font-sans">
              © 2026 Ferry Boschman · Lectoraat Urban Innovation, Windesheim
            </p>
            <p className="text-xs text-stone-400 italic font-sans">
              A Decolonial Paradigm for Educational Science
            </p>
          </div>
        </footer>

      </main>
    </>
  );
}

type Accent = 'green' | 'terracotta' | 'amber';

const ACCENT_STYLES: Record<Accent, { card: string; bar: string; tag: string; icon: string }> = {
  green:      { card: 'bg-green-50 border-green-800/20',      bar: 'bg-green-700',     tag: 'bg-green-900/10 text-green-800 border-green-700/25',      icon: 'text-green-700' },
  terracotta: { card: 'bg-orange-50 border-orange-800/20',    bar: 'bg-orange-700',    tag: 'bg-orange-900/10 text-orange-800 border-orange-700/25',    icon: 'text-orange-700' },
  amber:      { card: 'bg-amber-50 border-amber-800/20',      bar: 'bg-amber-700',     tag: 'bg-amber-900/10 text-amber-800 border-amber-700/25',       icon: 'text-amber-700' },
};

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  accent?: Accent;
  href?: string;
  onClick?: () => void;
}

function ProjectCard({ title, description, tags, accent = 'amber', href, onClick }: ProjectCardProps) {
  const s = ACCENT_STYLES[accent];

  const content = (
    <>
      <div className={`w-6 h-0.5 ${s.bar} mb-4`} />
      <div className="flex items-start justify-between mb-3 gap-2">
        <h4 className="font-display text-lg font-semibold text-stone-800 leading-snug">{title}</h4>
        <ExternalLink size={16} className={`${s.icon} shrink-0 mt-1`} />
      </div>
      <p className="text-stone-500 mb-4 text-sm leading-relaxed font-sans">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map(tag => (
          <span key={tag} className={`text-xs px-2.5 py-0.5 rounded-full border font-sans ${s.tag}`}>
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const baseClass = `border p-6 rounded-lg transition-colors ${s.card}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={`${baseClass} hover:brightness-95 w-full text-left`}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseClass} hover:brightness-95 block`}>
        {content}
      </a>
    );
  }

  return <div className={baseClass}>{content}</div>;
}

export default App;
