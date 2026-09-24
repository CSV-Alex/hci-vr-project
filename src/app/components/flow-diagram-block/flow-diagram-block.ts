import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ImageItem } from '../../models/portfolio.model';
import { FigureComponent } from '../figure/figure';

/** User flows, maps and affinity diagrams: wide images shown centered. */
@Component({
  selector: 'app-flow-diagram-block',
  imports: [FigureComponent],
  templateUrl: './flow-diagram-block.html',
  styleUrl: './flow-diagram-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowDiagramBlockComponent {
  readonly title = input<string>();

  readonly diagrams = input.required<readonly ImageItem[]>();
}
