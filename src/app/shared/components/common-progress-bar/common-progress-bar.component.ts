import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-common-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './common-progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonProgressBarComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) value!: number;
}
