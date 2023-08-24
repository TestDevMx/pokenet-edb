import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { map, tap } from 'rxjs';

import { CommonSearchInputComponent } from '@shared/components/common-search-input/common-search-input.component';
import { BasicPokemonCardComponent } from '@landing/pokenet/components/basic-pokemon-card/basic-pokemon-card.component';

import { PokenetService } from '@landing/pokenet/pokenet.service';

import {
  PokemonListResponse,
  PokemonResponse,
} from '@landing/pokenet/pokenet.type';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    CommonSearchInputComponent,
    BasicPokemonCardComponent,
  ],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListComponent {
  pokemonList$ = this.pokenetService.pokemonList$;

  searchByIdOrName(value: string) {
    this.pokenetService.pokemonByIdOrName(value).subscribe(console.log);
  }

  constructor(private readonly pokenetService: PokenetService) {}

  paginationSearch({ pageIndex, pageSize }: PageEvent): void {
    console.log(
      'de',
      pageIndex * pageSize + 1,
      'al',
      pageIndex * pageSize + pageSize
    );

    this.pokenetService
      .pokemonList(pageIndex * pageSize, pageSize)
      .subscribe(console.log);
  }
}
