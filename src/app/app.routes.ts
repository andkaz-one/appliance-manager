import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'dashboard'},
  {path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)},
  {path: 'appliances', loadComponent: () => import('./components/appliance/appliance.component').then(m => m.ApplianceComponent)},
];
