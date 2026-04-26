interface TransparencyTrapProps {
  onNavigate: (page: string) => void;
}

const TRAP_COMPONENTS = [
  {
    number: "01",
    name: "The Entry Condition",
    body: "To participate in academic or institutional knowledge processes, knowledge must be translated into legitimate form: documented, articulated, evidenced, assessable. This is not presented as a choice but as the basic grammar of the setting.",
    accent: "amber",
  },
  {
    number: "02",
    name: "The Translation Cost",
    body: "The act of translation into transparent form destroys or hollows out what many knowledge traditions do. Indigenous, embodied, relational, ceremonial, and tacit knowledges use language to protect, transmit, or dissolve knowledge — not to make it portable. What is preserved in silence, in practice, in context, in relationship — this is precisely what translation cannot carry.",
    accent: "terracotta",
  },
  {
    number: "03",
    name: "The Trap's Closure",
    body: "The trap closes because the only recognized alternatives are: (a) comply and lose, or (b) resist and be excluded. A student who refuses to produce an assessable deliverable fails. A community partner whose knowledge cannot be articulated in project-legible form is sidelined. The trap does not require hostile intent to function.",
    accent: "green",
  },
  {
    number: "04",
    name: "The Invisibility Mechanism",
    body: "The trap is invisible because it presents as neutral methodology, not as political structure. Peer review is quality assurance, not the enforcement of epistemological norms. CBL rubrics are pedagogical design, not cultural filters. A second layer: process transparency does not produce equity of influence. It may actively mask the absence of equity by substituting the appearance of inclusion for its substance.",
    accent: "amber",
  },
];

const NAVIGATION = [
  { name: "Ecology of knowledges", source: "Santos", body: "Design educational processes that create space for knowledge to exist in multiple registers simultaneously, without forced translation into a single academic-legible form. Not relativism — methodological pluralism held together by explicit epistemic humility." },
  { name: "Strategic essentialism", source: "Spivak", body: "Engage transparency requirements knowingly and provisionally — 'we are using academic tools as a strategic portal, not a truth machine.' Requires explicit reflexive statements within the work: naming when and where the translation is happening and what it is costing." },
  { name: "Productive divergence", source: "Rivera Cusicanqui", body: "The goal is not integration toward shared frameworks but the maintenance of productive, generative tension between epistemic assemblages. CBL that does not require convergence on a single recommendation; assessment that makes the tension itself assessable." },
  { name: "Arts of noticing", source: "Tsing", body: "Develop explicit attention to what is happening in the margins of educational processes — what students are not writing in their reports, what community partners are not saying in co-design sessions, what is being protected from transparency. Research design that counts the invisible." },
  { name: "Mycelial learning as orientation", source: "Tsing / Boschman", body: "Design for incompleteness as a feature, for invisible labor to be credited, for knowledge that resists extraction to be honored rather than forced into legible form. Not a pedagogy but a disposition — held by the educator who knows the trap and chooses not to operate it unreflexively." },
];

const ACCENT = {
  amber:      { card: "bg-amber-50 border-amber-800/20",    bar: "bg-amber-700",   num: "text-amber-700" },
  terracotta: { card: "bg-orange-50 border-orange-800/20",  bar: "bg-orange-700",  num: "text-orange-700" },
  green:      { card: "bg-green-50 border-green-800/20",    bar: "bg-green-700",   num: "text-green-700" },
};

export default function TransparencyTrap({ onNavigate }: TransparencyTrapProps) {
  return (
    <div className="min-h-screen text-stone-800" style={{ fontFamily: "'Source Serif 4', Georgia, serif", backgroundColor: "#f5ede0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Source+Serif 4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;1,8..60,300;1,8..60,400&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>

      <nav className="sticky top-0 bg-amber-50/90 backdrop-blur-md border-b border-amber-900/20 z-40 px-6 md:px-12 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button onClick={() => onNavigate('mycelial')} className="text-sm text-stone-500 hover:text-amber-800 transition-colors font-sans">
            ← Mycelial Learning
          </button>
          <button onClick={() => onNavigate('temporal')} className="text-sm border border-amber-800/30 text-amber-800 hover:bg-amber-100 px-4 py-1.5 rounded transition-colors font-sans">
            Article 02: Temporal Mismatch →
          </button>
        </div>
      </nav>

      <header className="border-b border-amber-900/20 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">
            Article 01 · Mycelial Learning Framework
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-stone-800 leading-tight mb-4">
            The Transparency<br />
            <em className="text-amber-800">Trap</em>
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mb-6">
            Transparency — the demand that knowledge be made explicit, verifiable, communicable, and assessable — is simultaneously the condition of legitimate entry and the mechanism of epistemic destruction in higher education, participatory practice, and sustainability transitions.
          </p>
          <div className="bg-amber-50 border border-amber-800/20 rounded-lg px-5 py-4 max-w-2xl">
            <p className="text-sm font-semibold text-stone-700 font-sans mb-1">Original contribution</p>
            <p className="text-sm text-stone-600 leading-relaxed">
              The "transparency trap" as a named mechanism — more precise than epistemicide (the outcome) and more actionable than "decolonial critique" (the frame). It names the <em>specific structural pressure point</em> where well-intentioned inclusion becomes extraction.
            </p>
          </div>
        </div>
      </header>

      {/* Four components */}
      <main className="px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Anatomy of the trap — four structural components</p>
          <div className="space-y-4">
            {TRAP_COMPONENTS.map((c) => {
              const a = ACCENT[c.accent as keyof typeof ACCENT];
              return (
                <div key={c.number} className={`rounded-xl border ${a.card} px-6 py-5`}>
                  <div className="flex items-start gap-4">
                    <span className={`font-display text-2xl font-bold ${a.num} shrink-0 leading-none mt-0.5`}>{c.number}</span>
                    <div>
                      <h2 className="font-display text-lg text-stone-800 mb-2">{c.name}</h2>
                      <p className="text-sm text-stone-600 leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Taxonomy note */}
      <section className="px-6 md:px-12 py-6 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-50 border border-orange-800/20 rounded-xl px-6 py-5 max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-800 mb-2 font-sans">Balanzó-Guzmán & Ramos-Mejía (2023)</p>
            <p className="text-stone-700 text-sm leading-relaxed">
              Empirical demonstration in sustainability transitions: the interaction modes that appear most inclusive — co-design, TEK documentation, participatory research — are all in conflict-prone or displacement-generating quadrants. "Intended means for sustainability transitions could be part, in the end, of such violence."
            </p>
          </div>
        </div>
      </section>

      {/* Navigation strategies */}
      <section className="px-6 md:px-12 py-10 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Navigation strategies — partial exits, not solutions</p>
          <div className="space-y-3">
            {NAVIGATION.map((n, i) => (
              <div key={n.name} className="border-l-2 border-amber-700 pl-4">
                <div className="flex items-start gap-3">
                  <span className="text-xs text-amber-700 font-sans font-semibold shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-sm font-semibold text-stone-700 font-sans mb-0.5">{n.name} <span className="font-normal text-stone-400">— {n.source}</span></p>
                    <p className="text-sm text-stone-500 leading-relaxed">{n.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The researcher in the trap */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-800/15 rounded-xl px-6 py-5 max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-2 font-sans">The researcher in the trap</p>
            <p className="text-stone-600 text-sm leading-relaxed">
              This article is itself inside the trap it describes. Writing an academic paper about epistemic violence against marginal knowledges requires peer-reviewable transparency, academic citation conventions, English as the legitimate language of publication. The transparency trap is not dissolved by naming it — but naming it changes what educators and institutional designers can see.
            </p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">Key Sources</p>
          <ul className="space-y-1.5 text-sm text-stone-500 font-sans">
            <li>Santos, B. de S. (2014). <em>Epistemologies of the South</em> — epistemicide; ecology of knowledges; transparency as destruction</li>
            <li>Balanzó-Guzmán, A., & Ramos-Mejía, M. (2023). — 10-category interaction taxonomy; co-design as potential extraction</li>
            <li>Tsing, A. (2015). <em>The Mushroom at the End of the World</em> — scalable vs. non-scalable knowledge; arts of noticing</li>
            <li>Spivak, G. C. — strategic essentialism; using academic tools provisionally</li>
            <li>Biesta, G. (2021). — qualification vs. subjectification; assessment as transparency demand</li>
            <li>Feola, G. (2020). — change within capitalism vs. change of capitalism</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-amber-900/20 px-6 md:px-12 py-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-stone-400 font-sans">Article 01 · The Transparency Trap · Ferry Boschman · Lectoraat Urban Innovation, Windesheim</p>
          <p className="text-xs text-stone-400 italic font-sans">A Decolonial Paradigm for Educational Science</p>
        </div>
      </footer>
    </div>
  );
}
