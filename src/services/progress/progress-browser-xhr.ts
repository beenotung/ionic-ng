import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ProgressService} from "./progress.service";
import {BrowserXhr} from "@angular/http";

@Injectable()
export class ProgressBrowserXhr extends BrowserXhr {

  constructor(private _progressService: ProgressService) {
    super();
  }

  build(): any {
    const xhr = super.build() as XMLHttpRequest;
    xhr.onprogress = (event: ProgressEvent) => {
      this._progressService.downloadProgress.next(event);
    };

    xhr.upload.onprogress = (event: ProgressEvent) => {
      this._progressService.uploadProgress.next(event);
    };
    this._progressService.requests.next(xhr);
    return xhr;
  }
}
