interface CBLGenreProps {
  onNavigate: (page: string) => void;
}

const CONDITIONS = [
  {
    n: "01",
    name: "Temporal Mismatch",
    accent: "amber",
    body: "CBL challenge cycles last 8–14 weeks. Wicked sustainability problems operate at generational timescale. Ibn Khaldun's civilizational analysis names this precisely: institutional solutions that operate on compressed time cannot address problems that require the patience of asabiyyah formation — solidarity built across generations.",
    evidence: "Olsson et al. (2022), three-wave longitudinal study, 760 students: the confidence component — students' belief in their own capacity to influence sustainability outcomes — did not develop significantly through ESD teaching. Exactly what sprint-based CBL cannot develop.",
  },
  {
    n: "02",
    name: "Challenge Ownership and Hidden Labour",
    accent: "terracotta",
    body: "Challenge owners — corporations, municipalities, NGOs — define the problem, frame its parameters, own the intellectual property of any solutions produced, and decide whether to implement recommendations. Students donate labour (typically 150–200 hours per challenge) toward outcomes they do not own.",
    evidence: "Confirmed field-wide gap in the CBL literature: no study has addressed challenge ownership or IP power dynamics. The participation-vs-power-redistribution tension maps directly: students participate in a co-creation process whose outputs are owned by others.",
  },
  {
    n: "03",
    name: "Epistemic Monoculture",
    accent: "green",
    body: "CBL assumes a specific (Northern, Man 2) relationship to problems: problems are solvable in principle; the goal is a better solution; structured inquiry yields convergence; teams should synthesize toward a recommendation. This is not neutral — it is genre-specific.",
    evidence: "Ubuntu: damage to community is not a problem to be solved but a relational wound to be healed through sustained attention. Ibn Khaldun: decline is a phase of an inevitable cycle, not a solvable problem. Islamic adab: a complex ethical situation calls for moral discernment, not solution delivery. None of these frames are available in a standard CBL design.",
  },
  {
    n: "04",
    name: "Facilitation Gap",
    accent: "amber",
    body: "CBL demands facilitation capacities that are rarely trained or institutionally supported. Van den Beemt et al. (2023), studying CBL across four continents, found faculty transformation obstacles are the most consistent barrier globally — identical in structure regardless of national context.",
    evidence: "Kłeczek et al. (2020): with wicked problems, 'the more the teaching process is focused on the task to be solved, the greater the effects.' Genuinely wicked problems may require smaller, more focused facilitated tasks — not more open-endedness — unless facilitation actively holds complexity open against the drive to converge.",
  },
  {
    n: "05",
    name: "Assessment Contradiction",
    accent: "terracotta",
    body: "CBL aspires to assess emergent, transformative, reflective learning — outcomes that by definition cannot be fully anticipated in advance. Its assessment instruments are competency rubrics that pre-specify what counts as quality. The rubric is the operational form of Man 2's descriptive statement.",
    evidence: "Huesca et al. (2024), 4,226 students: CBL graduates and traditional education graduates are 'as effective' on national standardised assessments. The deeper competencies CBL claims to develop — critical thinking, leadership, decision-making — are asserted but not measured.",
  },
];

const PRINCIPLES = [
  {
    n: "P1",
    name: "Temporal extension",
    tradition: "Ibn Khaldun",
    accent: "amber",
    body: "Wicked sustainability problems require civilizational patience. CBL can cultivate this through multi-year challenge architectures: first-year students inherit challenges from third-year students; graduates remain connected to challenges as practitioners; communities revisit the same challenge across program cohorts.",
    purpose: "Students experience their contribution as a phase in a longer process, not as a deliverable to be completed within a semester. What matters is the solidarity and shared commitment built across time — not the recommendation delivered at the end.",
  },
  {
    n: "P2",
    name: "Challenge reframing",
    tradition: "Ubuntu's constitutive community",
    accent: "green",
    body: "Before accepting a challenge as defined by a challenge owner, require students to map whose community is affected, whose relationships are at stake, and how the challenge looks from inside those relationships rather than from the position of the challenge owner.",
    purpose: "Ubuntu's foundational question: what does this challenge do to the web of relationships that constitutes this community? This may reveal that the challenge owner's framing is not the primary question.",
  },
  {
    n: "P3",
    name: "Facilitated disruption",
    tradition: "Wynter / transgressive learning",
    accent: "terracotta",
    body: "Design explicit moments in the CBL cycle at which students examine not their solution but the genre of professional they are becoming through this process. The triple-loop question: 'what kind of human being does this educational process produce, and is that adequate for the challenge?'",
    purpose: "The adab tradition offers a productive provocation: if the challenge were framed not as a problem to be solved but as a moral situation requiring wisdom and ethical discernment — what would the CBL design look like? Students need not accept the adab framing; confronting it breaks the assumption that CBL's frame is the only possible grammar for challenge-based formation.",
  },
];

const ACCENT = {
  amber:      { card: "bg-amber-50 border-amber-800/20",    bar: "bg-amber-700",   num: "text-amber-700" },
  terracotta: { card: "bg-orange-50 border-orange-800/20",  bar: "bg-orange-700",  num: "text-orange-700" },
  green:      { card: "bg-green-50 border-green-800/20",    bar: "bg-green-700",   num: "text-green-700" },
};

export default function CBLGenre({ onNavigate }: CBLGenreProps) {
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
            ← Article 09: AI Genre
          </button>
        </div>
      </nav>

      <header className="border-b border-amber-900/20 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">
            Article 10 · Mycelial Learning Framework
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-stone-800 leading-tight mb-4">
            What CBL Actually<br />
            <em className="text-amber-800">Challenges</em>
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mb-6">
            Challenge-Based Learning claims to prepare learners for wicked sustainability challenges. This paper argues that CBL's structural design produces a specific professional genre: the competent, evidence-based, collaborative, sustainability-innovating professional. This is Man 2's 21st-century variant — not its disruption.
          </p>
          <div className="bg-amber-50 border border-amber-800/20 rounded-lg px-5 py-4 max-w-2xl">
            <p className="text-sm font-semibold text-stone-700 font-sans mb-1">The central paradox</p>
            <p className="text-sm text-stone-600 leading-relaxed">
              CBL challenges students with complexity. It does not challenge the genre of human being it is forming. The wicked problem is the stimulus; the Man 2 sustainable professional is the pre-determined destination.
            </p>
          </div>
        </div>
      </header>

      {/* Genre-formation critique */}
      <section className="px-6 md:px-12 py-8 border-b border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 border border-orange-800/15 rounded-lg px-5 py-4">
              <div className="w-6 h-0.5 bg-orange-700 mb-3" />
              <h3 className="font-display text-base font-semibold text-stone-800 mb-2">Why CBL is "as effective as traditional education"</h3>
              <p className="text-sm text-stone-600 leading-relaxed">Huesca et al. (2024), 4,226 students: CBL graduates perform equivalently on national standardised assessments. On Wynter's account this is not a mystery: both approaches conserve the same genre. The genre was already installed before the challenge was assigned.</p>
            </div>
            <div className="bg-orange-50 border border-orange-800/15 rounded-lg px-5 py-4">
              <div className="w-6 h-0.5 bg-orange-700 mb-3" />
              <h3 className="font-display text-base font-semibold text-stone-800 mb-2">Why CBL can disempower</h3>
              <p className="text-sm text-stone-600 leading-relaxed">Sidiropoulos (2022): sustainability education produced "limited empowerment and occasional disempowerment." A formation apparatus that installs the Sustainability Professional simultaneously forecloses other possible dispositions — systemic critique, collective action, refusal to solve problems within the given frame.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Five structural conditions */}
      <main className="px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Five structural conditions that explain the gap</p>
          <div className="space-y-4">
            {CONDITIONS.map((c) => {
              const a = ACCENT[c.accent as keyof typeof ACCENT];
              return (
                <div key={c.n} className={`rounded-xl border ${a.card} px-6 py-5`}>
                  <div className="flex items-start gap-4 mb-3">
                    <span className={`font-display text-2xl font-bold ${a.num} shrink-0 leading-none mt-0.5`}>{c.n}</span>
                    <div>
                      <h2 className="font-display text-lg text-stone-800 mb-2">{c.name}</h2>
                      <p className="text-sm text-stone-700 leading-relaxed mb-2">{c.body}</p>
                      <div className={`border-l-2 ${a.bar} pl-3`}>
                        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide font-sans mb-0.5">Evidence</p>
                        <p className="text-sm text-stone-500 leading-relaxed">{c.evidence}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Three redesign principles */}
      <section className="px-6 md:px-12 py-10 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-6 font-sans">Three redesign principles — from non-Western frameworks</p>
          <div className="space-y-5">
            {PRINCIPLES.map((p) => {
              const a = ACCENT[p.accent as keyof typeof ACCENT];
              return (
                <div key={p.n} className={`rounded-xl border ${a.card} px-6 py-5`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`font-display text-2xl font-bold ${a.num} shrink-0`}>{p.n}</span>
                    <div>
                      <h2 className="font-display text-lg text-stone-800">{p.name}</h2>
                      <p className="text-xs text-stone-400 font-sans mt-0.5">from {p.tradition}</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed mb-3">{p.body}</p>
                  <div className={`border-l-2 ${a.bar} pl-3`}>
                    <p className="text-sm text-stone-500 leading-relaxed italic">{p.purpose}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conclusion provocation */}
      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-800/15 rounded-xl px-6 py-5 max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-2 font-sans">The challenge CBL has not yet taken</p>
            <p className="text-stone-600 text-sm leading-relaxed">
              CBL challenges students with complexity. It has not yet challenged itself — its temporal assumptions, its ownership dynamics, its epistemic monoculture, its genre-formation function. This is the challenge that would make CBL genuinely transformative rather than theoretically ambitious and empirically thin. The willingness to take it depends on whether the institutions that host CBL are willing to question not just their methods but what kind of professionals they are producing and why.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-8 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3 font-sans">Key Sources</p>
          <ul className="space-y-1.5 text-sm text-stone-500 font-sans">
            <li>Wynter, S. (2003). — genre-formation; Bateson mechanism; Man 2's descriptive statement</li>
            <li>Mezirow, J. (1991); Sterling, S. (2010). — transformative learning; disorienting dilemma</li>
            <li>Argyris, C., & Schön, D. (1974, 1978). — single/double/triple-loop learning</li>
            <li>Ibn Khaldun (1377). <em>Muqaddimah</em> — asabiyyah; civilizational temporality; temporal extension principle</li>
            <li>Faruque, M. A. (2024). — Islamic adab; epistemic pluralism; genre-disruption provocation</li>
            <li>Huesca, R. M., et al. (2024). — 4,226 students; CBL "as effective as traditional" on standardised tests</li>
            <li>Olsson, D., et al. (2022). — three-wave longitudinal study; action competence "takes time"; confidence component failure</li>
            <li>Van den Beemt, A., et al. (2023). — global facilitation barrier evidence across four continents</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-amber-900/20 px-6 md:px-12 py-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-stone-400 font-sans">Article 10 · What CBL Actually Challenges · Ferry Boschman · Lectoraat Urban Innovation, Windesheim</p>
          <p className="text-xs text-stone-400 italic font-sans">A Decolonial Paradigm for Educational Science</p>
        </div>
      </footer>
    </div>
  );
}
