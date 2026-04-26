interface AIGenreProps {
  onNavigate: (page: string) => void;
}

const FORMATION_EFFECTS = [
  {
    n: "3.1",
    name: "AI writing assistants and the formation of inquiry",
    body: "Train users to experience thinking-through-drafts as a process of editing machine output rather than generating from within. The genre of intellectual inquiry installed: Man 2's evidence-consulting, output-optimising agent. The genre displaced: slow, exploratory, error-tolerant inquiry characteristic of genuine formation.",
    accent: "amber",
  },
  {
    n: "3.2",
    name: "AI tutors and assessment-as-genre-conservation",
    body: "Train students to understand learning as the reduction of distance between current output and a correct-output template. The rubric is the descriptive statement made operational. The student who achieves high scores through AI feedback has been formed toward the genre the rubric encodes — not toward genuine inquiry.",
    accent: "terracotta",
  },
  {
    n: "3.3",
    name: "Recommendation algorithms and epistemic comfort",
    body: "Engagement-optimised content is genre-consistent content. Santos' ecology of knowledges requires genuine encounter with what is different. Recommendation algorithms actively prevent this — and individualise genre-conservation: where school applied the same apparatus to all, AI applies it custom-calibrated to each.",
    accent: "green",
  },
  {
    n: "3.4",
    name: "AI in CBL and professional education",
    body: "AI tools entering CBL settings carry Man 2's genre into the challenge-formation encounter. An AI system that helps students structure their challenge approach, generate solution options, and optimise their recommendation is a Man 2 professional formation tool dressed as a learning support instrument. AI accelerates the movement toward a deliverable; the formation value of sitting with genuine irresolution is precisely what AI removes.",
    accent: "amber",
  },
];

const ALTERNATIVES = [
  {
    name: "Adab-informed AI",
    tradition: "Islamic education (Faruque 2024)",
    accent: "green",
    body: "Islamic adab is a complete alternative formation architecture: wisdom, moral excellence, insān kāmil, formation through exemplary relationship. What this would require from AI: not simulation of a shaykh (impossible) but redesign of what AI interaction supports — not output optimisation but moral discernment; not recommendation delivery but deepening of the student's capacity for ethical judgment.",
    limit: "An adab-informed AI cannot substitute for thinking within the tradition. The AI that delivers adab content is not forming adab. Some formation cannot be mediated through AI at all — and the occupation of the formation space by AI prevents the formation it cannot provide.",
  },
  {
    name: "Ubuntu-informed AI",
    tradition: "Ubuntu epistemology",
    accent: "terracotta",
    body: "Umuntu ngumuntu ngabantu — personhood is formed through human relationship, not through transactional machine encounters. AI-mediated learning substitutes a dyadic human-machine relationship for the multi-directional community-of-formation through which Ubuntu-formation operates.",
    limit: "Not 'AI should be more relational' (a feature request within Man 2's genre) but 'AI-mediated formation is structurally inadequate to Ubuntu formation' (a genre critique). The pedagogical question: under what conditions should AI interaction be minimised so that community-formation can occur?",
  },
  {
    name: "Ecology of knowledges",
    tradition: "Santos (2014)",
    accent: "amber",
    body: "The ecology of knowledges requires genuine encounter with what is different — knowledge that does not fit your current framework and does not reduce to it. Current AI (engagement-optimisation, personalisation, scaffolded support) is the opposite: it reduces friction and serves content legible within the user's existing framework.",
    limit: "What AI designed for epistemic encounter would require: deliberate friction; content that genuinely cannot be absorbed into the user's existing framework; resistance to calibration. This is technically possible and pedagogically demanding — and requires a different conception of what AI in education is for.",
  },
];

const FRAMEWORK = [
  { n: "5.1", name: "Formation audit as design criterion", body: "Before deploying any AI tool in an educational context, require a formation audit: what genre of being human does this tool install through repeated use? What habits of inquiry, relationships to uncertainty, and modes of engagement does it produce? The formation audit is prior to the ethics audit." },
  { n: "5.2", name: "Triple-loop criterion", body: "Single-loop AI (did the output meet the rubric?) is what most AI in education provides. Double-loop AI (does the student's governing framework need to change?) is rare. Triple-loop AI (what kind of human being is this educational process producing?) is not a feature of any current AI educational tool." },
  { n: "5.3", name: "The genre-disruption moment", body: "Design explicit moments in AI-mediated educational sequences at which the AI raises the genre question — not 'how can I help you improve your output?' but 'what kind of professional/thinker are you becoming through this process, and is that what you want?' This is technically feasible; what it requires is a pedagogical design decision." },
  { n: "5.4", name: "The minimal AI principle", body: "Some formation cannot be mediated through AI. The adab tradition names this specifically: character formation requires exemplary human relationship; the formation space cannot be occupied by AI without loss. Identify the formation tasks where AI mediation actively prevents what it claims to support — and design those moments as AI-free." },
];

const ACCENT = {
  amber:      { card: "bg-amber-50 border-amber-800/20",    bar: "bg-amber-700",   num: "text-amber-700" },
  terracotta: { card: "bg-orange-50 border-orange-800/20",  bar: "bg-orange-700",  num: "text-orange-700" },
  green:      { card: "bg-green-50 border-green-800/20",    bar: "bg-green-700",   num: "text-green-700" },
};

export default function AIGenre({ onNavigate }: AIGenreProps) {
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
          <button onClick={() => onNavigate('scalable')} className="text-sm border border-amber-800/30 text-amber-800 hover:bg-amber-100 px-4 py-1.5 rounded transition-colors font-sans">
            ← Article 06: Scalable Intelligence
          </button>
        </div>
      </nav>

      <header className="border-b border-amber-900/20 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">
            Article 09 · Mycelial Learning Framework
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-stone-800 leading-tight mb-4">
            AI as Sociogenic<br />
            <em className="text-amber-800">Apparatus</em>
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mb-6">
            The critical AI literature has spent fifteen years asking what AI systems destroy, exclude, and harm. This misses the prior question: what AI systems <em>produce</em>. AI systems — tutors, recommenders, writing assistants — function as sociogenic apparatuses. They do not merely process human behaviour; they produce specific genres of being human.
          </p>
          <div className="bg-green-50 border border-green-800/20 rounded-lg px-5 py-4 max-w-2xl">
            <p className="text-sm font-semibold text-stone-700 font-sans mb-1">The genre AI installs</p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Man 2's updated variant: the self-optimising, productivity-maximising, evidence-consulting, outcome-oriented agent — <em>homo oeconomicus</em> with a digital interface. Not because of malicious design, but because AI systems trained on Man 2's data, evaluated against Man 2's benchmarks, and designed by Man 2's institutions structurally cannot produce anything else.
            </p>
          </div>
        </div>
      </header>

      {/* Wynter's framework */}
      <section className="px-6 md:px-12 py-8 border-b border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-4 font-sans">Wynter's sociogenic principle — applied to AI</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 border border-amber-800/15 rounded-lg px-5 py-4">
              <div className="w-6 h-0.5 bg-amber-700 mb-3" />
              <h3 className="font-display text-base font-semibold text-stone-800 mb-2">Genre-formation</h3>
              <p className="text-sm text-stone-600 leading-relaxed">Human beings do not come ready-made — they are formed through sociogenic processes. The governing code is the descriptive statement: the master principle that defines who counts as fully human, what the good life looks like, and what modes of knowing are natural vs. deviant.</p>
            </div>
            <div className="bg-amber-50 border border-amber-800/15 rounded-lg px-5 py-4">
              <div className="w-6 h-0.5 bg-amber-700 mb-3" />
              <h3 className="font-display text-base font-semibold text-stone-800 mb-2">The Bateson mechanism</h3>
              <p className="text-sm text-stone-600 leading-relaxed">"The indispensable function of each such system of learning must be, imperatively, to conserve that descriptive statement." Learning systems — schools, curricula, educational technologies — are, in their deep function, genre-conservation systems. AI is the most powerful genre-conservation system ever deployed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Four formation effects */}
      <main className="px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Four specific formation effects of current AI</p>
          <div className="space-y-4">
            {FORMATION_EFFECTS.map((e) => {
              const a = ACCENT[e.accent as keyof typeof ACCENT];
              return (
                <div key={e.n} className={`rounded-xl border ${a.card} px-6 py-5`}>
                  <div className="flex items-start gap-3">
                    <span className={`font-sans text-xs font-bold ${a.num} shrink-0 mt-1`}>{e.n}</span>
                    <div>
                      <h2 className="font-display text-base text-stone-800 mb-2">{e.name}</h2>
                      <p className="text-sm text-stone-600 leading-relaxed">{e.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Alternative architectures */}
      <section className="px-6 md:px-12 py-10 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Three alternative formation architectures</p>
          <div className="space-y-5">
            {ALTERNATIVES.map((alt) => {
              const a = ACCENT[alt.accent as keyof typeof ACCENT];
              return (
                <div key={alt.name} className={`rounded-xl border ${a.card} px-6 py-5`}>
                  <h2 className="font-display text-lg text-stone-800 mb-1">{alt.name}</h2>
                  <p className="text-xs text-stone-400 font-sans mb-3">{alt.tradition}</p>
                  <p className="text-sm text-stone-700 leading-relaxed mb-3">{alt.body}</p>
                  <div className={`border-l-2 ${a.bar} pl-4`}>
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide font-sans mb-0.5">The structural limit</p>
                    <p className="text-sm text-stone-500 leading-relaxed italic">{alt.limit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Genre-disrupting AI framework */}
      <section className="px-6 md:px-12 py-10 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Genre-disrupting AI design — four criteria</p>
          <div className="space-y-3">
            {FRAMEWORK.map((f) => (
              <div key={f.n} className="border-l-2 border-green-700 pl-4">
                <p className="text-sm font-semibold text-stone-700 font-sans mb-0.5">{f.n} — {f.name}</p>
                <p className="text-sm text-stone-500 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">Key Sources</p>
          <ul className="space-y-1.5 text-sm text-stone-500 font-sans">
            <li>Wynter, S. (2003). "Unsettling the Coloniality of Being/Power/Truth/Freedom" — genre-formation; Bateson mechanism; Man 2's descriptive statement</li>
            <li>Faruque, M. A. (2024). — Islamic adab; insān kāmil; tawḥīd epistemology; critique of skill-over-formation</li>
            <li>Biesta, G. (2021). — subjectification vs. qualification; AI as anti-subjectification machine</li>
            <li>Santos, B. de S. (2014). — ecology of knowledges; AI for epistemic encounter</li>
            <li>Malabou, C. (2019). <em>Morphing Intelligence</em> — IQ → AI conceptual migration; sorting function as infrastructure</li>
            <li>Mezirow, J. (1991). — disorienting dilemma; AI removes the friction that produces it</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-amber-900/20 px-6 md:px-12 py-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-stone-400 font-sans">Article 09 · AI as Sociogenic Apparatus · Ferry Boschman · Lectoraat Urban Innovation, Windesheim</p>
          <p className="text-xs text-stone-400 italic font-sans">A Decolonial Paradigm for Educational Science</p>
        </div>
      </footer>
    </div>
  );
}
