import {inject, TestBed} from "@angular/core/testing";

import {LoadingService} from "./loading.service";
import {Http, HttpModule} from "@angular/http";

describe("LoadingService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [LoadingService]
    });
  });

  it("should be created", inject([LoadingService, Http], (service: LoadingService) => {
    expect(service).toBeTruthy();
  }));

  it("should load an image url", inject([LoadingService], (service: LoadingService, done) => {
    service.getRandomLoadingImageUrl().subscribe(
      (url) => {
        expect(typeof url).toEqual("string", "Image Url should be a string");
        done();
      }
    );
  }));
});
