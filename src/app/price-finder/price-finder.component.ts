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
    this.prices = new Price(0, '-', 0, 0, 0, 0, 0, 0, '-', '-', '-', '-');
    this.submitted = false;
  }

  ngOnInit() {}

  avg = 0;

  onSubmit = function(values) {
    this.submitted = true;
    console.log('OnSubmit: ' + values.itemid);
    this.getPrices(values.itemid);
    console.log('erg: ' + this.results);
  };

  getPrices(itemid: string) {
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
}
