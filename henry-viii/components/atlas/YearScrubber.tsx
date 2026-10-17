"use client";

import { CATEGORY_META, REIGN_END, REIGN_START, REIGN_YEARS } from "@/lib/data";
import { EVENTS } from "@/lib/events";

interface YearScrubberProps {
  year: number;
  onChange: (year: number) => void;
}

const uniqueEventYears = Array.from(
  new Set(EVENTS.map((event) => event.year)),
).sort((a, b) => a - b);

function percent(year: number) {
  return ((year - REIGN_START) / REIGN_YEARS) * 100;
}

export function YearScrubber({ year, onChange }: YearScrubberProps) {
  const progress = percent(year);

  return (
    <div className="border-t border-white/[0.07] px-5 pb-4 pt-3.5">
      <div className="relative">
        <div className="relative mb-2 h-4">
          {uniqueEventYears.map((eventYear) => {
            const events = EVENTS.filter((event) => event.year === eventYear);
            const meta =
              events.length === 1
                ? CATEGORY_META[events[0].category]
                : { hex: "#f0d396" };
            const active = eventYear === year;
            const label = events.map((event) => event.title).join(", ");

            return (
              <button
                key={eventYear}
                type="button"
                aria-label={`Jump to ${eventYear}: ${label}`}
                title={`${eventYear} — ${label}`}
                onClick={() => onChange(eventYear)}
                className="group absolute top-0 flex h-4 -translate-x-1/2 items-center justify-center px-1"
                style={{ left: `${percent(eventYear)}%` }}
              >
                <span
                  className="block rounded-full transition-all duration-200 group-hover:scale-150"
                  style={{
                    width: active ? 7 : 4,
                    height: active ? 7 : 4,
                    backgroundColor: meta.hex,
                    boxShadow: active ? `0 0 10px ${meta.hex}` : "none",
                    opacity: active ? 1 : 0.65,
                  }}
                />
              </button>
            );
          })}
        </div>

        <input
          className="year-range"
          type="range"
          min={REIGN_START}
          max={REIGN_END}
          step={1}
          value={year}
          aria-label="Year of Henry VIII's reign"
          aria-valuetext={`${year}`}
          onChange={(event) => onChange(Number(event.target.value))}
          style={
            {
              "--range-progress": `${progress}%`,
            } as React.CSSProperties
          }
        />

        <div className="relative mt-1 h-4">
          {[1509, 1520, 1533, 1541, 1547].map((tick) => {
            const pct = percent(tick);
            return (
              <span
                key={tick}
                className="absolute top-0 text-[10px] tracking-[0.14em] text-muted/70"
                style={{
                  left: `${pct}%`,
                  transform:
                    pct === 0
                      ? "none"
                      : pct === 100
                        ? "translateX(-100%)"
                        : "translateX(-50%)",
                }}
              >
                {tick}
              </span>
            );
          })}
        </div>
      </div>

      <div className="mt-1 flex items-center justify-between gap-4">
        <p className="text-[9.5px] uppercase tracking-[0.16em] text-muted/55">
          Each mark is a moment in the timeline
        </p>
        <p className="display text-[9px] tracking-[0.14em] text-gold/60">
          Drag or press play
        </p>
      </div>
    </div>
  );
}
