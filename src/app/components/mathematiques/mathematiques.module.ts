import {NgModule} from '@angular/core';
import {MathematiquesRoutingModule} from "./mathematiques-routing.module";
import {MathematiquesComponent} from "./mathematiques.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [MathematiquesComponent],
  imports: [
    SharedModule,
    MathematiquesRoutingModule,
  ]
})
export class MathematiquesModule {
}
