import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoadingService {

  constructor(public http: Http) {
  }

  public getRandomLoadingImageUrl(): Observable<string> {
    const apiKey = "e55094ebb34c4e37b263d4e734a9ca11";
    const keyword = "loading-icon";
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${keyword}&rating=G`;
    return this.http.get(url)
      .map(x => x.json())
      .map(x => x.data.image_url)
      ;
  }

}
