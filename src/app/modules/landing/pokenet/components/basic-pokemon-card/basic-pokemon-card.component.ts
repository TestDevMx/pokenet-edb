import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LocalStorageService } from '@shared/services/local-storage.service';

import { PokemonResponse } from '@landing/pokenet/pokenet.type';
import { WEB_ROUTES } from '@app/core/utils/web.routes';
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

  private readonly localStorageSrv = inject(LocalStorageService);
  private readonly router = inject(Router);

  addToFavorite(pokemon: PokemonResponse): void {
    let storage = this.localStorageSrv.getItem('pokenetList');
    let poke: string[] = [];

    if (!!storage) {
      poke = [...storage.split(','), <string>(<unknown>pokemon.id)];
    } else {
      poke.push(<string>(<unknown>pokemon.id));
    }

    this.localStorageSrv.setItem('pokenetList', poke.toString());
  }

  navigate(id: number): void {
    this.router.navigateByUrl(`${WEB_ROUTES.pokemon.path}/${id}`);
  }
}
