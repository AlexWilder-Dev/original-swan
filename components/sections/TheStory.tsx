'use client';

// S-curve: LEFT alignment — parchment background (warm cream, welcoming)
// Text block sits in the left 68vw; Victorian pub SVG silhouette fills the
// right margin and slides in from the opposite direction.

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { SwingSection, SwingChild } from '@/components/SwingSection';

function VictorianFacade() {
  return (
    <svg
      viewBox="0 0 280 420"
      fill="var(--ink)"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-xs opacity-[0.07]"
    >
      {/* Chimney stacks */}
      <rect x="88"  y="48"  width="18" height="50" />
      <rect x="170" y="62"  width="15" height="38" />
      {/* Roof gable */}
      <polygon points="32,138 140,44 248,138" />
      {/* Main facade */}
      <rect x="32" y="136" width="216" height="210" />
      {/* Upper windows × 3 */}
      <rect x="54"  y="162" width="46" height="50" rx="3" fill="var(--parchment)" opacity="0.06" />
      <rect x="117" y="162" width="46" height="50" rx="3" fill="var(--parchment)" opacity="0.06" />
      <rect x="180" y="162" width="46" height="50" rx="3" fill="var(--parchment)" opacity="0.06" />
      {/* Window crossbars */}
      <line x1="77"  y1="162" x2="77"  y2="212" stroke="var(--parchment)" strokeWidth="1.5" opacity="0.07" />
      <line x1="54"  y1="187" x2="100" y2="187" stroke="var(--parchment)" strokeWidth="1.5" opacity="0.07" />
      <line x1="140" y1="162" x2="140" y2="212" stroke="var(--parchment)" strokeWidth="1.5" opacity="0.07" />
      <line x1="117" y1="187" x2="163" y2="187" stroke="var(--parchment)" strokeWidth="1.5" opacity="0.07" />
      <line x1="203" y1="162" x2="203" y2="212" stroke="var(--parchment)" strokeWidth="1.5" opacity="0.07" />
      <line x1="180" y1="187" x2="226" y2="187" stroke="var(--parchment)" strokeWidth="1.5" opacity="0.07" />
      {/* Lower windows */}
      <rect x="54"  y="232" width="46" height="38" rx="2" fill="var(--parchment)" opacity="0.05" />
      <rect x="180" y="232" width="46" height="38" rx="2" fill="var(--parchment)" opacity="0.05" />
      {/* Central door */}
      <rect x="117" y="256" width="46" height="90" rx="2" fill="var(--parchment)" opacity="0.05" />
      {/* Door arch */}
      <path d="M117,270 Q140,252 163,270" fill="none" stroke="var(--parchment)" strokeWidth="1.5" opacity="0.07" />
      {/* Door handle */}
      <circle cx="153" cy="302" r="3" fill="var(--parchment)" opacity="0.1" />
      {/* Hanging sign */}
      <line x1="140" y1="92" x2="140" y2="118" stroke="var(--ink)" strokeWidth="2.5" opacity="0.5" />
      <rect x="108" y="118" width="64" height="32" rx="3" fill="var(--parchment)" opacity="0.05" />
      {/* Steps */}
      <rect x="104" y="346" width="72" height="7" rx="1" />
      <rect x="94"  y="353" width="92" height="7" rx="1" />
      {/* Ground */}
      <rect x="0" y="360" width="280" height="5" rx="2" opacity="0.4" />
    </svg>
  );
}

export function TheStory() {
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const { scrollYProgress } = useScroll({
    target: quoteRef,
    offset: ['start end', 'end start'],
  });
  const quoteX = useTransform(scrollYProgress, [0, 1], ['-18px', '0px']);

  return (
    <SwingSection
      align="left"
      bg="var(--parchment)"
      clipBottom
      id="story"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center">

        {/* ── Left: text ── */}
        <div>
          <SwingChild delay={0}>
            <h2
              className="section-rule"
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'var(--text-lg)',
                color:         'var(--ink)',
                letterSpacing: '0.05em',
                lineHeight:    1.15,
                marginBottom:  '1.6rem',
              }}
            >
              A Swan With Two Tales
            </h2>
          </SwingChild>

          <SwingChild delay={0.1}>
            <div style={{ color: 'var(--slate)', lineHeight: 1.75, fontSize: 'var(--text-sm)' }}>
              <p style={{ marginBottom: '1em' }}>
                Every great pub has a story. Ours begins in 1854, when the original Swan first
                opened its doors on Oxford Road — back when Cowley was still a village on the
                edge of a city, and a good pint was the best thing a hard day's work could earn you.
              </p>
              <p style={{ marginBottom: '1em' }}>
                At one time, two pubs in the area shared the Swan name. By 1880, ours had earned
                the right to call itself something more singular. <em>The Original.</em> Not a
                claim made lightly in Cowley — a neighbourhood that has always known the
                difference between something real and something that came after.
              </p>
              <p style={{ marginBottom: '1em' }}>
                The building you step into today was largely reborn in 1930 — a grander rebuild,
                built to last. Sturdy brickwork, proper bars, and a character that no renovation
                has ever managed to scrub away. Arkell's Brewery — Oxford's finest family brewer
                since 1843 — later took the Swan under their wing, ensuring the quality of the
                ale would never be in question.
              </p>
              <p>
                One hundred and seventy years of neighbours, regulars, travellers, and strangers.
                Of cups raised and friendships forged. And, if the rumours are to be believed,
                at least one guest who decided the afterlife could wait.
              </p>
            </div>
          </SwingChild>

          {/* Pull-quote — independent scroll-scrub drift */}
          <SwingChild delay={0.22}>
            <motion.blockquote
              ref={quoteRef}
              style={{
                x: quoteX,
                fontFamily:   'var(--font-display)',
                fontStyle:    'italic',
                color:        'var(--gold)',
                fontSize:     'clamp(1.05rem, 1.8vw, 1.3rem)',
                lineHeight:   1.5,
                marginTop:    '2.2rem',
                transform:    'rotate(-0.8deg)',
                display:      'inline-block',
                borderLeft:   '2px solid rgba(196,154,60,0.3)',
                paddingLeft:  '1.2rem',
              }}
            >
              "The ghost is believed to be a former landlord…<br />
              too attached to the old place to ever leave."
            </motion.blockquote>
          </SwingChild>
        </div>

        {/* ── Right: Victorian illustration (enters from right) ── */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          viewport={{ once: true, margin: '-15% 0px' }}
        >
          <VictorianFacade />
        </motion.div>

      </div>
    </SwingSection>
  );
}
