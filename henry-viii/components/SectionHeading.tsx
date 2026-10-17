import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
}

export function SectionHeading({
  index,
  label,
  title,
  intro,
  aside,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 border-b border-gold/15 pb-7 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="display text-xs text-gold/60">{index}</span>
          <span className="h-px w-8 bg-gold/40" />
          <span className="eyebrow">{label}</span>
        </div>
        <h2 className="display mt-4 text-3xl leading-tight text-parchment sm:text-4xl lg:text-[2.7rem]">
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{intro}</p>
        ) : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
}
