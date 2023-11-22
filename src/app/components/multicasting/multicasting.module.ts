import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
