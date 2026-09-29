import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { TestingItem } from '../../models/portfolio.model';
import { FigureComponent } from '../figure/figure';

/**
 * User testing photos and video sessions.
 *
 * Items with an `embedUrl` render a responsive inline video player (e.g. Google
 * Drive preview), items with a `videoUrl` link to the session video, and items
 * with only photos render phone shots or a pending frame.
 */
@Component({
  selector: 'app-testing-photos-block',
  imports: [FigureComponent, NgTemplateOutlet],
  templateUrl: './testing-photos-block.html',
  styleUrl: './testing-photos-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestingPhotosBlockComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly title = input<string>();

  readonly orientation = input.required<'portrait' | 'landscape'>();

  readonly photos = input.required<readonly TestingItem[]>();

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
