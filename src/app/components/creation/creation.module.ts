import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationComponent } from "./creation.component";
import { CreationRoutingModule } from "./creation-routing.module";

@NgModule({
  declarations: [CreationComponent],
  imports: [
    CommonModule,
    CreationRoutingModule
  ]
})
export class CreationModule { }
