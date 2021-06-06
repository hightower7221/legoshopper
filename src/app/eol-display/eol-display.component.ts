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
  env: number = 1;

  cats_moc: EolCat[] = [
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
    new EolCat(24, '18 Plus'),
    new EolCat(25, 'Specials')
  ];

  eols_moc: Eol[] = [
    new Eol(
      '70419-1',
      11,
      'Gekenterter Garnelenkutter',
      '2019/08',
      29,
      6,
      'SI',
      1,
      24,
      1,
      new Date(Date.now()),
      new Date(Date.now())
    )
  ];

  eols: Eol[] = [];
  eolcats: EolCat[] = [];
  loading: boolean = false;
  errorMessage: string;
  submitted: boolean;

  constructor(private _GetEolService: GetEolService) {}

  ngOnInit() {
    this.getCats();
    this.getEols('1');
  }

  getCats() {
    if (this.env == 1) {
      this.loading = true;
      this.errorMessage = '';
      this._GetEolService.getEolCats().subscribe((response: EolCat[]) => {
        //next() callback
        console.log('response received');
        this.eolcats = response;
      });
    } else {
      this.eolcats = this.cats_moc;
    }
  }

  getEols(catid: string) {
    if (this.env == 1) {
      this.loading = true;
      this.errorMessage = '';
      this._GetEolService.getEols(catid).subscribe((response: Eol[]) => {
        //next() callback
        console.log('response received');
        this.eols = response;
      });
    } else {
      this.eols = this.eols_moc;
    }
  }
}
