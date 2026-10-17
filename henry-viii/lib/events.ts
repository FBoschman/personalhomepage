import type { EraId, ReignEvent } from "./types";

export const EVENTS: ReignEvent[] = [
  {
    id: "accession",
    year: 1509,
    date: "21 April",
    title: "A crown without a rival",
    category: "dynasty",
    era: "inheritance",
    summary:
      "Henry VIII succeeds his father at seventeen. He inherits England, the Welsh lordships, the English Pale in Ireland and Calais — a realm secure at home, but still without an heir.",
    place: "Westminster",
    site: "london",
    impact: "Realm inherited",
  },
  {
    id: "holy-league",
    year: 1511,
    date: "November",
    title: "England joins the Holy League",
    category: "diplomacy",
    era: "inheritance",
    summary:
      "Henry joins Pope Julius II and Spain against France, opening the first of his continental wars. The young king wants glory in the field, not just the council chamber.",
    impact: "War with France",
  },
  {
    id: "flodden",
    year: 1513,
    date: "9 September",
    title: "Flodden and the French campaign",
    category: "war",
    era: "inheritance",
    summary:
      "James IV invades England and is killed at Flodden. In France, Henry's army takes Thérouanne and Tournai, briefly widening the English foothold across the Channel.",
    place: "Branxton & Tournai",
    site: "flodden",
    impact: "Tournai occupied",
  },
  {
    id: "tournai",
    year: 1519,
    date: "February",
    title: "Tournai handed back",
    category: "territory",
    era: "inheritance",
    summary:
      "Tournai is restored to France. England's continental foothold shrinks back to the Pale of Calais — a reminder that Henry's conquests were easier to win than to keep.",
    place: "Tournai",
    site: "tournai",
    impact: "Foothold narrows",
  },
  {
    id: "cloth-of-gold",
    year: 1520,
    date: "June",
    title: "Field of the Cloth of Gold",
    category: "diplomacy",
    era: "inheritance",
    summary:
      "Henry and Francis I meet near Calais in a summit of unprecedented splendour. The pageantry masks a rivalry that will outlast both kings.",
    place: "Guînes, near Calais",
    site: "guines",
    impact: "Summit with France",
  },
  {
    id: "defender",
    year: 1521,
    date: "11 October",
    title: "Defender of the Faith",
    category: "church",
    era: "great-matter",
    summary:
      "Leo X awards Henry the title for defending the seven sacraments against Luther. Twelve years later the same king will claim the Church's authority for himself.",
    impact: "Papal title",
  },
  {
    id: "break-with-rome",
    year: 1533,
    date: "Spring–September",
    title: "The break with Rome",
    category: "church",
    era: "great-matter",
    summary:
      "The Act in Restraint of Appeals denies papal jurisdiction in England. Anne Boleyn is crowned in June and Elizabeth is born in September.",
    place: "Westminster",
    site: "london",
    impact: "Royal supremacy begins",
  },
  {
    id: "supremacy",
    year: 1534,
    date: "November",
    title: "Supreme Head of the Church",
    category: "church",
    era: "supreme-head",
    summary:
      "The Act of Supremacy makes Henry the Supreme Head of the Church of England. The Treasons Act turns dissent into treason, and the monasteries become the next target.",
    impact: "Church of England",
  },
  {
    id: "wales",
    year: 1536,
    date: "1536",
    title: "Wales annexed to England",
    category: "territory",
    era: "supreme-head",
    summary:
      "The Laws in Wales Act abolishes the Principality and the Marcher lordships, shires Wales, extends English law and sends Welsh members to Westminster.",
    region: "wales",
    impact: "England + Wales",
  },
  {
    id: "dissolution",
    year: 1536,
    date: "1536–1540",
    title: "The monasteries dissolved",
    category: "church",
    era: "supreme-head",
    summary:
      "Some 800 religious houses are suppressed. Their lands and wealth pass to the Crown, then to the gentry — reshaping ownership and loyalty across England and Wales.",
    impact: "~800 houses",
  },
  {
    id: "pilgrimage",
    year: 1536,
    date: "October",
    title: "The Pilgrimage of Grace",
    category: "war",
    era: "supreme-head",
    summary:
      "A rising in Lincolnshire and the North against the dissolution and the new religious order. It is crushed, and its leaders are executed.",
    place: "York and the North",
    site: "york",
    impact: "Rebellion crushed",
  },
  {
    id: "edward",
    year: 1537,
    date: "12 October",
    title: "A male heir at last",
    category: "dynasty",
    era: "supreme-head",
    summary:
      "Jane Seymour gives birth to Edward, securing the Tudor succession. She dies twelve days later, and Henry's search for dynastic certainty continues.",
    place: "Hampton Court",
    site: "hamptonCourt",
    impact: "Succession secured",
  },
  {
    id: "ireland",
    year: 1541,
    date: "June",
    title: "Ireland raised to a kingdom",
    category: "territory",
    era: "last-wars",
    summary:
      "The Irish Parliament declares Henry King of Ireland. The Crown now claims the whole island, though royal power still reaches little beyond the Pale.",
    region: "ireland",
    impact: "Kingdom of Ireland",
  },
  {
    id: "solway",
    year: 1542,
    date: "24 November",
    title: "Solway Moss",
    category: "war",
    era: "last-wars",
    summary:
      "A Scottish army is routed at Solway Moss. James V dies weeks later and his infant daughter Mary becomes Queen of Scots, opening a new contest over the north.",
    place: "Solway Moss",
    site: "solway",
    impact: "Scotland in crisis",
  },
  {
    id: "boulogne",
    year: 1544,
    date: "14 September",
    title: "Boulogne taken",
    category: "war",
    era: "last-wars",
    summary:
      "After the Rough Wooing burns Edinburgh, Henry captures Boulogne. The town remains English until 1550, a bargaining counter long after his death.",
    place: "Boulogne",
    site: "boulogne",
    impact: "Boulogne occupied",
  },
  {
    id: "mary-rose",
    year: 1545,
    date: "19 July",
    title: "The French invade",
    category: "war",
    era: "last-wars",
    summary:
      "A French fleet enters the Solent. The Mary Rose capsizes and sinks; coastal forts built in the invasion scare become a permanent ring of defence.",
    place: "The Solent",
    site: "portsmouth",
    impact: "Coast fortified",
  },
  {
    id: "death",
    year: 1547,
    date: "28 January",
    title: "The king dies",
    category: "dynasty",
    era: "last-wars",
    summary:
      "Henry dies at Whitehall. Edward VI inherits a realm with Wales absorbed, Ireland claimed as a kingdom, Boulogne occupied and Calais still English.",
    place: "Whitehall",
    site: "london",
    impact: "Realm transformed",
  },
];

export function getEventsForYear(year: number): ReignEvent[] {
  return EVENTS.filter((event) => event.year === year);
}

export function getEventsForEra(era: EraId): ReignEvent[] {
  return EVENTS.filter((event) => event.era === era);
}
