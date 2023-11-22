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
    loadChildren: () => import('./components/creation/creation.module').then(m => m.CreationModule)
  },
  {
    path: 'creation_jointures',
    loadChildren: () => import('./components/creation-jointures/creation-jointures.module').then(m => m.CreationJointuresModule)
  },
  {
    path: 'transformation',
    loadChildren: () => import('./components/transformation/transformation.module').then(m => m.TransformationModule)
  },
  {
    path: 'filtrage',
    loadChildren: () => import('./components/filtrage/filtrage.module').then(m => m.FiltrageModule)
  },
  {
    path: 'jointure',
    loadChildren: () => import('./components/jointure/jointure.module').then(m => m.JointureModule)
  },
  {
    path: 'multicasting',
    loadChildren: () => import('./components/multicasting/multicasting.module').then(m => m.MulticastingModule)
  },
  {
    path: 'erreurs',
    loadChildren: () => import('./components/erreurs/erreurs.module').then(m => m.ErreursModule)
  },
  {
    path: 'utilitaires',
    loadChildren: () => import('./components/utilitaires/utilitaires.module').then(m => m.UtilitairesModule)
  },
  {
    path: 'mathematiques',
    loadChildren: () => import('./components/mathematiques/mathematiques.module').then(m => m.MathematiquesModule)
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
