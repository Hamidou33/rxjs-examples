import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MathematiquesComponent} from "./mathematiques.component";

const routes: Routes = [
  {
    path: '',
    component: MathematiquesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathematiquesRoutingModule {
}
