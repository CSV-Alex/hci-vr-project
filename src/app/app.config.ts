import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

/**
 * Application config for the single-page portfolio.
 *
 * Intentionally minimal: this is a static single-page showcase, so there is no
 * router, no HTTP client and no state management to register.
 */
export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
};
