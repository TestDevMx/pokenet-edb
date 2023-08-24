import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PokemonResponse } from '@landing/pokenet/pokenet.type';
@Component({
  selector: 'app-basic-pokemon-card',
  standalone: true,
  imports: [
    CommonModule,
    UpperCasePipe,
    TitleCasePipe,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './basic-pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPokemonCardComponent {
  @Input({ required: true }) pokemon!: PokemonResponse;
}
