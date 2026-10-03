import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly overview = OVERVIEW;

  protected getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
