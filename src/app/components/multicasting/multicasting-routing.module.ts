import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MulticastingComponent} from "./multicasting.component";

const routes: Routes = [
  {
    path: '',
    component: MulticastingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MulticastingRoutingModule {
}
