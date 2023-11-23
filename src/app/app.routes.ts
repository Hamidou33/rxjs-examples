import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'creation',
    loadComponent: () => import('./components/creation/creation.component').then(m => m.CreationComponent)
  },
  {
    path: 'creation_jointures',
    loadComponent: () => import('./components/creation-jointures/creation-jointures.component').then(m => m.CreationJointuresComponent)
  },
  {
    path: 'transformation',
    loadComponent: () => import('./components/transformation/transformation.component').then(m => m.TransformationComponent)
  },
  {
    path: 'filtrage',
    loadComponent: () => import('./components/filtrage/filtrage.component').then(m => m.FiltrageComponent)
  },
  {
    path: 'jointure',
    loadComponent: () => import('./components/jointure/jointure.component').then(m => m.JointureComponent)
  },
  {
    path: 'multicasting',
    loadComponent: () => import('./components/multicasting/multicasting.component').then(m => m.MulticastingComponent)
  },
  {
    path: 'erreurs',
    loadComponent: () => import('./components/erreurs/erreurs.component').then(m => m.ErreursComponent)
  },
  {
    path: 'utilitaires',
    loadComponent: () => import('./components/utilitaires/utilitaires.component').then(m => m.UtilitairesComponent)
  },
  {
    path: 'mathematiques',
    loadComponent: () => import('./components/mathematiques/mathematiques.component').then(m => m.MathematiquesComponent)
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
