interface ScalableIntelligenceProps {
  onNavigate: (page: string) => void;
}

const PLANTATION_OPS = [
  {
    n: "3.1",
    name: "Training data as extermination of local entanglement",
    body: "LLMs are trained on data harvested from the internet — a profoundly skewed sample that over-represents North American and Western European contexts, English language, and demographics of internet access. This is not accidental: it is the direct result of optimising for scale. The knowledge that is oral, embodied, relational, community-held, or not yet digitised — non-scalable knowledge — is excluded because scalability requires its exclusion.",
    accent: "amber",
  },
  {
    n: "3.2",
    name: "Benchmark design as the plantation's monocrop",
    body: "Dominant AI benchmarks (ImageNet, GLUE, SQuAD) prioritise narrow analytical tasks: pattern matching, text completion, classification, prediction. They exclude social, contextual, relational, and ecological dimensions of performance. The benchmark does not measure intelligence; it measures performance on tasks that benchmark designers found tractable. The monoculture is grown to specification; everything that would not grow to that specification is cleared.",
    accent: "terracotta",
  },
  {
    n: "3.3",
    name: "Institutional concentration as ownership structure",
    body: "A small number of US technology companies and elite universities dominate AI research publication, patent filing, and standard-setting. The knowledge that gets built into AI systems is the knowledge those institutions find interesting, tractable, and fundable. Concentrated ownership of AI design means that the epistemic assumptions of those institutions scale globally without accountability to the majority of people who encounter their consequences.",
    accent: "green",
  },
  {
    n: "3.4",
    name: "Ethics frameworks as plantation management",
    body: "Over 160 AI ethics guidelines exist, most originating in North America and Europe. Their proliferation has not produced structural change. Ubuntu, indigenous data sovereignty, and CARE frameworks that do exist are marginal — not because they are inadequate but because admission to governance discourse follows the same entry condition as training data: translate into the dominant register or remain excluded.",
    accent: "amber",
  },
];

const PDC = [
  { n: "C1", name: "Epistemic audit", body: "Name what the training data, benchmarks, and institutional context cannot absorb — not only what they contain. Practice partial translation: document what the datasheet cannot carry.", position: "Hybrid science" },
  { n: "C2", name: "Affected community design authority", body: "Decision-making power over systems that affect communities, not consultation. Recognise community knowledge as domain expertise the development institution does not possess.", position: "Co-design / Hybrid objects" },
  { n: "C3", name: "Multi-framework evaluation", body: "Benchmarks that include relational, contextual, ecological, and community-defined performance dimensions alongside analytical measures. Not softer standards — different questions about what the system does.", position: "Hybrid science → Hybrid objects" },
  { n: "C4", name: "Institutional diversification", body: "Structural redistribution of AI design authority beyond concentrated North American and European institutions. Not diversity hiring within existing institutions — structural authority redistribution.", position: "Positioning / Strategic use" },
  { n: "C5", name: "Governance pluralism", body: "Incorporation of non-liberal-democratic governance traditions into AI ethics frameworks — with binding force, not advisory status. CARE principles as regulatory standard rather than voluntary guidance.", position: "Hybrid objects" },
];

const ACCENT = {
  amber:      { card: "bg-amber-50 border-amber-800/20",    bar: "bg-amber-700",   num: "text-amber-700" },
  terracotta: { card: "bg-orange-50 border-orange-800/20",  bar: "bg-orange-700",  num: "text-orange-700" },
  green:      { card: "bg-green-50 border-green-800/20",    bar: "bg-green-700",   num: "text-green-700" },
};

export default function ScalableIntelligence({ onNavigate }: ScalableIntelligenceProps) {
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
          <button onClick={() => onNavigate('aigenre')} className="text-sm border border-amber-800/30 text-amber-800 hover:bg-amber-100 px-4 py-1.5 rounded transition-colors font-sans">
            Article 09: AI Genre →
          </button>
        </div>
      </nav>

      <header className="border-b border-amber-900/20 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">
            Article 06 · Mycelial Learning Framework
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-stone-800 leading-tight mb-4">
            Scalable<br />
            <em className="text-amber-800">Intelligence</em>
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mb-6">
            AI systems are built according to plantation logic — creating elements that are oblivious to the indeterminacies of encounter. This is not accidental bias. It is the structural requirement of scalability. The problem is not that AI systems contain errors. The problem is that <em>intelligence, as the field currently builds it, is plantation intelligence.</em>
          </p>
          <div className="bg-orange-50 border border-orange-800/20 rounded-lg px-5 py-4 max-w-2xl">
            <p className="text-sm font-semibold text-stone-700 font-sans mb-1">Original contribution</p>
            <p className="text-sm text-stone-600 leading-relaxed">
              <em>Scalable intelligence</em> as a named epistemological critique of AI — parallel to the transparency trap in education and epistemic absorptive capacity failure in transition governance, but applied to AI systems as epistemic infrastructure.
            </p>
          </div>
        </div>
      </header>

      {/* Plantation model */}
      <main className="px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-2 font-sans">The plantation model (Tsing 2015)</p>
          <p className="text-stone-600 text-sm leading-relaxed mb-6 max-w-2xl">
            Plantation systems achieve scalability by creating elements that are oblivious to the indeterminacies of encounter — cloned, standardised, context-free, interchangeable. This requires eliminating local entanglements. Formula: exterminate what resists standardisation, create interchangeable units, expand without transformation.
          </p>
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">Four plantation operations in AI development</p>
          <div className="space-y-4">
            {PLANTATION_OPS.map((op) => {
              const a = ACCENT[op.accent as keyof typeof ACCENT];
              return (
                <div key={op.n} className={`rounded-xl border ${a.card} px-6 py-5`}>
                  <div className="flex items-start gap-3">
                    <span className={`font-sans text-xs font-bold ${a.num} shrink-0 mt-1`}>{op.n}</span>
                    <div>
                      <h2 className="font-display text-base text-stone-800 mb-2">{op.name}</h2>
                      <p className="text-sm text-stone-600 leading-relaxed">{op.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Transparency trap in AI */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">The transparency trap in AI governance</p>
          <div className="space-y-3">
            {[
              { name: "In training data", body: "Datasets must be structured, labelled, and formatted for machine processing. This is an entry condition — knowledge that cannot be reduced to structured, labelled data is excluded. Amazon Mechanical Turk workers labelling ImageNet received 6 cents per image: alienated, interchangeable labour, now digitised." },
              { name: "In explainability requirements", body: "AI governance frameworks increasingly require explainable AI — systems must produce reasons auditable by humans. This is also an entry condition: affected communities who know an AI system treats them unjustly must translate that knowledge into forms governance frameworks recognise (data, legal categories, expert testimony) for it to count." },
              { name: "In model cards and datasheets", body: "Datasheets for Datasets and Model Cards are genuine improvements — and plantation management instruments. They document what can be documented and structurally cannot capture what cannot: the social and political relations embedded in how the data was produced, what knowledge was excluded before collection began." },
            ].map(t => (
              <div key={t.name} className="border-l-2 border-amber-700 pl-4">
                <p className="text-sm font-semibold text-stone-700 font-sans mb-0.5">{t.name}</p>
                <p className="text-sm text-stone-500 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pluriversal Design Conditions */}
      <section className="px-6 md:px-12 py-10 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Pluriversal Design Conditions — five criteria</p>
          <div className="space-y-3">
            {PDC.map((c) => (
              <div key={c.n} className="bg-green-50 border border-green-800/15 rounded-lg px-5 py-4">
                <div className="flex items-start gap-3 mb-1">
                  <span className="text-xs font-bold text-green-700 font-sans shrink-0 mt-0.5">{c.n}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-base font-semibold text-stone-800">{c.name}</h3>
                      <span className="text-xs text-green-700 font-sans shrink-0 mt-0.5">{c.position}</span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed mt-1">{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">Key Sources</p>
          <ul className="space-y-1.5 text-sm text-stone-500 font-sans">
            <li>Tsing, A. (2015). <em>The Mushroom at the End of the World</em> — plantation model; scalable intelligence; non-scalable knowledge</li>
            <li>Santos, B. de S. (2014). — epistemicide at infrastructure scale</li>
            <li>Mohamed, S., Png, M.-T., & Isaac, W. (2020). "Decolonial AI" — algorithmic coloniality taxonomy; ethics dumping; CTP practice framework</li>
            <li>Balanzó-Guzmán, A., & Ramos-Mejía, M. (2023). — 10-category interaction taxonomy applied to AI development practices</li>
            <li>Buolamwini, J., & Gebru, T. (2018). — facial recognition error rate disparities; distributional harm</li>
            <li>Carroll, S. R., et al. (2020). CARE Principles for Indigenous Data Governance</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-amber-900/20 px-6 md:px-12 py-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-stone-400 font-sans">Article 06 · Scalable Intelligence · Ferry Boschman · Lectoraat Urban Innovation, Windesheim</p>
          <p className="text-xs text-stone-400 italic font-sans">A Decolonial Paradigm for Educational Science</p>
        </div>
      </footer>
    </div>
  );
}
