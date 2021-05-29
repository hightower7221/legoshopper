import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Price } from './price';

@Injectable()
export class GetPricesService {
  constructor(private http: HttpClient) {}

  getPrice(itemid) {
    let url = 'http://34.255.213.157:8080/price/?itemid=' + itemid;
    console.log('url: ' + url);
    return this.http.get<Price>(url, { responseType: 'json' });

    //return this.http.get(`https://conduit.productionready.io/api/profiles/eric`);
  }
}
