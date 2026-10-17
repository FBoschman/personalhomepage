"use client";

import { HOLDINGS, REIGN_START, REIGN_YEARS } from "@/lib/data";
import { getTerritoryState } from "@/lib/territories";
import type { RealmId } from "@/lib/types";

interface HoldingsLedgerProps {
  year: number;
  selected: RealmId | null;
  onSelect: (id: RealmId) => void;
}

const TONE_CLASS: Record<string, string> = {
  crown: "border border-crimson-soft/25 bg-crimson/85",
  autonomy: "border border-gold/40 bg-gold/20",
  claim: "border border-dashed border-gold/60 bg-gold/25",
};

export function HoldingsLedger({
  year,
  selected,
  onSelect,
}: HoldingsLedgerProps) {
  const marker = ((year - REIGN_START) / REIGN_YEARS) * 100;

  return (
    <div className="panel-soft px-4 py-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="eyebrow">Realm ledger</p>
          <h3 className="display mt-1.5 text-lg text-parchment">
            What the Crown held
          </h3>
        </div>
        <span className="display pt-1 text-[10px] tracking-[0.16em] text-gold/70">
          1509—1547
        </span>
      </div>

      <div className="relative mt-4">
        {HOLDINGS.map((holding) => {
          const state = getTerritoryState(holding.id, year);
          const isSelected = selected === holding.id;

          return (
            <button
              key={holding.id}
              type="button"
              onClick={() => onSelect(holding.id)}
              aria-pressed={isSelected}
              aria-label={`${holding.name}: ${state.status}`}
              title={`${holding.name} — ${state.status}`}
              className={`group grid w-full grid-cols-[64px_1fr] items-center gap-3 border-b border-white/[0.045] py-2 text-left transition-opacity last:border-0 ${
                state.held ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              <span
                className={`text-[11.5px] transition-colors ${
                  isSelected
                    ? "text-gold"
                    : "text-parchment-dim group-hover:text-parchment"
                }`}
              >
                {holding.name}
              </span>

              <span className="relative block h-5">
                <span className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/[0.055]" />
                {holding.segments.map((segment) => {
                  const left =
                    ((segment.from - REIGN_START) / REIGN_YEARS) * 100;
                  const width =
                    ((Math.min(segment.to, 1547) - segment.from) / REIGN_YEARS) *
                    100;
                  return (
                    <span
                      key={`${holding.id}-${segment.from}`}
                      title={`${segment.from}–${segment.to}: ${segment.label}`}
                      className={`absolute top-1/2 h-2.5 -translate-y-1/2 rounded-[2px] transition-all duration-500 ${TONE_CLASS[segment.tone]}`}
                      style={{
                        left: `${left}%`,
                        width: `${width}%`,
                        backgroundImage:
                          segment.tone === "autonomy"
                            ? "repeating-linear-gradient(45deg, rgba(214,179,106,.35) 0 1.5px, rgba(214,179,106,.06) 1.5px 4px)"
                            : undefined,
                      }}
                    />
                  );
                })}
                <span
                  className="pointer-events-none absolute top-0 bottom-0 z-10 w-px bg-gold-bright/80"
                  style={{ left: `${marker}%` }}
                />
                <span
                  className="pointer-events-none absolute top-1/2 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold-bright bg-ink"
                  style={{ left: `${marker}%` }}
                />
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[9px] uppercase tracking-[0.14em] text-muted/70">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-3 rounded-[1px] bg-crimson" /> Crown
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="h-1.5 w-3 rounded-[1px] border border-gold/40 bg-gold/20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(214,179,106,.45) 0 1px, transparent 1px 3px)",
            }}
          />
          Autonomy
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-3 rounded-[1px] border border-dashed border-gold/60" />
          Claim
        </span>
        <span className="ml-auto normal-case tracking-normal text-muted/50">
          Select a row to inspect
        </span>
      </div>
    </div>
  );
}
