"use client";

import { Pause, Play, RotateCcw, X } from "lucide-react";
import { getEra } from "@/lib/data";
import { getTerritoryState } from "@/lib/territories";
import type { Category, RealmId, ReignEvent, SiteId } from "@/lib/types";
import { KingdomMap } from "./KingdomMap";
import { YearScrubber } from "./YearScrubber";

interface MapCardProps {
  year: number;
  playing: boolean;
  selected: RealmId | null;
  eventsThisYear: ReignEvent[];
  activeRegion?: "wales" | "ireland" | "scotland";
  activeSites: { site: SiteId; category: Category }[];
  onChangeYear: (year: number) => void;
  onSelectRealm: (id: RealmId | null) => void;
  onTogglePlay: () => void;
  onReset: () => void;
}

const TONE_COLOR: Record<string, string> = {
  crown: "#cf6a72",
  autonomy: "#d6b36a",
  claim: "#f0d396",
  foreign: "#7f97a3",
};

export function MapCard({
  year,
  playing,
  selected,
  eventsThisYear,
  activeRegion,
  activeSites,
  onChangeYear,
  onSelectRealm,
  onTogglePlay,
  onReset,
}: MapCardProps) {
  const era = getEra(year);
  const selectedState = selected ? getTerritoryState(selected, year) : null;
  const moment =
    eventsThisYear.length === 1
      ? eventsThisYear[0].title
      : eventsThisYear.length > 1
        ? `${eventsThisYear[0].title} +${eventsThisYear.length - 1} more`
        : era.blurb;

  return (
    <div className="panel panel-corners overflow-hidden" data-year={year}>
      <div className="flex items-start justify-between gap-4 px-5 pb-2.5 pt-4">
        <div className="min-w-0">
          <p className="eyebrow">The king&apos;s dominions</p>
          <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="display text-[3rem] leading-none text-gold-bright">
              {year}
            </span>
            <span className="serif text-lg italic text-parchment-dim">
              {era.name}
            </span>
          </div>
          <p className="mt-1.5 min-h-[28px] max-w-md text-[11px] leading-5 text-muted line-clamp-2">
            {moment}
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-gold/60">
            {era.from}—{era.to}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 pt-1">
          <button
            type="button"
            onClick={onReset}
            aria-label="Reset the map to 1509"
            className="flex h-9 w-9 items-center justify-center border border-white/10 text-muted transition-colors hover:border-gold/40 hover:text-gold"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={onTogglePlay}
            aria-label={playing ? "Pause the reign" : "Play through the reign"}
            aria-pressed={playing}
            className="flex h-9 items-center gap-2 bg-gold px-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-bright"
          >
            {playing ? (
              <Pause className="h-3.5 w-3.5" />
            ) : (
              <Play className="h-3.5 w-3.5" />
            )}
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      <div className="relative h-[clamp(330px,46vh,530px)] w-full overflow-hidden border-y border-white/[0.06] bg-[#081117] lg:h-[clamp(300px,42vh,490px)] xl:h-[clamp(330px,46vh,530px)]">
        <KingdomMap
          year={year}
          selected={selected}
          onSelect={onSelectRealm}
          activeRegion={activeRegion}
          activeSites={activeSites}
        />
        <div className="pointer-events-none absolute left-4 top-3 flex items-center gap-2 text-[8px] uppercase tracking-[0.22em] text-gold/45">
          <span className="h-px w-5 bg-gold/30" />
          Anno {year}
        </div>
      </div>

      <div className="min-h-[58px] px-5 py-2.5">
        {selectedState ? (
          <div className="flex items-start gap-3">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rotate-45"
              style={{ backgroundColor: TONE_COLOR[selectedState.tone] }}
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs text-parchment">
                {selectedState.name}
                <span className="text-muted"> · {selectedState.status}</span>
              </p>
              <p className="mt-1 line-clamp-2 text-[11px] leading-5 text-muted">
                {selectedState.note}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onSelectRealm(null)}
              aria-label="Clear selected territory"
              className="mt-0.5 text-muted/60 transition-colors hover:text-gold"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] leading-5 text-muted/80">
              <span className="text-parchment-dim">Hover or tap</span> a realm.
              Select a holding in the ledger to trace it.
            </p>
            <Legend />
          </div>
        )}
      </div>

      <YearScrubber year={year} onChange={onChangeYear} />
    </div>
  );
}

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] uppercase tracking-[0.1em] text-muted/65">
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-2.5 bg-crimson" /> Crown
      </span>
      <span className="flex items-center gap-1">
        <span
          className="h-1.5 w-2.5 border border-gold/40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(214,179,106,.55) 0 1px, transparent 1px 2px)",
          }}
        />
        Autonomy
      </span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-2.5 border border-dashed border-gold/70" />
        Claim
      </span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        Site
      </span>
    </div>
  );
}
