interface LearningAcrossGapProps {
  onNavigate: (page: string) => void;
}

const DIMENSIONS = [
  { n: "01", name: "Recognition Range", body: "How many epistemic forms does the process treat as legitimate inputs? Does it recognize tacit, oral, relational, and practice-embedded knowledge as valid — or only what has already been translated into the dominant register?", accent: "amber" },
  { n: "02", name: "Accommodation Structure", body: "Does the process create space for knowledge to operate in its own terms, or does every input require translation? Accommodation without reduction means the knowledge can contribute without being dismembered.", accent: "terracotta" },
  { n: "03", name: "Translation Without Reduction", body: "When translation is necessary — for outputs to reach policy or academic audiences — is it done explicitly and partially, or systematically and invisibly? Does the process name what was there before the translation and what survives it?", accent: "green" },
  { n: "04", name: "Return Pathway", body: "Do the outputs of the learning process return to the actors who contributed knowledge in forms they recognize and can use — or only in forms that serve the dominant register (academic papers, policy briefs)?", accent: "amber" },
];

const PRINCIPLES = [
  { n: "P1", name: "Multi-register documentation", body: "Record knowledge in multiple forms simultaneously — narrative, visual, embodied demonstration, oral record — rather than requiring immediate translation into text-based analytical form." },
  { n: "P2", name: "Explicit translation accounting", body: "When tacit knowledge is made explicit or local knowledge is generalised, name this as a translation. Record what was there before the translation as well as what survives it." },
  { n: "P3", name: "Output diversification", body: "Design multiple output types that serve different actors in forms they recognise. Academic outputs for research; practitioner accounts for the SME community; and explicitly, outputs that return to contributing communities in forms they can actually use." },
  { n: "P4", name: "Asymmetric facilitation", body: "Conventional arena facilitation aims to level the playing field. Epistemic absorptive capacity design recognises the field is not level and compensates actively — facilitators advocate for knowledge being marginalised by process design, not just by power dynamics." },
  { n: "P5", name: "Incomplete synthesis as output", body: "Current evaluation rewards synthesis — arenas that produce shared framings and actionable recommendations. This discriminates against the most epistemically challenging findings. Productive divergence counts as a legitimate output." },
  { n: "P6", name: "Longitudinal relationship", body: "Cognitive distance cannot be bridged in a project cycle. Genuine collective absorptive capacity requires long-term relationships. Design governance and funding for continuity across programme rounds, not reset actor configurations with each new project." },
];

export default function LearningAcrossGap({ onNavigate }: LearningAcrossGapProps) {
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
          <button onClick={() => onNavigate('mycelialdbr')} className="text-sm border border-amber-800/30 text-amber-800 hover:bg-amber-100 px-4 py-1.5 rounded transition-colors font-sans">
            Article 05: DBR as Method →
          </button>
        </div>
      </nav>

      <header className="border-b border-amber-900/20 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">
            Article 04 · Mycelial Learning Framework
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-stone-800 leading-tight mb-4">
            Learning Across<br />
            <em className="text-amber-800">the Gap</em>
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mb-6">
            Absorptive capacity theory frames the problem as SMEs lacking the capacity to absorb what transition arenas produce. This paper argues the deficit framing is wrong in a specific way: it never asks whether the design of learning processes systematically excludes what SMEs already know.
          </p>
          <div className="bg-green-50 border border-green-800/20 rounded-lg px-5 py-4 max-w-2xl">
            <p className="text-sm font-semibold text-stone-700 font-sans mb-1">The reframe</p>
            <p className="text-sm text-stone-600 leading-relaxed">
              From <em>"how do we build absorptive capacity in SMEs?"</em> to <em>"how do we design learning processes that can absorb what SMEs already know — including what cannot be made transparent without being destroyed?"</em>
            </p>
          </div>
        </div>
      </header>

      {/* Epistemic absorptive capacity concept */}
      <section className="px-6 md:px-12 py-8 border-b border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">Original concept — epistemic absorptive capacity</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 border border-amber-800/15 rounded-lg px-5 py-4">
              <div className="w-6 h-0.5 bg-amber-700 mb-3" />
              <h3 className="font-display text-base font-semibold text-stone-800 mb-2">Standard absorptive capacity</h3>
              <p className="text-sm text-stone-600 leading-relaxed">Asks whether an <em>organisation</em> can recognise, assimilate, transform, and exploit knowledge from the environment. Unit of analysis: the receiving firm. Prescribes building more capacity in the underperforming actor.</p>
            </div>
            <div className="bg-green-50 border border-green-800/15 rounded-lg px-5 py-4">
              <div className="w-6 h-0.5 bg-green-700 mb-3" />
              <h3 className="font-display text-base font-semibold text-stone-800 mb-2">Epistemic absorptive capacity</h3>
              <p className="text-sm text-stone-600 leading-relaxed">Asks whether a <em>learning process</em> can recognise, accommodate, and build on knowledge that arrives in non-dominant forms — tacit, relational, non-scalable, undocumented, practice-based. Unit of analysis: the system design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Four dimensions */}
      <main className="px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Four dimensions of epistemic absorptive capacity</p>
          <div className="grid md:grid-cols-2 gap-4">
            {DIMENSIONS.map((d) => {
              const barClass = d.accent === 'amber' ? 'bg-amber-700' : d.accent === 'terracotta' ? 'bg-orange-700' : 'bg-green-700';
              const cardClass = d.accent === 'amber' ? 'bg-amber-50 border-amber-800/15' : d.accent === 'terracotta' ? 'bg-orange-50 border-orange-800/15' : 'bg-green-50 border-green-800/15';
              const numClass = d.accent === 'amber' ? 'text-amber-700' : d.accent === 'terracotta' ? 'text-orange-700' : 'text-green-700';
              return (
                <div key={d.n} className={`rounded-lg border ${cardClass} px-5 py-4`}>
                  <div className={`w-6 h-0.5 ${barClass} mb-3`} />
                  <div className="flex items-start gap-2 mb-2">
                    <span className={`font-display text-sm font-bold ${numClass} shrink-0`}>{d.n}</span>
                    <h3 className="font-display text-base font-semibold text-stone-800">{d.name}</h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{d.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Design principles */}
      <section className="px-6 md:px-12 py-10 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Six design principles for epistemic absorptive capacity</p>
          <div className="space-y-3">
            {PRINCIPLES.map((p) => (
              <div key={p.n} className="border-l-2 border-green-700 pl-4">
                <p className="text-xs font-semibold text-stone-700 font-sans mb-0.5">{p.n} — {p.name}</p>
                <p className="text-sm text-stone-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implications */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-50 border border-orange-800/20 rounded-xl px-6 py-5 max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-800 mb-2 font-sans">The structural implication</p>
            <p className="text-stone-700 text-sm leading-relaxed">
              The most important transitions knowledge may be in exactly the places that current transition arenas are least equipped to absorb it — in the tacit practice of SMEs who have spent decades navigating the actual material conditions of the transition challenge, in the local knowledge of communities who live in the sites where transitions land. Designing processes that can absorb this knowledge is not supplementary to the transition challenge. <strong>It is the challenge.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">Key Sources</p>
          <ul className="space-y-1.5 text-sm text-stone-500 font-sans">
            <li>Cohen, W. M., & Levinthal, D. A. (1990). — absorptive capacity: foundational framework</li>
            <li>Santos, B. de S. (2014). <em>Epistemologies of the South</em> — transparency demand as epistemic asymmetry</li>
            <li>Balanzó-Guzmán, A., & Ramos-Mejía, M. (2023). — 10-category interaction taxonomy; co-design as extraction</li>
            <li>Tsing, A. (2015). <em>The Mushroom at the End of the World</em> — scalable vs. non-scalable knowledge</li>
            <li>Feola, G. (2020). — change within capitalism vs. change of capitalism; the deficit framing parallel</li>
            <li>Loorbach, D. (2010). — transition arenas as designed learning spaces</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-amber-900/20 px-6 md:px-12 py-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-stone-400 font-sans">Article 04 · Learning Across the Gap · Ferry Boschman · Lectoraat Urban Innovation, Windesheim</p>
          <p className="text-xs text-stone-400 italic font-sans">A Decolonial Paradigm for Educational Science</p>
        </div>
      </footer>
    </div>
  );
}
