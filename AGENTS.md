# AGENTS.md

## Mission
You are an expert front-end engineering agent building a single-page academic portfolio for my Human-Computer Interaction (HCI) course. The page documents the progress of my semester project called **"Grupo F — Cuidado al Volante"**.

This is a static showcase. It exists to present evidence of work (screenshots, user testing photos, game images) with short written context. It is not a product, not a blog with a CMS, and not a multi-page site.

## Project Context

- **Stack:** Angular (already scaffolded), TypeScript, SCSS.
- **Architecture:** Angular standalone components. No NgModules.
- **Directory map:**
  - `src/app/` — components.
  - `src/assets/images/` — all screenshots, user testing photos, and game images I upload.
  - `src/styles/` — global SCSS, design tokens, theme variables.
- **Content:** All text and images come from me. Do not invent project details, dates, or results.

## Page Structure (Single Page, Vertical Scroll Only)

The page is one continuous scroll. **No navbar, no sidebar, no routing, no footer with links.** Just sections stacked vertically.

Sections in order:

1. **Header / Hero**
   - Project title: "Grupo F — Cuidado al Volante".
   - One-line subtitle: HCI course project, semester, university.
   - Optional: one hero image.

2. **Project Overview**
   - Short paragraph (3–5 lines) describing the project.
   - One image on the side or below.

3. **Progress Log**
   - Chronological blocks. Each block:
     - A short heading (e.g., "Ideation", "Prototype", "User Testing", "Final Build").
     - One or two images (screenshot, photo, or game image).
     - Two to four lines of text describing what was done and what was learned.
   - This is the core of the page. It can have as many blocks as needed.

4. **Closing / Reflection**
   - Short closing paragraph.

## Visual Design Direction

Minimalist, retro-terminal aesthetic. Restrained and readable.

- **Background:** Solid near-black (`#0a0a0a`). This is the base of the entire page.
- **Accent color:** Warm yellow (`#f5c518`). Used sparingly — for section titles or thin divider lines only. Not for large blocks.
- **Text:** Off-white (`#eaeaea`) for body. Yellow for section headings.
- **Borders / dividers:** Thin 1px lines in a dim gray or dim amber. No heavy cards, no rounded boxes with shadows.
- **Layout:** Generous whitespace. Images and text stacked with clear separation. One idea per block.
- **Typography:**
  - Headings: monospaced or geometric sans-serif (e.g., JetBrains Mono, IBM Plex Mono, Space Grotesk).
  - Body: clean readable sans-serif.
- **Motion:** None, or extremely subtle (fade on scroll is optional, not required).
- **Responsiveness:** Mobile-first. Images scale down cleanly, text remains readable.
- **Accessibility:** Body text contrast ≥ 4.5:1 against the black background. Every image must have an `alt` attribute describing its content.

## Working Rules

1. **Plan before acting.** Before writing or modifying code, output a short plan listing the files you will create or change. Wait for my approval.
2. **Single page only.** Do not create routes, a router module, a navbar, or a footer.
3. **Modern Angular only.** Standalone components and the new control flow syntax (`@if`, `@for`).
4. **Style discipline.** All colors, spacing, and typography must come from SCSS variables or CSS custom properties in `src/styles/`. Never hardcode hex values inside component styles.
5. **Images live in `src/assets/images/`.** Reference them with relative paths. I will upload them.
6. **Verify every change.** After each change, run `ng build` and report the result. Fix any error before moving on.
7. **Small steps.** One logical change per turn.
8. **Ask, don't assume.** If something is unclear, ask before implementing.

## Do Not

- Do not add a navbar, sidebar, tabs, or multi-page routing.
- Do not install new dependencies (UI kits, icon packs, animation libraries) without my approval.
- Do not modify `angular.json`, `tsconfig.json`, or global config without asking.
- Do not generate fake project content, fake dates, or invented results.
- Do not add analytics, tracking, or external CDN calls.
- Do not commit to Git unless I explicitly ask.

## Definition of Done

A task is complete when:
- The requested change is implemented as a section or element of the single scrollable page.
- `ng build` passes without errors or new warnings.
- The visual result matches the design direction above.
- You have summarized in one short paragraph what you changed and why.