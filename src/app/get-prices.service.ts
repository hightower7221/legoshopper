import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Price } from './price';

@Injectable()
export class GetPricesService {
  constructor(private http: HttpClient) {}

  getPrice(itemid: string, itemtype: string, forceload: boolean) {
    let url =
      'http://34.247.14.80/api/price/?itemid=' +
      itemid +
      '&itemtype=' +
      itemtype +
      '&forceload=' +
      forceload;
    console.log('url: ' + url);
    return this.http.get<Price>(url, { responseType: 'json' });

    //return this.http.get(`https://conduit.productionready.io/api/profiles/eric`);
  }
}
