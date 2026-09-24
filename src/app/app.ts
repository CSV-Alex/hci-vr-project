import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from './components/hero/hero';
import { ProjectOverviewComponent } from './components/project-overview/project-overview';
import { ProgressLogComponent } from './components/progress-log/progress-log';

/**
 * Root shell of the single-page portfolio.
 *
 * Deliberately has no navbar, sidebar, tabs, routing or footer: the page is one
 * continuous vertical scroll of three sections.
 */
@Component({
  selector: 'app-root',
  imports: [HeroComponent, ProjectOverviewComponent, ProgressLogComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
