import {Pipe, PipeTransform} from "@angular/core";
import {format_byte} from "@beenotung/tslib";

@Pipe({
  name: "formatByte"
})
export class FormatBytePipe implements PipeTransform {

  /**
   * take a number (of byte) and make it a formatted string
   * */
  transform(n_byte: number) {
    return format_byte(n_byte);
  }
}
