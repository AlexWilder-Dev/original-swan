// Slim footer. Ink background. The ghost orb drifts through at the very end —
// a final whisper before the page closes.

export function Footer() {
  return (
    <footer
      style={{ background: 'var(--ink)', padding: '2.4rem 0', position: 'relative', overflow: 'hidden' }}
      aria-label="Site footer"
    >
      {/* Ghost orb — final ambient touch */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          top:        '-40%',
          left:       '50%',
          transform:  'translateX(-50%)',
          width:      '300px',
          height:     '300px',
          borderRadius:'50%',
          background: 'radial-gradient(circle, rgba(196,154,60,0.08) 0%, transparent 70%)',
          pointerEvents:'none',
        }}
      />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p
          style={{
            fontFamily:    'var(--font-display)',
            fontStyle:     'italic',
            color:         'var(--gold)',
            fontSize:      'clamp(0.9rem, 1.4vw, 1.05rem)',
            letterSpacing: '0.08em',
            marginBottom:  '0.5rem',
          }}
        >
          The Original Swan · Cowley, Oxford
        </p>

        <p
          style={{
            fontFamily:    'var(--font-body)',
            color:         'var(--parchment)',
            opacity:       0.35,
            fontSize:      'clamp(0.7rem, 1vw, 0.78rem)',
            letterSpacing: '0.06em',
            marginBottom:  '0.3rem',
          }}
        >
          Part of the Arkell's Brewery family · Est. 1843
        </p>

        <p
          style={{
            fontFamily:    'var(--font-body)',
            color:         'var(--parchment)',
            opacity:       0.28,
            fontSize:      'clamp(0.65rem, 0.9vw, 0.72rem)',
            letterSpacing: '0.04em',
          }}
        >
          &copy; 2026 The Original Swan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
