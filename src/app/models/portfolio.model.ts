/**
 * Data model for the portfolio.
 *
 * These types describe exactly what `portfolio.data.ts` must provide. Every
 * content block is a discriminated union on `type`, so the milestone template
 * can dispatch each block to the right presentational component.
 */

/** A single image plus the metadata the page needs to render it honestly. */
export interface ImageItem {
  /** Relative path under `src/assets/images/…`, e.g. `assets/images/game/foo.png`. */
  readonly src: string;
  /** Required: describes the image content for screen readers. */
  readonly alt: string;
  /** Optional caption rendered directly under the image. */
  readonly caption?: string;
}

/** Prose paragraphs. Rendered full width at a comfortable reading measure. */
export interface TextBlock {
  readonly type: 'text';
  /** Optional heading for the block itself. */
  readonly title?: string;
  readonly paragraphs: readonly string[];
}

/** One ideation board section: a subtitle, a short description and its capture. */
export interface BrainstormSection {
  readonly title: string;
  readonly description: string;
  readonly image: ImageItem;
}

/** Ideation board: one mini-section per board area (e.g. each Miro frame). */
export interface BrainstormBlock {
  readonly type: 'brainstorm';
  readonly title?: string;
  readonly sections: readonly BrainstormSection[];
}

/** Storyboard panels: horizontal images in a single scrollable row. */
export interface StoryboardBlock {
  readonly type: 'storyboard';
  readonly title?: string;
  readonly panels: readonly ImageItem[];
}

/**
 * One user testing session. Without `src` a "photo pending" frame is shown;
 * with a non-empty `videoUrl` the whole card links to the session video.
 */
export interface TestingItem {
  readonly src?: string;
  /** Required: describes the photo (or the pending slot) for screen readers. */
  readonly alt: string;
  readonly caption?: string;
  /** Link to the session video (e.g. Google Drive). Empty → not clickable. */
  readonly videoUrl: string;
}

/** User testing photos: grid layout, portrait or landscape source images. */
export interface TestingPhotosBlock {
  readonly type: 'testing';
  readonly title?: string;
  /** `portrait` → tighter multi-column grid, `landscape` → two side by side. */
  readonly orientation: 'portrait' | 'landscape';
  readonly photos: readonly TestingItem[];
}

/** Game / VR screenshots: full-width single image or a two-column grid. */
export interface ScreenshotBlock {
  readonly type: 'screenshots';
  readonly title?: string;
  /** `1` → full-width, `2` → two-column grid. */
  readonly columns: 1 | 2;
  readonly shots: readonly ImageItem[];
}

/** Any content block a milestone can contain. */
export type ContentBlock =
  | TextBlock
  | BrainstormBlock
  | StoryboardBlock
  | TestingPhotosBlock
  | ScreenshotBlock;

/** One chronological milestone entry in the progress log. */
export interface Milestone {
  /** Stable key for `@for` tracking, e.g. `'hito-01'`. */
  readonly id: string;
  /** Milestone title. */
  readonly title: string;
  /** Short label shown next to the marker, e.g. a week or phase name. */
  readonly label: string;
  /** Ordered content blocks for this milestone. */
  readonly blocks: readonly ContentBlock[];
}

/** Hero section copy. */
export interface HeroContent {
  readonly title: string;
  readonly subtitle: string;
  readonly image?: ImageItem;
}

/** Project overview section copy. */
export interface OverviewContent {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly image?: ImageItem;
}

/** Footer copy: the team members credited at the end of the page. */
export interface FooterContent {
  readonly heading: string;
  readonly members: readonly string[];
}
