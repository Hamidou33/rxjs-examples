import {NgModule} from '@angular/core';
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
