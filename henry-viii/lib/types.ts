export type Category =
  | "dynasty"
  | "territory"
  | "church"
  | "war"
  | "diplomacy";

export type EraId =
  | "inheritance"
  | "great-matter"
  | "supreme-head"
  | "last-wars";

export type SiteId =
  | "london"
  | "edinburgh"
  | "dublin"
  | "calais"
  | "boulogne"
  | "tournai"
  | "guines"
  | "flodden"
  | "solway"
  | "portsmouth"
  | "york"
  | "hamptonCourt";

export type RealmId =
  | "england"
  | "wales"
  | "scotland"
  | "ireland"
  | "france"
  | "calais"
  | "boulogne"
  | "tournai";

export interface Era {
  id: EraId;
  name: string;
  from: number;
  to: number;
  blurb: string;
}

export interface ReignEvent {
  id: string;
  year: number;
  date: string;
  title: string;
  category: Category;
  era: EraId;
  summary: string;
  place?: string;
  site?: SiteId;
  /** A realm to outline on the map when the event is active. */
  region?: "wales" | "ireland" | "scotland";
  impact?: string;
}

export interface HoldingSegment {
  from: number;
  to: number;
  label: string;
  tone: "crown" | "autonomy" | "claim";
}

export interface Holding {
  id: RealmId;
  name: string;
  segments: HoldingSegment[];
}

export interface TerritoryState {
  id: RealmId;
  name: string;
  status: string;
  note: string;
  held: boolean;
  tone: "crown" | "autonomy" | "claim" | "foreign";
}
