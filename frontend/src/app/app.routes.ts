import { Routes } from '@angular/router';
import { Landing } from './core/landing/landing';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: 'cirugia',
    loadComponent: () => import('./pages/cirugia/cirugia').then((m) => m.Cirugia),
  },
  {
    path: 'gastro',
    loadComponent: () => import('./pages/gastro/gastro').then((m) => m.Gastro),
  },
  {
    path: 'urologia',
    loadComponent: () => import('./pages/urologia/urologia').then((m) => m.Urologia),
  },
  {
    path: 'neonatologia',
    loadComponent: () =>
      import('./pages/neonatologia/neonatologia').then((m) => m.Neonatologia),
  },
  {
    path: 'hemodinamia',
    loadComponent: () =>
      import('./pages/hemodinamia/hemodinamia').then((m) => m.Hemodinamia),
  },
  {
    path: 'clinica',
    loadComponent: () => import('./pages/clinica/clinica').then((m) => m.Clinica),
  },
  {
    path: 'nutricion',
    loadComponent: () => import('./pages/nutricion/nutricion').then((m) => m.Nutricion),
  },
  {
    path: 'terapia',
    loadComponent: () => import('./pages/terapia/terapia').then((m) => m.Terapia),
  },
  {
    path: 'traumatologia',
    loadComponent: () =>
      import('./pages/traumatologia/traumatologia').then((m) => m.Traumatologia),
  },
  {
    path: 'guardia',
    loadComponent: () => import('./pages/guardia/guardia').then((m) => m.Guardia),
  },
];
