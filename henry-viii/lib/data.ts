import type { Category, Era, Holding } from "./types";

export const REIGN_START = 1509;
export const REIGN_END = 1547;
export const REIGN_YEARS = REIGN_END - REIGN_START;

export const CATEGORY_META: Record<
  Category,
  { label: string; hex: string; text: string; bg: string; border: string }
> = {
  dynasty: {
    label: "Dynasty",
    hex: "#d9b45b",
    text: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
  },
  territory: {
    label: "Territory",
    hex: "#c2545f",
    text: "text-crimson-soft",
    bg: "bg-crimson/15",
    border: "border-crimson/40",
  },
  church: {
    label: "Church",
    hex: "#b5a6d4",
    text: "text-lavender",
    bg: "bg-lavender/10",
    border: "border-lavender/30",
  },
  war: {
    label: "War & revolt",
    hex: "#d08a5a",
    text: "text-rust",
    bg: "bg-rust/10",
    border: "border-rust/30",
  },
  diplomacy: {
    label: "Diplomacy",
    hex: "#7fb3aa",
    text: "text-teal",
    bg: "bg-teal/10",
    border: "border-teal/30",
  },
};

export const ERAS: Era[] = [
  {
    id: "inheritance",
    name: "The Renaissance prince",
    from: 1509,
    to: 1520,
    blurb:
      "A young king inherits a secure crown and spends it on war, magnificence and the dream of France.",
  },
  {
    id: "great-matter",
    name: "The great matter",
    from: 1521,
    to: 1533,
    blurb:
      "The need for a male heir becomes a constitutional crisis, and the Pope's authority begins to fracture.",
  },
  {
    id: "supreme-head",
    name: "Supreme head",
    from: 1534,
    to: 1540,
    blurb:
      "Henry takes the Church into his own hands, dissolves the monasteries and binds Wales to England.",
  },
  {
    id: "last-wars",
    name: "The last wars",
    from: 1541,
    to: 1547,
    blurb:
      "Ireland is raised to a kingdom while war returns to Scotland, the Channel and the French coast.",
  },
];

export const HOLDINGS: Holding[] = [
  {
    id: "england",
    name: "England",
    segments: [{ from: 1509, to: 1547, label: "Crown", tone: "crown" }],
  },
  {
    id: "wales",
    name: "Wales",
    segments: [
      {
        from: 1509,
        to: 1535,
        label: "Principality & Marches",
        tone: "autonomy",
      },
      {
        from: 1536,
        to: 1547,
        label: "United with England",
        tone: "crown",
      },
    ],
  },
  {
    id: "ireland",
    name: "Ireland",
    segments: [
      {
        from: 1509,
        to: 1540,
        label: "Lordship · the Pale",
        tone: "autonomy",
      },
      {
        from: 1541,
        to: 1547,
        label: "Kingdom · claimed",
        tone: "claim",
      },
    ],
  },
  {
    id: "calais",
    name: "Calais",
    segments: [
      { from: 1509, to: 1547, label: "English Pale", tone: "crown" },
    ],
  },
  {
    id: "tournai",
    name: "Tournai",
    segments: [{ from: 1513, to: 1518, label: "Occupied", tone: "crown" }],
  },
  {
    id: "boulogne",
    name: "Boulogne",
    segments: [{ from: 1544, to: 1547, label: "Occupied", tone: "crown" }],
  },
];

export function getEra(year: number): Era {
  return (
    ERAS.find((era) => year >= era.from && year <= era.to) ??
    ERAS[ERAS.length - 1]
  );
}
