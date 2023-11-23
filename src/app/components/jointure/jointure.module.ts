import {NgModule} from '@angular/core';
import {JointureComponent} from "./jointure.component";
import {JointureRoutingModule} from "./jointure-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [JointureComponent],
  imports: [
    SharedModule,
    JointureRoutingModule,
  ]
})
export class JointureModule {
}
