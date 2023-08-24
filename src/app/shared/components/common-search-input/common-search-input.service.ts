import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommonSearchInputService {
  private _searchText = new Subject<string>();

  set searchText(value: string) {
    this._searchText.next(value);
  }

  get searchText$(): Observable<string> {
    return this._searchText.asObservable();
  }
}
