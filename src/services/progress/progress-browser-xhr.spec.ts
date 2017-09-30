import {inject, TestBed} from "@angular/core/testing";

import {ProgressBrowserXhr} from "./progress-browser-xhr";
import {ProgressModule} from "../../progress.module";

describe("ProgressBrowserXhr", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProgressModule]
    });
  });

  it("should be created", inject([ProgressBrowserXhr], (service: ProgressBrowserXhr) => {
    expect(service).toBeTruthy();
  }));
});
