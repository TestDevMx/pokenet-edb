import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { filter, map } from 'rxjs';

import { CommonNoInformationComponent } from '@shared/components/common-no-information/common-no-information.component';
import { CommonProgressBarComponent } from '@app/shared/components/common-progress-bar/common-progress-bar.component';

import { PokemonResponse } from '@landing/pokenet/pokenet.type';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    UpperCasePipe,
    CommonNoInformationComponent,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    RouterLink,
    CommonProgressBarComponent,
  ],
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DetailsComponent implements OnInit {
  pokemon$ = this.loadInitConfig();

  constructor(private readonly activateRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  loadInitConfig() {
    return this.activateRoute.data.pipe(
      map((resolver) => <PokemonResponse>resolver['pokemonDetail']),
      filter((response) => !!response.id)
    );
  }
}
