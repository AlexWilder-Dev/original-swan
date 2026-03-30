# The Original Swan — What We Built & Why

Six things worth saying when presenting this to the pub or Arkell's.

---

**1. The site moves the way the story does.**
Most pub websites are a list of facts laid flat on a screen. This one follows a winding path — sections swing left, then right, then left again as you scroll, like following an Oxford alley at night. The visual rhythm isn't decoration; it's how a 170-year-old story actually feels to walk through.

**2. The ghost is a design feature, not a gimmick.**
A golden thread — a faint SVG spine that draws itself down the page as you scroll — runs the length of the site. A ghost wisp drifts in and out of view as you descend, fading entirely when you reach the bottom. The ghost story is told through the design language, not just the words. First-time visitors will notice it. Regulars will appreciate it.

**3. The warmth comes from the palette, not photography.**
We deliberately avoided food photography, hero images, and stock assets. The atmosphere is built from warm off-white, aged-brass gold, and stone-wall slate — colours chosen to feel like walking into a lit room on a cold evening, not like browsing a menu. The pub stands on its own without having to sell itself.

**4. Cowley locals can find what they need in ten seconds.**
The nav is fixed and always visible. Phone number, address, and enquiry form are a single tap from anywhere on the page. The atmospheric sections are there for the visitor who wants to linger — but they never obstruct the local who needs the match time at 7pm on a Friday.

**5. It's built to be handed over, not depended on.**
The codebase is Next.js 14 with a typed component system. Every section is an instance of a single `SwingSection` primitive — change the alignment and background of one prop to reshape the whole page. The contact form needs one line changed to point at Formspree or Netlify Forms. Real room photos slot straight into the placeholder divs. No bespoke agency required to maintain it.

**6. It respects the pub's actual age.**
Nothing on this site looks like it was designed in 2019. The typography — Cormorant Garamond for display, Crimson Pro for body — is rooted in the editorial tradition that predates digital design entirely. The 1854 founding date isn't a heritage badge; it's the reason the whole thing looks the way it does.
