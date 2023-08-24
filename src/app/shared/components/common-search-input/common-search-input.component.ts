import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { Subject, debounceTime, distinctUntilChanged, map } from 'rxjs';

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
  @Output() search = new EventEmitter<string>();

  searchCtrl: FormControl = new FormControl();

  private readonly unsubscribe$ = new Subject<void>();

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
        map((query: string) => query.trim() ?? '')
      )
      .subscribe((query) => this.search.emit(query));
  }

  onSearch(value: string): void {
    this.search.emit(value);
  }
}
