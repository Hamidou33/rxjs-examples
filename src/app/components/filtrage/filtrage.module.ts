import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltrageComponent} from "./filtrage.component";
import {FiltrageRoutingModule} from "./filtrage-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [FiltrageComponent],
  imports: [
    FiltrageRoutingModule,
    SharedModule
  ]
})
export class FiltrageModule {
}
