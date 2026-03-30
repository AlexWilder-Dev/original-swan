'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const links = [
  { label: 'Story',    href: '#story'   },
  { label: 'Rooms',    href: '#rooms'   },
  { label: 'Find Us',  href: '#find-us' },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background:
          'linear-gradient(180deg, rgba(14,11,7,0.75) 0%, transparent 100%)',
        backdropFilter: 'blur(3px)',
      }}
    >
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Wordmark */}
        <Link
          href="#hero"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            color: 'var(--gold)',
            fontSize: '1.05rem',
            letterSpacing: '0.04em',
            opacity: 0.9,
          }}
        >
          The Original Swan
        </Link>

        {/* Nav links */}
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6 list-none">
            {links.map(({ label, href }) => (
              <li key={label} className="hidden sm:block">
                <Link
                  href={href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--parchment)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    opacity: 0.6,
                    transition: 'opacity 0.2s',
                  }}
                  onMouseOver={(e) => ((e.target as HTMLElement).style.opacity = '1')}
                  onMouseOut={(e) => ((e.target as HTMLElement).style.opacity = '0.6')}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--gold)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(196,154,60,0.5)',
                  padding: '0.4rem 1.1rem',
                  borderRadius: '2px',
                  transition: 'border-color 0.2s, opacity 0.2s',
                  opacity: 0.85,
                }}
                onMouseOver={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--gold)';
                  el.style.opacity = '1';
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(196,154,60,0.5)';
                  el.style.opacity = '0.85';
                }}
              >
                Enquire
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
