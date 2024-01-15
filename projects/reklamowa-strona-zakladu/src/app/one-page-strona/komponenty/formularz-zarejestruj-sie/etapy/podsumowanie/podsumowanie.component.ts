import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ZarejestrujSieService } from '../../zarejestrujSie.service';
import { DaneKlienta } from '../klasy/dane-klienta';
import { DanePodstawoweService } from '../../../../../serwisy/dane-podstawowe.service';
import { environment } from '../../../../../../environments/environment';
import { usluga } from '../../../../../klasy/dane-podstawowe';

@Component({
  selector: 'app-podsumowanie',
  templateUrl: './podsumowanie.component.html',
  styleUrls: ['./podsumowanie.component.scss'],
})
export class PodsumowanieComponent implements OnInit {
  @Output() wyslijKrok = new EventEmitter<number>();
  protected readonly environment = environment;

  constructor(public rejestracja: ZarejestrujSieService, public danePodstawowe: DanePodstawoweService) {}

  ngOnInit() {
    console.log(this.wybranyPracownik());
  }

  public przejdzDalej() {
    this.wyslijKrok.emit(1);
    this.rejestracja.DaneKlientaClass = new DaneKlienta();
  }

  public wybranyPracownik() {
    if (this.rejestracja.DaneKlientaClass.wybranyPracownik == undefined) return 0;
    return this.danePodstawowe.danePodstawowe.listaPracownikow.find(pracownik => {
      return pracownik.id === this.rejestracja.DaneKlientaClass.wybranyPracownik;
    });
  }

  cenaZaUslugi() {
    return this.rejestracja.DaneKlientaClass.uslugi
      .filter(usluga => {
        return usluga.wybrane;
      })
      .reduce((suma: number, usluga) => suma + Number(usluga.price), 0);
  }

  wybraneUslugi() {
    let tmp: Array<Partial<usluga>> = this.rejestracja.DaneKlientaClass.uslugi.filter(usluga => {
      return usluga.wybrane;
    });
    if (tmp.length > 5) {
      tmp = tmp.slice(0, 5);
      tmp.push({ title: '...' });
    }
    return tmp;
  }

  miastoWies() {
    let adres = this.danePodstawowe.danePodstawowe.adres;
    if (adres.miasto.length > 0) {
      return adres.miasto;
    }
    if (adres.wies.length > 0) {
      return adres.wies + ' ' + adres.powiat;
    }
    return '---';
  }
}
