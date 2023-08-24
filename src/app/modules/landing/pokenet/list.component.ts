import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { Subject, switchMap, takeUntil } from 'rxjs';

import { PokenetService } from '@landing/pokenet/pokenet.service';
import { CommonSearchInputService } from '@shared/components/common-search-input/common-search-input.service';

import { CommonSearchInputComponent } from '@shared/components/common-search-input/common-search-input.component';
import { BasicPokemonCardComponent } from '@landing/pokenet/components/basic-pokemon-card/basic-pokemon-card.component';

import { CommonNoInformationComponent } from '@app/shared/components/common-no-information/common-no-information.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    CommonSearchInputComponent,
    BasicPokemonCardComponent,
    CommonNoInformationComponent,
  ],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListComponent implements OnInit, OnDestroy {
  pokemonList$ = this.pokenetService.pokemonList$;
  counterMapping: Record<string, string> = {
    '=0': 'Sin Pokémon',
    '=1': 'Un Pokémon',
    other: '# Pokémon encontrados',
  };

  private readonly searchUtilitySrv = inject(CommonSearchInputService);
  private readonly unsubscribe$ = new Subject<void>();

  constructor(private readonly pokenetService: PokenetService) {}

  ngOnInit(): void {
    this.searchByIdOrName();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  searchByIdOrName() {
    this.searchUtilitySrv.searchText$
      .pipe(
        switchMap((query) =>
          !!query
            ? this.pokenetService.searchByIdOrName(query)
            : this.pokenetService.pokemonList()
        ),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  paginationSearch({ pageIndex, pageSize }: PageEvent): void {
    this.pokenetService
      .pokemonList(pageIndex * pageSize, pageSize)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe();
  }

  trackById<T extends { id: string | number }>(index: number, item: T) {
    return item.id ?? index;
  }
}
