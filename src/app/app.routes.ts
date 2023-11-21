import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./core/components/home/home.component";

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
  // {
  //   path: 'join-creation-operators',
  //   loadChildren: () => import('./join-creation-operators/join-creation-operators.module').then(m => m.JoinCreationOperatorsModule)
  // },
  // {
  //   path: 'transformation-operators',
  //   loadChildren: () => import('./transformation-operators/transformation-operators.module').then(m => m.TransformationOperatorsModule)
  // },
  // {
  //   path: 'filtering-operators',
  //   loadChildren: () => import('./filtering-operators/filtering-operators.module').then(m => m.FilteringOperatorsModule)
  // },
  // {
  //   path: 'join-operators',
  //   loadChildren: () => import('./join-operators/join-operators.module').then(m => m.JoinOperatorsModule)
  // },
  // {
  //   path: 'multicasting-operators',
  //   loadChildren: () => import('./multicasting-operators/multicasting-operators.module').then(m => m.MulticastingOperatorsModule)
  // },
  // {
  //   path: 'error-handling-operators',
  //   loadChildren: () => import('./error-handling-operators/error-handling-operators.module').then(m => m.ErrorHandlingOperatorsModule)
  // },
  // {
  //   path: 'utility-operators',
  //   loadChildren: () => import('./utility-operators/utility-operators.module').then(m => m.UtilityOperatorsModule)
  // },
  // {
  //   path: 'mathematical-aggregate-operators',
  //   loadChildren: () => import('./mathematical-aggregate-operators/mathematical-aggregate-operators.module').then(m => m.MathematicalAggregateOperatorsModule)
  // },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
