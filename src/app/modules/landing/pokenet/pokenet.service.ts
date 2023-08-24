import { Injectable, inject } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatestAll,
  concatMap,
  forkJoin,
  from,
  map,
  of,
  range,
  tap,
} from 'rxjs';

import { RestApiService } from '@core/api/rest-api.service';
import { LocalStorageService } from '@shared/services/local-storage.service';

import {
  PokemonListResponse,
  PokemonPaginationList,
  PokemonResponse,
} from '@landing/pokenet/pokenet.type';

import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class PokenetService {
  private readonly restApiSrv = inject(RestApiService);
  private readonly localStorageSrv = inject(LocalStorageService);

  private readonly pokemonRoute = environment.api.category.pokemon;

  private readonly _pokemonList =
    new BehaviorSubject<PokemonPaginationList | null>(null);

  pokemonById(id: string): Observable<PokemonResponse> {
    return this.restApiSrv
      .get<PokemonResponse>(`${this.pokemonRoute}/${id}`)
      .pipe(catchError((error) => of(error)));
  }

  searchByIdOrName(value: string): Observable<PokemonPaginationList> {
    return this.restApiSrv
      .get<PokemonResponse>(`${this.pokemonRoute}/${value.toLowerCase()}`)
      .pipe(
        map((response) => ({ count: 1, list: [response] })),
        tap((response) => {
          this._pokemonList.next(response);
        }),
        catchError((error) => {
          this._pokemonList.next(null);
          return of(error);
        })
      );
  }

  pokemonList(
    offset: number = 0,
    limit: number = 10
  ): Observable<PokemonPaginationList> {
    return forkJoin({
      count: this.restApiSrv
        .get<PokemonListResponse>(this.pokemonRoute)
        .pipe(map(({ count }) => count)),
      list: range(offset + 1, limit).pipe(
        concatMap((id) =>
          this.restApiSrv
            .get<PokemonResponse>(`${this.pokemonRoute}/${id}`)
            .pipe(map((response) => of(response)))
        ),
        combineLatestAll()
      ),
    }).pipe(
      tap((response) => this._pokemonList.next(response)),
      catchError((error) => {
        this._pokemonList.next(null);
        return of(error);
      })
    );
  }

  favoritePokemons() {
    let storage = this.localStorageSrv.getItem('pokenetList');
    if (!!storage) {
      return from([...storage.split(',')]).pipe(
        concatMap((id) =>
          this.restApiSrv
            .get<PokemonResponse>(`${this.pokemonRoute}/${id}`)
            .pipe(map((response) => of(response)))
        ),
        combineLatestAll(),
        map((response) => ({ count: response.length, list: response })),
        tap(console.log),
        tap((response) => this._pokemonList.next(response)),
        catchError((error) => {
          this._pokemonList.next(null);
          return of(error);
        })
      );
    }
    return of([]);
  }

  get pokemonList$() {
    return this._pokemonList.asObservable();
  }
}
