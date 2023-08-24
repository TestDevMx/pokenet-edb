import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  private readonly http = inject(HttpClient);

  /**
   * GET HTTP
   * @param url relative url
   * @param params opcional HttpParams
   * @returns Observable with Generic response
   */
  get<TResponse>(url: string, params?: HttpParams): Observable<TResponse> {
    return this.http.get<TResponse>(url, { params }).pipe(take(1));
  }
}
