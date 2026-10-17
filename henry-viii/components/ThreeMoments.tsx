import { ATLAS, atlasPoint } from "@/lib/atlas";
import { SectionHeading } from "./SectionHeading";

interface Moment {
  year: number;
  title: string;
  copy: string;
  notes: string[];
}

const MOMENTS: Moment[] = [
  {
    year: 1509,
    title: "The inheritance",
    copy: "A secure crown, a Welsh patchwork of lordships, a narrow English Pale in Ireland and one enduring port in France.",
    notes: ["England", "Wales · Principality", "Ireland · Pale", "Calais"],
  },
  {
    year: 1536,
    title: "The union",
    copy: "Wales is shired and absorbed into the English legal and parliamentary system, even as the dissolution begins to transform the Church.",
    notes: ["England + Wales", "Pale of Calais", "Monasteries dissolving"],
  },
  {
    year: 1547,
    title: "The legacy",
    copy: "Wales is united, Ireland is claimed as a kingdom, Boulogne is occupied and Calais remains English. The map of the realm has been redrawn.",
    notes: ["United Wales", "Kingdom of Ireland", "Boulogne", "Calais"],
  },
];

export function ThreeMoments() {
  return (
    <section
      id="moments"
      className="relative mx-auto max-w-[1440px] scroll-mt-20 px-5 pt-24 sm:px-8"
    >
      <SectionHeading
        index="II"
        label="Three moments"
        title={
          <>
            One reign,{" "}
            <span className="serif font-normal italic text-gold-bright">
              three shapes
            </span>
          </>
        }
        intro="The same islands, thirty-eight years apart. These snapshots show what changed between the crown Henry inherited and the one he left to his son."
        aside={
          <div className="display flex items-center gap-3 text-[10px] tracking-[0.16em] text-muted">
            <span className="text-gold">1509</span>
            <span className="h-px w-6 bg-gold/30" />
            <span className="text-gold">1536</span>
            <span className="h-px w-6 bg-gold/30" />
            <span className="text-gold">1547</span>
          </div>
        }
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {MOMENTS.map((moment) => (
          <article
            key={moment.year}
            className="panel group overflow-hidden transition-colors hover:border-gold/30"
          >
            <div className="relative h-[270px] overflow-hidden border-b border-white/[0.06] bg-[#081117]">
              <MiniMap year={moment.year} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081117]/70 via-transparent to-transparent" />
              <span className="display absolute left-4 top-3 text-[9px] uppercase tracking-[0.2em] text-gold/60">
                Anno {moment.year}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="display text-3xl text-gold-bright">
                  {moment.year}
                </span>
                <span className="text-[9px] uppercase tracking-[0.16em] text-muted/60">
                  {moment.year === 1547 ? "At his death" : "The realm"}
                </span>
              </div>
              <h3 className="serif mt-2 text-2xl text-parchment">
                {moment.title}
              </h3>
              <p className="mt-2 text-[12px] leading-6 text-muted">
                {moment.copy}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {moment.notes.map((note) => (
                  <span
                    key={note}
                    className="border border-gold/15 bg-gold/[0.04] px-2 py-1 text-[9.5px] uppercase tracking-[0.1em] text-parchment-dim/80"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MiniMap({ year }: { year: number }) {
  const walesUnited = year >= 1536;
  const irelandClaimed = year >= 1541;
  const boulogneHeld = year >= 1544;
  const patternId = `mini-claim-${year}`;
  const walesId = `mini-wales-${year}`;
  const london = atlasPoint("london");
  const edinburgh = atlasPoint("edinburgh");
  const dublin = atlasPoint("dublin");

  return (
    <svg
      viewBox="40 0 780 1020"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-label={`Map of the realm in ${year}`}
      role="img"
    >
      <defs>
        <pattern
          id={patternId}
          width="9"
          height="9"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-35)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="9"
            stroke="#d6b36a"
            strokeWidth="1.1"
            opacity="0.55"
          />
        </pattern>
        <pattern
          id={walesId}
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="8" height="8" fill="#77313d" />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="8"
            stroke="#e3c27d"
            strokeWidth="1.2"
            opacity="0.42"
          />
        </pattern>
      </defs>

      <rect x="0" y="0" width="960" height="1120" fill="#081117" />
      <g fill="#1a252b" stroke="#2d3a41" strokeWidth="1">
        {ATLAS.context.map((region) => (
          <path key={region.id} d={region.d} />
        ))}
      </g>

      <path
        d={ATLAS.land.scotland}
        fill="#24333c"
        stroke="#495b65"
        strokeWidth="1.2"
      />
      <path
        d={ATLAS.land.ireland}
        fill="#25352d"
        stroke="#475b4f"
        strokeWidth="1.2"
      />
      {irelandClaimed ? (
        <path
          d={ATLAS.land.ireland}
          fill={`url(#${patternId})`}
          opacity="0.55"
        />
      ) : null}
      <path
        d={ATLAS.overlays.pale}
        fill="#a83946"
        stroke="#e6c883"
        strokeWidth="1"
      />

      {walesUnited ? (
        <path
          d={ATLAS.land.englandWales}
          fill="#9d3340"
          stroke="#d8b46c"
          strokeWidth="1.2"
        />
      ) : (
        <>
          <path
            d={ATLAS.land.england}
            fill="#9d3340"
            stroke="#d8b46c"
            strokeWidth="1.2"
          />
          <path
            d={ATLAS.land.wales}
            fill={`url(#${walesId})`}
            stroke="#c79f5f"
            strokeWidth="1.2"
            strokeDasharray="5 4"
          />
        </>
      )}

      <path
        d={ATLAS.overlays.calais}
        fill="#a83946"
        stroke="#f0d396"
        strokeWidth="1.2"
      />
      {boulogneHeld ? (
        <path
          d={ATLAS.overlays.boulogne}
          fill="#a83946"
          stroke="#f0d396"
          strokeWidth="1.2"
        />
      ) : null}

      <circle cx={london[0]} cy={london[1]} r="4.2" fill="#f0d396" />
      <circle cx={edinburgh[0]} cy={edinburgh[1]} r="3" fill="#cf6a72" />
      <circle cx={dublin[0]} cy={dublin[1]} r="3" fill="#cf6a72" />
    </svg>
  );
}
