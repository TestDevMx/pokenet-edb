import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-e404',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './e404.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class E404Component {}
