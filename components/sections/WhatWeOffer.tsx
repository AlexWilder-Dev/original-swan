'use client';

// S-curve: LEFT alignment — parchment background (green replaced per brief).
// Feature cards enter with stagger from the left; intro text follows from right.

import { motion } from 'framer-motion';
import { SwingSection, SwingChild } from '@/components/SwingSection';

// ── SVG icon primitives — minimal line-art in var(--gold) ─────────────────────

function BedIcon() {
  return (
    <svg viewBox="0 0 32 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <rect x="2" y="14" width="28" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="2" y="10" width="28" height="5" rx="1"   stroke="currentColor" strokeWidth="1.4" />
      <rect x="4" y="7"  width="10" height="5" rx="1"   stroke="currentColor" strokeWidth="1.4" />
      <rect x="18" y="7" width="10" height="5" rx="1"   stroke="currentColor" strokeWidth="1.4" />
      <line x1="2"  y1="22" x2="2"  y2="24"   stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="30" y1="22" x2="30" y2="24"   stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function GardenIcon() {
  return (
    <svg viewBox="0 0 28 32" fill="none" className="w-7 h-7" aria-hidden="true">
      <circle cx="14" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
      <line x1="14" y1="18" x2="14" y2="30" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="8"  y1="23" x2="14" y2="20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="20" y1="25" x2="14" y2="22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function TVIcon() {
  return (
    <svg viewBox="0 0 32 26" fill="none" className="w-7 h-7" aria-hidden="true">
      <rect x="2" y="2" width="28" height="18" rx="2"  stroke="currentColor" strokeWidth="1.4" />
      <line x1="10" y1="20" x2="8"  y2="26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="22" y1="20" x2="24" y2="26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="6"  y1="26" x2="26" y2="26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="6" y="6" width="20" height="10" rx="1"  stroke="currentColor" strokeWidth="1" opacity="0.45" />
    </svg>
  );
}

function PoolIcon() {
  return (
    <svg viewBox="0 0 32 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <rect x="2" y="6" width="28" height="16" rx="2"  stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="14" r="3"            stroke="currentColor" strokeWidth="1.4" />
      <circle cx="22" cy="14" r="3"            stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="10" r="2"            stroke="currentColor" strokeWidth="1.4" />
      <line x1="28" y1="2" x2="19" y2="14"    stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function DogIcon() {
  return (
    <svg viewBox="0 0 32 28" fill="none" className="w-7 h-7" aria-hidden="true">
      <ellipse cx="14" cy="18" rx="9" ry="7"   stroke="currentColor" strokeWidth="1.4" />
      <circle  cx="22" cy="9"  r="4"           stroke="currentColor" strokeWidth="1.4" />
      <path d="M23 13 Q26 17 24 21"            stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <circle  cx="12" cy="17" r="1.2"         fill="currentColor" />
      <circle  cx="16" cy="17" r="1.2"         fill="currentColor" />
      <path d="M10 21 Q14 24 18 21"            stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
      <line x1="8"  y1="25" x2="7"  y2="28"   stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="20" y1="25" x2="21" y2="28"   stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function FunctionRoomIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7" aria-hidden="true">
      <rect x="3"  y="4" width="22" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="13" y1="4"  x2="13" y2="24" stroke="currentColor" strokeWidth="1.4" />
      <line x1="3"  y1="14" x2="25" y2="14" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="25" cy="14" r="2.5"         stroke="currentColor" strokeWidth="1.2" fill="none" />
      <line x1="25" y1="11.5" x2="25" y2="6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const features = [
  { Icon: BedIcon,          title: 'Bed & Breakfast',  desc: 'Wake up to Cowley. Comfortable rooms above Oxford\'s friendliest local.' },
  { Icon: GardenIcon,       title: 'Sun Trap Garden',  desc: 'A patio made for long afternoons. Cold pint. Warm sun. No rush.' },
  { Icon: TVIcon,           title: 'Live Sports',      desc: 'Sky Sports & TNT. Every big match. Best atmosphere this side of the Kassam.' },
  { Icon: PoolIcon,         title: 'Pool & Snooker',   desc: 'Rack \'em up. The table\'s been settling arguments since the 90s.' },
  { Icon: DogIcon,          title: 'Dog Friendly',     desc: 'Four legs welcome in the bar and garden. Treats behind the counter.' },
  { Icon: FunctionRoomIcon, title: 'Function Room',    desc: 'Birthdays, wakes, quizzes, parties. Your room, your rules.' },
] as const;

const cardContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardItem = {
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function WhatWeOffer() {
  return (
    <SwingSection
      align="left"
      bg="var(--parchment)"
      clipTop
      clipBottom
      id="offer"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">

        {/* ── Left: feature cards ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15% 0px' }}
        >
          {features.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={cardItem}
              whileHover={{
                y: -4,
                borderColor: 'var(--gold)',
                boxShadow: '0 8px 28px rgba(14,11,7,0.12)',
              }}
              transition={{ duration: 0.28 }}
              style={{
                border:       '1px solid rgba(14,11,7,0.12)',
                borderRadius: '4px',
                padding:      '1.25rem',
                background:   'rgba(14,11,7,0.03)',
                cursor:       'default',
              }}
            >
              <div style={{ color: 'var(--gold)', marginBottom: '0.65rem' }}>
                <Icon />
              </div>
              <h3
                style={{
                  fontFamily:    'var(--font-body)',
                  fontWeight:    600,
                  fontSize:      'var(--text-xs)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:         'var(--ink)',
                  marginBottom:  '0.35rem',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize:   'clamp(0.72rem, 1vw, 0.82rem)',
                  color:      'var(--slate)',
                  lineHeight: 1.55,
                  opacity:    0.8,
                }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Right: intro copy ── */}
        <div>
          <SwingChild delay={0.05}>
            <h2
              className="section-rule"
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'var(--text-lg)',
                color:         'var(--ink)',
                letterSpacing: '0.05em',
                lineHeight:    1.15,
                marginBottom:  '1.4rem',
              }}
            >
              Your Local,<br />Your Way
            </h2>
          </SwingChild>

          <SwingChild delay={0.15}>
            <div style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)', lineHeight: 1.75 }}>
              <p style={{ marginBottom: '1em' }}>
                The Original Swan isn't a gastro reinvention or a concept bar. It's a proper
                community pub — the kind that's different things to different people, sometimes
                all in the same afternoon.
              </p>
              <p>
                Catch the match, rack up, bring the dog, book the room, hire the function space,
                or simply sit in the garden and let the afternoon disappear. Six reasons to stay
                longer — though if you're honest, you were never really in a hurry to leave.
              </p>
            </div>
          </SwingChild>
        </div>

      </div>
    </SwingSection>
  );
}
