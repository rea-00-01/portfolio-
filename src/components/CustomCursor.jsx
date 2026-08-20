import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Cat-paw cursor that trails the real cursor with spring physics.
// Desktop only — touch devices have no cursor to replace.

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 22, stiffness: 300, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      if (!visible) setVisible(true);
      cursorX.set(e.clientX - 13);
      cursorY.set(e.clientY - 13);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY, visible]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none hidden md:block"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    >
      <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
        {/* paw pad */}
        <ellipse cx="18" cy="24" rx="9" ry="7" fill="#2B2620" />
        {/* toes */}
        <ellipse cx="7" cy="13" rx="3.2" ry="4.4" fill="#2B2620" />
        <ellipse cx="15" cy="8" rx="3.2" ry="4.4" fill="#2B2620" />
        <ellipse cx="23" cy="8" rx="3.2" ry="4.4" fill="#2B2620" />
        <ellipse cx="30" cy="13" rx="3.2" ry="4.4" fill="#2B2620" />
      </svg>
    </motion.div>
  );
}
