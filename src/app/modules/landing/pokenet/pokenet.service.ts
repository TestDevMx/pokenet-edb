import { Injectable, inject } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  combineLatestAll,
  concatAll,
  concatMap,
  delay,
  forkJoin,
  from,
  map,
  mergeAll,
  mergeMap,
  of,
  range,
  switchMap,
  tap,
  zip,
} from 'rxjs';

import { RestApiService } from '@core/api/rest-api.service';

import {
  PokemonListResponse,
  PokemonResponse,
} from '@landing/pokenet/pokenet.type';

import { environment } from '@env/environment';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PokenetService {
  private readonly restApiSrv = inject(RestApiService);
  private readonly pokemonRoute = environment.api.category.pokemon;

  private readonly _pokemonList = new BehaviorSubject<PokemonResponse[] | null>(
    null
  );
  private readonly _pokemon = new BehaviorSubject<PokemonResponse | null>(null);

  pokemonByIdOrName(value: string): Observable<PokemonResponse> {
    return this.restApiSrv
      .get<PokemonResponse>(`${this.pokemonRoute}/${value}`)
      .pipe(catchError((error) => of(error)));
  }

  pokemonList(offset: number = 0, limit: number = 10) {
    return forkJoin({
      count: this.restApiSrv
        .get<PokemonListResponse>(this.pokemonRoute)
        .pipe(map(({ count }) => count)),
      list: range(offset + 1, limit + offset).pipe(
        concatMap((id) =>
          this.pokemonByIdOrName(<string>(<unknown>id)).pipe(
            map((response) => of(response))
          )
        ),
        combineLatestAll()
      ),
    }).pipe(
      tap((r) => console.log('outer', r)),
      catchError((error) => of(error))
    );
  }

  get pokemonList$() {
    return this._pokemonList.asObservable();
  }

  get pokemon$() {
    return this._pokemon.asObservable();
  }
}
