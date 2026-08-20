import { useEffect, useRef, useState } from "react";

// A persistent scroll-companion icon, fixed on the right edge, vertically
// centered. The cat flips orientation depending on scroll direction, with
// a small paw-print trail behind it for a bit of personality.

export default function SectionWalkCat() {
  const [direction, setDirection] = useState("down");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setDirection(y > lastY.current ? "down" : "up");
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center pointer-events-none"
    >
      {/* paw prints trailing behind, direction-aware */}
      <div className={`flex flex-col gap-2 ${direction === "down" ? "order-2" : "order-1"}`}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-2 h-2 rounded-full bg-ink/30"
            style={{ opacity: 0.6 - i * 0.2, marginLeft: i % 2 === 0 ? 0 : 8 }}
          />
        ))}
      </div>
      {/* cat silhouette */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        className={`${direction === "down" ? "order-1" : "order-2"}`}
      >
        <path d="M6 22 L9 6 L14 16 L19 6 L22 22 Z" fill="#2B2620" />
      </svg>
    </div>
  );
}
