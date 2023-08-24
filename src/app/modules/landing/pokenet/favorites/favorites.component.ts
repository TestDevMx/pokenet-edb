import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokenetService } from '@landing/pokenet/pokenet.service';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CommonNoInformationComponent } from '@shared/components/common-no-information/common-no-information.component';
import { BasicPokemonCardComponent } from '@landing/pokenet/components/basic-pokemon-card/basic-pokemon-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    BasicPokemonCardComponent,
    CommonNoInformationComponent,
  ],
  templateUrl: './favorites.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FavoritesComponent {
  pokemonList$ = this.pokenetService.pokemonList$;
  counterMapping: Record<string, string> = {
    '=0': 'Sin Pokémon',
    '=1': 'Un Pokémon',
    other: '# Pokémon encontrados',
  };

  constructor(private readonly pokenetService: PokenetService) {}

  trackById<T extends { id: string | number }>(index: number, item: T) {
    return item.id ?? index;
  }
}
