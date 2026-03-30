import type { Metadata } from 'next';
import { Cormorant_Garamond, Crimson_Pro } from 'next/font/google';
import './globals.css';

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Original Swan · Cowley, Oxford · Est. 1854',
  description:
    'A historic community pub in Cowley, Oxford. B&B rooms, beer garden, live sports, function room. Est. 1854. Part of the Arkell\'s Brewery family.',
  openGraph: {
    title: 'The Original Swan',
    description: 'Cowley\'s local since 1854. Some guests never leave.',
    siteName: 'The Original Swan',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded"
          style={{ background: 'var(--gold)', color: 'var(--ink)', fontWeight: 600 }}
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
