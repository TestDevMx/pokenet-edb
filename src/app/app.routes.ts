import { Routes } from '@angular/router';
import { inject } from '@angular/core';

import { PokenetService } from '@landing/pokenet/pokenet.service';

import { LayoutComponent } from '@layout/layout.component';

import { WEB_ROUTES } from '@core/utils/web.routes';
const errorRoutes = WEB_ROUTES.errors;
const pokemonRoutes = WEB_ROUTES.pokemon;

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
        loadComponent: () => import('@landing/pokenet/list.component'),
      },
    ],
  },
  {
    path: errorRoutes.root_path,
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: errorRoutes.e404.path },
      {
        path: errorRoutes.e404.path,
        title: errorRoutes.e404.title,
        loadComponent: () => import('@errors/e404/e404.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: `${errorRoutes.root_path}/${errorRoutes.e404.path}`,
    pathMatch: 'full',
  },
];
