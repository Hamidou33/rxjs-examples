import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CreationJointuresComponent} from "./creation-jointures.component";

const routes: Routes = [
  {
    path: '',
    component: CreationJointuresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationJointuresRoutingModule {
}
