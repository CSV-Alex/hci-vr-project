import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ImageItem } from '../../models/portfolio.model';
import { FigureComponent } from '../figure/figure';

/**
 * Storyboard panels: a single horizontal row of panels that scrolls sideways.
 *
 * On mobile the row becomes a swipeable snap-scroller; on desktop three or four
 * panels fit side by side.
 */
@Component({
  selector: 'app-storyboard-block',
  imports: [FigureComponent],
  templateUrl: './storyboard-block.html',
  styleUrl: './storyboard-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryboardBlockComponent {
  readonly title = input<string>();

  readonly panels = input.required<readonly ImageItem[]>();
}
