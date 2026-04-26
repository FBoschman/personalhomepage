interface TemporalMismatchProps {
  onNavigate: (page: string) => void;
}

const REGISTERS = [
  {
    name: "Democratic Time",
    icon: "01",
    accent: "amber",
    body: "Electoral cycles compress political reasoning into 4-year windows. Long-term commitment — infrastructure, ecology, education reform — requires durative commitment: sustained action across decades that no single government can claim credit for.",
    implication: "When citizens observe that democratic procedures fail to generate a liveable future, the epistemic legitimacy of the system erodes. Formal authority remains; the belief that institutions can order reality disappears. This creates dangerous conditions: the appeal of authoritarian efficiency grows precisely because democracy appears to only move symbols while others move atoms.",
  },
  {
    name: "Educational Time",
    icon: "02",
    accent: "terracotta",
    body: "Education operates on semester cycles, annual assessments, programme evaluations. Learning that matters — the kind that changes how a person sees — operates on a different timescale entirely.",
    implication: "The educational system measures what can be measured inside its own temporal window, and produces non-existence for everything that falls outside it. This is Santos' lazy reason applied to time: the monoculture of linear time declares that slow knowledge is backward knowledge.",
  },
  {
    name: "Civilizational Time",
    icon: "03",
    accent: "green",
    body: "Ibn Khaldun's Muqaddimah (1377) offers what Western social science largely cannot: a theory of institutional rise and decline that operates on a civilizational timescale. His concept of Asabiyya — social cohesion as the engine of civilizational vitality — suggests that institutions decay from the internal erosion of the bonds that gave them meaning.",
    implication: "If Asabiyya is the cohesive force that makes collective learning possible, what happens to learning institutions when that cohesion erodes? And what educational practices produce rather than assume social cohesion? This question has almost never been asked in educational sciences.",
  },
];

const CONCEPTS = [
  {
    name: "Monoculture of Linear Time",
    source: "Santos (2014)",
    body: "The dominant temporal assumption in educational and governance systems: time moves forward, faster is better, linear progress is the measure of all things. This monoculture produces non-existence for slow, cyclical, and relational knowledge — declaring it backward rather than differently timed.",
    accent: "amber",
  },
  {
    name: "Asabiyya",
    source: "Ibn Khaldun (1377)",
    body: "Social solidarity and group cohesion — the generative force of civilizational vitality. Asabiyya is built slowly, across generations, through shared experience and mutual obligation. It cannot be designed in a semester, measured in a competency rubric, or produced by a well-facilitated co-design session.",
    accent: "green",
  },
  {
    name: "Mycelial Temporality",
    source: "Tsing / Boschman",
    body: "Growth that is not scheduled but responds to conditions. A temporally humble pedagogy marks where you have stepped, notices what ground made that step possible, and does not know yet where the next stone will be. The opposite of curriculum logic, which pre-specifies the destination and measures deviation from it.",
    accent: "terracotta",
  },
];

const ACCENT = {
  amber:      { card: "bg-amber-50 border-amber-800/20",    bar: "bg-amber-700",   num: "text-amber-700" },
  terracotta: { card: "bg-orange-50 border-orange-800/20",  bar: "bg-orange-700",  num: "text-orange-700" },
  green:      { card: "bg-green-50 border-green-800/20",    bar: "bg-green-700",   num: "text-green-700" },
};

export default function TemporalMismatch({ onNavigate }: TemporalMismatchProps) {
  return (
    <div className="min-h-screen text-stone-800" style={{ fontFamily: "'Source Serif 4', Georgia, serif", backgroundColor: "#f5ede0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;1,8..60,300;1,8..60,400&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>

      <nav className="sticky top-0 bg-amber-50/90 backdrop-blur-md border-b border-amber-900/20 z-40 px-6 md:px-12 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button onClick={() => onNavigate('mycelial')} className="text-sm text-stone-500 hover:text-amber-800 transition-colors font-sans">
            ← Mycelial Learning
          </button>
          <button onClick={() => onNavigate('trap')} className="text-sm border border-amber-800/30 text-amber-800 hover:bg-amber-100 px-4 py-1.5 rounded transition-colors font-sans">
            ← Article 01: Transparency Trap
          </button>
        </div>
      </nav>

      <header className="border-b border-amber-900/20 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">
            Article 02 · Seedling · Mycelial Learning Framework
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-stone-800 leading-tight mb-4">
            The Temporal<br />
            <em className="text-amber-800">Mismatch</em>
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mb-6">
            The crisis of sustainable development is not only an epistemological crisis — it is a <em>temporal</em> one. Our institutions operate on timescales fundamentally incompatible with the problems they claim to address. The system can only process what fits inside its own temporal window.
          </p>
          <blockquote className="bg-amber-50 border border-amber-800/20 rounded-lg px-5 py-4 max-w-2xl">
            <p className="text-sm text-stone-600 leading-relaxed italic">
              "Institutions do not fail because they lack knowledge. They fail because they are constitutionally unable to inhabit the timescale on which the problem lives."
            </p>
          </blockquote>
        </div>
      </header>

      {/* Three registers */}
      <main className="px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Three temporal registers</p>
          <div className="space-y-5">
            {REGISTERS.map((r) => {
              const a = ACCENT[r.accent as keyof typeof ACCENT];
              return (
                <div key={r.name} className={`rounded-xl border ${a.card} px-6 py-5`}>
                  <div className="flex items-start gap-4 mb-3">
                    <span className={`font-display text-2xl font-bold ${a.num} shrink-0 leading-none mt-0.5`}>{r.icon}</span>
                    <div>
                      <h2 className="font-display text-lg text-stone-800 mb-2">{r.name}</h2>
                      <p className="text-sm text-stone-700 leading-relaxed mb-2">{r.body}</p>
                      <p className="text-sm text-stone-500 leading-relaxed italic">{r.implication}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Key concepts */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">Key concepts</p>
          <div className="grid md:grid-cols-3 gap-4">
            {CONCEPTS.map((c) => {
              const a = ACCENT[c.accent as keyof typeof ACCENT];
              return (
                <div key={c.name} className={`rounded-lg border ${a.card} px-5 py-4`}>
                  <div className={`w-6 h-0.5 ${a.bar} mb-3`} />
                  <h3 className="font-display text-base font-semibold text-stone-800 mb-1">{c.name}</h3>
                  <p className="text-xs text-stone-400 font-sans mb-2">{c.source}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open questions */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">Open questions — intentionally unfinished</p>
          <div className="space-y-2.5">
            {[
              "What would an educational institution look like that consciously operated on multiple timescales simultaneously?",
              "Is Ibn Khaldun's Asabiyya translatable into educational design without romanticizing pre-modern community?",
              "Can slow knowledge be institutionalized — or does institutionalization always accelerate it into something else?",
              "What is the relationship between temporal mismatch and the violence of transparency? Are they the same mechanism operating on different axes?",
            ].map((q, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-amber-600 shrink-0 mt-0.5">—</span>
                <p className="text-sm text-stone-500 leading-relaxed italic">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-50 border border-orange-800/20 rounded-xl px-6 py-5 max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-800 mb-2 font-sans">Author's note on bias</p>
            <p className="text-stone-600 text-sm leading-relaxed">
              The temporal mismatch argument risks becoming a conservative one. "We need to slow down" can be said by someone who benefits from the status quo remaining unchanged. Ibn Khaldun wrote from within a declining civilization. This article is written from within a still-dominant one. That difference matters enormously for how this argument lands.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">Key Sources</p>
          <ul className="space-y-1.5 text-sm text-stone-500 font-sans">
            <li>Ibn Khaldun (1377). <em>Muqaddimah</em> — Asabiyya; civilizational rise and decline; decay of urban knowledge institutions</li>
            <li>Santos, B. de S. (2014). <em>Epistemologies of the South</em> — monoculture of linear time; sociology of emergences</li>
            <li>Connell, R. (2007). <em>Southern Theory</em> — institutional knowledge and its temporal assumptions</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-amber-900/20 px-6 md:px-12 py-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-stone-400 font-sans">Article 02 · The Temporal Mismatch · Ferry Boschman · Lectoraat Urban Innovation, Windesheim</p>
          <p className="text-xs text-stone-400 italic font-sans">A Decolonial Paradigm for Educational Science</p>
        </div>
      </footer>
    </div>
  );
}
