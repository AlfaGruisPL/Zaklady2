import { Component, Input, OnInit } from '@angular/core';
import { Wizyta } from '../../../../klasy/panelPracownika/wizyta';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Funkcje } from '../../../../funkcje';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';
import { blockquote } from 'suneditor/src/plugins';
import { KalendarzKomponentService } from '../kalendarz-komponent.service';
import { InformacjeOKliencieComponent } from '../../panele/lista-klientow-pracownik/informacje-okliencie/informacje-okliencie.component';
import { Klient } from '../../../../klasy/listaKlientow/klient';
import { ErrorAnalyzerService } from '../../../../serwisy/error-analyzer.service';
import { HttpError } from '../../../../../../../klasy/httpError';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { ZarzadzanieTerminemService } from './zarzadzanie-terminem.service';
import { VisitService } from '../termin_komponent/visit.service';
import { KomunikatUniwersalnyService } from '../../../../komponets/komunikat-uniwersalny/komunikat-uniwersalny.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-kalendarz-zarzadzanie-terminem',
  templateUrl: './kalendarz-zarzadzanie-terminem.component.html',
  styleUrls: ['./kalendarz-zarzadzanie-terminem.component.scss'],
})
export class KalendarzZarzadzanieTerminemComponent implements OnInit {
  @Input() wizyta: Wizyta = new Wizyta({});
  buttonBlock = false;
  blur = false;
  simple = false;
  protected readonly Function = Function;
  protected readonly Funkcje = Funkcje;
  protected readonly blockquote = blockquote;
  protected readonly Wizyta = Wizyta;

  constructor(
    public activeModal: NgbActiveModal,
    public ngbModal: NgbModal,
    private http: ListonoszService,
    private kalendarz_: KalendarzKomponentService,
    public visit_: VisitService,
    public podreczne_: PodreczneDaneService,
    public zarzadzanieTerminem_: ZarzadzanieTerminemService,
    private universalMessage_: KomunikatUniwersalnyService,
    private errorAnalizer_: ErrorAnalyzerService
  ) {}

  ngOnInit() {
    //włączenie lub wyłączenie otwierania wielu terminow
    if (this.simple) {
      return;
    }
    //! jeżeli jest więcej niż jeden termin w tym samym czasie
    if (this.visit_.actualTrigeredElements.length > 1) {
      this.blur = true;
      let index = 1;
      let text = '<table class="tableChoiseVisit">';
      this.visit_.actualTrigeredElements.forEach(visit => {
        const visitObj = this.kalendarz_.getVisitFromID(visit);
        text += `
<tr>
<th>${index}.</th>
<td>${visitObj?.poczatek.toLocaleString().split(' ')[1]}</td>
<td>${visitObj?.koniec.toLocaleString().split(' ')[1]}</td>
<td>${visitObj?.customer.firstName}</td>
<td>${visitObj?.customer.lastName}</td>
</tr>
`;
        index++;
      });
      text += '</table>';
      index = 1;

      const window = this.universalMessage_.open('Wybierz termin:', text);
      this.visit_.actualTrigeredElements.forEach(visit => {
        const visitObj = this.kalendarz_.getVisitFromID(visit);
        window
          .addButton(' ' + index.toString(), { class: 'domyslnyButton' + ((index % 3) + 2) }, visitObj!.id.toString()!)
          .pipe(take(1))
          .subscribe(visit => {
            this.wizyta = this.kalendarz_.getVisitFromID(visit)!;
            this.blur = false;
          });
        index++;
      });
      //* kiedy kliknięto przycisk anuluj
      window
        .addButton('Anuluj', { defaultNo: true })
        .pipe(take(1))
        .subscribe(k => {
          this.activeModal.dismiss();
        });
      //* kiedy kliknięto przycisk X
      window.dismiss.pipe(take(1)).subscribe(k => {
        this.activeModal.dismiss();
      });
      //* kiedy kliknięto poza oknem
      window.result.catch(k => {
        this.activeModal.dismiss();
      });
    }
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

  cancleVisit() {
    this.buttonBlock = true;
    this.zarzadzanieTerminem_
      .cancelTheVisit(this.wizyta)
      .then(
        data => {
          this.kalendarz_.pobierzDane({ silent: true });
          this.activeModal.dismiss();
        },
        error => {}
      )
      .finally(() => {
        this.buttonBlock = false;
      });
  }
}
