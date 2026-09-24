import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from './components/hero/hero';
import { ProjectOverviewComponent } from './components/project-overview/project-overview';
import { ProgressLogComponent } from './components/progress-log/progress-log';
import { SiteFooterComponent } from './components/site-footer/site-footer';

/**
 * Root shell of the single-page portfolio.
 *
 * Deliberately has no navbar, sidebar, tabs or routing: the page is one
 * continuous vertical scroll of three sections, closed by a plain credits
 * footer with the team members (text only, no links).
 */
@Component({
  selector: 'app-root',
  imports: [HeroComponent, ProjectOverviewComponent, ProgressLogComponent, SiteFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
