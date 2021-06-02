import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceFinderComponent } from './price-finder/price-finder.component';
import { EolDisplayComponent } from './eol-display/eol-display.component';

const routes: Routes = [
  { path: 'price', component: PriceFinderComponent },
  { path: 'eol', component: EolDisplayComponent },
  { path: '', redirectTo: '/eol', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
