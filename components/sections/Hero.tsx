'use client';

// Full-viewport hero. Pure typography + colour — no photography.
// The atmosphere is the type treatment, the warm glow, and the SpineSVG
// behind the page beginning to draw.
//
// Scroll-scoped parallax: the title drifts at 18% speed as the user
// scrolls the hero out of view — scoped to this section only so it
// doesn't interfere with the rest of the page.

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const line = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const titleY  = useTransform(heroProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(heroProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: '100svh', background: 'var(--ink)' }}
      aria-label="Welcome to The Original Swan"
    >
      {/* Pub photo — heavily tinted so typography reads clearly */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:    'url(/pub.webp)',
          backgroundSize:     'cover',
          backgroundPosition: 'center 30%',
          opacity:            0.18,
          mixBlendMode:       'luminosity',
        }}
      />
      {/* Ink vignette over the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, var(--ink) 90%)',
        }}
      />
      {/* Ambient warm glow — top-right quadrant, like light through old glass */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 72% 28%, rgba(196,154,60,0.08) 0%, transparent 68%)',
        }}
      />
      {/* Secondary glow — lower-left, gives depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 35% at 22% 75%, rgba(196,154,60,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Parallax content wrapper */}
      <motion.div
        style={{ y: titleY, opacity }}
        className="relative z-10 px-6 max-w-4xl"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Location + year */}
          <motion.p
            variants={line}
            style={{
              fontFamily:    'var(--font-body)',
              color:         'var(--gold)',
              fontSize:      'var(--text-xs)',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              opacity:       0.8,
              marginBottom:  '1.6rem',
            }}
          >
            Cowley, Oxford · Est. 1854
          </motion.p>

          {/* Main title — two lines for cinematic stagger */}
          <motion.h1
            variants={line}
            style={{
              fontFamily:  'var(--font-display)',
              fontStyle:   'italic',
              fontSize:    'var(--text-xl)',
              color:       'var(--parchment)',
              lineHeight:  1.05,
              letterSpacing: '0.02em',
              marginBottom: '0.1em',
            }}
          >
            The Original
          </motion.h1>

          {/* "Swan" with ghost echo behind it */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <motion.h1
              variants={line}
              style={{
                fontFamily:   'var(--font-display)',
                fontStyle:    'italic',
                fontSize:     'var(--text-xl)',
                color:        'var(--parchment)',
                lineHeight:   1.05,
                letterSpacing:'0.02em',
                position:     'relative',
                zIndex:       1,
              }}
            >
              Swan
            </motion.h1>
            {/* Ghost echo: blurred duplicate, delayed, aria-hidden */}
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.07 }}
              transition={{ delay: 1.9, duration: 1.0 }}
              style={{
                fontFamily:   'var(--font-display)',
                fontStyle:    'italic',
                fontSize:     'var(--text-xl)',
                color:        'var(--gold)',
                lineHeight:   1.05,
                letterSpacing:'0.02em',
                position:     'absolute',
                top:          '4px',
                left:         '6px',
                filter:       'blur(3px)',
                pointerEvents:'none',
                userSelect:   'none',
              }}
            >
              Swan
            </motion.span>
          </div>

          {/* Ghost tagline */}
          <motion.p
            variants={line}
            style={{
              fontFamily:   'var(--font-display)',
              fontStyle:    'italic',
              color:        'var(--gold)',
              fontSize:     'var(--text-md)',
              letterSpacing:'0.04em',
              marginTop:    '2.2rem',
              opacity:      0.65,
            }}
          >
            Some guests never leave...
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <polyline
              points="4,8 11,15 18,8"
              stroke="rgba(196,154,60,0.45)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
