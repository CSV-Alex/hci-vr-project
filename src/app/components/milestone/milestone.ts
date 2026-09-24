import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Milestone } from '../../models/portfolio.model';
import { BrainstormBlockComponent } from '../brainstorm-block/brainstorm-block';
import { FlowDiagramBlockComponent } from '../flow-diagram-block/flow-diagram-block';
import { ScreenshotBlockComponent } from '../screenshot-block/screenshot-block';
import { StoryboardBlockComponent } from '../storyboard-block/storyboard-block';
import { TestingPhotosBlockComponent } from '../testing-photos-block/testing-photos-block';
import { TextBlockComponent } from '../text-block/text-block';

/**
 * A single chronological milestone in the progress log.
 *
 * Renders the milestone marker/heading and then dispatches each content block to
 * the component that owns that layout, so a milestone can mix prose, ideation
 * notes, storyboards, testing photos, screenshots and diagrams freely.
 */
@Component({
  selector: 'app-milestone',
  imports: [
    TextBlockComponent,
    BrainstormBlockComponent,
    StoryboardBlockComponent,
    TestingPhotosBlockComponent,
    ScreenshotBlockComponent,
    FlowDiagramBlockComponent,
  ],
  templateUrl: './milestone.html',
  styleUrl: './milestone.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MilestoneComponent {
  readonly milestone = input.required<Milestone>();
}
