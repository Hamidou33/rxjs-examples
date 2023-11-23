import {NgModule} from '@angular/core';
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
