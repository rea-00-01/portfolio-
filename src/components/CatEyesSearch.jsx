import { useEffect, useRef } from "react";
import gsap from "gsap";

// Flat-vector cat face (ears + head + two eyes). Pupils wander between
// a sequence of target points via GSAP, pausing briefly at each — like
// the cat is scanning the page. `onFocus(index)` fires each time the
// gaze settles on a new target, so the parent can light up the matching
// skill group.

const EYE_TRAVEL = 7; // px the pupil can move from eye-center
const LEFT_BASE = { cx: 75, cy: 82 };
const RIGHT_BASE = { cx: 125, cy: 82 };

export default function CatEyesSearch({ targetCount, onFocus }) {
  const leftPupil = useRef(null);
  const rightPupil = useRef(null);

  useEffect(() => {
    if (!leftPupil.current || !rightPupil.current) return;

    const stops = Array.from({ length: targetCount }, (_, i) => {
      const angle = (i / targetCount) * Math.PI * 2;
      return {
        dx: Math.cos(angle) * EYE_TRAVEL,
        dy: Math.sin(angle) * EYE_TRAVEL * 0.6,
      };
    });

    const tl = gsap.timeline({ repeat: -1 });
    stops.forEach((stop) => {
      tl.to(
        leftPupil.current,
        {
          attr: { cx: LEFT_BASE.cx + stop.dx, cy: LEFT_BASE.cy + stop.dy },
          duration: 0.7,
          ease: "power2.inOut",
        },
        "<"
      )
        .to(
          rightPupil.current,
          {
            attr: { cx: RIGHT_BASE.cx + stop.dx, cy: RIGHT_BASE.cy + stop.dy },
            duration: 0.7,
            ease: "power2.inOut",
          },
          "<"
        )
        .to({}, { duration: 1.1 }); // brief pause while "looking"
    });

    return () => tl.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetCount]);

  // Separate lightweight timeline drives onFocus callbacks so the visual
  // tween above stays simple and this stays easy to reason about.
  useEffect(() => {
    let cancelled = false;
    let i = 0;
    const stepMs = 1800; // matches 0.7s move + 1.1s pause above
    const id = setInterval(() => {
      if (cancelled) return;
      onFocus(i % targetCount);
      i += 1;
    }, stepMs);
    onFocus(0);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [targetCount, onFocus]);

  return (
    <svg
      viewBox="0 0 200 120"
      className="w-40 md:w-56 mx-auto"
      role="img"
      aria-label="Illustrated cat face, eyes scanning the page for skills"
    >
      {/* ears */}
      <path d="M28 58 L48 8 L68 54 Z" fill="#231F1B" />
      <path d="M132 54 L152 8 L172 58 Z" fill="#231F1B" />
      {/* head */}
      <rect x="22" y="42" width="156" height="72" rx="36" fill="#231F1B" />
      {/* eyes (whites) */}
      <circle cx={LEFT_BASE.cx} cy={LEFT_BASE.cy} r="19" fill="#F5F1EA" />
      <circle cx={RIGHT_BASE.cx} cy={RIGHT_BASE.cy} r="19" fill="#F5F1EA" />
      {/* pupils — cx/cy animated directly via GSAP */}
      <circle ref={leftPupil} cx={LEFT_BASE.cx} cy={LEFT_BASE.cy} r="9" fill="#231F1B" />
      <circle ref={rightPupil} cx={RIGHT_BASE.cx} cy={RIGHT_BASE.cy} r="9" fill="#231F1B" />
    </svg>
  );
}
