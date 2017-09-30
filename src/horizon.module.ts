import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {HorizonService} from "./services/horizon/horizon.service";
import {ProgressModule} from "./progress.module";

@NgModule({
  imports: [
    HttpModule,
    ProgressModule,
  ],
  providers: [
    HorizonService,
  ],
  declarations: [],
  exports: []
})
export class HorizonModule {
}
