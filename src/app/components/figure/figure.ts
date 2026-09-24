import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Shared image primitive.
 *
 * Every image on the page goes through this component so that the `alt`
 * attribute is structurally required (it is a required input) and lazy loading
 * plus optional captions behave consistently.
 */
@Component({
  selector: 'app-figure',
  templateUrl: './figure.html',
  styleUrl: './figure.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FigureComponent {
  /** Path relative to the deployed assets folder. */
  readonly src = input.required<string>();

  /** Required description of the image content (accessibility). */
  readonly alt = input.required<string>();

  /** Optional caption rendered under the image. */
  readonly caption = input<string>();

  /** `contain` for diagrams/screenshots, `cover` for photographs. */
  readonly fit = input<'contain' | 'cover'>('contain');
}
