// Design tokens — mirrors CSS custom properties in globals.css.
// Use these in Framer Motion style props where CSS vars can't be used directly.

export const tokens = {
  ink:       '#0E0B07',
  parchment: '#F2E8D5',
  slate:     '#2E2A25',
  slateMid:  '#3A342D',
  gold:      '#C49A3C',
  rust:      '#7A2C1E',
  mist:      '#8FA89A',
} as const;

export type Token = keyof typeof tokens;
