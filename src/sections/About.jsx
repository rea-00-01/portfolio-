import { motion } from "framer-motion";
import { aboutMe } from "../data/portfolio";

// Bio slides in from top-left, Education slides in later from bottom-right,
// as the user scrolls down through the section.

const fromLeft = {
  hidden: { x: -90, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const fromBottomRight = {
  hidden: { x: 90, y: 60, opacity: 0 },
  show: { x: 0, y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id="about" className="py-6 px-6 md:px-16 bg-ivory pt-20">
      <motion.div 
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fromLeft}
        >
          <h2 className="text-4xl font-display font-semibold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed text-ink-soft whitespace-pre-line">
            {aboutMe.bio}
          </p>
        </motion.div>

        <motion.div
          variants={fromBottomRight}
        >
          <h3 className="text-2xl font-display font-semibold mb-6">Education</h3>
          <div className="space-y-6">
            {aboutMe.education.map((edu) => (
              <div key={edu.id} className="bg-nude rounded-card p-6">
                <p className="font-semibold text-ink">
                  {edu.url ? (
                    <a href={edu.url} target="_blank" rel="noreferrer" className="hover:underline">
                      {edu.institution}
                    </a>
                  ) : (
                    edu.institution
                  )}
                </p>
                <p className="text-sm text-ink-soft">{edu.degree}</p>
                <p className="text-sm text-ink-soft">
                  {edu.location}
                  {edu.years ? ` · ${edu.years}` : ""}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
