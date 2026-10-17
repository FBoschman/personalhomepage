import raw from "@/src/data/atlas.json";

export type AtlasPointId =
  | "englandLabel"
  | "walesLabel"
  | "scotlandLabel"
  | "irelandLabel"
  | "franceLabel"
  | "northSea"
  | "irishSea"
  | "channel"
  | "atlantic"
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

export interface AtlasData {
  width: number;
  height: number;
  projection: string;
  window: { west: number; south: number; east: number; north: number };
  land: {
    england: string;
    wales: string;
    scotland: string;
    englandWales: string;
    ireland: string;
  };
  context: { id: string; d: string }[];
  graticule: string;
  overlays: { pale: string; calais: string; boulogne: string };
  points: Record<AtlasPointId, [number, number]>;
  scaleBar: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    label: string;
  };
}

export const ATLAS = raw as unknown as AtlasData;

export function atlasPoint(id: AtlasPointId): [number, number] {
  return ATLAS.points[id];
}
