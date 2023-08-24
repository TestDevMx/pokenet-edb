import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-basic-pokemon-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './basic-pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPokemonCardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) urlSrc!: string;
}
