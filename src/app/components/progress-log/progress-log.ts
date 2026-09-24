import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MILESTONES } from '../../data/portfolio.data';
import { MilestoneComponent } from '../milestone/milestone';

/**
 * Progress log: the chronological core of the page.
 *
 * Reads the milestone list from the data file and renders one `app-milestone`
 * per entry, separated by thin rules.
 */
@Component({
  selector: 'app-progress-log',
  imports: [MilestoneComponent],
  templateUrl: './progress-log.html',
  styleUrl: './progress-log.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressLogComponent {
  protected readonly milestones = MILESTONES;
}
