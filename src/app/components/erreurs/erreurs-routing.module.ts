import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ErreursComponent} from "./erreurs.component";

const routes: Routes = [
  {
    path: '',
    component: ErreursComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErreursRoutingModule {
}
