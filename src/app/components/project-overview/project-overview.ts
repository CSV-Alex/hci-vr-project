import { ChangeDetectionStrategy, Component } from '@angular/core';

import { OVERVIEW } from '../../data/portfolio.data';
import { FigureComponent } from '../figure/figure';

/** Project overview: a short paragraph plus one supporting image. */
@Component({
  selector: 'app-project-overview',
  imports: [FigureComponent],
  templateUrl: './project-overview.html',
  styleUrl: './project-overview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectOverviewComponent {
  protected readonly overview = OVERVIEW;
}
