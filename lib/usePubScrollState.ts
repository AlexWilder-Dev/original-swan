'use client';

// Single shared scroll hook — created once in page.tsx, passed as props.
// Keeps all scroll-derived MotionValues in one place so there's no
// duplication of scroll listeners across components.

import { useScroll, useTransform } from 'framer-motion';

export function usePubScrollState() {
  const { scrollYProgress } = useScroll();

  return {
    // Raw 0–1 progress for the entire page
    scrollYProgress,

    // Drives the SpineSVG path-drawing animation
    spineProgress: scrollYProgress,

    // Ghost fades in as user reaches the ghost section (~25–40% scroll)
    ghostOpacity: useTransform(scrollYProgress, [0.25, 0.40], [0, 0.13]),

    // Ghost drifts upward as the user nears the end of the page
    ghostY: useTransform(scrollYProgress, [0.85, 1.0], [0, -80]),
  };
}
