import {NgModule} from '@angular/core';
import {MulticastingComponent} from "./multicasting.component";
import {MulticastingRoutingModule} from "./multicasting-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [MulticastingComponent],
  imports: [
    SharedModule,
    MulticastingRoutingModule,
  ]
})
export class MulticastingModule {
}
