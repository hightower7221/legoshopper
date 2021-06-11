import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { EolCat } from './eol-cat';

@Injectable()
export class GetEolService {
  //EolCats: EolCat[] = [];

  constructor(private http: HttpClient) {}

  getEols(catid: string) {
    let url = 'http://34.247.14.80/api/eol/?cat=' + catid;
    console.log('url: ' + url);
    return this.http.get(url, { responseType: 'json' });
  }

  getEolCats() {
    let url = 'http://34.247.14.80/api/eolcat';
    console.log('url: ' + url);
    return this.http.get(url, { responseType: 'json' });
  }
}
