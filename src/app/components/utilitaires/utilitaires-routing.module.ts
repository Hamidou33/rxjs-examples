import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UtilitairesComponent} from "./utilitaires.component";

const routes: Routes = [
  {
    path: '',
    component: UtilitairesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitairesRoutingModule {
}
