import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommonSearchInputService {
  private _searchText = new Subject<string>();
  private _showInput = new Subject<boolean>();

  set searchText(value: string) {
    this._searchText.next(value);
  }

  get searchText$(): Observable<string> {
    return this._searchText.asObservable();
  }

  set showInput(value: boolean) {
    this._showInput.next(value);
  }

  get showInput$(): Observable<boolean> {
    return this._showInput.asObservable();
  }
}
