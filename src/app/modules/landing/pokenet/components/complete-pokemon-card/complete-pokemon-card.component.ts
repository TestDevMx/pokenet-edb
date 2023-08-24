import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complete-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complete-pokemon-card.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompletePokemonCardComponent {

}
