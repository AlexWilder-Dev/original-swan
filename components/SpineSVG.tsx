'use client';

// The golden river — a fixed SVG path that draws itself as the user scrolls.
// Framer Motion's pathLength handles stroke-dasharray/offset internally.
// The S-curve path visually reinforces the page's alternating layout rhythm.

import { motion, useTransform, type MotionValue } from 'framer-motion';

type Props = { progress: MotionValue<number> };

export function SpineSVG({ progress }: Props) {
  const pathLength = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* S-curve: two cubic bezier arcs from top to bottom of the viewport */}
        <motion.path
          d="M 50 0 C 15 12, 85 28, 50 44 C 15 60, 85 76, 50 100"
          stroke="#C49A3C"
          strokeWidth="0.25"
          fill="none"
          opacity={0.2}
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
