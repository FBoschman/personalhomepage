"use client";

import { useState } from "react";
import { MapPin, Pause, Play } from "lucide-react";
import { CATEGORY_META, ERAS } from "@/lib/data";
import { EVENTS } from "@/lib/events";
import type { Category, ReignEvent } from "@/lib/types";

interface ReignTimelineProps {
  year: number;
  playing: boolean;
  onSelectEvent: (event: ReignEvent) => void;
  onTogglePlay: () => void;
}

type Filter = "all" | Category;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  ...Object.entries(CATEGORY_META).map(([id, meta]) => ({
    id: id as Category,
    label: meta.label,
  })),
];

export function ReignTimeline({
  year,
  playing,
  onSelectEvent,
  onTogglePlay,
}: ReignTimelineProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = EVENTS.filter(
    (event) => filter === "all" || event.category === filter,
  );

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-gold/15 pb-4">
        <div>
          <p className="eyebrow">The timeline</p>
          <h3 className="display mt-2 text-2xl text-parchment">
            Seventeen moments
          </h3>
        </div>
        <button
          type="button"
          onClick={onTogglePlay}
          className="group inline-flex items-center gap-2 border border-gold/25 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:border-gold/60 hover:bg-gold/5"
        >
          {playing ? (
            <Pause className="h-3 w-3" />
          ) : (
            <Play className="h-3 w-3" />
          )}
          {playing ? "Pause reign" : "Play reign"}
        </button>
      </div>

      <p className="mt-3 text-xs leading-6 text-muted/80">
        Select a moment to move the map to its year. The map stays with you as
        you read.
      </p>

      <div
        className="mt-4 flex flex-wrap gap-1.5"
        role="group"
        aria-label="Filter timeline by theme"
      >
        {FILTERS.map((item) => {
          const count =
            item.id === "all"
              ? EVENTS.length
              : EVENTS.filter((event) => event.category === item.id).length;
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item.id)}
              className={`inline-flex items-center gap-1.5 border px-2.5 py-1.5 text-[10px] uppercase tracking-[0.12em] transition-colors ${
                active
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-white/10 text-muted hover:border-white/25 hover:text-parchment"
              }`}
            >
              {item.label}
              <span className={active ? "text-gold/60" : "text-muted/50"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filter !== "all" ? (
        <p className="mt-2 text-[9px] uppercase tracking-[0.14em] text-muted/50">
          Showing {visible.length} of {EVENTS.length} moments
        </p>
      ) : null}

      <div className="mt-7">
        {ERAS.map((era) => {
          const events = visible.filter((event) => event.era === era.id);
          if (!events.length) return null;

          return (
            <section key={era.id} className="mt-8 first:mt-0">
              <div className="sticky top-16 z-20 -mx-2 bg-ink/90 px-2 py-3 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="display text-[9px] tracking-[0.14em] text-gold/60">
                    {era.from}—{era.to}
                  </span>
                  <h4 className="display text-[11px] uppercase tracking-[0.2em] text-parchment">
                    {era.name}
                  </h4>
                  <span className="h-px flex-1 bg-gold/10" />
                </div>
                <p className="mt-1.5 max-w-md text-[11px] leading-5 text-muted/70">
                  {era.blurb}
                </p>
              </div>

              <div className="relative mt-3">
                <span
                  className="absolute bottom-2 left-[52px] top-2 w-px bg-gradient-to-b from-gold/30 via-gold/10 to-transparent"
                  aria-hidden="true"
                />
                {events.map((event) => (
                  <EventRow
                    key={event.id}
                    event={event}
                    active={event.year === year}
                    onSelect={() => onSelectEvent(event)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function EventRow({
  event,
  active,
  onSelect,
}: {
  event: ReignEvent;
  active: boolean;
  onSelect: () => void;
}) {
  const meta = CATEGORY_META[event.category];

  return (
    <button
      type="button"
      onClick={onSelect}
      data-event={event.id}
      aria-current={active ? "true" : undefined}
      className="group relative flex w-full gap-4 pb-5 text-left"
    >
      <span className="w-12 shrink-0 pt-1.5 text-right">
        <span
          className={`display block text-lg transition-colors ${
            active ? "text-gold-bright" : "text-gold/75"
          }`}
        >
          {event.year}
        </span>
        <span className="mt-0.5 block text-[9px] uppercase tracking-[0.08em] text-muted/60">
          {event.date}
        </span>
      </span>

      <span
        aria-hidden="true"
        className="absolute left-[47px] top-3 z-10 h-2.5 w-2.5 rotate-45 border transition-all"
        style={{
          borderColor: meta.hex,
          backgroundColor: active ? meta.hex : "#081117",
          boxShadow: active ? `0 0 12px ${meta.hex}` : "none",
        }}
      />

      <span
        className={`ml-2 flex-1 rounded-sm border py-3 pl-3.5 pr-3 transition-all duration-300 ${
          active
            ? "border-gold/35 bg-gold/[0.055]"
            : "border-white/[0.06] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.035]"
        }`}
        style={{ borderLeftColor: meta.hex, borderLeftWidth: 2 }}
      >
        <span className="flex items-center gap-2">
          <span
            className={`text-[9.5px] uppercase tracking-[0.16em] ${meta.text}`}
          >
            {meta.label}
          </span>
          {event.impact ? (
            <span className="ml-auto text-[9px] uppercase tracking-[0.1em] text-muted/60">
              {event.impact}
            </span>
          ) : null}
        </span>

        <span className="serif mt-1 block text-xl leading-tight text-parchment transition-colors group-hover:text-gold-bright">
          {event.title}
        </span>
        <span className="mt-1.5 block text-[12.5px] leading-6 text-muted">
          {event.summary}
        </span>

        {event.place ? (
          <span className="mt-2.5 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.1em] text-muted/60">
            <MapPin className="h-2.5 w-2.5" />
            {event.place}
          </span>
        ) : null}
      </span>
    </button>
  );
}
