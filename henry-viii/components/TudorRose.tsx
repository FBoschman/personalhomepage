interface TudorRoseProps {
  className?: string;
}

const OUTER = Array.from({ length: 10 }, (_, i) => i);
const INNER = Array.from({ length: 5 }, (_, i) => i);

export function TudorRose({ className }: TudorRoseProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="#0b141a"
        stroke="#d6b36a"
        strokeOpacity="0.28"
      />
      <circle
        cx="100"
        cy="100"
        r="87"
        fill="none"
        stroke="#d6b36a"
        strokeOpacity="0.14"
      />
      {OUTER.map((petal) => (
        <ellipse
          key={petal}
          cx="100"
          cy="57"
          rx="26"
          ry="36"
          transform={`rotate(${petal * 36} 100 100)`}
          fill={petal % 2 === 0 ? "#8f2b39" : "#e8dcc4"}
          stroke="#d6b36a"
          strokeOpacity="0.65"
          strokeWidth="1.1"
        />
      ))}
      {INNER.map((petal) => (
        <ellipse
          key={petal}
          cx="100"
          cy="73"
          rx="18"
          ry="28"
          transform={`rotate(${petal * 72} 100 100)`}
          fill="#e8dcc4"
          stroke="#d6b36a"
          strokeOpacity="0.8"
          strokeWidth="1"
        />
      ))}
      <circle cx="100" cy="100" r="21" fill="#d6b36a" />
      <circle cx="100" cy="100" r="13" fill="#8f2b39" />
      <circle cx="100" cy="100" r="5.5" fill="#f3dca8" />
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        return (
          <circle
            key={`stamen-${i}`}
            cx={100 + Math.cos(angle) * 18}
            cy={100 + Math.sin(angle) * 18}
            r="1.5"
            fill="#f3dca8"
          />
        );
      })}
    </svg>
  );
}
