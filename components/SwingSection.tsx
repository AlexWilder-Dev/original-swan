'use client';

// THE core layout primitive. Every section on the page is an instance of this.
//
// The S-curve works like this:
//   - The section background always bleeds to 100vw
//   - The content block is constrained to 68vw and aligned left OR right
//     depending on the `align` prop — this is what creates the swing
//   - clip-path shapes the top/bottom edge to create diagonal transitions
//     between sections; the direction alternates per-section to reinforce
//     the serpentine rhythm
//   - Framer Motion useInView triggers the enter animation when the section
//     crosses 15% of the viewport — content enters from the same side as
//     its alignment (left sections enter from the left, right from the right)

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Detect desktop (lg breakpoint = 1024px) for axis-aware enter animation.
// On mobile the x-slide is suppressed — content enters from below instead.
function useIsDesktop() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(min-width: 1024px)').matches;
}

type Props = {
  align: 'left' | 'right';
  bg: string;
  clipTop?: boolean;
  clipBottom?: boolean;
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export function SwingSection({
  align,
  bg,
  clipTop,
  clipBottom,
  children,
  id,
  className = '',
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  const isDesktop = useIsDesktop();

  // Desktop: enter from the aligned side. Mobile: y-only (no lateral shift).
  const variants = {
    hidden: {
      opacity: 0,
      x: isDesktop ? (align === 'left' ? -40 : 40) : 0,
      y: isDesktop ? 0 : 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        staggerChildren: 0.1,
      },
    },
  };

  // Clip-path logic:
  //   left  section top:    top-left at 0%, top-right lifted → diagonal ↗
  //   right section top:    top-left lifted, top-right at 0% → diagonal ↘
  //   left  section bottom: bottom-left at 100%, bottom-right pulled up
  //   right section bottom: bottom-left pulled up, bottom-right at 100%
  let clipPath: string | undefined;
  if (clipTop && clipBottom) {
    clipPath =
      align === 'left'
        ? 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)'
        : 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)';
  } else if (clipTop) {
    clipPath =
      align === 'left'
        ? 'polygon(0 5%, 100% 0, 100% 100%, 0 100%)'
        : 'polygon(0 0, 100% 5%, 100% 100%, 0 100%)';
  } else if (clipBottom) {
    clipPath =
      align === 'left'
        ? 'polygon(0 0, 100% 0, 100% 95%, 0 100%)'
        : 'polygon(0 0, 100% 0, 100% 100%, 0 95%)';
  }

  // Content alignment: 68vw block pushed to the correct edge on desktop only.
  // On mobile/tablet (<lg) the content is full-width — no S-curve offset.
  const contentClass =
    align === 'left'
      ? 'w-full lg:max-w-[68vw] lg:mr-auto'
      : 'w-full lg:max-w-[68vw] lg:ml-auto';

  return (
    <section
      ref={ref}
      id={id}
      // swing-clip-section lets globals.css zero-out clip-path + margin below lg
      className={`relative swing-clip-section ${className}`}
      style={{
        background: bg,
        // Clip-path and negative margin only meaningful on desktop;
        // globals.css overrides both to 0 / none below the lg breakpoint.
        clipPath,
        marginTop: clipTop ? 'calc(-1 * var(--swing-clip))' : undefined,
        paddingTop: clipTop
          ? 'calc(var(--section-pad) + var(--swing-clip))'
          : 'var(--section-pad)',
        paddingBottom: clipBottom
          ? 'calc(var(--section-pad) + var(--swing-clip))'
          : 'var(--section-pad)',
      }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        className={`px-6 lg:px-12 relative z-10 ${contentClass}`}
      >
        {children}
      </motion.div>
    </section>
  );
}

// ── Staggered child wrapper ───────────────────────────────────────────────────
// Wrap any element inside a SwingSection to give it an individual stagger delay.

type ChildProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function SwingChild({ children, className = '', delay = 0 }: ChildProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
