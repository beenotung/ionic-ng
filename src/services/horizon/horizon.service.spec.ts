import {inject, TestBed} from "@angular/core/testing";

import {HorizonService} from "./horizon.service";
import {HorizonModule} from "../../horizon.module";

describe("HorizonService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HorizonModule]
    });
  });

  it("should be created", inject([HorizonService], (service: HorizonService) => {
    expect(service).toBeTruthy();
  }));
});
