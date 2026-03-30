'use client';

// S-curve: LEFT alignment — ink background (dark anchor near the end).
// Info card left, Google Maps iframe right.
// Social links centred below both columns.

import { motion } from 'framer-motion';
import { SwingSection, SwingChild } from '@/components/SwingSection';

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 13C7 13 2 8.5 2 5.5a5 5 0 0 1 10 0C12 8.5 7 13 7 13Z" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <circle cx="7" cy="5.5" r="1.8" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 2.5Q2 4 3.5 6 5 8 8 9.5L10 8l3 3Q11 13 9 12 5 11 2 8 -1 5 2 2Z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M7 4v3.2l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function PersonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// Social SVG icons
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

const socials = [
  { Icon: FacebookIcon, href: 'https://www.facebook.com/ArkellsBrewery/', label: 'Facebook' },
  { Icon: XIcon,        href: 'https://twitter.com/arkellsbrewery',       label: 'X (Twitter)' },
  { Icon: InstagramIcon,href: 'https://www.instagram.com/arkellsbrewery/',label: 'Instagram' },
];

export function FindUs() {
  return (
    <SwingSection
      align="left"
      bg="var(--ink)"
      clipTop
      id="find-us"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-12 items-start">

        {/* ── Left: info card ── */}
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
                marginBottom:  '1.8rem',
              }}
            >
              You're Always<br />Welcome
            </h2>
          </SwingChild>

          <SwingChild delay={0.1}>
            <div
              style={{
                border:       '1px solid rgba(196,154,60,0.15)',
                borderRadius: '4px',
                padding:      'clamp(1.25rem, 2.5vw, 2rem)',
                background:   'rgba(196,154,60,0.04)',
              }}
            >
              <p
                style={{
                  fontFamily:    'var(--font-body)',
                  fontWeight:    600,
                  fontSize:      'var(--text-xs)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color:         'var(--gold)',
                  marginBottom:  '1.1rem',
                }}
              >
                Find Us
              </p>

              {[
                { Icon: PinIcon,    content: <>Oxford Road, Cowley<br />Oxfordshire, OX4 2LF</> },
                { Icon: PhoneIcon,  content: <a href="tel:+441865778888" style={{ color: 'inherit' }}>(01865) 778888</a> },
                { Icon: PersonIcon, content: <>Your host: <strong style={{ fontWeight: 600, color: 'var(--gold)' }}>Paddy Fox</strong></> },
                { Icon: ClockIcon,  content: <em style={{ opacity: 0.55, fontStyle: 'italic' }}>Opening hours — check our socials for latest times</em> },
              ].map(({ Icon, content }, i) => (
                <div
                  key={i}
                  style={{
                    display:       'flex',
                    alignItems:    'flex-start',
                    gap:           '0.7rem',
                    marginBottom:  '0.85rem',
                    color:         'rgba(242,232,213,0.72)',
                    fontSize:      'var(--text-sm)',
                    lineHeight:    1.6,
                  }}
                >
                  <span style={{ color: 'var(--gold)', marginTop: '0.3rem', flexShrink: 0 }}>
                    <Icon />
                  </span>
                  <span>{content}</span>
                </div>
              ))}
            </div>
          </SwingChild>
        </div>

        {/* ── Right: Google Maps ── */}
        <SwingChild delay={0.15}>
          <div
            style={{
              border:       '2px solid var(--gold)',
              borderRadius: '4px',
              overflow:     'hidden',
              boxShadow:    '0 8px 40px rgba(0,0,0,0.5)',
              opacity:      0.92,
            }}
          >
            <iframe
              loading="lazy"
              title="The Original Swan on Google Maps"
              src="https://maps.google.com/maps?q=The+Original+Swan,+Oxford+Road,+Cowley,+Oxford,+OX4+2LF,+UK&output=embed&z=15"
              style={{ width: '100%', height: 'clamp(240px, 30vw, 360px)', display: 'block', border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </SwingChild>

      </div>

      {/* Social row */}
      <SwingChild delay={0.22}>
        <div className="flex justify-center gap-5 mt-12">
          {socials.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow on ${label}`}
              whileHover={{ background: 'rgba(196,154,60,0.18)', scale: 1.08 }}
              transition={{ duration: 0.22 }}
              style={{
                display:       'flex',
                alignItems:    'center',
                justifyContent:'center',
                width:         '44px',
                height:        '44px',
                borderRadius:  '50%',
                border:        '1.5px solid rgba(196,154,60,0.4)',
                color:         'var(--gold)',
              }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </SwingChild>
    </SwingSection>
  );
}
