import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ProgressService {

  public requests = new Subject<XMLHttpRequest>();
  public downloadProgress: Subject<ProgressEvent> = new Subject();
  public uploadProgress: Subject<ProgressEvent> = new Subject();

  constructor() {
  }

}
