export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-3 text-gold/70 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold/60" />
      <span className="h-px w-24 bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  );
}
