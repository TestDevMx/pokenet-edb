import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-e404',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './e404.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class E404Component {}
