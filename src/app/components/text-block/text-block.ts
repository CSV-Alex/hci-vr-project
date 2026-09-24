import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Full-width prose block: the default reading layout for milestone text. */
@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.html',
  styleUrl: './text-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBlockComponent {
  readonly title = input<string>();

  readonly paragraphs = input.required<readonly string[]>();
}
