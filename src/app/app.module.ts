import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PriceFinderComponent } from './price-finder/price-finder.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { GetPricesService } from './get-prices.service';
import { AppRoutingModule } from './app-routing.module';
import { EolDisplayComponent } from './eol-display/eol-display.component';
import { GetEolService } from './get-eol.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    TopBarComponent,
    PriceFinderComponent,
    PriceDisplayComponent,
    EolDisplayComponent
  ],
  bootstrap: [AppComponent],
  providers: [GetPricesService, GetEolService]
})
export class AppModule {}
