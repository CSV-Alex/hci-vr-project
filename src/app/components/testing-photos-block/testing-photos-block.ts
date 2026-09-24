import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { TestingItem } from '../../models/portfolio.model';
import { FigureComponent } from '../figure/figure';

/**
 * User testing photos shot on a phone.
 *
 * The source orientation drives the grid: portrait photos pack into a tighter
 * multi-column grid, landscape photos sit two per row. Items without a photo
 * render a "pending" frame, and items with a `videoUrl` link to the session
 * video in a new tab.
 */
@Component({
  selector: 'app-testing-photos-block',
  imports: [FigureComponent, NgTemplateOutlet],
  templateUrl: './testing-photos-block.html',
  styleUrl: './testing-photos-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestingPhotosBlockComponent {
  readonly title = input<string>();

  readonly orientation = input.required<'portrait' | 'landscape'>();

  readonly photos = input.required<readonly TestingItem[]>();
}
