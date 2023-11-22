import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CreationComponent} from "./creation.component";
import {CreationRoutingModule} from "./creation-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [CreationComponent],
  imports: [
    CreationRoutingModule,
    SharedModule,
    NgOptimizedImage
  ]
})
export class CreationModule {
}
