import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes, RenderMode } from '@angular/ssr';
import { appConfig } from './app.config';

/**
 * Server-side rendering config.
 *
 * The portfolio is a single static page, so the catch-all route is pre-rendered
 * at build time (SSG). This replaces the CLI-generated `app.routes.server.ts`
 * which was removed along with the router.
 */
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(
      withRoutes([
        {
          path: '**',
          renderMode: RenderMode.Prerender,
        },
      ]),
    ),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
