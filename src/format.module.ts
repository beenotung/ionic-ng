import {NgModule} from "@angular/core";
import {FormatBytePipe} from "./pipes/format-byte/format-byte.pipe";

@NgModule({
  imports: [],
  providers: [],
  declarations: [
    FormatBytePipe,
  ],
  exports: [
    FormatBytePipe,
  ]
})
export class FormatModule {
}
