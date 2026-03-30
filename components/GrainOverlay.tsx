// Fixed grain texture — gives the page warmth and analogue age.
// Opacity kept extremely low; it is felt, not seen.
// aria-hidden: true — purely decorative.

export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='1'/></svg>")`,
        opacity: 0.038,
        mixBlendMode: 'overlay',
      }}
    />
  );
}
