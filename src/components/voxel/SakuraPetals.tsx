/** Decorative floating sakura petals (pure CSS animation, disabled under reduced motion). */
const PETALS = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  delay: `${(i * 1.7) % 12}s`,
  duration: `${10 + ((i * 3) % 8)}s`,
  size: 6 + (i % 3) * 2,
}));

export default function SakuraPetals({ className = "" }: { className?: string }) {
  return (
    <div className={`sakura-layer ${className}`} aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="sakura-petal"
          style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration, width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
}
