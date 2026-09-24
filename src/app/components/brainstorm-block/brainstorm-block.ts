import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BrainstormSection } from '../../models/portfolio.model';
import { FigureComponent } from '../figure/figure';

/**
 * Ideation board: one mini-section per board area, each with a subtitle, a
 * short description and the capture of that area.
 */
@Component({
  selector: 'app-brainstorm-block',
  imports: [FigureComponent],
  templateUrl: './brainstorm-block.html',
  styleUrl: './brainstorm-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrainstormBlockComponent {
  readonly title = input<string>();

  readonly sections = input.required<readonly BrainstormSection[]>();
}
