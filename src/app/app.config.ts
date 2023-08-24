import { ApplicationConfig } from '@angular/core';
import {
  RouteReuseStrategy,
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideInterceptor } from '@core/interceptor/provider.interceptor';

import { routes } from '@app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withHashLocation()
    ),
    provideHttpClient(withInterceptors(provideInterceptor)),
    provideAnimations(),
  ],
};
