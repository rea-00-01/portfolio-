import { useCallback, useState } from "react";
import { skills } from "../data/portfolio";
import CatEyesSearch from "../components/CatEyesSearch";

// The cat's eyes wander and "find" one skill group at a time — that
// group lights up (full opacity/scale) while the rest stay dimmed,
// like they're still waiting to be spotted.

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onFocus = useCallback((i) => setActiveIndex(i), []);

  return (
    <section id="skills" className="py-6 px-6 md:px-16 bg-ivory">
      <h2 className="text-4xl font-display font-semibold mb-4 text-center">Skills</h2>
      <p className="text-center text-ink-soft text-sm mb-8">
        Watching the cat look around — it's finding one skill at a time.
      </p>

      <CatEyesSearch targetCount={skills.length} onFocus={onFocus} />

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 mt-12">
        {skills.map((group, i) => (
          <div
            key={group.group}
            className={`rounded-card p-5 transition-all duration-500 ${
              activeIndex === i
                ? "opacity-100 scale-100 bg-sage/30"
                : "opacity-40 scale-95 grayscale bg-transparent"
            }`}
          >
            <h3 className="font-semibold text-ink-soft mb-3 text-sm uppercase tracking-wide">
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-card bg-sage/40 text-ink text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
