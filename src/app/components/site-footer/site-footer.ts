import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FOOTER } from '../../data/portfolio.data';

/** Closing credits: the team members, as plain text (no links, no navigation). */
@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly footer = FOOTER;
}
