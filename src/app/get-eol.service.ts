import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Eol } from './eol';

@Injectable()
export class GetEolService {
  constructor(private http: HttpClient) {}

  getEols(catid: number) {
    let url = 'http://34.247.14.80/api/eol/?cat=' + catid;
    console.log('url: ' + url);
    return this.http.get(url, { responseType: 'json' });

    //return this.http.get(`https://conduit.productionready.io/api/profiles/eric`);
  }
}
