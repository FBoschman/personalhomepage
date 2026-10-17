/**
 * Builds the static SVG atlas used by the interactive map.
 *
 * Source boundaries:
 *  - England, Scotland, Wales and the island of Ireland: GADM 4.1
 *    (simplified to 12% with mapshaper, ~100 m precision).
 *  - France, the Low Countries and neighbouring coasts: Natural Earth 1:50m.
 *
 * The projection runs at build time, so no mapping library is shipped to the
 * browser. Run `npm run geo` after changing anything in scripts/source.
 */
import fs from "node:fs";
import path from "node:path";
import { geoMercator, geoPath, geoGraticule } from "d3-geo";

const root = path.resolve(import.meta.dirname, "..");
const sourceDir = path.join(root, "scripts", "source");
const outFile = path.join(root, "src", "data", "atlas.json");

const read = (file) =>
  JSON.parse(fs.readFileSync(path.join(sourceDir, file), "utf8"));

const WIDTH = 960;
const HEIGHT = 1120;
const PADDING = 26;

const gb = read("gb.json");
const scotland = read("scotland.json");
const englandWales = read("england-wales.json");
const ireland = read("ireland.json");
const context = read("context.json");

// Only the near continent is relevant to the English crown's horizons.
const CONTEXT_NAMES = new Set([
  "France",
  "Belgium",
  "Netherlands",
  "Jersey",
  "Guernsey",
  "Isle of Man",
]);

const england = gb.features.find((f) => f.properties.NAME_1 === "England");
const wales = gb.features.find((f) => f.properties.NAME_1 === "Wales");

if (!england || !wales) {
  throw new Error("England or Wales missing from scripts/source/gb.json");
}

/** Keep only polygons that touch the European window (drops French Guiana etc.). */
function europeanPolygons(geometry) {
  const box = [-18, 46, 12, 65];
  const overlaps = (ring) => {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const [x, y] of ring) {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
    return maxX > box[0] && minX < box[2] && maxY > box[1] && minY < box[3];
  };

  if (geometry.type === "Polygon") {
    return overlaps(geometry.coordinates[0]) ? geometry : null;
  }
  if (geometry.type === "MultiPolygon") {
    const polygons = geometry.coordinates.filter((p) => overlaps(p[0]));
    if (!polygons.length) return null;
    return { type: "MultiPolygon", coordinates: polygons };
  }
  return geometry;
}

// A geographic window that holds Britain, Ireland, the Pale of Calais and the
// northern French coast without wasting too much space.
const windowShape = {
  type: "MultiPoint",
  coordinates: [
    [-11.2, 49.5],
    [4.9, 49.5],
    [4.9, 59.45],
    [-11.2, 59.45],
    [-5, 55],
    [2, 55],
    [-5, 50],
    [2, 59],
  ],
};

const projection = geoMercator().fitExtent(
  [
    [PADDING, PADDING],
    [WIDTH - PADDING, HEIGHT - PADDING],
  ],
  windowShape,
);

const drawPath = geoPath(projection).digits(1);
const project = (lonLat) => {
  const point = projection(lonLat);
  if (!point) throw new Error(`Cannot project ${lonLat}`);
  return [Math.round(point[0] * 10) / 10, Math.round(point[1] * 10) / 10];
};

const geometryFeature = (geometry, id) => ({
  type: "Feature",
  properties: { id },
  geometry,
});

/**
 * d3-geo reads spherical polygons with a clockwise exterior ring. GeoJSON
 * (and GADM/mapshaper) generally supplies counter-clockwise exteriors, which
 * d3 interprets as the rest of the globe. Normalising here keeps every shape
 * the right way round.
 */
function planarRingArea(ring) {
  let sum = 0;
  for (let i = 0; i < ring.length - 1; i += 1) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[i + 1];
    sum += x1 * y2 - x2 * y1;
  }
  return sum / 2;
}

function orientPolygon(rings) {
  return rings.map((ring, index) => {
    const shouldBeClockwise = index === 0;
    const isClockwise = planarRingArea(ring) < 0;
    return isClockwise === shouldBeClockwise ? ring : [...ring].reverse();
  });
}

function orientGeometry(geometry) {
  if (geometry.type === "Polygon") {
    return {
      ...geometry,
      coordinates: orientPolygon(geometry.coordinates),
    };
  }
  if (geometry.type === "MultiPolygon") {
    return {
      ...geometry,
      coordinates: geometry.coordinates.map(orientPolygon),
    };
  }
  if (geometry.type === "GeometryCollection") {
    return {
      ...geometry,
      geometries: geometry.geometries.map(orientGeometry),
    };
  }
  return geometry;
}

const toPath = (geometry, id) => {
  const d = drawPath(
    geometryFeature(orientGeometry(geometry), id),
  );
  if (!d) throw new Error(`No path generated for ${id}`);
  return d;
};

const points = {
  // labels for realms
  englandLabel: project([-1.7, 52.75]),
  walesLabel: project([-4.55, 52.15]),
  scotlandLabel: project([-4.1, 57.0]),
  irelandLabel: project([-8.55, 53.55]),
  franceLabel: project([2.2, 50.1]),
  // seas
  northSea: project([3.0, 55.9]),
  irishSea: project([-5.25, 53.95]),
  channel: project([-1.75, 50.05]),
  atlantic: project([-10.6, 52.2]),
  // cities and sites
  london: project([-0.1276, 51.5072]),
  edinburgh: project([-3.1883, 55.9533]),
  dublin: project([-6.2603, 53.3498]),
  calais: project([1.8587, 50.9513]),
  boulogne: project([1.6133, 50.7252]),
  tournai: project([3.388, 50.607]),
  guines: project([1.87, 50.87]),
  flodden: project([-2.17, 55.63]),
  solway: project([-3.02, 55.01]),
  portsmouth: project([-1.09, 50.72]),
  york: project([-1.082, 53.958]),
  hamptonCourt: project([-0.337, 51.403]),
};

const overlays = {
  // An approximate outline of the English Pale around Dublin, c. 1509-1540.
  pale: toPath(
    {
      type: "Polygon",
      coordinates: [
        [
          [-6.4, 54.0],
          [-6.72, 53.84],
          [-6.96, 53.64],
          [-7.0, 53.45],
          [-6.94, 53.26],
          [-6.78, 53.06],
          [-6.52, 53.0],
          [-6.18, 53.12],
          [-6.04, 53.32],
          [-6.1, 53.55],
          [-6.25, 53.8],
          [-6.4, 54.0],
        ],
      ],
    },
    "pale",
  ),
  // The Pale of Calais, held by England from 1347 to 1558.
  calais: toPath(
    {
      type: "Polygon",
      coordinates: [
        [
          [1.72, 50.88],
          [1.98, 50.88],
          [2.06, 50.98],
          [1.96, 51.06],
          [1.74, 51.02],
          [1.66, 50.95],
          [1.72, 50.88],
        ],
      ],
    },
    "calais",
  ),
  // The Boulonnais, occupied after the siege of 1544.
  boulogne: toPath(
    {
      type: "Polygon",
      coordinates: [
        [
          [1.52, 50.67],
          [1.69, 50.67],
          [1.75, 50.75],
          [1.66, 50.84],
          [1.51, 50.8],
          [1.45, 50.73],
          [1.52, 50.67],
        ],
      ],
    },
    "boulogne",
  ),
};

// 100 English miles at the latitude of the Channel
const scaleMiles = 100;
const scaleKm = scaleMiles * 1.609344;
const scaleLat = 54;
const lonDelta = scaleKm / (111.32 * Math.cos((scaleLat * Math.PI) / 180));
const scaleStart = project([-4.2, scaleLat]);
const scaleEnd = project([-4.2 + lonDelta, scaleLat]);

const graticule = geoGraticule()
  .step([2, 2])
  .extent([
    [-14, 47.5],
    [9, 62],
  ]);

const atlas = {
  width: WIDTH,
  height: HEIGHT,
  projection: "Mercator",
  window: {
    west: -11.2,
    south: 49.5,
    east: 4.9,
    north: 59.45,
  },
  land: {
    england: toPath(england.geometry, "england"),
    wales: toPath(wales.geometry, "wales"),
    scotland: toPath(scotland, "scotland"),
    englandWales: toPath(englandWales, "englandWales"),
    ireland: toPath(ireland, "ireland"),
  },
  context: context.features
    .filter((feature) => CONTEXT_NAMES.has(feature.properties.NAME))
    .map((feature) => {
      const geometry = europeanPolygons(feature.geometry);
      if (!geometry) return null;
      const id = feature.properties.NAME.toLowerCase().replace(
        /[^a-z]+/g,
        "-",
      );
      return { id, d: toPath(geometry, id) };
    })
    .filter(Boolean),
  graticule: drawPath(graticule()),
  overlays,
  points,
  scaleBar: {
    x1: scaleStart[0],
    y1: scaleStart[1],
    x2: scaleEnd[0],
    y2: scaleEnd[1],
    label: `${scaleMiles} miles`,
  },
};

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(atlas));
const size = fs.statSync(outFile).size;
console.log(
  `Wrote ${path.relative(root, outFile)} (${(size / 1024).toFixed(1)} kB)`,
);
