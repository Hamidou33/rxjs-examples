import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {JointureComponent} from "./jointure.component";

const routes: Routes = [
  {
    path: '',
    component: JointureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JointureRoutingModule {
}
