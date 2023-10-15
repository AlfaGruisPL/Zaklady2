import { Component, Input } from '@angular/core';
import { Wizyta } from '../../../../klasy/panelPracownika/wizyta';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Funkcje } from '../../../../funkcje';
import { KomunikatUniwersalnyService } from '../../../../komponets/komunikat-uniwersalny/komunikat-uniwersalny.service';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { Udane } from '../../../../enum/udane';
import { blockquote } from 'suneditor/src/plugins';
import { KalendarzKomponentService } from '../kalendarz-komponent.service';
import { InformacjeOKliencieComponent } from '../../panele/lista-klientow-pracownik/informacje-okliencie/informacje-okliencie.component';
import { Klient } from '../../../../klasy/listaKlientow/klient';
import { ErrorAnalyzerService } from '../../../../serwisy/error-analyzer.service';
import { HttpError } from '../../../../../../../klasy/httpError';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { KalendarzModyfikacjaTerminuComponent } from '../kalendarz-modyfikacja-terminu/kalendarz-modyfikacja-terminu.component';
import { DatePipe } from '@angular/common';
import { UslugiService } from '../../panele/uslugi/uslugi.service';

@Component({
  selector: 'app-kalendarz-zarzadzanie-terminem',
  templateUrl: './kalendarz-zarzadzanie-terminem.component.html',
  styleUrls: ['./kalendarz-zarzadzanie-terminem.component.scss'],
})
export class KalendarzZarzadzanieTerminemComponent {
  @Input() wizyta: Wizyta = new Wizyta({});
  buttonBlock = false;

  protected readonly Function = Function;
  protected readonly Funkcje = Funkcje;
  protected readonly blockquote = blockquote;
  protected readonly Wizyta = Wizyta;

  constructor(
    public activeModal: NgbActiveModal,
    public ngbModal: NgbModal,
    private http: ListonoszService,
    private kalendarz_: KalendarzKomponentService,
    private komunikat_: KomunikatUniwersalnyService,
    public podreczne_: PodreczneDaneService,
    private komunikaty_: KomunikatyService,
    private uslugi_: UslugiService,
    private errorAnalizer_: ErrorAnalyzerService
  ) {}

  test() {
    console.log(1);
  }

  cancelTheVisit() {
    const content =
      '<h5>Czy na pewno chcesz anulować wizytę?</h5>' +
      '<p style="color:rgba(75,0,16,0.63)">Anulowanie wizyty wiążę się z powiadomieniem klienta o anulowaniu wizyty za pośrednictwem dostępnych środków komunikacyjnych.</p>' +
      '<h4>Powód odwołania wizyty:</h4>' +
      '<textarea style="width: 100%" id="textAreaCancelVisit" placeholder="Brak określonego powodu"></textarea>';

    const window = this.komunikat_.open('Anulowanie wizyty', content);
    window.addButton('Tak', { defaultYes: true }).subscribe(success => {
      // @ts-ignore
      const reason = document.getElementById('textAreaCancelVisit').value;
      this.cancelTheVisitFun(reason);
    });
    window.addButton('Nie', { defaultNo: true });
  }

  clientLastVisits() {
    this.http
      .pobierz(Drzwi.customerInformation + this.wizyta.customer.id + '/' + this.kalendarz_.wybranyPracownik.value)
      .then(data => {
        const klient = new Klient(data);
        const window = this.ngbModal.open(InformacjeOKliencieComponent, { size: 'xl' });
        window.componentInstance.klient = klient;
      })
      .catch((error: HttpError) => {
        this.errorAnalizer_.analyze(error);
      });
    //
    // this.http.pobierz();
    //   window.componentInstance.klient;
  }

  modifyVisit() {
    const okno = this.ngbModal.open(KalendarzModyfikacjaTerminuComponent, {
      size: 'lg',
    });
    const termin = new DatePipe('pl-PL').transform(this.wizyta.poczatek, 'yyyy-dd-MM');
    const poczatek = new DatePipe('pl-PL').transform(this.wizyta.poczatek, 'hh:mm');
    const koniec = new DatePipe('pl-PL').transform(this.wizyta.koniec, 'hh:mm');
    okno.componentInstance.formualrzRejestracjiWizyty.patchValue({
      termin: termin,
      poczatek: poczatek,
      koniec: koniec,
      imie: this.wizyta.customer.firstName,
      nazwisko: this.wizyta.customer.lastName,
      prefix: this.wizyta.customer.phone.split('-')[0],
      telefon: this.wizyta.customer.phone.split('-')[1],
      wykonawca: this.wizyta.pracownik.id,
      opis: this.wizyta.uslugi?.opis,
      cena: this.wizyta.cena,
      email: this.wizyta.customer.email,
    });
    okno.componentInstance.edit = true;
    if (this.wizyta.czySaUslugi()) {
      okno.componentInstance.tryb = 'auto';
    }
  }

  private cancelTheVisitFun(reason: string) {
    this.buttonBlock = true;
    this.http
      .usun(Drzwi.odwolanieWizyty + this.wizyta.id + '/' + encodeURIComponent(reason))
      .then(success => {
        this.komunikaty_.komunikatUdane(Udane.wizytaZostalaOdwolana);
        this.activeModal.dismiss('close');
        this.kalendarz_.pobierzDane(true);
      })
      .catch(error => {
        console.log(error);
        this.errorAnalizer_.analyze(error);
      })
      .finally(() => {
        this.buttonBlock = false;
      });
  }
}
