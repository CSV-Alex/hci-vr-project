import { HeroContent, Milestone, OverviewContent } from '../models/portfolio.model';

/**
 * =============================================================================
 * PORTFOLIO CONTENT — this is the only file you need to edit to add material.
 * =============================================================================
 *
 * HOW TO ADD CONTENT
 * ------------------
 * 1. Drop your images into `src/assets/images/<subfolder>/`.
 *    Suggested subfolders: brainstorm/, storyboard/, testing/, game/, flows/
 * 2. Reference them as `assets/images/<subfolder>/<file>` (see the example
 *    milestone below).
 * 3. Replace the placeholder strings with your real text. Every image needs a
 *    descriptive `alt`; the model enforces that field, so the build will fail
 *    if it is missing.
 *
 * NOTE ON THE MILESTONES ARRAY
 * ----------------------------
 * The single entry below is **PLACEHOLDER DATA** so you can see every block
 * layout rendered. Delete it (or edit it in place) and add one entry per real
 * milestone, in chronological order.
 */

/** Hero copy. The subtitle is the single line under the title. */
export const HERO: HeroContent = {
  title: 'Grupo F — Cuidado al Volante',
  // TODO(content): confirm the exact semester / university wording.
  subtitle: '[Curso de Interacción Humano-Computadora · 7mo semestre · UNSA]',
  // Optional: uncomment and point at your hero image.
  // image: {
  //   src: 'assets/images/game/hero.png',
  //   alt: '[PLACEHOLDER — describe the hero image]',
  // },
};

/** Project overview copy: 3–5 lines of context. */
export const OVERVIEW: OverviewContent = {
  heading: 'Resumen del proyecto',
  paragraphs: ['[PLACEHOLDER]'],
  // Optional: uncomment and point at your overview image.
  // image: {
  //   src: 'assets/images/flows/overview.png',
  //   alt: '[PLACEHOLDER — describe the overview image]',
  // },
};

/**
 * Progress log entries, in chronological order.
 *
 * ⚠️ THE ENTRY BELOW IS PLACEHOLDER DATA — every field is marked as such so you
 * can see all six block types rendered. Replace it with your real milestones.
 */
export const MILESTONES: readonly Milestone[] = [
  {
    id: 'placeholder-hito',
    title: '[PLACEHOLDER — replace with your first milestone]',
    label: '[PLACEHOLDER — week / phase]',
    blocks: [
      {
        type: 'text',
        title: '[PLACEHOLDER — block title]',
        paragraphs: [
          '[PLACEHOLDER — replace with the milestone description, learnings or conclusions.]',
          '[PLACEHOLDER — a second short paragraph is optional.]',
        ],
      },
      {
        type: 'brainstorm',
        title: '[PLACEHOLDER — brainstorm / ideation notes]',
        notes: [
          '[PLACEHOLDER — ideation note one]',
          '[PLACEHOLDER — ideation note two]',
          '[PLACEHOLDER — ideation note three]',
          '[PLACEHOLDER — ideation note four]',
        ],
      },
      {
        type: 'storyboard',
        title: '[PLACEHOLDER — storyboard panels]',
        panels: [
          {
            src: 'assets/images/storyboard/panel-01.png',
            alt: '[PLACEHOLDER — describe storyboard panel 1]',
            caption: '[PLACEHOLDER — panel 1 caption]',
          },
          {
            src: 'assets/images/storyboard/panel-02.png',
            alt: '[PLACEHOLDER — describe storyboard panel 2]',
            caption: '[PLACEHOLDER — panel 2 caption]',
          },
          {
            src: 'assets/images/storyboard/panel-03.png',
            alt: '[PLACEHOLDER — describe storyboard panel 3]',
            caption: '[PLACEHOLDER — panel 3 caption]',
          },
        ],
      },
      {
        type: 'testing',
        title: '[PLACEHOLDER — user testing photos]',
        orientation: 'portrait',
        photos: [
          {
            src: 'assets/images/testing/sesion-01.jpg',
            alt: '[PLACEHOLDER — describe testing photo 1]',
            caption: '[PLACEHOLDER — testing photo 1 caption]',
          },
          {
            src: 'assets/images/testing/sesion-02.jpg',
            alt: '[PLACEHOLDER — describe testing photo 2]',
            caption: '[PLACEHOLDER — testing photo 2 caption]',
          },
        ],
      },
      {
        type: 'screenshots',
        title: '[PLACEHOLDER — game / VR screenshots]',
        columns: 2,
        shots: [
          {
            src: 'assets/images/game/captura-01.png',
            alt: '[PLACEHOLDER — describe screenshot 1]',
            caption: '[PLACEHOLDER — screenshot 1 caption]',
          },
          {
            src: 'assets/images/game/captura-02.png',
            alt: '[PLACEHOLDER — describe screenshot 2]',
            caption: '[PLACEHOLDER — screenshot 2 caption]',
          },
        ],
      },
      {
        type: 'flow',
        title: '[PLACEHOLDER — user flow / diagram]',
        diagrams: [
          {
            src: 'assets/images/flows/flujo-01.png',
            alt: '[PLACEHOLDER — describe the user flow diagram]',
            caption: '[PLACEHOLDER — flow diagram caption]',
          },
        ],
      },
    ],
  },
];
