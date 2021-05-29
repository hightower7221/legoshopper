import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import {
  map,
  catchError,
  retry,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from 'rxjs/operators';
import { Price } from '../price';
import { GetPricesService } from '../get-prices.service';

/*
interface SearchResults {
  id: number;
  itemId: string;
  min6: number;
  max6: number;
  avg6: number;
  min: number;
  max: number;
  avg: number;
  countTotal: string;
  countItems: string;
  countTotal6: string;
  countItems6: string;
}
*/

@Component({
  selector: 'app-price-finder',
  templateUrl: './price-finder.component.html',
  styleUrls: ['./price-finder.component.css'],
  providers: [GetPricesService]
})
export class PriceFinderComponent implements OnInit {
  private results: Observable<Price[]>;
  prices: Price;
  loading: boolean = false;
  errorMessage: string;
  submitted: boolean;

  constructor(
    private http: HttpClient,
    private _PriceService: GetPricesService
  ) {
    this.results = null;
    this.prices = null;
    submitted = false;
  }

  ngOnInit() {}

  avg = 0;

  onSubmit = function(values) {
    this.submitted = true;

    console.log('OnSubmit: ' + values.itemid);

    //var url = 'http://34.255.213.157:8080/price?itemid=' + values.itemid;

    // this.http.get(url).subscribe(status => console.log(JSON.stringify(status)));
    //this.results = this.http.get(url, { responseType: 'json' });
    // console.log('url: ' + url);
    //this.results = this._PriceService.getPrice(values.itemid);

    this.getPrices(values.itemid);

    console.log('erg: ' + this.results);
  };

  getPrices(itemid) {
    this.loading = true;
    this.errorMessage = '';
    this._PriceService.getPrice(itemid).subscribe(
      response => {
        //next() callback
        console.log('response received');
        this.prices = response;
      },
      error => {
        //error() callback
        console.error('Request failed with error');
        this.errorMessage = error;
        console.error('MSG: ' + this.errorMessage);
        this.loading = false;
      },
      () => {
        //complete() callback
        console.error('Request completed'); //This is actually not needed
        this.loading = false;
      }
    );
  }

  /*
search(itemid: string): Observable<Price[]> {
  let url = 'http://34.255.213.157:8080/price/?itemid=' + itemid;
  return this.http.get(url, { responseType: 'json' });
}
*/

  /*
search(itemid: string): Observable<Price[]> {
  let url = 'http://34.255.213.157:8080/price/?itemid=' + itemid;
  return this.http.get(url, { responseType: 'json' }).pipe(
      map(res => { 
        return res.results.map(item => { 
          return new Price( 
            item.id,
            item.itemId,
            item.min6,
            item.max6,
            item.avg6,
            item.min,
            item.max,
            item.avg,
            item.countTotal,
            item.countItems,
            item.countTotal6,
            item.countItems6
          );
        });
      })
    );


}
*/
}
