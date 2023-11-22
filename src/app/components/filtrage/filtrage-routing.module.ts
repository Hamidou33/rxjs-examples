import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {FiltrageComponent} from "./filtrage.component";

const routes: Routes = [
  {
    path: '',
    component: FiltrageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltrageRoutingModule {
}
