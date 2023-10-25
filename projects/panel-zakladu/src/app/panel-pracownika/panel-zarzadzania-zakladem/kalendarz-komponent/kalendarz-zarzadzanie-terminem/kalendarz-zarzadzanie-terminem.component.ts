import { Component, Input } from '@angular/core';
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
    public podreczne_: PodreczneDaneService,
    public zarzadzanieTerminem_: ZarzadzanieTerminemService,
    private errorAnalizer_: ErrorAnalyzerService
  ) {}

  test() {
    console.log(1);
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
          this.kalendarz_.pobierzDane(true);
          this.activeModal.dismiss();
        },
        error => {}
      )
      .finally(() => {
        this.buttonBlock = false;
      });
  }
}
