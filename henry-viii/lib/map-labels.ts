import type { AtlasPointId } from "./atlas";
import type { SiteId } from "./types";

export interface SiteMeta {
  point: AtlasPointId;
  label: string;
  dx: number;
  dy: number;
  anchor: "start" | "middle" | "end";
  kind: "city" | "holding" | "event";
}

export const SITE_META: Record<SiteId, SiteMeta> = {
  london: {
    point: "london",
    label: "London",
    dx: 11,
    dy: -7,
    anchor: "start",
    kind: "city",
  },
  edinburgh: {
    point: "edinburgh",
    label: "Edinburgh",
    dx: 11,
    dy: 4,
    anchor: "start",
    kind: "city",
  },
  dublin: {
    point: "dublin",
    label: "Dublin",
    dx: -8,
    dy: 15,
    anchor: "end",
    kind: "city",
  },
  calais: {
    point: "calais",
    label: "Calais",
    dx: 11,
    dy: -10,
    anchor: "start",
    kind: "holding",
  },
  boulogne: {
    point: "boulogne",
    label: "Boulogne",
    dx: -10,
    dy: 20,
    anchor: "end",
    kind: "holding",
  },
  tournai: {
    point: "tournai",
    label: "Tournai",
    dx: 10,
    dy: 13,
    anchor: "start",
    kind: "holding",
  },
  guines: {
    point: "guines",
    label: "Guînes",
    dx: 14,
    dy: 22,
    anchor: "start",
    kind: "event",
  },
  flodden: {
    point: "flodden",
    label: "Flodden",
    dx: 12,
    dy: 4,
    anchor: "start",
    kind: "event",
  },
  solway: {
    point: "solway",
    label: "Solway Moss",
    dx: 11,
    dy: 17,
    anchor: "start",
    kind: "event",
  },
  portsmouth: {
    point: "portsmouth",
    label: "The Solent",
    dx: -9,
    dy: 15,
    anchor: "end",
    kind: "event",
  },
  york: {
    point: "york",
    label: "York",
    dx: 11,
    dy: 2,
    anchor: "start",
    kind: "event",
  },
  hamptonCourt: {
    point: "hamptonCourt",
    label: "Hampton Court",
    dx: -10,
    dy: 15,
    anchor: "end",
    kind: "event",
  },
};

export const REALM_LABELS: {
  id: "england" | "wales" | "scotland" | "ireland" | "france";
  point: AtlasPointId;
  text: string;
  size: number;
}[] = [
  { id: "england", point: "englandLabel", text: "ENGLAND", size: 27 },
  { id: "scotland", point: "scotlandLabel", text: "SCOTLAND", size: 23 },
  { id: "ireland", point: "irelandLabel", text: "IRELAND", size: 23 },
  { id: "wales", point: "walesLabel", text: "WALES", size: 16 },
  { id: "france", point: "franceLabel", text: "FRANCE", size: 18 },
];

export const SEA_LABELS: {
  point: AtlasPointId;
  text: string;
  size: number;
  rotate?: number;
}[] = [
  { point: "atlantic", text: "ATLANTIC OCEAN", size: 16, rotate: -72 },
  { point: "northSea", text: "NORTH SEA", size: 16, rotate: 68 },
  { point: "irishSea", text: "IRISH SEA", size: 13, rotate: -8 },
  { point: "channel", text: "ENGLISH CHANNEL", size: 13, rotate: -4 },
];
