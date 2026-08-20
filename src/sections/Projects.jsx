import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/portfolio";

// Click a card -> it spotlights in a centered overlay, siblings blur/dim,
// and a paragraph description shows. Click the overlay again -> flips to
// reveal tech stack. Click the backdrop or press Escape -> closes.
// (Auto-scroll still pauses on hover, independent of opening the spotlight.)

const cardVariants = {
  hidden: { y: -100, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      delay: i * 0.08,
    },
  }),
};

export default function Projects() {
  const [focusedId, setFocusedId] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const scrollContainerRef = useRef(null);
  const isPausedRef = useRef(false);

  const focusedProject = projects.find((p) => p.id === focusedId);

  const openCard = (id) => {
    setFocusedId(id);
    setFlipped(false);
  };

  const closeCard = () => {
    setFocusedId(null);
    setFlipped(false);
  };

  // Keyboard users (and anyone) can dismiss the overlay with Escape.
  useEffect(() => {
    if (!focusedId) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCard();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focusedId]);

  // Auto-scroll projects horizontally — paused while a card is hovered or
  // the spotlight overlay is open, so it doesn't fight the user's interaction.
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollAmount = container.scrollLeft;
    const scrollSpeed = 1;

    const autoScroll = setInterval(() => {
      if (isPausedRef.current) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      scrollAmount += scrollSpeed * 2;
      if (scrollAmount > maxScroll) scrollAmount = 0;
      container.scrollLeft = scrollAmount;
    }, 20);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section id="projects" className="py-6 px-6 md:px-16 bg-ivory">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-display font-semibold mb-12 text-center"
      >
        Projects
      </motion.h2>

      <motion.div
        ref={scrollContainerRef}
        onMouseEnter={() => (isPausedRef.current = true)}
        onMouseLeave={() => (isPausedRef.current = false)}
        className="flex overflow-x-auto gap-6 px-2"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            variants={cardVariants}
            onClick={() => openCard(project.id)}
            className={`bg-nude rounded-card p-6 flex flex-col cursor-pointer flex-shrink-0 w-80 h-80
                        transition-all duration-300
                        ${focusedId === project.id ? "opacity-30" : "opacity-100"}
                        ${focusedId && focusedId !== project.id ? "blur-sm opacity-40" : ""}
                        hover:shadow-lg hover:scale-105`}
          >
            <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-sm text-ink-soft line-clamp-3 flex-1">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-babyblue/40 text-ink">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Spotlight overlay */}
      <AnimatePresence>
        {focusedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCard}
            className="fixed inset-0 z-40 flex items-center justify-center bg-ink/40 backdrop-blur-sm px-6"
          >
            <motion.div
              onClick={(e) => {
                e.stopPropagation();
                setFlipped((f) => !f);
              }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              style={{ perspective: 1200 }}
              className="w-full max-w-lg cursor-pointer"
            >
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative"
              >
                {/* Front face — paragraph description */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className="bg-ivory rounded-card p-8 shadow-2xl"
                >
                  <h3 className="font-display font-semibold text-2xl mb-4">
                    {focusedProject.title}
                  </h3>
                  <p className="text-ink-soft leading-relaxed">{focusedProject.summary}</p>
                  <p className="mt-6 text-xs text-ink-soft/70 italic">Click to see tech stack →</p>
                </div>

                {/* Back face — tech stack */}
                <div
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  className="absolute inset-0 bg-dustyrose/90 rounded-card p-8 shadow-2xl flex flex-col justify-center"
                >
                  <h3 className="font-display font-semibold text-2xl mb-6">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {focusedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 rounded-card bg-ivory text-ink text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-xs text-ink/60 italic">Click to flip back →</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
