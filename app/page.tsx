'use client';

// Page composer — creates the shared scroll hook once here and passes
// only what each section needs. No prop drilling beyond one level.
// Section order reinforces the S-curve:
//   Hero (centred) → Story (L) → Ghost (R) → Offer (L) → Rooms (R) → FindUs (L) → Contact (centred)

import { usePubScrollState } from '@/lib/usePubScrollState';
import { GrainOverlay }  from '@/components/GrainOverlay';
import { SpineSVG }      from '@/components/SpineSVG';
import { GhostWisp }     from '@/components/GhostWisp';
import { Navbar }        from '@/components/nav/Navbar';
import { Hero }          from '@/components/sections/Hero';
import { TheStory }      from '@/components/sections/TheStory';
import { TheGhost }      from '@/components/sections/TheGhost';
import { WhatWeOffer }   from '@/components/sections/WhatWeOffer';
import { Rooms }         from '@/components/sections/Rooms';
import { FindUs }        from '@/components/sections/FindUs';
import { Contact }       from '@/components/sections/Contact';
import { Footer }        from '@/components/footer/Footer';

export default function Page() {
  const scroll = usePubScrollState();

  return (
    <>
      {/* ── Always-present ambient layers ── */}
      <GrainOverlay />
      <SpineSVG progress={scroll.spineProgress} />
      <GhostWisp opacity={scroll.ghostOpacity} y={scroll.ghostY} />

      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Main content ── */}
      <main id="main-content">
        {/* 1 · Hero — centred, ink, full viewport */}
        <Hero />

        {/* 2 · The Story — LEFT, parchment */}
        <TheStory />

        {/* 3 · The Ghost — RIGHT, slate */}
        <TheGhost ghostOpacity={scroll.ghostOpacity} ghostY={scroll.ghostY} />

        {/* 4 · What We Offer — LEFT, parchment (green replaced) */}
        <WhatWeOffer />

        {/* 5 · Rooms — RIGHT, slate */}
        <Rooms />

        {/* 6 · Find Us — LEFT, ink */}
        <FindUs />

        {/* 7 · Contact — centred convergence, slate */}
        <Contact />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
