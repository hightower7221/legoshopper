import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PriceFinderComponent } from './price-finder/price-finder.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { GetPricesService } from './get-prices.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    PriceFinderComponent,
    PriceDisplayComponent
  ],
  bootstrap: [AppComponent],
  providers: [GetPricesService]
})
export class AppModule {}
