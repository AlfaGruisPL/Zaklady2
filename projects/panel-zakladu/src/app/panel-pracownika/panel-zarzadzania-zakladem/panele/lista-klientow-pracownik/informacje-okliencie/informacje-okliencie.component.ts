import { Component, effect, signal } from '@angular/core';
import { Klient } from '../../../../../klasy/listaKlientow/klient';
import { ActivatedRoute } from '@angular/router';
import { Drzwi } from '../../../../../enum/drzwi';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { BackArrowComponent } from '../../../komponenty/back-arrow/back-arrow.component';
import { DatePipe } from '@angular/common';
import { InformacjeOKliencieTabelaZakladuComponent } from './informacje-okliencie-tabela-zakladu/informacje-okliencie-tabela-zakladu.component';
import { InformacjeOKliencieTabelaPracownikaComponent } from './informacje-okliencie-tabela-pracownika/informacje-okliencie-tabela-pracownika.component';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-informacje-okliencie',
  templateUrl: './informacje-okliencie.component.html',
  standalone: true,
  styleUrls: ['./informacje-okliencie.component.scss'],
  imports: [
    BackArrowComponent,
    DatePipe,
    InformacjeOKliencieTabelaZakladuComponent,
    InformacjeOKliencieTabelaPracownikaComponent,
  ],
})
export class InformacjeOKliencieComponent {
  public page = 0;
  public pageSize = 5;
  public klient: Klient = new Klient({});
  emplyeeId = signal(0);
  employees = toSignal(this.default_.danePodreczneObserveble);

  employeeName = '';

  constructor(
    private activetedRoute_: ActivatedRoute,
    public http_: ListonoszService,
    public default_: PodreczneDaneService
  ) {
    this.activetedRoute_.paramMap.subscribe(params => {
      this.http_
        .pobierz(Drzwi.customerInformation + params.get('id') + `/${params.get('employees')}`)
        .then(customer => {
          this.emplyeeId.set(Number(params.get('employees')));
          this.klient = new Klient(customer);
        });
    });

    effect(onCleen => {
      const k = this.emplyeeId();
      const employee = this.employees()?.pracownicy.find(id => id.id == k);
      this.employeeName = '';
      if (employee) this.employeeName = employee.firstname + ' ' + employee.lastname;
    });
  }

  sumaOplat() {
    let wynik = this.klient.wizytWZakladzie.reduce((suma, klient) => {
      if (klient.cena) return suma + Number(klient.cena);
      else return suma;
    }, 0);
    wynik += this.klient.wizyty.reduce((suma, klient) => {
      if (klient.cena) return suma + Number(klient.cena);
      else return suma;
    }, 0);
    return Math.round(wynik * 100) / 100;
  }

  pierwszaWizyta() {
    const suma = this.klient.wizytWZakladzie.concat(this.klient.wizyty);
    if (!suma.length) return null;
    const dane = suma.sort((x, y) => (x.poczatek < y.poczatek ? -1 : 1));
    return dane[0].poczatek;
  }

  ostatniaWizyta() {
    const suma = this.klient.wizytWZakladzie.concat(this.klient.wizyty);
    if (!suma.length) return null;

    const dane = suma.sort((x, y) => (x.poczatek > y.poczatek ? -1 : 1));
    return dane[0].poczatek;
  }
}
