interface DecolonialCompassProps {
  onNavigate: (page: string) => void;
}

const PROVOCATIONS = [
  {
    number: "Framing",
    title: "WHAT IS THIS LEARNING FOR?",
    interrupt: "the default in which the answer is so obvious it goes unstated — 'employability,' 'skills for the knowledge economy,' 'keeping up with change.' These answers encode a specific theory of what a human life is for.",
    accent: "amber",
    purposes: [
      { label: "Qualification", body: "The learning equips people to do specific things in specific contexts. Legitimate — but becomes the learning trap when it crowds out all else. Ask: is this the only purpose? Who decided that?" },
      { label: "Socialisation", body: "The learning integrates people into existing professional, civic, or cultural orders. Ask: which order? Whose order? What does this socialisation foreclose?" },
      { label: "Subjectification", body: "The learning enables people to come into existence as free subjects not predetermined by the programme design. This is what LLL most systematically eliminates. Ask: where in this programme is there room for this?" },
      { label: "Collective capacity", body: "The learning builds the collective capacity of communities to know their world and produce their own responses — not individual credentials but shared epistemological resources. Ask: does this programme contribute to collective knowledge, or only to individual credentials?" },
    ],
  },
  {
    number: "01",
    title: "WHO IS NOT LEARNING?",
    interrupt: "the Matthew Effect's invisibility; the assumption that designing a 'good programme' is sufficient if participants don't come.",
    accent: "terracotta",
    body: "At every stage of programme design, ask: who is structurally prevented from participating, and what does the design contribute to that prevention? The absent learner is not a recruitment challenge — they are data about the structural assumptions embedded in the programme.",
    practice: "Require any LLL programme proposal to include a structural exclusion audit — not a list of barriers and how to overcome them, but an analysis of how the programme's design (scheduling, credential structure, assessment methods, language register, network requirements) itself produces specific exclusions.",
  },
  {
    number: "02",
    title: "WHOSE KNOWLEDGE COUNTS?",
    interrupt: "the transparent-input, credential-output chain that determines what knowledge is recognisable as learning.",
    accent: "green",
    body: "Every LLL programme implicitly defines what knowledge counts as input and output. This is an agential cut: it makes some knowledge visible and certifiable while rendering other knowledge invisible. Ask: what forms of knowledge — relational, collective, oral, practice-embedded, non-linear, slow — are present in this learning community that the framework cannot see?",
    practice: "Alongside any Recognition of Prior Learning process, require a non-recognisable knowledge inventory — documenting what participants know that RPL cannot capture.",
  },
  {
    number: "03",
    title: "WHAT IS BEING UNLEARNED?",
    interrupt: "the additive model of LLL (more credentials, more skills, more knowledge) that treats learning as always cumulative.",
    accent: "amber",
    body: "Learning always involves unlearning: genuine development changes how people see their world, which means some previous ways of seeing become unavailable or inadequate. Most LLL programmes are designed to add, not to disturb. Ask: what is this learning designed to disturb? If the answer is nothing, the programme is qualification, not education.",
    practice: "Require each learning unit to include a disruption diagnosis — what does this learning challenge in participants' existing practice, and how does the programme support the discomfort of that challenge rather than managing it away?",
  },
  {
    number: "04",
    title: "WHO PROFITS FROM THIS LEARNING FRAMEWORK?",
    interrupt: "the neutrality claim of LLL policy and the invisibility of value flows produced by credentialling systems.",
    accent: "terracotta",
    body: "Two levels: (1) the programme — who captures the value this learning produces? (2) the framework — who profits from this LLL approach being deployed here? When an institution offers an employer-co-designed micro-credential: the institution gains funding eligibility and employer relationships; the employer gains credentialed workforce at reduced training cost; the community whose collective knowledge needs building gains nothing.",
    practice: "LLL designers who can name the Level 2 value flows without resolving them fraudulently are engaging with the provocation. The target is discomfort named and held; the failure mode is discomfort denied.",
  },
  {
    number: "05",
    title: "WHAT LEARNING WILL THIS MAKE IMPOSSIBLE?",
    interrupt: "the credentialling system's temporal flattening — the assumption that more credentials now is unambiguously better.",
    accent: "green",
    body: "Every LLL design choice forecloses alternatives. A programme structured around employer-defined competency frameworks makes it harder for participants to develop knowledge employers don't know they need. Ask: ten years from now, what will participants be unable to learn as a result of how this learning was structured?",
    practice: "Require a temporal stress test for any LLL programme — project it forward 10 years: what does this credential make possible? What does it foreclose? What kind of learner does it produce, and what kind of learner does it make harder to become?",
  },
];

const ACCENT = {
  amber:      { card: "bg-amber-50 border-amber-800/20",     bar: "bg-amber-700",    label: "bg-amber-100 text-amber-800",     num: "text-amber-700" },
  terracotta: { card: "bg-orange-50 border-orange-800/20",   bar: "bg-orange-700",   label: "bg-orange-100 text-orange-800",   num: "text-orange-700" },
  green:      { card: "bg-green-50 border-green-800/20",     bar: "bg-green-700",    label: "bg-green-100 text-green-800",     num: "text-green-700" },
};

export default function DecolonialCompass({ onNavigate }: DecolonialCompassProps) {
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
            onClick={() => onNavigate('dbr')}
            className="text-sm border border-amber-800/30 text-amber-800 hover:bg-amber-100 px-4 py-1.5 rounded transition-colors font-sans"
          >
            Design Based Research →
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="border-b border-amber-900/20 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">
            Output · Article 8 — The Learning Trap
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-stone-800 leading-tight mb-4">
            Decolonial Learning<br />
            <em className="text-amber-800">Compass</em>
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mb-6">
            Five recursive provocations for LLL policy-makers, programme designers, and educators who want to interrupt the learning trap — the process by which lifelong learning frameworks evacuate educational purpose in favour of labour-market instrumentalism — at the moment of design.
          </p>
          <div className="bg-amber-50 border border-amber-800/20 rounded-lg px-5 py-4 max-w-2xl">
            <p className="text-sm text-stone-600 leading-relaxed italic">
              This instrument does not replace programme design methodology. It is an interrupt mechanism: questions that, asked persistently, keep the political character of learning decisions visible. There is no completion state, no certification that the Compass has been "done."
            </p>
          </div>
        </div>
      </header>

      {/* Parallel table */}
      <section className="px-6 md:px-12 py-10 border-b border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">
            Structural parallel — Design Compass vs. Learning Compass
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 pr-6 font-sans font-semibold text-stone-500 text-xs uppercase tracking-wide">Design Compass</th>
                  <th className="text-left py-2 font-sans font-semibold text-amber-800 text-xs uppercase tracking-wide">Learning Compass</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {[
                  ["WHO IS THIS DESIGN FOR?", "WHAT IS THIS LEARNING FOR?"],
                  ["Who is not designing?", "Who is not learning?"],
                  ["Whose knowledge is the design built on?", "Whose knowledge counts?"],
                  ["What is being destroyed?", "What is being unlearned?"],
                  ["Who profits from this design approach?", "Who profits from this learning framework?"],
                  ["What will this design make impossible?", "What learning will this make impossible?"],
                ].map(([design, learning], i) => (
                  <tr key={i}>
                    <td className="py-2.5 pr-6 text-stone-500">{design}</td>
                    <td className="py-2.5 text-stone-700 font-medium">{learning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Provocations */}
      <main className="px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto space-y-6">
          {PROVOCATIONS.map((p) => {
            const a = ACCENT[p.accent as keyof typeof ACCENT];
            return (
              <div key={p.number} className={`rounded-xl border ${a.card} overflow-hidden`}>
                <div className="px-6 py-5">
                  <div className="flex items-start gap-4 mb-4">
                    <span className={`font-display text-2xl font-bold ${a.num} shrink-0 leading-none mt-1`}>{p.number}</span>
                    <div>
                      <h2 className="font-display text-xl text-stone-800 leading-snug">{p.title}</h2>
                      <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mt-1 font-sans">Interrupts</p>
                      <p className="text-sm text-stone-500 mt-0.5 leading-relaxed italic">{p.interrupt}</p>
                    </div>
                  </div>

                  {p.purposes ? (
                    <div className="grid sm:grid-cols-2 gap-3 mt-4">
                      {p.purposes.map((pu) => (
                        <div key={pu.label} className="bg-white/60 rounded-lg px-4 py-3 border border-stone-200">
                          <span className={`text-xs px-2 py-0.5 rounded font-sans font-semibold ${a.label} inline-block mb-2`}>{pu.label}</span>
                          <p className="text-sm text-stone-600 leading-relaxed">{pu.body}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3 mt-2">
                      <p className="text-sm text-stone-700 leading-relaxed">{p.body}</p>
                      <div className={`border-l-2 ${a.bar} pl-4`}>
                        <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-1 font-sans">In practice</p>
                        <p className="text-sm text-stone-600 leading-relaxed">{p.practice}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Anti-co-optation */}
      <section className="px-6 md:px-12 py-10 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">Anti-co-optation design features</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { n: "1", title: "No completion state", body: "There is no point at which a programme has 'passed' the Compass. It is a recursive interrupt, not a checklist." },
              { n: "2", title: "Discomfort-production", body: "The Compass does not offer answers — it produces discomfort. Resolving the discomfort is the failure mode. The assessment targets the quality of discomfort held, not the answer produced." },
              { n: "3", title: "Explicit co-optation naming", body: "The Compass names its own co-optation risk. A practitioner who has read this cannot subsequently claim not to have seen it. Naming is documented accountability, not prevention." },
            ].map((f) => (
              <div key={f.n} className="bg-amber-50 border border-amber-800/15 rounded-lg px-5 py-4">
                <div className="w-6 h-0.5 bg-amber-700 mb-3" />
                <h3 className="font-display text-base font-semibold text-stone-800 mb-2">{f.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DBR link */}
      <section className="px-6 md:px-12 py-10 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">Methodology</p>
          <button
            onClick={() => onNavigate('dbr')}
            className="w-full md:w-auto bg-green-50 border border-green-800/25 hover:bg-green-100 rounded-xl px-6 py-5 text-left transition-colors group"
          >
            <div className="w-6 h-0.5 bg-green-700 mb-3" />
            <h3 className="font-display text-lg text-stone-800 group-hover:text-green-900 mb-1">Design Based Research →</h3>
            <p className="text-sm text-stone-500">The iterative, situated methodology underpinning this research programme. Seven phases with mycelial integration.</p>
          </button>
        </div>
      </section>

      {/* Sources */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">Sources</p>
          <ul className="space-y-1.5 text-sm text-stone-500 font-sans">
            <li>Biesta, G. (2006). "What's the point of lifelong learning?" — purpose typology + unlearning / beautiful risk</li>
            <li>Santos, B. de S. (2014). <em>Epistemologies of the South</em> — epistemicide; collective capacity</li>
            <li>Boeren, E. (2016). <em>Lifelong Learning Participation</em> — Matthew Effect as structural exclusion</li>
            <li>Barad, K. (2007). <em>Meeting the Universe Halfway</em> — agential cut / RPL as apparatus</li>
            <li>Boltanski, L., & Chiapello, E. (2005). <em>The New Spirit of Capitalism</em> — Level 2 value flows</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-amber-900/20 px-6 md:px-12 py-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-stone-400 font-sans">Decolonial Learning Compass · Ferry Boschman · Lectoraat Urban Innovation, Windesheim</p>
          <p className="text-xs text-stone-400 italic font-sans">A Decolonial Paradigm for Educational Science</p>
        </div>
      </footer>
    </div>
  );
}
