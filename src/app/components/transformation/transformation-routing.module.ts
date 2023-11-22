import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TransformationComponent} from "./transformation.component";

const routes: Routes = [
  {
    path: '',
    component: TransformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransformationRoutingModule {
}
