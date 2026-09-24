import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Ideation notes rendered as sticky-note-style cards.
 *
 * Text only by design — no images, no shadows, square corners.
 */
@Component({
  selector: 'app-brainstorm-block',
  templateUrl: './brainstorm-block.html',
  styleUrl: './brainstorm-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrainstormBlockComponent {
  readonly title = input<string>();

  readonly notes = input.required<readonly string[]>();
}
