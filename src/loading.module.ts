import {NgModule} from "@angular/core";
import {LoadingComponent} from "./components/loading/loading.component";
import {LoadingService} from "./services/loading/loading.service";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [HttpModule, CommonModule],
  providers: [
    LoadingService,
  ],
  declarations: [
    LoadingComponent,
  ],
  exports: [
    LoadingComponent,
  ]
})
export class LoadingModule {
}
