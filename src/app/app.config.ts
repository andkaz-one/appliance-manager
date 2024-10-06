import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {loadCommerceIconSet, loadCoreIconSet, loadEssentialIconSet, loadTechnologyIconSet} from "@cds/core/icon";


loadCommerceIconSet();
loadCoreIconSet();
loadEssentialIconSet();
loadTechnologyIconSet();

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimations()]
};
