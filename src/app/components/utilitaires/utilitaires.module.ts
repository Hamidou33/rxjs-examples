import {NgModule} from '@angular/core';
import {UtilitairesRoutingModule} from "./utilitaires-routing.module";
import {UtilitairesComponent} from "./utilitaires.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [UtilitairesComponent],
  imports: [
    SharedModule,
    UtilitairesRoutingModule,
  ]
})
export class UtilitairesModule {
}
