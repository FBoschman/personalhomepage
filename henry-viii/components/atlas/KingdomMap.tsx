"use client";

import { useId, useState } from "react";
import type { KeyboardEvent } from "react";
import { ATLAS, atlasPoint } from "@/lib/atlas";
import { CATEGORY_META } from "@/lib/data";
import { getTerritoryState } from "@/lib/territories";
import { REALM_LABELS, SEA_LABELS, SITE_META } from "@/lib/map-labels";
import type { Category, RealmId, SiteId } from "@/lib/types";

interface ActiveSite {
  site: SiteId;
  category: Category;
}

interface KingdomMapProps {
  year: number;
  selected: RealmId | null;
  onSelect: (id: RealmId | null) => void;
  activeRegion?: "wales" | "ireland" | "scotland";
  activeSites?: ActiveSite[];
}

export function KingdomMap({
  year,
  selected,
  onSelect,
  activeRegion,
  activeSites = [],
}: KingdomMapProps) {
  const [hovered, setHovered] = useState<RealmId | null>(null);
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const walesUnited = year >= 1536;
  const irelandClaimed = year >= 1541;
  const tournaiHeld = year >= 1513 && year < 1519;
  const boulogneHeld = year >= 1544;

  const activeId = hovered ?? selected;
  const activeSiteIds = new Set(activeSites.map((item) => item.site));

  const select = (id: RealmId) => {
    onSelect(selected === id ? null : id);
  };

  const interactiveProps = (id: RealmId) => ({
    role: "button" as const,
    tabIndex: 0,
    "aria-pressed": selected === id,
    "aria-label": `${getTerritoryState(id, year).name}: ${
      getTerritoryState(id, year).status
    }`,
    onClick: () => select(id),
    onKeyDown: (event: KeyboardEvent<SVGPathElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select(id);
      }
    },
    onPointerEnter: () => setHovered(id),
    onPointerLeave: () => setHovered(null),
    style: { pointerEvents: "auto" as const },
  });

  return (
    <svg
      viewBox={`0 0 ${ATLAS.width} ${ATLAS.height}`}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      role="group"
      aria-labelledby={`${uid}-map-title ${uid}-map-desc`}
    >
      <title id={`${uid}-map-title`}>
        {`Map of the British Isles and northern France in ${year}`}
      </title>
      <desc id={`${uid}-map-desc`}>
        England is shown in red, with Wales, Ireland, Scotland, the Pale of
        Calais and English holdings in France. Use the year controls to see the
        realm change through Henry VIII&apos;s reign.
      </desc>

      <defs>
        <linearGradient id={`${uid}-sea`} x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#0d2029" />
          <stop offset="48%" stopColor="#0a161d" />
          <stop offset="100%" stopColor="#071016" />
        </linearGradient>
        <radialGradient id={`${uid}-sea-glow`} cx="48%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#1d3a44" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#10252e" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#081117" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-crown`} x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#bd4f5b" />
          <stop offset="48%" stopColor="#9d3340" />
          <stop offset="100%" stopColor="#73212d" />
        </linearGradient>
        <linearGradient id={`${uid}-crown-soft`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8d3844" />
          <stop offset="100%" stopColor="#60232e" />
        </linearGradient>
        <pattern
          id={`${uid}-wales-hatch`}
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
        <pattern
          id={`${uid}-claim-hatch`}
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
            strokeWidth="1"
            opacity="0.5"
          />
        </pattern>
        <filter id={`${uid}-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect
        width={ATLAS.width}
        height={ATLAS.height}
        fill={`url(#${uid}-sea)`}
      />
      <rect
        width={ATLAS.width}
        height={ATLAS.height}
        fill={`url(#${uid}-sea-glow)`}
      />
      <path
        d={ATLAS.graticule}
        fill="none"
        stroke="rgba(214,179,106,0.09)"
        strokeWidth="0.8"
      />

      <MapBody
        uid={uid}
        year={year}
        selected={selected}
        activeId={activeId}
        walesUnited={walesUnited}
        irelandClaimed={irelandClaimed}
        tournaiHeld={tournaiHeld}
        boulogneHeld={boulogneHeld}
        interactiveProps={interactiveProps}
        activeRegion={activeRegion}
      />

      <MapLabels
        activeId={activeId}
        irelandClaimed={irelandClaimed}
      />
      <MapMarkers
        activeSiteIds={activeSiteIds}
        activeSites={activeSites}
        tournaiHeld={tournaiHeld}
        boulogneHeld={boulogneHeld}
        selected={selected}
        select={select}
      />

      <Compass uid={uid} />
      <ScaleBar />
    </svg>
  );
}

interface MapBodyProps {
  uid: string;
  year: number;
  selected: RealmId | null;
  activeId: RealmId | null;
  walesUnited: boolean;
  irelandClaimed: boolean;
  tournaiHeld: boolean;
  boulogneHeld: boolean;
  activeRegion?: "wales" | "ireland" | "scotland";
  interactiveProps: (id: RealmId) => {
    role: "button";
    tabIndex: number;
    "aria-pressed": boolean;
    "aria-label": string;
    onClick: () => void;
    onKeyDown: (event: KeyboardEvent<SVGPathElement>) => void;
    onPointerEnter: () => void;
    onPointerLeave: () => void;
    style: { pointerEvents: "auto" };
  };
}

function MapBody({
  uid,
  activeId,
  walesUnited,
  irelandClaimed,
  boulogneHeld,
  activeRegion,
  interactiveProps,
}: MapBodyProps) {
  const london = atlasPoint("london");
  const calais = atlasPoint("calais");
  const dublin = atlasPoint("dublin");

  return (
    <g>
      <g fill="#182329" stroke="#2c3a42" strokeWidth="1">
        {ATLAS.context.map((region) =>
          region.id === "france" ? (
            <path
              key={region.id}
              d={region.d}
              {...interactiveProps("france")}
              className="map-region"
              data-active={activeId === "france"}
              fill={activeId === "france" ? "#202c33" : "#182329"}
            />
          ) : (
            <path key={region.id} d={region.d} />
          ),
        )}
      </g>

      <g
        stroke="rgba(214,179,106,0.22)"
        strokeWidth="1"
        strokeDasharray="2 7"
        fill="none"
      >
        <line x1={london[0]} y1={london[1]} x2={calais[0]} y2={calais[1]} />
        <line x1={london[0]} y1={london[1]} x2={dublin[0]} y2={dublin[1]} />
      </g>

      <path
        d={ATLAS.land.scotland}
        fill="#24333c"
        stroke={activeId === "scotland" ? "#f0d396" : "#495b65"}
        strokeWidth={activeId === "scotland" ? 1.8 : 1.2}
        className="map-region"
        data-active={activeId === "scotland"}
        {...interactiveProps("scotland")}
      />
      {activeRegion === "scotland" ? (
        <path
          d={ATLAS.land.scotland}
          fill="none"
          stroke="#f0d396"
          strokeWidth="2.6"
          className="region-pulse"
          filter={`url(#${uid}-glow)`}
          pointerEvents="none"
        />
      ) : null}

      <path
        d={ATLAS.land.ireland}
        fill="#25352d"
        stroke={activeId === "ireland" ? "#f0d396" : "#475b4f"}
        strokeWidth={activeId === "ireland" ? 1.8 : 1.2}
        className="map-region"
        data-active={activeId === "ireland"}
        {...interactiveProps("ireland")}
      />
      {irelandClaimed ? (
        <path
          d={ATLAS.land.ireland}
          fill={`url(#${uid}-claim-hatch)`}
          opacity="0.5"
          pointerEvents="none"
        />
      ) : null}
      <path
        d={ATLAS.overlays.pale}
        fill="#a83946"
        stroke="#e6c883"
        strokeWidth="1.1"
        opacity="0.94"
        pointerEvents="none"
      />
      {activeRegion === "ireland" ? (
        <path
          d={ATLAS.land.ireland}
          fill="none"
          stroke="#f0d396"
          strokeWidth="2.6"
          className="region-pulse"
          filter={`url(#${uid}-glow)`}
          pointerEvents="none"
        />
      ) : null}

      <CrownLands
        uid={uid}
        activeId={activeId}
        walesUnited={walesUnited}
        boulogneHeld={boulogneHeld}
        activeRegion={activeRegion}
        interactiveProps={interactiveProps}
      />
    </g>
  );
}

interface MapLabelsProps {
  activeId: RealmId | null;
  irelandClaimed: boolean;
}

function MapLabels({ activeId, irelandClaimed }: MapLabelsProps) {
  return (
    <g>
      {REALM_LABELS.map((label) => {
        const [x, y] = atlasPoint(label.point);
        const isActive = activeId === label.id;
        const sub =
          label.id === "scotland"
            ? "INDEPENDENT"
            : label.id === "ireland"
              ? irelandClaimed
                ? "KINGDOM · 1541"
                : "LORDSHIP"
              : null;

        return (
          <g key={label.id} opacity={isActive ? 1 : 0.92}>
            <text
              x={x}
              y={y}
              textAnchor="middle"
              className="map-label"
              fontSize={label.size}
              fill={isActive ? "#f6dfae" : undefined}
              paintOrder="stroke"
              stroke="#081117"
              strokeWidth="3.4"
              strokeOpacity="0.55"
            >
              {label.text}
            </text>
            {sub ? (
              <text
                x={x}
                y={y + label.size * 0.72}
                textAnchor="middle"
                className="map-label-soft"
                fontSize={10}
                letterSpacing="0.16em"
              >
                {sub}
              </text>
            ) : null}
          </g>
        );
      })}

      {SEA_LABELS.map((label) => {
        const [x, y] = atlasPoint(label.point);
        return (
          <text
            key={label.point}
            x={x}
            y={y}
            textAnchor="middle"
            className="map-label-soft"
            fontSize={label.size}
            transform={label.rotate ? `rotate(${label.rotate} ${x} ${y})` : undefined}
            opacity="0.9"
          >
            {label.text}
          </text>
        );
      })}

      <text
        x={atlasPoint("dublin")[0] + 20}
        y={atlasPoint("dublin")[1] + 6}
        className="map-site-label"
        fill="rgba(240,211,150,0.72)"
        fontSize="15"
        letterSpacing="0.14em"
      >
        THE PALE
      </text>
    </g>
  );
}

interface MapMarkersProps {
  activeSiteIds: Set<SiteId>;
  activeSites: ActiveSite[];
  tournaiHeld: boolean;
  boulogneHeld: boolean;
  selected: RealmId | null;
  select: (id: RealmId) => void;
}

function MapMarkers({
  activeSiteIds,
  activeSites,
  tournaiHeld,
  boulogneHeld,
  selected,
  select,
}: MapMarkersProps) {
  const eventSites: SiteId[] = [
    "flodden",
    "solway",
    "portsmouth",
    "york",
    "hamptonCourt",
    "guines",
  ];

  const categoryFor = (site: SiteId) =>
    activeSites.find((item) => item.site === site)?.category;

  return (
    <g>
      {eventSites.map((site) => {
        const meta = SITE_META[site];
        const [x, y] = atlasPoint(meta.point);
        const active = activeSiteIds.has(site);
        const category = categoryFor(site);
        const color = category ? CATEGORY_META[category].hex : "#d6b36a";

        return (
          <g key={site}>
            <circle
              cx={x}
              cy={y}
              r={active ? 6 : 3.2}
              fill={active ? color : "rgba(214,179,106,0.45)"}
              stroke="#081117"
              strokeWidth="1"
            />
            {active ? (
              <>
                <circle
                  cx={x}
                  cy={y}
                  r="12"
                  fill="none"
                  stroke={color}
                  strokeWidth="1.4"
                  className="marker-pulse"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="12"
                  fill="none"
                  stroke={color}
                  strokeWidth="1.4"
                  className="marker-pulse-delayed"
                />
                <text
                  x={x + meta.dx}
                  y={y + meta.dy}
                  textAnchor={meta.anchor}
                  className="map-site-label"
                  fill={color}
                  fontSize="22"
                  fontWeight="600"
                >
                  {meta.label}
                </text>
              </>
            ) : null}
          </g>
        );
      })}

      {(["london", "edinburgh", "dublin"] as SiteId[]).map((site) => {
        const meta = SITE_META[site];
        const [x, y] = atlasPoint(meta.point);
        const active = activeSiteIds.has(site);
        const activeCategory = categoryFor(site);
        const color = activeCategory
          ? CATEGORY_META[activeCategory].hex
          : "#f0d396";

        return (
          <g key={site}>
            {active ? (
              <>
                <circle
                  cx={x}
                  cy={y}
                  r="14"
                  fill="none"
                  stroke={color}
                  strokeWidth="1.4"
                  className="marker-pulse"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="14"
                  fill="none"
                  stroke={color}
                  strokeWidth="1.4"
                  className="marker-pulse-delayed"
                />
              </>
            ) : null}
            <circle
              cx={x}
              cy={y}
              r="4.6"
              fill="#f0d396"
              stroke="#081117"
              strokeWidth="1.6"
            />
            <text
              x={x + meta.dx}
              y={y + meta.dy}
              textAnchor={meta.anchor}
              className="map-site-label"
              fill="rgba(237,226,203,0.8)"
              fontSize="22"
            >
              {meta.label}
            </text>
          </g>
        );
      })}

      <HoldingMarker
        site="calais"
        label="Calais"
        selected={selected === "calais"}
        active={activeSiteIds.has("calais")}
        onSelect={() => select("calais")}
      />
      {boulogneHeld ? (
        <HoldingMarker
          site="boulogne"
          label="Boulogne"
          selected={selected === "boulogne"}
          active={activeSiteIds.has("boulogne")}
          onSelect={() => select("boulogne")}
        />
      ) : null}
      {tournaiHeld ? (
        <HoldingMarker
          site="tournai"
          label="Tournai"
          selected={selected === "tournai"}
          active={activeSiteIds.has("tournai")}
          onSelect={() => select("tournai")}
        />
      ) : null}
      {!tournaiHeld && activeSiteIds.has("tournai") ? (
        <EventMarker site="tournai" category={categoryFor("tournai")} />
      ) : null}
    </g>
  );
}

interface HoldingMarkerProps {
  site: SiteId;
  label: string;
  selected: boolean;
  active: boolean;
  onSelect: () => void;
}

function EventMarker({
  site,
  category,
}: {
  site: SiteId;
  category?: Category;
}) {
  const meta = SITE_META[site];
  const [x, y] = atlasPoint(meta.point);
  const color = category ? CATEGORY_META[category].hex : "#d6b36a";

  return (
    <g pointerEvents="none">
      <circle
        cx={x}
        cy={y}
        r="14"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        className="marker-pulse"
      />
      <circle
        cx={x}
        cy={y}
        r="6"
        fill={color}
        stroke="#081117"
        strokeWidth="1.2"
      />
      <text
        x={x + meta.dx}
        y={y + meta.dy}
        textAnchor={meta.anchor}
        className="map-site-label"
        fill={color}
        fontSize="22"
        fontWeight="600"
      >
        {meta.label}
      </text>
    </g>
  );
}

function HoldingMarker({
  site,
  label,
  selected,
  active,
  onSelect,
}: HoldingMarkerProps) {
  const meta = SITE_META[site];
  const [x, y] = atlasPoint(meta.point);

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`${label}, English Crown holding`}
      aria-pressed={selected}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      style={{ cursor: "pointer" }}
      transform={`translate(${x} ${y})`}
    >
      {active ? (
        <circle
          r="15"
          fill="none"
          stroke="#f0d396"
          strokeWidth="1.4"
          className="marker-pulse"
        />
      ) : null}
      <circle
        r={selected ? 11 : 9}
        fill="rgba(168,57,70,0.35)"
        stroke={selected ? "#f0d396" : "rgba(214,179,106,0.55)"}
        strokeWidth="1"
      />
      <path
        d="M0 -4.6 L4.6 0 L0 4.6 L-4.6 0 Z"
        fill={selected ? "#f6dfae" : "#e3c27d"}
        stroke="#081117"
        strokeWidth="0.8"
      />
      <text
        x={meta.dx}
        y={meta.dy}
        textAnchor={meta.anchor}
        className="map-site-label"
        fill={selected || active ? "#f6dfae" : "rgba(237,226,203,0.86)"}
        fontSize="22"
      >
        {label}
      </text>
    </g>
  );
}

interface CrownLandsProps {
  uid: string;
  activeId: RealmId | null;
  walesUnited: boolean;
  boulogneHeld: boolean;
  activeRegion?: "wales" | "ireland" | "scotland";
  interactiveProps: MapBodyProps["interactiveProps"];
}

function CrownLands({
  uid,
  activeId,
  walesUnited,
  boulogneHeld,
  activeRegion,
  interactiveProps,
}: CrownLandsProps) {
  return (
    <g>
      {walesUnited ? (
        <>
          <path
            d={ATLAS.land.englandWales}
            fill={`url(#${uid}-crown)`}
            stroke={
              activeId === "england" || activeId === "wales"
                ? "#f0d396"
                : "#d8b46c"
            }
            strokeWidth={
              activeId === "england" || activeId === "wales" ? 1.9 : 1.1
            }
            strokeOpacity={
              activeId === "england" || activeId === "wales" ? 1 : 0.45
            }
            className="map-region"
            data-active={activeId === "england" || activeId === "wales"}
            {...interactiveProps("england")}
          />
          <path
            d={ATLAS.land.wales}
            fill="transparent"
            stroke={activeId === "wales" ? "#f0d396" : "transparent"}
            strokeWidth="1.6"
            strokeDasharray="4 3"
            {...interactiveProps("wales")}
          />
          {activeRegion === "wales" ? (
            <path
              d={ATLAS.land.englandWales}
              fill="none"
              stroke="#f0d396"
              strokeWidth="2.6"
              className="region-pulse"
              filter={`url(#${uid}-glow)`}
              pointerEvents="none"
            />
          ) : null}
        </>
      ) : (
        <>
          <path
            d={ATLAS.land.england}
            fill={`url(#${uid}-crown)`}
            stroke={activeId === "england" ? "#f0d396" : "#d8b46c"}
            strokeWidth={activeId === "england" ? 1.9 : 1.1}
            strokeOpacity={activeId === "england" ? 1 : 0.45}
            className="map-region"
            data-active={activeId === "england"}
            {...interactiveProps("england")}
          />
          <path
            d={ATLAS.land.wales}
            fill={`url(#${uid}-wales-hatch)`}
            stroke={activeId === "wales" ? "#f0d396" : "#c79f5f"}
            strokeWidth={activeId === "wales" ? 1.9 : 1.2}
            strokeDasharray="5 4"
            className="map-region"
            data-active={activeId === "wales"}
            {...interactiveProps("wales")}
          />
          {activeRegion === "wales" ? (
            <path
              d={ATLAS.land.wales}
              fill="none"
              stroke="#f0d396"
              strokeWidth="3"
              className="region-pulse"
              filter={`url(#${uid}-glow)`}
              pointerEvents="none"
            />
          ) : null}
        </>
      )}

      <path
        d={ATLAS.overlays.calais}
        fill={activeId === "calais" ? "#cf5a66" : "#a83946"}
        stroke="#f0d396"
        strokeWidth="1.2"
        className="map-region"
        data-active={activeId === "calais"}
        {...interactiveProps("calais")}
      />
      {boulogneHeld ? (
        <path
          d={ATLAS.overlays.boulogne}
          fill={activeId === "boulogne" ? "#cf5a66" : "#a83946"}
          stroke="#f0d396"
          strokeWidth="1.2"
          className="map-region"
          data-active={activeId === "boulogne"}
          {...interactiveProps("boulogne")}
        />
      ) : null}
    </g>
  );
}

function Compass({ uid }: { uid: string }) {
  return (
    <g transform="translate(88 1002)" opacity="0.6" aria-hidden="true">
      <circle r="36" fill="none" stroke="#d6b36a" strokeOpacity="0.22" />
      <circle
        r="28"
        fill="none"
        stroke="#d6b36a"
        strokeOpacity="0.16"
        strokeDasharray="1 4"
      />
      {[0, 90, 180, 270].map((angle) => (
        <path
          key={angle}
          d="M0 -31 L5 -6 L0 0 L-5 -6 Z"
          transform={`rotate(${angle})`}
          fill={angle === 0 ? "#f0d396" : "rgba(214,179,106,0.55)"}
          stroke="#081117"
          strokeWidth="0.6"
        />
      ))}
      {[45, 135, 225, 315].map((angle) => (
        <path
          key={angle}
          d="M0 -19 L3.4 -4 L0 0 L-3.4 -4 Z"
          transform={`rotate(${angle})`}
          fill="rgba(214,179,106,0.4)"
        />
      ))}
      <circle r="3.4" fill="#f0d396" stroke="#081117" strokeWidth="0.8" />
      <text
        y="-43"
        textAnchor="middle"
        fill="#d6b36a"
        fontSize="11"
        fontFamily="var(--font-display)"
        letterSpacing="0.12em"
      >
        N
      </text>
      <g filter={`url(#${uid}-glow)`} opacity="0.05">
        <circle r="30" fill="#d6b36a" />
      </g>
    </g>
  );
}

function ScaleBar() {
  const length = ATLAS.scaleBar.x2 - ATLAS.scaleBar.x1;
  const x = 62;
  const y = 1074;

  return (
    <g
      className="map-site-label"
      transform={`translate(${x} ${y})`}
      fill="rgba(214,179,106,0.62)"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="0"
        x2={length}
        y2="0"
        stroke="rgba(214,179,106,0.5)"
        strokeWidth="1.2"
      />
      {[0, length].map((tick) => (
        <line
          key={tick}
          x1={tick}
          y1="-4"
          x2={tick}
          y2="4"
          stroke="rgba(214,179,106,0.5)"
          strokeWidth="1.2"
        />
      ))}
      <text y="-10" fontSize="10" letterSpacing="0.12em">
        100 MILES
      </text>
    </g>
  );
}
