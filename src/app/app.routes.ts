import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { inject } from '@angular/core';

import { PokenetService } from '@landing/pokenet/pokenet.service';

import { AppComponent } from '@app/app.component';

import { WEB_ROUTES } from '@core/utils/web.routes';

const errorRoutes = WEB_ROUTES.errors;
const pokemonRoutes = WEB_ROUTES.pokemon;

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: pokemonRoutes.path },
      {
        path: pokemonRoutes.path,
        title: pokemonRoutes.title,
        loadComponent: () => import('@landing/pokenet/list.component'),
        resolve: { pokemonList: () => inject(PokenetService).pokemonList() },
      },
      {
        path: `${pokemonRoutes.path}/:id`,
        title: pokemonRoutes.title,
        loadComponent: () =>
          import('@landing/pokenet/details/details.component'),
        resolve: {
          pokemonDetail: (route: ActivatedRouteSnapshot) =>
            inject(PokenetService).pokemonById(route.paramMap.get('id') ?? '0'),
        },
      },
      {
        path: pokemonRoutes.favorites.path,
        title: pokemonRoutes.favorites.title,
        loadComponent: () =>
          import('@landing/pokenet/favorites/favorites.component'),
        resolve: {
          pokemonDetail: () => inject(PokenetService).favoritePokemons(),
        },
      },
    ],
  },
  {
    path: errorRoutes.root_path,
    component: AppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: errorRoutes.e404.path },
      {
        path: errorRoutes.e404.path,
        title: errorRoutes.e404.title,
        loadComponent: () => import('@errors/e404/e404.component'),
      },
      {
        path: errorRoutes.e500.path,
        title: errorRoutes.e500.title,
        loadComponent: () => import('@errors/e500/e500.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: `${errorRoutes.root_path}/${errorRoutes.e404.path}`,
    pathMatch: 'full',
  },
];
