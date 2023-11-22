import {NgModule} from '@angular/core';
import {ErreursRoutingModule} from "./erreurs-routing.module";
import {ErreursComponent} from "./erreurs.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [ErreursComponent],
  imports: [
    ErreursRoutingModule,
    SharedModule
  ]
})
export class ErreursModule {
}
