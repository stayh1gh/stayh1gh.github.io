# PRODUCT.md — Bruno Paradas Portfolio

## Register

Brand. This is a personal portfolio — the design *is* the product. A visitor's
impression (taste, craft, seniority) is the thing being made. Optimise for
distinctiveness and confidence, not conversion funnels.

## Product

A single-page personal portfolio for **Bruno Paradas**, a product designer with
8+ years of experience (currently at BuzzFeed, remote from Brazil). It presents:

- A hero introduction.
- **Recent work** — large, brand-coloured featured cards, one per project
  (Smartify, GameplayWiz, Frete.com, Jusbrasil), each linking to a detail page
  (full case study for Smartify & Jusbrasil; image galleries for the others).
- **Career** — a chronological list of roles with company logos.
- **Other stuff I made** — a mosaic gallery of smaller pieces.
- A "Let's work together" footer with contact + social links.

It's a static site (HTML/CSS/vanilla JS, no build step) served locally via
`serve.py`, published to GitHub Pages at **brunoparadas.com**.

## Target users

Hiring managers, design leads, and prospective clients evaluating Bruno for
senior product-design work. They skim fast and judge craft instantly. Secondary:
peers and recruiters sharing the link.

## Brand personality

**Confident & crafted.** Modern, self-assured, high-craft. The work speaks for
itself; the chrome around it is precise and quiet enough to stay out of the way,
but never timid. Each project card owns its brand colour — colour is voice here.
Dark by default with a working light theme.

Three voice words: *assured, precise, warm.*

## Anti-references (avoid)

- **Overdesigned / flashy** (the user's explicit steer): effects for their own
  sake, heavy or gratuitous animation, visual noise that competes with the work.
  Motion must be purposeful and restrained.
- Generic template-portfolio look (interchangeable Framer/Webflow cards).
- Corporate-SaaS landing page (navy gradients, hero-metric blocks, stock).
- Sterile minimalism that leaves no impression.

## Design principles

1. **Let the work lead.** Project imagery and brand colour are the loudest
   elements; UI chrome stays calm.
2. **Committed colour per card.** Each featured project is drenched in its own
   brand colour — not hedged with neutrals.
3. **Restrained, intentional motion.** Subtle entrances and hover feedback only;
   nothing that distracts from the work. Respect `prefers-reduced-motion`.
4. **Identity is set.** Plus Jakarta Sans, the dark palette, and the brand-card
   system are committed design decisions (from the 2026 Figma redesign). Polish
   within that system; don't re-pick the font or core palette.
5. **Fast and accessible.** No build step, lazy-loaded imagery, ≥4.5:1 body
   contrast, keyboard-navigable.

## Tech / structure

- `index.html` — home (hero, work, career, other, footer)
- `project.html` — detail page, driven by `?project=` (rich case study or gallery)
- `js/data.js` — content source (projects, cards, career, social links)
- `js/main.js`, `js/project.js` — render logic
- `css/style.css` — all styles; design tokens at top, 2026 redesign block at the end
