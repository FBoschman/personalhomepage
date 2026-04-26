interface MycelialLearningProps {
  onNavigate: (page: string) => void;
}

const ARTICLES = [
  {
    number: "01",
    title: "The Transparency Trap",
    subtitle: "Epistemic Violence in Well-Intentioned Educational Practice",
    desc: "The mechanism by which inclusion becomes extraction — how transparency demands destroy the knowledge they claim to accommodate.",
    page: "trap",
    accent: "amber",
    status: "Outline",
  },
  {
    number: "02",
    title: "The Temporal Mismatch",
    subtitle: "Why Our Institutions Cannot See the Problems They Are Solving",
    desc: "Democratic, educational, and civilizational timescales — and the monoculture of linear time that flattens them all.",
    page: "temporal",
    accent: "terracotta",
    status: "Seedling",
  },
  {
    number: "04",
    title: "Learning Across the Gap",
    subtitle: "Absorptive Capacity, Epistemic Asymmetry & Transition Ecosystems",
    desc: "Reframing from 'build capacity in SMEs' to 'design learning processes that can absorb what SMEs already know.'",
    page: "gap",
    accent: "green",
    status: "Outline",
  },
  {
    number: "05",
    title: "DBR as Method in Mycelial Learning",
    subtitle: "Five Extensions for Studying What Resists Extraction",
    desc: "Non-scalable knowledge audit, epistemic conjecture, productive insufficiency, underground evaluation, partial translation.",
    page: "mycelialdbr",
    accent: "amber",
    status: "Outline",
  },
  {
    number: "06",
    title: "Scalable Intelligence",
    subtitle: "AI Systems as Plantation Epistemology",
    desc: "Four plantation operations in AI development — and what pluriversal design conditions would require instead.",
    page: "scalable",
    accent: "terracotta",
    status: "Outline",
  },
  {
    number: "09",
    title: "AI as Sociogenic Apparatus",
    subtitle: "Artificial Intelligence and the Genre-Formation Question",
    desc: "What kind of human being does AI make? Wynter's genre-theory applied to AI tutors, recommenders, and writing assistants.",
    page: "aigenre",
    accent: "green",
    status: "Outline",
  },
  {
    number: "10",
    title: "What CBL Actually Challenges",
    subtitle: "Genre-Formation, Temporal Mismatch & Wicked Problem Pedagogy",
    desc: "Five structural conditions explaining CBL's empirical gap — and three redesign principles from non-Western frameworks.",
    page: "cblgenre",
    accent: "amber",
    status: "Outline",
  },
];

const ACCENT = {
  amber:      { card: "bg-amber-50 border-amber-800/20",    bar: "bg-amber-700",    num: "text-amber-700",   tag: "bg-amber-100 text-amber-800",   arrow: "text-amber-700" },
  terracotta: { card: "bg-orange-50 border-orange-800/20",  bar: "bg-orange-700",   num: "text-orange-700",  tag: "bg-orange-100 text-orange-800",  arrow: "text-orange-700" },
  green:      { card: "bg-green-50 border-green-800/20",    bar: "bg-green-700",    num: "text-green-700",   tag: "bg-green-100 text-green-800",    arrow: "text-green-700" },
};

export default function MycelialLearning({ onNavigate }: MycelialLearningProps) {
  return (
    <div className="min-h-screen text-stone-800" style={{ fontFamily: "'Source Serif 4', Georgia, serif", backgroundColor: "#f5ede0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;1,8..60,300;1,8..60,400&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>

      {/* Nav */}
      <nav className="sticky top-0 bg-amber-50/90 backdrop-blur-md border-b border-amber-900/20 z-40 px-6 md:px-12 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={() => onNavigate('home')}
            className="text-sm text-stone-500 hover:text-amber-800 transition-colors font-sans"
          >
            ← Ferry Boschman
          </button>
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 font-sans">Mycelial Learning Framework</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="border-b border-amber-900/20 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">
            Research Programme · Lectoraat Urban Innovation
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-stone-800 leading-tight mb-4">
            Mycelial Learning<br />
            <em className="text-amber-800">Framework</em>
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mb-6">
            A research programme that names the mechanisms by which educational institutions, governance systems, AI tools, and research methodologies systematically destroy the knowledge they claim to include — and proposes alternatives drawn from ecology, decolonial theory, and non-Western epistemology.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl">
            {[
              { label: "Core concept", text: "Non-scalable knowledge — knowledge whose living quality depends on relational, contextual, and temporal conditions that dominant systems cannot accommodate" },
              { label: "Theoretical spine", text: "Santos' epistemicide · Tsing's plantation logic · Wynter's genre-formation · Ibn Khaldun's civilizational time" },
              { label: "Method", text: "Design-based research with five mycelial extensions — studying what resists extraction without extracting it" },
            ].map(c => (
              <div key={c.label} className="bg-amber-50 border border-amber-800/15 rounded-lg px-4 py-3">
                <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-1 font-sans">{c.label}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* The recurring mechanism */}
      <section className="px-6 md:px-12 py-8 border-b border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 border border-green-800/20 rounded-xl px-6 py-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-green-800 mb-2 font-sans">The recurring mechanism</p>
            <p className="text-stone-700 leading-relaxed">
              Across education, transition governance, research methodology, and AI: dominant epistemic architectures condition recognition on translation into a legible register. The translation is not a neutral quality standard — it is the mechanism of exclusion. In each domain, the question is the same: <strong>what would it take to design systems that can absorb what cannot be made transparent without being destroyed?</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <main className="px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Seven articles in the framework</p>
          <div className="space-y-4">
            {ARTICLES.map((art) => {
              const a = ACCENT[art.accent as keyof typeof ACCENT];
              return (
                <button
                  key={art.number}
                  onClick={() => onNavigate(art.page)}
                  className={`w-full text-left rounded-xl border ${a.card} px-6 py-5 hover:brightness-95 transition-all group`}
                >
                  <div className="flex items-start gap-5">
                    <span className={`font-display text-3xl font-bold ${a.num} shrink-0 leading-none`}>{art.number}</span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h2 className="font-display text-lg text-stone-800 leading-snug group-hover:text-stone-900">{art.title}</h2>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-sans shrink-0 mt-0.5 ${a.tag}`}>{art.status}</span>
                      </div>
                      <p className="text-xs text-stone-400 font-sans mb-2">{art.subtitle}</p>
                      <p className="text-sm text-stone-600 leading-relaxed">{art.desc}</p>
                    </div>
                    <span className={`${a.arrow} shrink-0 text-lg leading-none mt-1 group-hover:translate-x-0.5 transition-transform`}>→</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Linked tools */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">Related instruments</p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => onNavigate('compass')}
              className="bg-amber-50 border border-amber-800/25 hover:bg-amber-100 rounded-lg px-5 py-3 text-left transition-colors"
            >
              <p className="text-sm font-semibold text-stone-700 font-sans mb-0.5">Decolonial Learning Compass →</p>
              <p className="text-xs text-stone-500">Five recursive provocations for programme design</p>
            </button>
            <button
              onClick={() => onNavigate('dbr')}
              className="bg-green-50 border border-green-800/25 hover:bg-green-100 rounded-lg px-5 py-3 text-left transition-colors"
            >
              <p className="text-sm font-semibold text-stone-700 font-sans mb-0.5">Design Based Research →</p>
              <p className="text-xs text-stone-500">Seven-phase framework with mycelial integration</p>
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-amber-900/20 px-6 md:px-12 py-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-stone-400 font-sans">Mycelial Learning Framework · Ferry Boschman · Lectoraat Urban Innovation, Windesheim</p>
          <p className="text-xs text-stone-400 italic font-sans">A Decolonial Paradigm for Educational Science</p>
        </div>
      </footer>
    </div>
  );
}
