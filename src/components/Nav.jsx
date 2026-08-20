import { motion } from "framer-motion";

// Phase 2: rectangles drop in one-by-one on page load (staggerChildren),
// then act as normal nav buttons — click scrolls to that section.

const sections = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Parent controls the stagger timing; children just define their own motion.
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const rectangle = {
  hidden: { y: -120, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export default function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-center gap-3 py-2 px-4 bg-ivory/20 backdrop-blur-md rounded-2xl"
    >
      {sections.map((s) => (
        <motion.button
          key={s.id}
          variants={rectangle}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo(s.id)}
          className="px-5 py-2 rounded-card bg-nude text-ink font-body text-sm font-medium
                     hover:bg-dustyrose transition-colors duration-200"
        >
          {s.label}
        </motion.button>
      ))}
    </motion.nav>
  );
}
