import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  map,
  takeUntil,
} from 'rxjs';

import { CommonSearchInputService } from '@shared/components/common-search-input/common-search-input.service';

@Component({
  selector: 'app-common-search-input',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './common-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonSearchInputComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = 'Buscar por Id o nombre ...';
  @Input() debounce: number = 350;

  searchCtrl: FormControl = new FormControl();

  private readonly unsubscribe$ = new Subject<void>();
  private readonly searchUtilitySrv = inject(CommonSearchInputService);

  ngOnInit(): void {
    this.loadInitConfig();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadInitConfig(): void {
    this.searchCtrl.valueChanges
      .pipe(
        debounceTime(this.debounce),
        distinctUntilChanged(),
        map((query: string) => query.trim() ?? ''),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((query) => (this.searchUtilitySrv.searchText = query));
  }

  onSearch(query: string): void {
    this.searchUtilitySrv.searchText = query;
  }
}
