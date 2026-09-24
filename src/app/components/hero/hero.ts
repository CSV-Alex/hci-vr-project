import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HERO } from '../../data/portfolio.data';
import { FigureComponent } from '../figure/figure';

/** Hero / header section: project title, one-line subtitle, optional image. */
@Component({
  selector: 'app-hero',
  imports: [FigureComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly hero = HERO;
}
