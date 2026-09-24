import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ImageItem } from '../../models/portfolio.model';
import { FigureComponent } from '../figure/figure';

/**
 * Game / VR screenshots. `columns` picks between a single full-width image and
 * a two-column grid.
 */
@Component({
  selector: 'app-screenshot-block',
  imports: [FigureComponent],
  templateUrl: './screenshot-block.html',
  styleUrl: './screenshot-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenshotBlockComponent {
  readonly title = input<string>();

  readonly columns = input.required<1 | 2>();

  readonly shots = input.required<readonly ImageItem[]>();
}
