import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransformationRoutingModule} from "./transformation-routing.module";
import {TransformationComponent} from "./transformation.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [TransformationComponent],
  imports: [
    SharedModule,
    TransformationRoutingModule,
  ]
})
export class TransformationModule {
}
