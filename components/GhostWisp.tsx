'use client';

// The resident ghost. Not a cartoon — an abstract smoke/vapour form.
// Two MotionValues from the shared scroll hook:
//   opacity: fades in as the user reaches the ghost section
//   y: drifts upward as they approach the end of the page
// A continuous float is added via useSpring + useAnimationFrame — no state,
// no re-renders, pure MotionValue composition.

import { motion, useSpring, useAnimationFrame, type MotionValue } from 'framer-motion';
import { useState } from 'react';

type Props = {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
};

export function GhostWisp({ opacity, y }: Props) {
  // Randomised duration on mount — makes the float feel organic not mechanical.
  const [floatDuration] = useState(() => 1.8 + Math.random() * 1.4);

  const floatY = useSpring(0, { stiffness: 18, damping: 8 });

  useAnimationFrame((t) => {
    floatY.set(Math.sin(t * 0.0007) * 12);
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed right-8 top-[30%] pointer-events-none z-10 w-20 select-none"
      style={{ opacity, y }}
    >
      <motion.svg
        viewBox="0 0 100 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ y: floatY }}
      >
        {/* Outer vapour form */}
        <path
          d="M50 158 C33 142, 16 122, 20 96 C23 78, 12 62, 17 44 C22 27, 37 10, 50 7 C63 10, 78 27, 83 44 C88 62, 77 78, 80 96 C84 122, 67 142, 50 158Z"
          fill="rgba(242,232,213,0.05)"
          stroke="rgba(196,154,60,0.12)"
          strokeWidth="0.5"
        />
        {/* Inner form */}
        <path
          d="M50 138 C38 126, 28 112, 31 92 C33 78, 25 65, 30 52 C35 40, 45 28, 50 26 C55 28, 65 40, 70 52 C75 65, 67 78, 69 92 C72 112, 62 126, 50 138Z"
          fill="rgba(242,232,213,0.04)"
        />
        {/* Eyes — two faint glows */}
        <ellipse cx="43" cy="56" rx="3.5" ry="4" fill="rgba(196,154,60,0.18)" />
        <ellipse cx="57" cy="56" rx="3.5" ry="4" fill="rgba(196,154,60,0.18)" />
        {/* Mouth — a hint of a smile */}
        <path
          d="M44 68 Q50 73 56 68"
          stroke="rgba(196,154,60,0.12)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}
