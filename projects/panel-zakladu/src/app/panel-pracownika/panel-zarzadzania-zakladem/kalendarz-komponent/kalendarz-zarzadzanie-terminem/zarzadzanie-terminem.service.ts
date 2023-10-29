import { Injectable } from '@angular/core';
import { Drzwi } from '../../../../enum/drzwi';
import { Udane } from '../../../../enum/udane';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { KomunikatUniwersalnyService } from '../../../../komponets/komunikat-uniwersalny/komunikat-uniwersalny.service';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { ErrorAnalyzerService } from '../../../../serwisy/error-analyzer.service';
import { Wizyta } from '../../../../klasy/panelPracownika/wizyta';
import { KalendarzModyfikacjaTerminuComponent } from '../kalendarz-modyfikacja-terminu/kalendarz-modyfikacja-terminu.component';
import { DatePipe } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ZarzadzanieTerminemService {
  buttonBlock = false;

  constructor(
    private http: ListonoszService,
    private komunikat_: KomunikatUniwersalnyService,
    public podreczne_: PodreczneDaneService,
    private komunikaty_: KomunikatyService,
    private ngbModal: NgbModal,
    private errorAnalizer_: ErrorAnalyzerService
  ) {}

  modifyVisit(wizyta: Wizyta, parentActiveModal: NgbActiveModal | undefined = undefined) {
    const okno = this.ngbModal.open(KalendarzModyfikacjaTerminuComponent, {
      size: 'lg',
    });
    const termin = new DatePipe('pl-PL').transform(wizyta.poczatek, 'yyyy-MM-dd');
    const poczatek = new DatePipe('pl-PL').transform(wizyta.poczatek, 'HH:mm');
    const koniec = new DatePipe('pl-PL').transform(wizyta.koniec, 'HH:mm');
    okno.componentInstance.wizyta = wizyta;
    okno.componentInstance.formualrzRejestracjiWizyty.patchValue({
      termin: termin,
      poczatek: poczatek,
      koniec: koniec,
      imie: wizyta.customer.firstName,
      nazwisko: wizyta.customer.lastName,
      prefix: wizyta.customer.phone.split('-')[0],
      telefon: wizyta.customer.phone.split('-')[1],
      confirmed: wizyta.completed,
      wykonawca: wizyta.pracownik.id,
      opis: wizyta.uslugi?.opis,
      cena: wizyta.cena,
      email: wizyta.customer.email,
    });
    console.log(wizyta.completed);
    okno.componentInstance.edit = true;
    okno.componentInstance.parentNgbActiveModal = parentActiveModal;

    if (wizyta.czySaUslugi()) {
      okno.componentInstance.auto = 'auto';
    }
  }

  cancelTheVisit(wizyta: Wizyta) {
    return new Promise(resolve => {
      const content =
        '<h5>Czy na pewno chcesz anulować wizytę?</h5>' +
        '<p style="color:rgba(75,0,16,0.63)">Anulowanie wizyty wiążę się z powiadomieniem klienta o anulowaniu wizyty za pośrednictwem dostępnych środków komunikacyjnych.</p>' +
        '<h4>Powód odwołania wizyty:</h4>' +
        '<textarea style="width: 100%" id="textAreaCancelVisit" placeholder="Brak określonego powodu"></textarea>';

      const window = this.komunikat_.open('Anulowanie wizyty', content);
      window.addButton('Tak', { defaultYes: true }).subscribe(success => {
        // @ts-ignore
        const reason = document.getElementById('textAreaCancelVisit').value;
        resolve(this.cancelTheVisitFun(reason, wizyta));
      });
      window.addButton('Nie', { defaultNo: true });
    });
  }

  public cancelTheVisitFun(reason: string, wizyta: Wizyta) {
    return new Promise((resolve, reject) => {
      this.buttonBlock = true;
      this.http
        .usun(Drzwi.odwolanieWizyty + wizyta.id + '/' + encodeURIComponent(reason))
        .then(success => {
          this.komunikaty_.komunikatUdane(Udane.wizytaZostalaOdwolana);
          // this.activeModal.dismiss('close');

          resolve(true);
        })
        .catch(error => {
          reject(error);
          console.log(error);
          this.errorAnalizer_.analyze(error);
        })
        .finally(() => {
          this.buttonBlock = false;
        });
    });
  }
}
