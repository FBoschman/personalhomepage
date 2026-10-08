import { useState, type ReactNode } from 'react';
import { ArrowUpRight, ArrowLeft, Mail, Github, Linkedin } from 'lucide-react';
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

type Page =
  | 'home'
  | 'traditions'
  | 'compass'
  | 'dbr'
  | 'mycelial'
  | 'trap'
  | 'temporal'
  | 'gap'
  | 'mycelialdbr'
  | 'scalable'
  | 'aigenre'
  | 'cblgenre';

/* ------------------------------------------------------------------
   Content
   ------------------------------------------------------------------ */

const TICKER = [
  'Knowledge is a commons',
  'No extraction',
  'Name the mechanism',
  'Refuse the pipeline',
  'Who is missing from this room?',
  'Slow scholarship is a method',
  'Pluriverse, not pipeline',
];

interface Work {
  title: string;
  description: string;
  tags: string[];
  kind: string;
  page: Page;
}

const WORKS: Work[] = [
  {
    title: 'Mycelial Learning Framework',
    description:
      'A seven-article research programme on epistemic violence, temporal mismatch, AI genre-formation and decolonial pedagogy — and on the knowledge that resists scale.',
    tags: ['Decolonial', 'AI', 'Research Programme'],
    kind: 'Programme',
    page: 'mycelial',
  },
  {
    title: 'AI as Sociogenic Apparatus',
    description:
      'The critical AI literature asks what AI destroys. This asks the prior question: what genres of being human AI systems produce, and who is formed by them.',
    tags: ['AI', 'Epistemology', 'Critique'],
    kind: 'Essay',
    page: 'aigenre',
  },
  {
    title: 'What CBL Actually Challenges',
    description:
      'Challenge-based learning claims to prepare learners for wicked sustainability problems. Its structure produces a professional genre — and it is not a disruptive one.',
    tags: ['Education', 'Sustainability', 'Pedagogy'],
    kind: 'Essay',
    page: 'cblgenre',
  },
  {
    title: 'The Transparency Trap',
    description:
      'The mechanism by which inclusion becomes extraction — how transparency demands destroy the knowledge they claim to accommodate.',
    tags: ['Epistemic Violence', 'Practice'],
    kind: 'Essay',
    page: 'trap',
  },
  {
    title: 'The Temporal Mismatch',
    description:
      'Democratic, educational and civilizational timescales — and the monoculture of linear time that flattens them into one institutional clock.',
    tags: ['Time', 'Institutions'],
    kind: 'Essay',
    page: 'temporal',
  },
  {
    title: 'Learning Across the Gap',
    description:
      'From "build capacity in SMEs" to "design learning processes that can absorb what SMEs already know" — absorptive capacity and epistemic asymmetry.',
    tags: ['Transition Ecosystems', 'Capacity'],
    kind: 'Essay',
    page: 'gap',
  },
  {
    title: 'DBR as Method',
    description:
      'A seven-phase design-based research methodology, extended to study what resists extraction: non-scalable knowledge audits, underground evaluation, partial translation.',
    tags: ['Methodology', 'Research'],
    kind: 'Method',
    page: 'mycelialdbr',
  },
  {
    title: 'Decolonial Learning Compass',
    description:
      'Five recursive provocations for interrupting the learning trap at the exact moment a programme is designed.',
    tags: ['LLL Policy', 'Programme Design'],
    kind: 'Instrument',
    page: 'compass',
  },
  {
    title: 'Communication Traditions Explorer',
    description:
      'A research instrument for surfacing non-Western knowledge traditions and critiquing their relationship to Western media forms.',
    tags: ['Knowledge Systems', 'Pedagogy'],
    kind: 'Instrument',
    page: 'traditions',
  },
  {
    title: 'Scalable Intelligence',
    description:
      'What the demand for scale does to intelligence — and why the answer is never a bigger model.',
    tags: ['AI', 'Scale Critique'],
    kind: 'Essay',
    page: 'scalable',
  },
  {
    title: 'Decolonial Data Critique',
    description:
      'Data colonialism in education technology: who donates the data, who owns the model, and who gets described by it.',
    tags: ['Data Colonialism', 'EdTech'],
    kind: 'Essay',
    page: 'aigenre',
  },
  {
    title: 'Wiki Knowledge System',
    description:
      'An LLM-maintained research wiki for education scholarship — a commons that compounds instead of a pipeline that depletes.',
    tags: ['Tools', 'Knowledge Management'],
    kind: 'Tool',
    page: 'traditions',
  },
];

const COMMITMENTS = [
  {
    title: 'No extraction',
    body: 'Communities are co-authors, not data sources. Research leaves the field holding more than it took.',
  },
  {
    title: 'Refuse the pipeline',
    body: 'Knowledge that resists scale will not be forced into an output metric. Some things are not meant to travel as products.',
  },
  {
    title: 'Name the mechanism',
    body: 'Critique that cannot point at the apparatus is decoration. Always locate the machinery — and who it serves.',
  },
  {
    title: 'Work slowly, on purpose',
    body: 'Generational problems are not solved on sprint cycles. Patience is a methodology, not a delay.',
  },
];

const PRACTICE = [
  'Educational Design Research',
  'Systems Analysis',
  'Frontend Development (React, TypeScript)',
  'Knowledge Management',
];

const META: [string, string][] = [
  ['Field', 'Decolonial pedagogy, epistemic justice'],
  ['Base', 'Lectoraat Urban Innovation, Windesheim'],
  ['Method', 'Design-based research, systems analysis'],
  ['Stack', 'React, TypeScript, knowledge systems'],
];

const LINKS = [
  { href: 'mailto:fboschman@hotmail.com', label: 'Email', Icon: Mail },
  { href: 'https://www.linkedin.com', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://github.com', label: 'GitHub', Icon: Github },
];

/* ------------------------------------------------------------------
   Home page
   ------------------------------------------------------------------ */

const SUB_PAGES: Partial<Record<Page, (navigate: (page: string) => void) => ReactNode>> = {
  compass: (navigate) => <DecolonialCompass onNavigate={navigate} />,
  dbr: (navigate) => <DBR onNavigate={navigate} />,
  mycelial: (navigate) => <MycelialLearning onNavigate={navigate} />,
  trap: (navigate) => <TransparencyTrap onNavigate={navigate} />,
  temporal: (navigate) => <TemporalMismatch onNavigate={navigate} />,
  gap: (navigate) => <LearningAcrossGap onNavigate={navigate} />,
  mycelialdbr: (navigate) => <MycelialDBR onNavigate={navigate} />,
  scalable: (navigate) => <ScalableIntelligence onNavigate={navigate} />,
  aigenre: (navigate) => <AIGenre onNavigate={navigate} />,
  cblgenre: (navigate) => <CBLGenre onNavigate={navigate} />,
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0 });
  };

  if (currentPage !== 'home') {
    const render = SUB_PAGES[currentPage];
    return (
      <div className="min-h-screen bg-paper">
        <button
          onClick={() => setCurrentPage('home')}
          className="label fixed top-4 left-4 z-40 flex items-center gap-2 bg-ink px-3.5 py-2.5 text-paper transition-colors hover:bg-signal"
        >
          <ArrowLeft size={13} aria-hidden />
          Index
        </button>
        {currentPage === 'traditions' ? <TraditionsExplorer /> : render?.(navigate)}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      {/* Masthead */}
      <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span aria-hidden className="block h-6 w-6 bg-ink transition-colors group-hover:bg-signal" />
            <span className="leading-none">
              <span className="block font-display text-sm font-extrabold uppercase tracking-[0.22em]">
                Substrate
              </span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-ink-faint">
                Ferry Boschman
              </span>
            </span>
          </a>

          <nav aria-label="Sections" className="flex items-center gap-5 md:gap-8">
            <a href="#position" className="label link-underline text-ink-soft hover:text-ink">
              <span className="hidden md:inline">01 / </span>Position
            </a>
            <a href="#work" className="label link-underline text-ink-soft hover:text-ink">
              <span className="hidden md:inline">02 / </span>Index
            </a>
            <a href="#contact" className="label link-underline text-ink-soft hover:text-ink">
              <span className="hidden md:inline">03 / </span>Contact
            </a>
          </nav>
        </div>
      </header>

      <Ticker />

      {/* Hero */}
      <section id="top" className="px-5 pt-14 pb-16 md:px-8 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <p className="label mb-8 flex items-center gap-3 text-ink-soft">
            <span aria-hidden className="block h-2 w-2 bg-signal" />
            Open for collaboration — 2026
          </p>

          <h1 className="font-display text-[clamp(2.4rem,8.5vw,6.5rem)] leading-[0.88] font-extrabold tracking-[-0.04em] uppercase">
            Knowledge is a
            <br />
            <span className="text-signal">commons.</span>
            <br />
            Not a commodity.
          </h1>

          <div className="mt-12 grid gap-12 border-t border-ink/15 pt-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <p className="max-w-2xl text-lg leading-snug text-ink-soft md:text-xl">
              A research practice working on decolonial learning, epistemic justice and
              sustainability transitions. Built <em className="text-ink not-italic">with</em>{' '}
              communities — never extracted from them.
            </p>

            <dl className="space-y-3">
              {META.map(([term, value]) => (
                <div
                  key={term}
                  className="flex gap-4 border-b border-ink/15 pb-3 last:border-0 last:pb-0"
                >
                  <dt className="label w-16 shrink-0 pt-1 text-ink-faint">{term}</dt>
                  <dd className="text-sm leading-relaxed text-ink-soft">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="#work"
              className="label group inline-flex items-center gap-2.5 bg-ink px-6 py-4 text-paper transition-colors hover:bg-signal"
            >
              See the index
              <ArrowUpRight
                size={14}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="label inline-flex items-center gap-2.5 border border-ink px-6 py-4 transition-colors hover:bg-ink hover:text-paper"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Position */}
      <section id="position" className="border-t border-ink/15 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="label mb-8 text-signal">01 — Position</p>

          <p className="max-w-4xl font-display text-2xl leading-[1.14] font-semibold tracking-[-0.02em] md:text-4xl">
            I study the learning that institutions cannot measure — and the damage done when they
            try anyway.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="label mb-4 border-b border-ink/20 pb-2">Inquiry</h2>
              <p className="leading-relaxed text-ink-soft">
                Decolonial learning paradigms, sustainability transitions, challenge-based learning,
                epistemological pluralism, and the political economy of educational AI. The through
                line: how well-intentioned educational practice reproduces the extraction it claims
                to interrupt.
              </p>
            </div>
            <div>
              <h2 className="label mb-4 border-b border-ink/20 pb-2">Practice</h2>
              <ul className="space-y-2.5">
                {PRACTICE.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
                    <span aria-hidden className="text-signal">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-ink px-5 py-16 text-paper md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="label mb-10 text-signal">02 — Commitments</p>
          <div className="grid gap-px bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map((c, i) => (
              <div key={c.title} className="bg-ink p-6 md:p-7">
                <span className="label text-signal">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-[-0.01em] uppercase">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work index */}
      <section id="work" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <p className="label text-signal">03 — Index</p>
            <p className="label text-ink-faint">{WORKS.length} entries · 2025—2026</p>
          </div>

          <div className="border-t border-ink/20">
            {WORKS.map((work, i) => (
              <WorkRow
                key={work.title}
                work={work}
                index={i + 1}
                onOpen={() => navigate(work.page)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-ink/20 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="label mb-8 text-signal">04 — Contact</p>

          <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] font-extrabold tracking-[-0.035em] uppercase">
            Let&rsquo;s work
            <br />
            <span className="text-signal">slowly.</span>
          </h2>

          <a
            href="mailto:fboschman@hotmail.com"
            className="link-underline mt-10 inline-block font-display text-xl tracking-[-0.01em] md:text-3xl"
          >
            fboschman@hotmail.com
          </a>

          <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
            Open to collaboration, peer review and slow scholarship — including the work that does
            not fit a funding call.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="label inline-flex items-center gap-2.5 border border-ink/25 px-5 py-3.5 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <Icon size={14} aria-hidden />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/20 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="label text-ink-faint">
            © 2026 Ferry Boschman · Lectoraat Urban Innovation, Windesheim
          </p>
          <p className="label text-ink-faint">Substrate — a research practice</p>
          <p className="label text-ink-faint">React · Tailwind · no trackers</p>
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------
   Pieces
   ------------------------------------------------------------------ */

function Ticker() {
  const run = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {TICKER.map((item) => (
        <span key={item} className="flex items-center whitespace-nowrap">
          <span className="px-5">{item}</span>
          <span aria-hidden className="text-paper/55">
            ✳
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-b border-ink bg-signal text-paper">
      <div className="label pause-on-hover flex w-max animate-ticker py-2.5">
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}

function WorkRow({ work, index, onOpen }: { work: Work; index: number; onOpen: () => void }) {
  const tags = work.tags.join(' · ');

  return (
    <button
      onClick={onOpen}
      className="group grid w-full grid-cols-[2rem_1fr_1.25rem] items-start gap-4 border-b border-ink/20 py-5 text-left transition-colors hover:bg-ink hover:text-paper md:grid-cols-[3rem_1fr_11rem_1.5rem] md:items-center md:gap-6 md:px-3"
    >
      <span className="label pt-1 text-ink-faint group-hover:text-signal md:pt-0">
        {String(index).padStart(2, '0')}
      </span>

      <span className="block">
        <span className="block font-display text-lg leading-snug font-semibold tracking-[-0.01em] md:text-xl">
          {work.title}
        </span>
        <span className="mt-1.5 block max-w-2xl text-sm leading-relaxed text-ink-soft group-hover:text-paper/70">
          {work.description}
        </span>
        <span className="label mt-2.5 block text-ink-faint group-hover:text-paper/55 md:hidden">
          {work.kind} — {tags}
        </span>
      </span>

      <span className="hidden md:block">
        <span className="label block text-ink group-hover:text-paper">{work.kind}</span>
        <span className="label mt-1.5 block leading-relaxed text-ink-faint group-hover:text-paper/55">
          {tags}
        </span>
      </span>

      <ArrowUpRight
        size={18}
        aria-hidden
        className="mt-1 shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal md:mt-0"
      />
    </button>
  );
}

export default App;
