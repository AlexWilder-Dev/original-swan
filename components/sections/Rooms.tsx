'use client';

// S-curve: RIGHT alignment — slate background (warm mid-dark).
// Room cards in a horizontally-scrollable row with CSS scroll-snap.
// Each card row alternates justify-content (flex-start / flex-end) — a
// micro S-curve within the section.

import { motion } from 'framer-motion';
import { SwingSection, SwingChild } from '@/components/SwingSection';
import Link from 'next/link';

const rooms = [
  {
    name: 'The Landlord\'s Room',
    desc:
      'Our largest double. Warm, unhurried, overlooking the garden. Some guests say they sensed company in the early hours — but then, the best rooms always have a past.',
  },
  {
    name: 'The Taproom Twin',
    desc:
      'Two beds, a full English, and a view of Oxford Road waking up. Ideal for friends, colleagues, or anyone not yet ready to share a double.',
  },
  {
    name: 'The Garden Room',
    desc:
      "Light floods in on summer mornings. The faint sound of the pub below is more lullaby than nuisance \u2014 you'll agree by the second night.",
  },
] as const;

const cardVariants = {
  hidden:   { opacity: 0, x: 30 },
  visible:  (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.12 },
  }),
};

export function Rooms() {
  return (
    <SwingSection
      align="right"
      bg="var(--slate)"
      clipTop
      clipBottom
      id="rooms"
    >
      {/* Header */}
      <SwingChild delay={0}>
        <h2
          className="section-rule"
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'var(--text-lg)',
            color:         'var(--parchment)',
            letterSpacing: '0.05em',
            lineHeight:    1.15,
            marginBottom:  '0.6rem',
          }}
        >
          Stay the Night
        </h2>
      </SwingChild>

      <SwingChild delay={0.08}>
        <p
          style={{
            fontFamily:   'var(--font-display)',
            fontStyle:    'italic',
            color:        'var(--gold)',
            fontSize:     'var(--text-md)',
            opacity:      0.75,
            marginBottom: '2.5rem',
          }}
        >
          (If You Dare)
        </p>
      </SwingChild>

      <SwingChild delay={0.12}>
        <p style={{ color: 'rgba(242,232,213,0.65)', fontSize: 'var(--text-sm)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '2.8rem' }}>
          Comfortable, characterful rooms above one of Oxford's most storied pubs.
          Cowley at your doorstep. History in the walls. We can't promise a quiet night
          — but we can promise an interesting one.
        </p>
      </SwingChild>

      {/* Horizontal scroll track */}
      <div
        role="region"
        aria-label="Room cards — scroll horizontally to view all"
        style={{
          overflowX:           'auto',
          scrollSnapType:      'x mandatory',
          scrollbarWidth:      'none',
          msOverflowStyle:     'none',
          WebkitOverflowScrolling: 'touch',
          paddingBottom:       '0.5rem',
        }}
        className="[&::-webkit-scrollbar]:hidden"
      >
        <div style={{ display: 'flex', gap: '1.25rem', width: 'max-content', paddingRight: '2rem' }}>
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-15% 0px' }}
              style={{
                scrollSnapAlign: 'start',
                flexShrink:      0,
                width:           'clamp(260px, 32vw, 340px)',
                border:          '1px solid rgba(196,154,60,0.2)',
                borderRadius:    '4px',
                overflow:        'hidden',
                background:      'rgba(255,255,255,0.03)',
              }}
            >
              {/* Room illustration placeholder */}
              <div
                aria-label={`${room.name} — photo coming soon`}
                style={{
                  height:         '180px',
                  background:     'linear-gradient(160deg, var(--slate-mid) 0%, var(--ink) 100%)',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  position:       'relative',
                  overflow:       'hidden',
                }}
              >
                {/* Subtle grain texture for depth */}
                <div style={{
                  position:   'absolute',
                  inset:      0,
                  background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
                  opacity:    0.6,
                }} />
                {/* Victorian window SVG */}
                <svg width="72" height="90" viewBox="0 0 72 90" fill="none" aria-hidden="true" style={{ opacity: 0.22 }}>
                  {/* outer arch frame */}
                  <path d="M8 88 L8 36 Q8 8 36 8 Q64 8 64 36 L64 88Z"
                        stroke="var(--gold)" strokeWidth="1.5" fill="none"/>
                  {/* inner arch */}
                  <path d="M16 88 L16 38 Q16 18 36 18 Q56 18 56 38 L56 88Z"
                        stroke="var(--gold)" strokeWidth="0.8" fill="none" strokeDasharray="3 2"/>
                  {/* central mullion */}
                  <line x1="36" y1="18" x2="36" y2="88" stroke="var(--gold)" strokeWidth="0.8"/>
                  {/* horizontal transom */}
                  <line x1="16" y1="56" x2="56" y2="56" stroke="var(--gold)" strokeWidth="0.8"/>
                  {/* keystone detail */}
                  <circle cx="36" cy="16" r="3.5" stroke="var(--gold)" strokeWidth="1" fill="none"/>
                  {/* sill */}
                  <line x1="4" y1="88" x2="68" y2="88" stroke="var(--gold)" strokeWidth="1.5"/>
                </svg>
                {/* Room number */}
                <span style={{
                  position:      'absolute',
                  bottom:        '1rem',
                  right:         '1rem',
                  fontFamily:    'var(--font-display)',
                  fontStyle:     'italic',
                  color:         'rgba(196,154,60,0.35)',
                  fontSize:      '2rem',
                  lineHeight:    1,
                  letterSpacing: '-0.02em',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.4rem' }}>
                <h3
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      'clamp(1rem, 1.6vw, 1.2rem)',
                    color:         'var(--parchment)',
                    marginBottom:  '0.6rem',
                    letterSpacing: '0.03em',
                  }}
                >
                  {room.name}
                </h3>
                <p
                  style={{
                    fontSize:      '0.85rem',
                    color:         'rgba(242,232,213,0.58)',
                    lineHeight:    1.65,
                    marginBottom:  '1.2rem',
                  }}
                >
                  {room.desc}
                </p>
                <motion.div whileHover={{ backgroundColor: 'var(--gold)' }} style={{ display: 'inline-block' }}>
                  <Link
                    href="#contact"
                    style={{
                      display:       'inline-block',
                      background:    'var(--gold)',
                      color:         'var(--ink)',
                      fontFamily:    'var(--font-body)',
                      fontWeight:    600,
                      fontSize:      'var(--text-xs)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding:       '0.65rem 1.6rem',
                      borderRadius:  '2px',
                      transition:    'background 0.25s, transform 0.2s',
                    }}
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking note */}
      <SwingChild delay={0.25}>
        <p
          style={{
            fontFamily:   'var(--font-display)',
            fontStyle:    'italic',
            color:        'var(--gold)',
            opacity:      0.65,
            fontSize:     'var(--text-sm)',
            marginTop:    '2rem',
            textAlign:    'center',
          }}
        >
          To book a room, call Paddy on{' '}
          <a href="tel:+441865778888" style={{ color: 'inherit' }}>
            (01865) 778888
          </a>{' '}
          or{' '}
          <Link href="#contact" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            enquire below
          </Link>
        </p>
      </SwingChild>
    </SwingSection>
  );
}
