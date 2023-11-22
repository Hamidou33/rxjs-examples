import {NgModule} from '@angular/core'
import {CreationJointuresComponent} from "./creation-jointures.component";
import {CreationJointuresRoutingModule} from "./creation-jointures-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CreationJointuresComponent],
  imports: [
    CreationJointuresRoutingModule,
    SharedModule
  ]
})
export class CreationJointuresModule {
}