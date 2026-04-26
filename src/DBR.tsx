interface DBRProps {
  onNavigate: (page: string) => void;
}

const PHASES = [
  {
    number: "0",
    title: "Problem Framing, Wickedness Assessment & Arts of Noticing",
    accent: "amber",
    body: "The most consequential design work happens before design begins. Before diagnosing a problem, attend to what is already growing.",
    tools: [
      { name: "Third Nature Inventory", desc: "Before writing the problem statement, conduct open-ended conversations asking 'what is already alive here that the problem framing does not see?' The gap between official problem and what you find is where third nature lives." },
      { name: "Wickedness Screening", desc: "Four-dimension 1–5 scale: problem stability, stakeholder consensus, theory availability, reversibility. Score ≥ 12 strongly indicates DBR is appropriate. A fifth mycelial dimension — epistemic register gap — signals whether explicit epistemic absorptive capacity mechanisms are needed." },
      { name: "Problem Reformulation", desc: "Write the problem statement three times from three different stakeholder positions. Where they diverge significantly, you have found the contested terrain." },
    ],
  },
  {
    number: "1",
    title: "Analysis and Exploration",
    accent: "terracotta",
    body: "Three parallel streams (contextual analysis, needs analysis, literature review) plus a fourth stream standard DBR omits.",
    tools: [
      { name: "Non-scalable Knowledge Audit (Stream 4)", desc: "Explicit method for capturing what standard needs analysis misses: tacit procedural knowledge, relational knowledge, oral and practice-embedded knowledge, marginal knowledge held at the edges of the network. Methods: walkthrough interviews, artefact-based discussion, peer-to-peer conversation not mediated by the researcher." },
      { name: "Invisible Labour Inventory", desc: "Documents the work that makes the learning environment function but appears in no formal record." },
    ],
  },
  {
    number: "2",
    title: "Theoretical Grounding and Conjecture Mapping",
    accent: "green",
    body: "A conjecture map makes visible the chain of reasoning from theoretical assumptions to observable outcomes across four components: high-level conjecture, design conjectures, mediating processes, outcomes.",
    tools: [
      { name: "Epistemic Conjecture (fifth component)", desc: "What forms of knowledge does this design need to be able to absorb, and what design features will enable this? Which design features risk excluding or extracting knowledge that should remain in context? Makes explicit what the standard conjecture map omits: the design's relationship to the epistemic diversity of participants." },
    ],
  },
  {
    number: "3",
    title: "Design and Construction",
    accent: "amber",
    body: "Core principles: design for enactment not just content; build in emergence-enabling conditions; make design rationale visible to facilitators.",
    tools: [
      { name: "Productive Insufficiency", desc: "The deliberate design of generative gaps, difficulties, and open spaces — principled restraint, not neglect. The critical distinction: difficulty in the thing being learned (generative — belongs in the design) vs. difficulty in surrounding conditions (obstructive — should be eliminated)." },
      { name: "Designing for Non-scalable Knowledge", desc: "Parallel documentation formats; explicitly protected undocumented exchange spaces within the intervention; translation naming ('this is a translation; something was here before that is not in the translation')." },
    ],
  },
  {
    number: "4",
    title: "Iterative Enactment and Evaluation",
    accent: "terracotta",
    body: "Standard evaluation plus an underground layer no equivalent DBR model includes.",
    tools: [
      { name: "Underground Evaluation", desc: "Evaluation of invisible relational processes beneath the visible surface: relationships forming, facilitator relational maintenance, emotional texture, invisible labour sustaining the intervention. Methods: extended informal post-evaluation conversations, facilitator journals (including what was felt but not said), longitudinal follow-up." },
      { name: "Decomposition as Iteration Logic", desc: "When a design element fails, ask not only 'what went wrong?' but 'what is this failure a substrate for?' Document failures as potential substrates: what did this failure make visible that success would have hidden?" },
    ],
  },
  {
    number: "5",
    title: "Reflection and Theory Articulation",
    accent: "green",
    body: "Produce the theory and simultaneously name what it cannot carry.",
    tools: [
      { name: "Partial Translation (three-part practice)", desc: "(1) Produce the theory — complete standard theory articulation. (2) Name the translation — explicitly mark where the claim abstracts from contextual particulars. (3) Preserve the particular — alongside the scalable theoretical output, produce a richer parallel account as record of what the theory abstracted away." },
    ],
  },
  {
    number: "6",
    title: "Implementation, Spread, and Return Pathway",
    accent: "amber",
    body: "Design return pathways so that what emerges nourishes the system it came from, rather than being extracted for academic purposes. The mycelial criterion: knowledge that grew from a community should feed back into that community, not only into the publication record.",
    tools: [],
  },
];

const THEORY_TYPES = [
  { label: "Domain theories", desc: "Descriptive generalisations about a class of contexts or outcomes: how does learning work in this kind of situation? Explanatory, not prescriptive." },
  { label: "Design frameworks", desc: "Prescriptive descriptions of what a designed artefact must have to achieve particular goals in a particular context: what does a good design look like here?" },
  { label: "Design methodologies", desc: "Accounts of how to design effectively in a given domain: how should we proceed when designing this kind of thing?" },
];

const ACCENT = {
  amber:      { card: "bg-amber-50 border-amber-800/20",    bar: "bg-amber-700",   num: "text-amber-700",   tag: "bg-amber-100 text-amber-800" },
  terracotta: { card: "bg-orange-50 border-orange-800/20",  bar: "bg-orange-700",  num: "text-orange-700",  tag: "bg-orange-100 text-orange-800" },
  green:      { card: "bg-green-50 border-green-800/20",    bar: "bg-green-700",   num: "text-green-700",   tag: "bg-green-100 text-green-800" },
};

export default function DBR({ onNavigate }: DBRProps) {
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
          <button
            onClick={() => onNavigate('compass')}
            className="text-sm border border-amber-800/30 text-amber-800 hover:bg-amber-100 px-4 py-1.5 rounded transition-colors font-sans"
          >
            ← Decolonial Learning Compass
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="border-b border-amber-900/20 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">
            Concept · Methodology
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-stone-800 leading-tight mb-4">
            Design Based<br />
            <em className="text-amber-800">Research</em>
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mb-6">
            Simultaneously a research methodology, a design process, and a knowledge-building enterprise. DBR produces knowledge by designing and testing educational interventions in real settings across iterative cycles — generating both a usable intervention and transferable theoretical insight.
          </p>
          <div className="bg-amber-50 border border-amber-800/20 rounded-lg px-5 py-4 max-w-2xl">
            <p className="text-sm font-semibold text-stone-700 font-sans mb-1">Dual-output requirement (McKenney & Reeves)</p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Every DBR project must produce both a <strong>usable intervention</strong> and <strong>transferable theoretical insight</strong>. Producing only one is either applied development work or pure research — not design research.
            </p>
          </div>
        </div>
      </header>

      {/* Theory types */}
      <section className="px-6 md:px-12 py-10 border-b border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">Three theory types (Edelson 2002)</p>
          <div className="grid md:grid-cols-3 gap-4">
            {THEORY_TYPES.map((t) => (
              <div key={t.label} className="bg-amber-50 border border-amber-800/15 rounded-lg px-5 py-4">
                <div className="w-6 h-0.5 bg-amber-700 mb-3" />
                <h3 className="font-display text-base font-semibold text-stone-800 mb-2">{t.label}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mycelial criterion */}
      <section className="px-6 md:px-12 py-8 border-b border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 border border-green-800/20 rounded-xl px-6 py-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-green-800 mb-2 font-sans">Mycelial criterion for appropriateness</p>
            <p className="text-stone-700 leading-relaxed">
              DBR is the right method when the knowledge most relevant to solving the problem is <strong>non-scalable, relational, or held by actors whose epistemic register differs from the dominant one</strong>. If the relevant knowledge can all be captured in documents and transferred cleanly, simpler methods may suffice.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <main className="px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Seven-phase framework — with mycelial integration</p>
          <div className="space-y-5">
            {PHASES.map((ph) => {
              const a = ACCENT[ph.accent as keyof typeof ACCENT];
              return (
                <div key={ph.number} className={`rounded-xl border ${a.card} px-6 py-5`}>
                  <div className="flex items-start gap-4 mb-3">
                    <span className={`font-display text-3xl font-bold ${a.num} shrink-0 leading-none`}>{ph.number}</span>
                    <div className="flex-1">
                      <h2 className="font-display text-lg text-stone-800 leading-snug mb-2">{ph.title}</h2>
                      <p className="text-sm text-stone-600 leading-relaxed">{ph.body}</p>
                    </div>
                  </div>
                  {ph.tools.length > 0 && (
                    <div className="ml-10 space-y-2.5 mt-3">
                      {ph.tools.map((t) => (
                        <div key={t.name} className={`border-l-2 ${a.bar} pl-4`}>
                          <p className="text-xs font-semibold text-stone-700 font-sans mb-0.5">{t.name}</p>
                          <p className="text-sm text-stone-500 leading-relaxed">{t.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Meta-tension */}
      <section className="px-6 md:px-12 py-10 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">The meta-tension</p>
          <div className="bg-orange-50 border border-orange-800/20 rounded-xl px-6 py-5 max-w-2xl">
            <p className="text-stone-700 leading-relaxed">
              This framework is itself a scalable knowledge product that partially betrays what it describes. Theory articulation is an act of translation that always leaves something behind. <strong>Partial translation</strong> is the practice that holds this tension: producing the scalable output while accounting for its cost.
            </p>
          </div>
        </div>
      </section>

      {/* Back to compass */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => onNavigate('compass')}
            className="bg-amber-50 border border-amber-800/25 hover:bg-amber-100 rounded-xl px-6 py-5 text-left transition-colors group w-full md:w-auto"
          >
            <div className="w-6 h-0.5 bg-amber-700 mb-3" />
            <h3 className="font-display text-lg text-stone-800 group-hover:text-amber-900 mb-1">← Decolonial Learning Compass</h3>
            <p className="text-sm text-stone-500">The five recursive provocations for interrupting the learning trap at the moment of programme design.</p>
          </button>
        </div>
      </section>

      {/* Sources */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">Key Sources</p>
          <ul className="space-y-1.5 text-sm text-stone-500 font-sans">
            <li>McKenney, S., & Reeves, T. (2019). <em>Conducting Educational Design Research</em> — process architecture; dual-output requirement; solutionism</li>
            <li>Edelson, D. (2002). — theory-type taxonomy; design research as epistemically productive</li>
            <li>Rittel, H., & Webber, M. (1973). — wicked problems as justification for Phase 0</li>
            <li>Davis, B., & Sumara, D. (2006). — complexity and emergence; three paired conditions for productive learning systems</li>
            <li>DBR Framework for Educational Design (2026). — synthesis with mycelial integration; productive insufficiency; underground evaluation; partial translation</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-amber-900/20 px-6 md:px-12 py-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-stone-400 font-sans">Design Based Research · Ferry Boschman · Lectoraat Urban Innovation, Windesheim</p>
          <p className="text-xs text-stone-400 italic font-sans">A Decolonial Paradigm for Educational Science</p>
        </div>
      </footer>
    </div>
  );
}
