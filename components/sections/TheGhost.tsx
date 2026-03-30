'use client';

// S-curve: RIGHT alignment — near-ink background, moody.
// This is the ghost section. The GhostWisp is passed in from the shared
// scroll hook at the page level. Candle flicker on the ambient glow.

import { useState } from 'react';
import { motion, type MotionValue } from 'framer-motion';
import { SwingSection, SwingChild } from '@/components/SwingSection';

type Props = {
  ghostOpacity: MotionValue<number>;
  ghostY:       MotionValue<number>;
};

export function TheGhost({ ghostOpacity, ghostY }: Props) {
  // Randomised candle duration per mount — organic, not mechanical
  const [candleDuration] = useState(() => 1.8 + Math.random() * 1.4);

  return (
    <SwingSection
      align="right"
      bg="var(--slate)"
      clipTop
      clipBottom
      id="ghost"
    >
      {/* Candle flicker — ambient glow that breathes behind the content */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.45, 0.68, 0.41, 0.72, 0.50] }}
        transition={{ duration: candleDuration, repeat: Infinity, ease: 'linear' }}
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 80% 40%, rgba(196,154,60,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">

        {/* ── Left: decorative candle glyph ── */}
        <div className="hidden lg:flex items-start justify-center pt-4">
          <svg viewBox="0 0 60 120" className="w-16 opacity-20" aria-hidden="true">
            <rect x="25" y="60" width="10" height="55" rx="2" fill="var(--gold)" />
            <rect x="22" y="55" width="16" height="8" rx="1" fill="var(--gold)" />
            <path d="M30 55 C30 55, 26 42, 30 32 C34 42, 30 55, 30 55Z" fill="var(--gold)" />
            <ellipse cx="30" cy="30" rx="4" ry="7" fill="var(--gold)" opacity="0.6" />
          </svg>
        </div>

        {/* ── Right: ghost copy ── */}
        <div>
          <SwingChild delay={0}>
            <h2
              className="section-rule"
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'var(--text-lg)',
                color:         'var(--parchment)',
                letterSpacing: '0.05em',
                lineHeight:    1.15,
                marginBottom:  '1.6rem',
              }}
            >
              The Resident
            </h2>
          </SwingChild>

          <SwingChild delay={0.1}>
            <div
              style={{
                color:      'rgba(242,232,213,0.72)',
                lineHeight: 1.8,
                fontSize:   'var(--text-sm)',
              }}
            >
              <p style={{ marginBottom: '1.2em' }}>
                Nobody knows his name. The stories put him as a landlord from sometime in the
                early 1900s — a man who loved this place so completely that when his time came,
                he apparently declined the invitation to leave. The staff don't talk about it
                much. The regulars mention it in the way you'd mention a familiar piece of
                furniture. He's just here.
              </p>
              <p style={{ marginBottom: '1.2em' }}>
                The signs are small. A glass moved from one end of the bar to the other with
                nobody in between. The faint smell of pipe tobacco in a room that's been
                smoke-free for twenty years. The door to the cellar that stays open no matter
                how many times it's closed. Nothing frightening. Nothing you can't explain away
                if you're determined to.
              </p>
              <p>
                One long-standing regular once said he saw a figure standing at the end of the
                bar on a Tuesday night — a man in old-fashioned clothes, watching the room with
                evident satisfaction, the way a host surveys a party going well. When he looked
                again, the figure was gone. He ordered another pint. It seemed the right response.
              </p>
            </div>
          </SwingChild>

          <SwingChild delay={0.22}>
            <p
              style={{
                fontFamily:   'var(--font-display)',
                fontStyle:    'italic',
                color:        'var(--gold)',
                fontSize:     'var(--text-md)',
                opacity:      0.55,
                marginTop:    '2rem',
                letterSpacing:'0.03em',
              }}
            >
              He's never caused trouble. We've kept his corner table free, just in case.
            </p>
          </SwingChild>
        </div>

      </div>
    </SwingSection>
  );
}
