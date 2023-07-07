import { Component, OnInit } from '@angular/core';
import { Usluga } from '../../../../klasy/panelPracownika/usluga/usluga';
import { FontAwesomeService } from '../../../../serwisy/font-awesome.service';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';

@Component({
  selector: 'app-uslugi',
  templateUrl: './uslugi.component.html',
  styleUrls: ['./uslugi.component.scss'],
})
export class UslugiPracownikaComponent implements OnInit {
  public listaUslug: Array<Usluga> = [new Usluga()];

  constructor(
    public fontAwesome: FontAwesomeService,
    private listonosz: ListonoszService
  ) {}

  ngOnInit() {
    this.pobieranieDanych();
  }

  public dodajWiersz() {
    this.listaUslug.push(new Usluga());
  }

  public zapisz() {
    //usunięcie pustych usług
    /* this.listaUslug = this.listaUslug.filter((usluga) => {
       return usluga.nazwa.length > 0;
     });*/
    this.listonosz
      .wyslij(Drzwi.uslugiPanel, this.listaUslug)
      .then((k) => {
        console.log('udanme');
      })
      .finally(() => {
        this.pobieranieDanych();
      });
  }

  public usunWiersz(index: number) {
    let k = 0;
    this.listaUslug = this.listaUslug.filter((usluga) => {
      if (k == index) {
        k++;
        return false;
      }
      k++;
      return true;
    });
  }

  private pobieranieDanych() {
    this.listonosz.pobierz(Drzwi.uslugiPanel).then((dane) => {
      console.log(dane);
      this.listaUslug = [];
      Object.assign(this.listaUslug, dane['uslugi']);
    });
  }
}
