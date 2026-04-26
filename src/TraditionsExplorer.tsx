import { useState, useCallback } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface Tradition {
  name: string;
  origin: string;
  type: string;
  accent: string;
  desc: string;
  does: string;
  critique: string;
  hybrid: string;
  pills: string[];
  kb_matches: string[];
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const KB_THEMES = [
  { tag: "decolonial-design", text: "Decolonial Design Compass — five recursive provocations interrupting design thinking" },
  { tag: "epistemicide", text: "Santos — epistemicide: local knowledge destroyed by demand to enter Western form" },
  { tag: "CBL", text: "Challenge-based learning — facilitation gap, transformation mechanism" },
  { tag: "DBR", text: "Design-Based Research — iterative, situated, theory-building methodology" },
  { tag: "mycelial-learning", text: "Mycelial learning — non-linear, non-scalable knowledge in urban HBO" },
  { tag: "LLO", text: "LLO-Katalysator hospitality project — Vraagarticulatie Toolkit" },
  { tag: "biesta", text: "Biesta — subjectification vs qualification; learnification" },
  { tag: "boundary-crossing", text: "Boundary crossing — power asymmetry gap (Akkerman & Bakker)" },
  { tag: "pluriversal", text: "Escobar — pluriversal design; relational ontology; multiple worlds" },
  { tag: "ubuntu", text: "Ubuntu epistemology — community as unit of knowledge, not individual" },
  { tag: "transparency-trap", text: "Transparency trap — visibility as epistemicide mechanism (Article 1)" },
  { tag: "cognitive-closure", text: "Kruglanski — cognitive closure under time pressure; design sprint bias" },
];

const TRADITIONS = {
  african: [
    {
      name: "Griot tradition",
      origin: "West Africa — Mande, Wolof, Fula peoples",
      type: "Oral archive",
      accent: "amber",
      desc: "The griot (jeli) is simultaneously historian, genealogist, musician, and political counsellor. Knowledge is held in the body, transmitted through performance, and authorised by lineage rather than text. Truth is not fixed — it is re-performed into the present.",
      does: "The griot form holds what a book cannot: the performative, relational, situated quality of knowledge. Each performance is both archive and argument, enacted in relation to a specific audience, moment, and political situation.",
      critique: "Western academic publishing assumes knowledge is extractable from its knower and stabilisable in text. The griot form exposes this as ideology. When we publish a paper, we perform the griot function within a severely constrained institutional protocol that strips out embodiment, context, and relational authorisation.",
      hybrid: "The long-form podcast is the closest modern hybrid: knowledge circulates through relationship, not credential. Oral history methodology in qualitative research is the most direct scholarly hybrid. Spoken word publishing and community radio retain more of the griot's political function than any academic form.",
      pills: ["Long-form podcast", "Oral history", "Spoken word publishing", "Community radio", "Performative lecture"],
      kb_matches: ["epistemicide", "boundary-crossing", "transparency-trap"],
    },
    {
      name: "Ubuntu epistemology",
      origin: "Southern and central Africa — Bantu philosophical tradition",
      type: "Relational ontology",
      accent: "terracotta",
      desc: "'Umuntu ngumuntu ngabantu' — a person is a person through other persons. Knowledge is not a property of individuals but an emergent property of community. Knowing is always knowing-with, never knowing-alone.",
      does: "Ubuntu relocates the unit of educational analysis from the individual learner to the relational network. Assessment of individual competence is, in Ubuntu terms, an ontological error — it asks about a fiction.",
      critique: "The entire apparatus of Western educational assessment — individual examinations, personal portfolios, credential systems — is built on the liberal individual as the unit of knowledge. Ubuntu makes this visible as a philosophical choice with specific political consequences.",
      hybrid: "Cooperative learning in Western pedagogy is the closest institutional form — but it typically uses group methods to produce individual grades, reinstalling the contradiction. The Reggio Emilia documentation tradition is the most honest hybrid: it documents the learning community, not the child.",
      pills: ["Cooperative learning", "Community-based assessment", "Reggio documentation", "Study circles", "Peer networks"],
      kb_matches: ["ubuntu", "biesta", "CBL", "mycelial-learning"],
    },
  ],
  indigenous: [
    {
      name: "Two-Eyed Seeing (Etuaptmumk)",
      origin: "Mi'kmaw tradition — Elder Albert Marshall, Nova Scotia",
      type: "Epistemic co-presence",
      accent: "sage",
      desc: "Etuaptmumk means holding Indigenous and Western knowledge simultaneously, with neither eye closing. It is not synthesis — which produces a third thing belonging to neither tradition — nor juxtaposition. It is sustained, uncomfortable co-presence.",
      does: "Two-Eyed Seeing refuses the choice between replacing Western knowledge and adding Indigenous knowledge to Western frameworks. Both moves leave Western epistemology intact as the frame. Etuaptmumk insists on equal structural presence without merger.",
      critique: "Western interdisciplinarity always has a primary discipline providing the framework and secondary disciplines contributing data. Even 'decolonised curricula' typically add Indigenous content to an unchanged Western structure — one eye open, one decorative.",
      hybrid: "The dialogic teaching tradition (Bakhtin applied to pedagogy) is the strongest Western hybrid. Counter-mapping practices in geography and community-based participatory research come closest in methodology.",
      pills: ["Dialogic teaching", "Counter-mapping", "Parallel curriculum", "Collaborative ethnography", "Two-voice writing"],
      kb_matches: ["decolonial-design", "pluriversal", "boundary-crossing"],
    },
    {
      name: "Khipu — Andean tactile recording",
      origin: "Andean civilisations — Inca and pre-Inca",
      type: "Embodied text",
      accent: "terracotta",
      desc: "Knotted cord devices encoding census, narrative, calendar, and possibly poetry in a system read through touch as much as vision. Knowledge is literally held in the hand — embodied, three-dimensional, requiring a trained reader whose body is part of the reading apparatus.",
      does: "Khipu challenges the assumption that text is the only legitimate form of complex knowledge encoding. Quantitative data, narratives, genealogies, and possibly emotional content are encoded together — categories Western notation systems keep rigidly separate.",
      critique: "The demand that all academic knowledge be alphanumeric text is a colonial constraint disguised as rigour. The doctoral thesis as a requirement for academic credentialling is the most extreme institutional enforcement of this constraint.",
      hybrid: "Multimodal research methods and data visualisation are partial hybrids. Musical notation and choreographic notation are closer: they encode complex knowledge in non-alphanumeric forms requiring trained embodied reading.",
      pills: ["Data visualisation", "Multimodal research", "Sensory ethnography", "Choreographic notation", "Material culture analysis"],
      kb_matches: ["DBR", "mycelial-learning", "epistemicide"],
    },
  ],
  "south-asian": [
    {
      name: "Guru-shishya parampara",
      origin: "Indian subcontinent — Vedic, Buddhist, and classical traditions",
      type: "Relational transmission",
      accent: "amber",
      desc: "The guru-disciple lineage is a transmission model in which knowledge passes person-to-person through sustained relationship over years. What is transmitted is not only content but the capacity to embody the knowledge — inseparable from the person of the teacher and the relationship.",
      does: "Parampara encodes a theory of knowledge that is relational, temporal, and embodied. You cannot learn from a textbook what requires a relationship that takes years and changes who you are. This is precisely the theory of transformation that educational science cannot account for.",
      critique: "The Western university replaced parampara with the lecture, the textbook, and the credit hour — replacing a relational, temporal model with a transactional, modular one. The PhD supervisory relationship is the vestigial parampara form, structurally apprenticeship but institutionally employment.",
      hybrid: "The studio model in art and architecture schools retains more of the parampara form than lecture-based disciplines. Communities of practice (Wenger) are the academic theorisation of parampara logic.",
      pills: ["Studio model", "Mentoring", "Communities of practice", "Apprenticeship", "PhD supervision"],
      kb_matches: ["boundary-crossing", "CBL", "biesta"],
    },
  ],
  "east-asian": [
    {
      name: "Confucian self-cultivation (xiūshēn)",
      origin: "Chinese philosophical tradition — Confucius, Mencius, Neo-Confucian school",
      type: "Moral-intellectual formation",
      accent: "sage",
      desc: "Xiūshēn — self-cultivation — is the Confucian practice of forming the self through study, ritual, and moral practice. Knowledge is not information acquired but character formed. Learning is inseparable from becoming a different kind of person. The Four Books are not texts to master but mirrors in which the self is continually reformed.",
      does: "The Confucian model insists there is no separation between epistemological development and ethical development. You cannot know well if you are not becoming better. This is a direct challenge to the Western research university's separation of knowledge production from the formation of the knower.",
      critique: "Western higher education produces specialists who know a great deal about a narrow domain and very little about what kind of person that knowledge should form. The credit-hour system, modular curriculum, and employability metrics are structurally incapable of xiūshēn because they have no theory of self-formation as an educational goal.",
      hybrid: "The classical Bildung tradition (Humboldt's university ideal) is the closest Western analog: formation of the whole person through encounter with human culture. The Bildung tradition was largely dismantled by the research university model and is now marginal. Hadot's philosophy-as-way-of-life is the philosophical parallel.",
      pills: ["Bildung tradition", "Whole-person education", "Philosophy as askesis", "Reflective practice", "Ethics of care pedagogy"],
      kb_matches: ["biesta", "decolonial-design", "CBL", "transparency-trap"],
    },
    {
      name: "Zen (Chan) kōan practice",
      origin: "Chinese and Japanese Buddhism — Song Dynasty Chan, Japanese Rinzai Zen",
      type: "Apophatic pedagogy",
      accent: "terracotta",
      desc: "'What is the sound of one hand clapping?' is not a riddle with a hidden answer — it is a device for breaking the student's reliance on the very cognitive apparatus they are trying to use. The kōan exhausts conceptual thinking to force a different kind of understanding. The teacher does not explain; the student must arrive.",
      does: "Kōan practice proposes that the most important learning cannot be transmitted propositionally. It must be arrived at through a process that breaks the learner's existing conceptual structures — structurally equivalent to Mezirow's 'disorienting dilemma', but preceded it by centuries and is far more radical.",
      critique: "Western pedagogy transmits propositions and assesses whether the student can reproduce or apply them. Kōan practice proposes that transmitting propositions is precisely what blocks the deepest learning. The examination system is, in this framework, a technology for producing sophisticated non-understanding.",
      hybrid: "The Socratic method is a partial hybrid — but Socratic questioning aims at a correct answer, while the kōan has none. The Decolonial Design Compass's recursive provocations are structurally kōan-like: they do not have correct answers and are designed to keep disrupting rather than resolve.",
      pills: ["Socratic method", "Problem-based learning", "Compass provocations", "Disorienting dilemma", "Negative capability"],
      kb_matches: ["decolonial-design", "CBL", "cognitive-closure", "boundary-crossing"],
    },
  ],
  islamic: [
    {
      name: "Majlis al-'ilm — the knowledge gathering",
      origin: "Islamic golden age — Abbasid Baghdad, Fatimid Cairo, Andalus",
      type: "Dialogic assembly",
      accent: "amber",
      desc: "The majlis was the primary knowledge institution of the Islamic golden age — a gathering of scholars, poets, officials, and interested participants around a learned host, in which knowledge was produced through dialogue, debate, and mutual questioning. The Bayt al-Hikma (House of Wisdom) operated as a network of majālis. Knowledge was not delivered but disputed into existence.",
      does: "The majlis produces knowledge through adversarial hospitality: the host creates the conditions for genuine disagreement. This is structurally different from both the Western lecture and the seminar. In the majlis, the outcome is genuinely open — participants including the host may leave with changed positions.",
      critique: "The Western conference paper presentation is a degraded majlis form: one person transmits for 20 minutes, then receives filtered questions for 10. The adversarial function has been replaced by a politeness norm. Academic peer review is a slow, asynchronous, anonymous majlis — but anonymity removes the relational accountability that gave the majlis its epistemic force.",
      hybrid: "The unconference and BarCamp formats are the closest contemporary institutional hybrids: genuinely open agenda, emergent discussions, no predetermined authority. Critical pedagogy seminars (Freirean circles) are the closest in political intent.",
      pills: ["Unconference / BarCamp", "Philosophy colloquium", "Freirean circle", "Law school Socratic", "Open-agenda seminar"],
      kb_matches: ["CBL", "boundary-crossing", "decolonial-design", "transparency-trap"],
    },
    {
      name: "Ijāza — authorised transmission",
      origin: "Islamic scholarship — hadith transmission, jurisprudence, Sufi lineage",
      type: "Relational credentialling",
      accent: "sage",
      desc: "The ijāza is a certificate of authorisation — not certifying that the recipient has passed examinations, but a statement by a named scholar that this person is authorised to transmit specific texts or knowledge. The authority flows through the chain of transmission (isnād): to hold an ijāza is to be a node in a living network of responsibility.",
      does: "The ijāza model makes knowledge authorisation relational and traceable. You are authorised to transmit not because you passed a test but because a named person who received the knowledge from a named lineage trusts you with it. Credibility is earned through relationship and demonstrated by being entrusted, not by scoring above a threshold.",
      critique: "The Western university degree certifies examination performance, not relational trustworthiness. A student can graduate with first-class honours having no relationship with any of their teachers. The ijāza model would find this indistinguishable from not knowing: knowledge without traceable relationship is knowledge without authority.",
      hybrid: "The PhD, at its best, retains something of the ijāza: the supervisor vouches for the candidate before the examination board. But institutional framing — grades, completion criteria, funding timelines — systematically undermines the relational function.",
      pills: ["PhD supervision (at best)", "Professional accreditation", "Reference letters", "Lineage-based credentialling", "Open peer commentary"],
      kb_matches: ["boundary-crossing", "biesta", "DBR", "LLO"],
    },
    {
      name: "Ibn Khaldun's 'Asabiyya",
      origin: "North African Islamic historiography — Tunis, 14th century",
      type: "Social epistemology",
      accent: "terracotta",
      desc: "'Asabiyya (group solidarity, social cohesion) is Ibn Khaldun's concept for the social force that makes collective knowledge production possible. In the Muqaddimah, he argues that learning and intellectual flourishing are social achievements — they require a community with sufficient solidarity to sustain the long-term investment that serious knowledge demands.",
      does: "Ibn Khaldun proposes that the conditions for knowledge are social before they are cognitive. You cannot sustain a research programme without a community that values and reproduces the conditions for it. This is a pre-modern sociology of knowledge that anticipates Kuhn's paradigms, Bourdieu's academic field, and Wenger's communities of practice.",
      critique: "The contemporary research university in an era of massification, casualisation, and NPM audit culture is systematically eroding the 'asabiyya conditions for serious intellectual work. Grant-competitive, individually assessed, output-measured research is not a community with solidarity — it is a competitive market with academic labour.",
      hybrid: "Research institutes and labs with strong internal culture are the closest contemporary form. The Dutch lectoraat system — with its relatively stable teams and practitioner-researcher integration — is a structural attempt to create 'asabiyya conditions within a university system that otherwise prevents them.",
      pills: ["Research institute culture", "Lectoraat model", "Research consortium", "Slow scholarship movement", "Long-term collaboration"],
      kb_matches: ["LLO", "CBL", "boundary-crossing", "mycelial-learning", "epistemicide"],
    },
  ],
  mesoamerican: [
    {
      name: "Calpulli — communal learning houses",
      origin: "Nahua / Aztec civilisation",
      type: "Collective institution",
      accent: "sage",
      desc: "Calpulli were neighbourhood-based communal institutions combining governance, land stewardship, and education. The telpochcalli educated young people in craft, warfare, ceremony, and civic responsibility — not as separate disciplines but as aspects of a unified practice of belonging to a place and community.",
      does: "The calpulli model makes the separation of education from governance, work, and ceremony visible as an ideological choice. In this model, education is not preparation for community — it is a form of community. What is learned cannot be separated from the relational and physical context in which it is practised.",
      critique: "The Western university physically and institutionally separates learning from governance, work, and ceremony — producing a learner who knows abstractly and acts concretely. The competence-based qualification framework reproduces the separation at the assessment level.",
      hybrid: "Place-based education and land-based learning movements are the closest Western hybrids. Service-learning and community-engaged scholarship reach toward this but are institutionally contained as add-ons. The Zapatista autonomous schools are the live continuation of this tradition.",
      pills: ["Place-based education", "Service learning", "Land-based learning", "Democratic schools", "Escuelas autónomas"],
      kb_matches: ["decolonial-design", "CBL", "LLO"],
    },
  ],
};

const BIASES = [
  {
    name: "Northern academic framing",
    severity: "high",
    text: "This agent was built by a Dutch researcher working in a Dutch HBO institution. The traditions described are filtered through Northern epistemological categories — 'pedagogy,' 'transmission,' 'critique' — that may not correspond to how these traditions understand themselves. Ubuntu, griot, and Two-Eyed Seeing are described in the vocabulary of Western educational theory. This is a form of translation that unavoidably distorts.",
  },
  {
    name: "Representation without access",
    severity: "high",
    text: "The traditions described here are represented through secondary literature — primarily English-language academic texts about these traditions, not primary sources produced within them. The traditions as described here are already translated, filtered, and institutionally domesticated versions of living practices.",
  },
  {
    name: "Instrumentalisation risk",
    severity: "high",
    text: "Using non-Western traditions as 'inspiration' for a decolonial pedagogy argument within a Northern academic book is a structurally ambiguous act. It may be genuine intellectual engagement; it may be aesthetic borrowing that leaves the originating traditions' political conditions unchanged. The agent cannot resolve this tension — it can only name it.",
  },
  {
    name: "Self-referential circularity",
    severity: "medium",
    text: "The agent's critique of Western media forms is itself written in Western academic prose, argues using Western theoretical vocabulary (Bourdieu, Fricker, Gadamer), and will be cited in a book published by a Northern academic press. The critique of the academy is produced by and for the academy.",
  },
  {
    name: "Completeness illusion",
    severity: "medium",
    text: "The agent covers seven tradition clusters. This creates an impression of comprehensiveness that is false. Major traditions not covered include: West African Ifa divination; Andean Pachamama cosmology; Aboriginal Australian songlines; Polynesian wayfinding knowledge; Persian Sufi pedagogical traditions; Jewish Talmudic argumentation as a non-linear knowledge form.",
  },
  {
    name: "Hybridity optimism",
    severity: "watch",
    text: "The 'hybridity' sections identify Western forms that come closest to non-Western traditions. This framing risks suggesting the distance is bridgeable by choosing the right Western form. It may not be. Some of what the griot tradition does cannot be approximated by any Western form. The hybrid section should be read as 'closest approximation,' not 'equivalent.'",
  },
];

const REGIONS = [
  { value: "all", label: "All traditions" },
  { value: "african", label: "African philosophy" },
  { value: "indigenous", label: "Indigenous Americas" },
  { value: "south-asian", label: "South Asian / Vedic" },
  { value: "east-asian", label: "East Asian" },
  { value: "islamic", label: "Islamic / Arabic golden age" },
  { value: "mesoamerican", label: "Mesoamerican" },
];

const LENSES = [
  { value: "all", label: "All lenses" },
  { value: "pedagogy", label: "Pedagogical form" },
  { value: "transmission", label: "Knowledge transmission" },
  { value: "critique", label: "Critical / political" },
];

// ─── ACCENT COLOURS ──────────────────────────────────────────────────────────

const ACCENTS = {
  amber:      { bg: "bg-amber-50",   border: "border-amber-700/30",    pill: "bg-amber-900/10 text-amber-800 border-amber-700/25",    badge: "bg-amber-100 text-amber-800",     dot: "bg-amber-600" },
  terracotta: { bg: "bg-orange-50",  border: "border-orange-700/30",   pill: "bg-orange-900/10 text-orange-800 border-orange-700/25", badge: "bg-orange-100 text-orange-800",   dot: "bg-orange-600" },
  sage:       { bg: "bg-green-50",   border: "border-green-700/30",    pill: "bg-green-900/10 text-green-800 border-green-700/25",    badge: "bg-green-100 text-green-800",     dot: "bg-green-600" },
};

const SEVERITY_STYLES = {
  high:   "bg-red-50 text-red-800 border border-red-300",
  medium: "bg-amber-50 text-amber-800 border border-amber-300",
  watch:  "bg-green-50 text-green-800 border border-green-300",
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getResults(region: string, lens: string, query: string = "", sessionKB: string[] = [], showKB: boolean = false): Tradition[] {
  const regions = region === "all" ? Object.keys(TRADITIONS) : [region];
  let results = regions.flatMap((r) => TRADITIONS[r as keyof typeof TRADITIONS] || []);

  // Apply lens filter
  if (lens === "pedagogy") {
    results = results.filter((t) => t.type?.toLowerCase().includes("pedagog"));
  } else if (lens === "transmission") {
    results = results.filter((t) => t.type?.toLowerCase().includes("transmit") || t.type?.toLowerCase().includes("relational"));
  } else if (lens === "critique") {
    results = results.filter((t) => t.critique);
  }

  // Apply text search
  if (query.trim()) {
    results = results.filter((t) =>
      [t.name, t.origin, t.type, t.desc, t.does, t.critique, t.hybrid]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }

  // Apply KB matching if requested
  if (showKB && sessionKB.length > 0) {
    results = results.filter((t) =>
      t.kb_matches?.some((m: string) => sessionKB.includes(m)) ||
      sessionKB.some((s: string) => [t.name, t.origin, t.type, t.desc].join(" ").toLowerCase().includes(s.toLowerCase()))
    );
  }

  return results;
}

function generateFUNGI(tradition: Tradition, region: string, lens: string): string {
  const today = new Date().toISOString().split("T")[0];
  const links = (tradition.kb_matches || []).map((m) => `  - "[[${m}]]"`).join("\n");
  return `---
title: "${tradition.name} — ${tradition.type}"
type: concept
status: draft
created: ${today}
region: ${region}
lens: ${lens}
links:
${links || '  - "[[decolonial-design]]"'}
tags:
  - ${region}
  - non-western-tradition
  - communication-form
  - decolonial-design
source: ""
attribution: "Vocation-as-community-knowledge concept attr. Gert Jan van Stam (in development)"
---

# ${tradition.name}

**Origin**: ${tradition.origin}  
**Type**: ${tradition.type}

## Core description

${tradition.desc}

## What this tradition does that Western forms cannot

${tradition.does}

## Critique of Western media forms

${tradition.critique}

## Hybridity and inspiration

${tradition.hybrid}

**Western hybrid forms**: ${tradition.pills.join(", ")}

## Vault connections

${(tradition.kb_matches || []).map((m) => `- [[${m}]]`).join("\n")}

## One question before promoting this note

Is this tradition described here from sufficient primary source depth, or only through secondary (Northern academic) literature? If the latter, identify a primary or community-produced source before promoting to concept status.

## FUNGI processing note

This note was generated as raw input from the Traditions Explorer agent. It has not been validated against primary sources. Human curation required before vault promotion. The output represents a vocation contribution (attr. Gert Jan van Stam) — its value is in what it opens for the research community, not in what it claims.`;
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

interface PillProps {
  children: string;
  accent?: string;
}

function Pill({ children, accent = "amber" }: PillProps) {
  const accentClass = ACCENTS[accent as keyof typeof ACCENTS]?.pill || ACCENTS.amber.pill;
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border ${accentClass}`}>
      {children}
    </span>
  );
}

interface SectionLabelProps {
  children: string;
}

function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-[10px] font-semibold tracking-widest uppercase text-amber-800/70 mt-4 mb-1.5 first:mt-0 font-sans">
      {children}
    </p>
  );
}

function KBBadge() {
  return (
    <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-100 text-green-800 border border-green-700/30 ml-2 align-middle font-sans">
      KB
    </span>
  );
}

interface TraditionCardProps {
  tradition: Tradition;
  showKB: boolean;
  onFUNGI: (tradition: Tradition) => void;
}

function TraditionCard({ tradition, showKB, onFUNGI }: TraditionCardProps) {
  const [open, setOpen] = useState(false);
  const a = ACCENTS[tradition.accent as keyof typeof ACCENTS] || ACCENTS.amber;

  return (
    <div className={`rounded-xl border ${a.border} ${a.bg} overflow-hidden transition-all duration-200`}>
      {/* Header */}
      <button
        className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 hover:brightness-95 transition-all"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display text-lg text-stone-800 leading-snug">
              {tradition.name}
            </h3>
            {showKB && tradition.kb_matches?.length > 0 && <KBBadge />}
            <span className={`text-xs px-2 py-0.5 rounded font-sans ${a.badge} shrink-0`}>
              {tradition.type}
            </span>
          </div>
          <p className="text-xs text-stone-500 mt-1 font-sans">{tradition.origin}</p>
        </div>
        <span className={`text-stone-500 mt-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {/* Body */}
      {open && (
        <div className="px-5 pb-5 border-t border-stone-200 pt-4 space-y-4">
          <div>
            <SectionLabel>What this tradition is</SectionLabel>
            <p className="text-sm text-stone-700 leading-relaxed">{tradition.desc}</p>
          </div>

          <div>
            <SectionLabel>What it does that Western forms cannot</SectionLabel>
            <p className="text-sm text-stone-700 leading-relaxed">{tradition.does}</p>
          </div>

          <div className="rounded-lg bg-stone-100 border border-stone-200 px-4 py-3">
            <SectionLabel>Critique of Western media forms</SectionLabel>
            <p className="text-sm text-stone-600 leading-relaxed">{tradition.critique}</p>
          </div>

          <div className={`border-l-2 ${a.border} pl-4`}>
            <SectionLabel>Hybridity and inspiration</SectionLabel>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">{tradition.hybrid}</p>
            <div className="flex flex-wrap gap-1.5">
              {tradition.pills.map((p) => (
                <Pill key={p} accent={tradition.accent}>{p}</Pill>
              ))}
            </div>
          </div>

          {showKB && tradition.kb_matches?.length > 0 && (
            <div className="rounded-lg bg-green-50 border border-green-700/20 px-4 py-3">
              <SectionLabel>Vault connections</SectionLabel>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {tradition.kb_matches.map((m) => (
                  <span key={m} className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800 border border-green-700/30 font-sans">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => onFUNGI(tradition)}
            className="text-xs px-3 py-1.5 rounded border border-stone-400 text-stone-500 hover:text-stone-800 hover:border-stone-600 transition-colors font-sans"
          >
            Generate FUNGI note ↗
          </button>
        </div>
      )}
    </div>
  );
}

function BiasPanel() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-stone-600 leading-relaxed mb-4">
        These biases are structural, not incidental. They cannot be fully corrected — only named, tracked, and partially compensated for.
      </p>
      {BIASES.map((b) => (
        <div key={b.name} className="rounded-xl border border-stone-200 bg-amber-50/60 px-5 py-4">
          <div className="flex items-center justify-between gap-3 mb-2">
            <h4 className="font-display font-medium text-stone-800 text-sm">{b.name}</h4>
            <span className={`text-xs px-2 py-0.5 rounded font-sans ${SEVERITY_STYLES[b.severity as keyof typeof SEVERITY_STYLES]}`}>
              {b.severity}
            </span>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed">{b.text}</p>
        </div>
      ))}
    </div>
  );
}

interface KBPanelProps {
  sessionEntries: string[];
  onAdd: (entry: string) => void;
  onClear: () => void;
}

function KBPanel({ sessionEntries, onAdd, onClear }: KBPanelProps) {
  const [input, setInput] = useState<string>("");

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-3">
          Active vault themes
        </p>
        <div className="space-y-2">
          {KB_THEMES.map((k) => (
            <div key={k.tag} className="flex gap-3 items-start">
              <span className="text-xs px-2 py-0.5 rounded bg-stone-200 text-stone-700 border border-stone-300 shrink-0 mt-0.5 font-sans">
                {k.tag}
              </span>
              <span className="text-xs text-stone-600 leading-relaxed">{k.text}</span>
            </div>
          ))}
          {sessionEntries.map((k, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-800 border border-green-700/30 shrink-0 mt-0.5 font-sans">
                session
              </span>
              <span className="text-xs text-stone-600 leading-relaxed">{k}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-2">
          Add a note fragment or concept
        </p>
        <textarea
          className="w-full bg-amber-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-700 placeholder-stone-400 resize-none focus:outline-none focus:border-amber-600 font-sans"
          rows={4}
          placeholder="Paste a fleeting note, concept fragment, or idea from your vault..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => { if (input.trim()) { onAdd(input.trim()); setInput(""); } }}
            className="text-xs px-3 py-1.5 rounded border border-stone-400 text-stone-600 hover:text-stone-900 hover:border-stone-600 transition-colors font-sans"
          >
            Add to KB ↗
          </button>
          <button
            onClick={onClear}
            className="text-xs px-3 py-1.5 rounded border border-stone-300 text-stone-400 hover:text-stone-600 transition-colors font-sans"
          >
            Clear session
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-amber-700/20 bg-amber-50 px-5 py-4">
        <p className="text-xs font-semibold tracking-widest uppercase text-amber-800 mb-2">
          On vocation and community knowledge
        </p>
        <p className="text-xs text-stone-600 leading-relaxed">
          The output of this agent is not primarily a production artefact but a contribution to a living knowledge commons held by a community of researchers. The note's value is not in what it claims but in what it opens for the community that receives it. Curation by a human member of that community is not optional — it is the act through which knowledge becomes communal rather than merely archived. The researcher's vocation is enacted in this act of contribution, not in the credential it eventually produces.
        </p>
        <p className="text-xs text-stone-500 mt-2">
          Concept in development — attributed to <span className="text-stone-600">Gert Jan van Stam</span>
        </p>
      </div>
    </div>
  );
}

interface FUNGIModalProps {
  tradition: Tradition;
  region: string;
  lens: string;
  onClose: () => void;
}

function FUNGIModal({ tradition, region, lens, onClose }: FUNGIModalProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const text = generateFUNGI(tradition, region, lens);

  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-amber-50 border border-stone-300 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 font-sans">FUNGI note</p>
            <p className="text-sm text-stone-700 mt-0.5 font-sans">
              02_concepts/{slugify(tradition.name)}.md
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={copy}
              className="text-xs px-3 py-1.5 rounded border border-stone-400 text-stone-600 hover:text-stone-900 transition-colors font-sans"
            >
              {copied ? "copied ✓" : "copy"}
            </button>
            <button
              onClick={onClose}
              className="text-xs px-3 py-1.5 rounded border border-stone-400 text-stone-600 hover:text-stone-900 transition-colors font-sans"
            >
              close
            </button>
          </div>
        </div>
        <div className="overflow-y-auto flex-1 p-5 bg-stone-50 rounded-b-none">
          <pre className="text-xs text-stone-600 font-mono leading-relaxed whitespace-pre-wrap">
            {text}
          </pre>
        </div>
        <div className="px-5 py-3 border-t border-stone-200 bg-amber-100/60 rounded-b-2xl">
          <p className="text-xs text-stone-500 font-sans">
            Human curation required before vault promotion. Raw input only — not a validated knowledge claim.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

const TABS = [
  { id: "explore", label: "Explore" },
  { id: "kb", label: "Knowledge base" },
  { id: "bias", label: "Bias audit" },
];

export default function TraditionsExplorer() {
  const [tab, setTab] = useState<string>("explore");
  const [region, setRegion] = useState<string>("all");
  const [lens, setLens] = useState<string>("all");
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Tradition[]>([]);
  const [showKB, setShowKB] = useState<boolean>(false);
  const [sessionKB, setSessionKB] = useState<string[]>([]);
  const [fungiTarget, setFungiTarget] = useState<Tradition | null>(null);
  const [searched, setSearched] = useState<boolean>(false);

  const runSearch = useCallback((withKB: boolean) => {
    const filtered = getResults(region, lens, query, sessionKB, withKB);
    setResults(filtered);
    setShowKB(withKB);
    setSearched(true);
  }, [region, lens, query, sessionKB]);

  return (
    <div className="min-h-screen text-stone-800" style={{ fontFamily: "'Source Serif 4', Georgia, serif", backgroundColor: "#f5ede0" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Source+Serif+4:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>

      {fungiTarget && (
        <FUNGIModal
          tradition={fungiTarget}
          region={region}
          lens={lens}
          onClose={() => setFungiTarget(null)}
        />
      )}

      {/* Hero */}
      <header className="border-b border-amber-900/20 px-6 md:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-800/70 mb-3">
            Lectoraat Urban Innovation · Windesheim
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-stone-800 leading-tight mb-3">
            Communication Traditions<br />
            <span className="italic text-amber-800">Explorer</span>
          </h1>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl">
            A research instrument for surfacing non-Western knowledge traditions, critiquing their relationship to Western media forms, and generating vault-ready notes for decolonial pedagogy research.
          </p>
          <p className="text-xs text-stone-500 mt-4">
            Part of the research programme: <em>A Decolonial Paradigm for Educational Science</em> · Ferry Boschman
          </p>
        </div>
      </header>

      {/* Tab bar */}
      <div className="border-b border-amber-900/20 px-6 md:px-12 bg-amber-50/50">
        <div className="max-w-4xl mx-auto flex gap-0">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors font-sans ${
                tab === t.id
                  ? "border-amber-700 text-amber-800"
                  : "border-transparent text-stone-500 hover:text-stone-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="px-6 md:px-12 py-8">
        <div className="max-w-4xl mx-auto">

          {/* EXPLORE */}
          {tab === "explore" && (
            <div>
              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[10px] font-semibold tracking-widest uppercase text-stone-500 block mb-1.5 font-sans">
                    Region / tradition
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-amber-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-700 focus:outline-none focus:border-amber-600 font-sans"
                  >
                    {REGIONS.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-semibold tracking-widest uppercase text-stone-500 block mb-1.5 font-sans">
                    Focus lens
                  </label>
                  <select
                    value={lens}
                    onChange={(e) => setLens(e.target.value)}
                    className="w-full bg-amber-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-700 focus:outline-none focus:border-amber-600 font-sans"
                  >
                    {LENSES.map((l) => (
                      <option key={l.value} value={l.value}>{l.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-[10px] font-semibold tracking-widest uppercase text-stone-500 block mb-1.5 font-sans">
                  Search or paste a concept / vault fragment
                </label>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && runSearch(showKB)}
                  placeholder="e.g. 'griots as knowledge keepers' or paste a fleeting note fragment..."
                  className="w-full bg-amber-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-600 font-sans"
                />
              </div>

              <div className="flex gap-2 mb-8 flex-wrap">
                <button
                  onClick={() => runSearch(false)}
                  className="text-sm px-4 py-2 rounded border border-stone-400 text-stone-600 hover:border-amber-700 hover:text-amber-800 transition-colors font-sans"
                >
                  Search
                </button>
                <button
                  onClick={() => runSearch(true)}
                  className="text-sm px-4 py-2 rounded border border-green-700/40 text-green-800 hover:border-green-700 hover:bg-green-50 transition-colors font-sans"
                >
                  Search + match KB
                </button>
              </div>

              {/* Results */}
              {!searched && (
                <p className="text-sm text-stone-500 text-center py-12">
                  Select a region and lens, then press Search.
                </p>
              )}

              {searched && results.length === 0 && (
                <p className="text-sm text-stone-500 text-center py-12">
                  No traditions found for this combination. Try broadening the region or removing the search query.
                </p>
              )}

              {results.length > 0 && (
                <>
                  <p className="text-xs text-stone-500 mb-4 font-sans">
                    {results.length} tradition{results.length !== 1 ? "s" : ""} found
                    {showKB ? " · KB matching active" : ""}
                  </p>
                  <div className="space-y-3">
                    {results.map((t) => (
                      <TraditionCard
                        key={t.name}
                        tradition={t}
                        showKB={showKB}
                        onFUNGI={setFungiTarget}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* KB */}
          {tab === "kb" && (
            <KBPanel
              sessionEntries={sessionKB}
              onAdd={(v) => setSessionKB((prev) => [...prev, v])}
              onClear={() => setSessionKB([])}
            />
          )}

          {/* BIAS */}
          {tab === "bias" && <BiasPanel />}

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-900/20 px-6 md:px-12 py-6 mt-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-stone-500 font-sans">
            Traditions Explorer · Lectoraat Urban Innovation, Windesheim ·{" "}
            <span className="italic">A Decolonial Paradigm for Educational Science</span>
          </p>
          <p className="text-xs text-stone-500 font-sans">
            Vocation-as-community-knowledge concept attr.{" "}
            <span className="text-stone-600">Gert Jan van Stam</span>
          </p>
        </div>
      </footer>
    </div>
  );
}