import { Component, OnInit } from '@angular/core';
import { Eol } from '../eol';
import { EolCat } from '../eol-cat';
import { GetEolService } from '../get-eol.service';

@Component({
  selector: 'app-eol-display',
  templateUrl: './eol-display.component.html',
  styleUrls: ['./eol-display.component.css'],
  providers: [GetEolService]
})
export class EolDisplayComponent implements OnInit {
  cats: EolCat[] = [
    new EolCat(1, 'Architecture'),
    new EolCat(2, 'BrickHeadz'),
    new EolCat(3, 'City'),
    new EolCat(4, 'Creator 3 in 1'),
    new EolCat(5, 'Creator Expert'),
    new EolCat(6, 'DC Super Heroes Batman'),
    new EolCat(7, ' Disney'),
    new EolCat(8, 'Duplo'),
    new EolCat(9, 'Harry Potter'),
    new EolCat(10, 'Friends'),
    new EolCat(11, 'Hidden Side'),
    new EolCat(12, 'IDEAS'),
    new EolCat(13, 'Jurassic World'),
    new EolCat(14, 'Lego Originals'),
    new EolCat(15, 'Lego Marvel Spiderman'),
    new EolCat(16, 'Minecraft'),
    new EolCat(17, 'Ninjago'),
    new EolCat(18, 'Overwatch'),
    new EolCat(19, 'Speed Champions'),
    new EolCat(20, 'Star Wars'),
    new EolCat(21, 'Stranger Things'),
    new EolCat(22, 'Technic'),
    new EolCat(23, 'LEGO Movie'),
    new EolCat(24, 'Specials')
  ];

   eols: Eol[]= [];
   loading: boolean = false;
   errorMessage: string;
   submitted: boolean;

  constructor(private _GetEolService: GetEolService) {}

  ngOnInit() {
    this.getEols(1);
  }


 getEols(catid: number) {
    this.loading = true;
    this.errorMessage = '';
    this._GetEolService.getEols(catid).subscribe(
      (response: Eol[]) => {
        //next() callback
        console.log('response received');
        this.eols = response;
      }
    );
/*
(products: Product[])=>{
      this.products = products;
*/

}
}