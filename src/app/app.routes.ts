import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard-sales',
    loadComponent: () => import('./features/dashboards/sales-dashboard.component').then(m => m.SalesDashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard-ecommerce',
    loadComponent: () => import('./features/dashboards/ecommerce-dashboard.component').then(m => m.EcommerceDashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'showcase',
    loadComponent: () => import('./pages/showcase/showcase.component').then(m => m.ShowcaseComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'showcase/ui',
    loadComponent: () => import('./pages/showcase/ui-components-showcase.component').then(m => m.UIComponentsShowcaseComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'showcase/forms',
    loadComponent: () => import('./pages/showcase/forms-showcase.component').then(m => m.FormsShowcaseComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'showcase/interactive',
    loadComponent: () => import('./pages/showcase/interactive-showcase.component').then(m => m.InteractiveShowcaseComponent),
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
