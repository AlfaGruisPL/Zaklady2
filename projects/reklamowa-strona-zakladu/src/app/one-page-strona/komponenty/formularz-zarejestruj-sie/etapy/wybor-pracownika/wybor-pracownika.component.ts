import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { ZarejestrujSieService } from '../../zarejestrujSie.service';
import { DanePodstawoweService } from '../../../../../serwisy/dane-podstawowe.service';

@Component({
  selector: 'app-wybor-pracownika',
  templateUrl: './wybor-pracownika.component.html',
  styleUrls: ['./wybor-pracownika.component.scss', '../../formularz-zarejestruj-sie.component.scss'],
})
export class WyborPracownikaComponent implements OnInit {
  @Output() wyslijKrok = new EventEmitter<number>();

  pracownicy = [];

  constructor(
    public listonosz: ListonoszService,
    private danePodstawowe: DanePodstawoweService,
    public ZarejestrujSieService: ZarejestrujSieService
  ) {}

  ngOnInit() {
    this.danePodstawowe.danePodstawowe.uslugi.forEach(usluga => (usluga.wybrane = false));
    this.listonosz.pobierz(Drzwi.listaPracownikowRejestracja).then(listaPracownikow => {
      this.pracownicy = listaPracownikow;
      this.danePodstawowe.danePodstawowe.listaPracownikow = listaPracownikow;
    });
  }

  public przejdzDalej() {
    this.ZarejestrujSieService.DaneKlientaClass.czyWybranyPracownik();
    if (!this.ZarejestrujSieService.DaneKlientaClass.niewybranyPracownik) {
      this.wyslijKrok.emit(2);
    }
  }
}
