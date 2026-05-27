/**
 * MarqueeTicker Component
 * Creates an infinite scrolling ticker of skills/keywords
 * Inspired by the reference design's marquee bar
 */
export default function MarqueeTicker({ items, speed = 30 }) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
