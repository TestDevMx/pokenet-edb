import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-e500',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './e500.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class E500Component {}
