import { HttpInterceptorFn } from '@angular/common/http';

import { httpBaseApiRouteInterceptorFn } from '@core/interceptor/http-base-api-route.interceptor';

export const provideInterceptor: HttpInterceptorFn[] = [
  httpBaseApiRouteInterceptorFn,
];
