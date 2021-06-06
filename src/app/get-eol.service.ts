import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Eol } from './eol';
import { EolCat } from './eol-cat';

@Injectable()
export class GetEolService {
  env: number = 0;
  EolCats: EolCat[] = [];

  constructor(private http: HttpClient) {}

  getEols(catid: string) {
    let url = 'http://34.247.14.80/api/eol/?cat=' + catid;
    console.log('url: ' + url);

    if (this.env == 1) {
      return this.http.get(url, { responseType: 'json' });
    }

    //return this.http.get(`https://conduit.productionready.io/api/profiles/eric`);
  }

  getEolCats() {
    let url = 'http://34.247.14.80/api/eolcat';
    console.log('url: ' + url);
    return this.http.get(url, { responseType: 'json' });
    //return this.http.get(`https://conduit.productionready.io/api/profiles/eric`);
  }
}
