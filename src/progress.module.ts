import {NgModule} from "@angular/core";
import {ProgressBrowserXhr} from "./services/progress/progress-browser-xhr";
import {ProgressService} from "./services/progress/progress.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [HttpModule],
  providers: [
    ProgressService,
    ProgressBrowserXhr,
  ],
  declarations: [],
  exports: []
})
export class ProgressModule {
}
