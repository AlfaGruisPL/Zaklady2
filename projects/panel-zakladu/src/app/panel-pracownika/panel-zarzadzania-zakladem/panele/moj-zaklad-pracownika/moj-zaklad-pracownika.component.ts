import { Component, OnInit, ViewChild } from '@angular/core';
import { MojZaklad } from '../../../../klasy/panelPracownika/mojZaklad/moj-zaklad';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';
import { MojZakladDTO } from '../../../../klasy/panelPracownika/mojZaklad/moj-zaklad-dto';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { PracownicyMojZakladComponent } from './pracownicy-moj-zaklad/pracownicy-moj-zaklad.component';
import { HttpError } from '../../../../../../../klasy/httpError';
import { Bledy } from '../../../../enum/bledy';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-moj-zaklad-pracownika',
  templateUrl: './moj-zaklad-pracownika.component.html',
  styleUrls: ['./moj-zaklad-pracownika.component.scss'],
})
export class MojZakladPracownikaComponent implements OnInit {
  @ViewChild(PracownicyMojZakladComponent) komponentPracownikow: PracownicyMojZakladComponent | undefined;
  czyMiasto = false;
  public mojZakladKlasa = new MojZaklad();
  public zapiszButton: boolean = false;
  public zmodyfikuj: boolean = true;
  public zablokowanyPrzycisk = false;
  public zmienIdentyfikator = false;

  constructor(
    private listonosz: ListonoszService,
    private komunikaty: KomunikatyService,
    public PodreczneDane: PodreczneDaneService
  ) {}

  ngOnInit() {
    this.pobieranieDanych();
  }

  pobieranieDanych() {
    this.listonosz.pobierz(Drzwi.daneMojZakladPracownik).then((dane: MojZaklad) => {
      Object.assign(this.mojZakladKlasa.poniedzialek, dane.poniedzialek);
      Object.assign(this.mojZakladKlasa.wtorek, dane.wtorek);
      Object.assign(this.mojZakladKlasa.sroda, dane.sroda);
      Object.assign(this.mojZakladKlasa.czwartek, dane.czwartek);
      Object.assign(this.mojZakladKlasa.piatek, dane.piatek);
      Object.assign(this.mojZakladKlasa.sobota, dane.sobota);
      Object.assign(this.mojZakladKlasa.niedziela, dane.niedziela);
      const { niedziela, poniedzialek, wtorek, sroda, czwartek, piatek, sobota, platnosci, ...reszta } = dane;
      Object.assign(this.mojZakladKlasa, reszta);
      if (platnosci != undefined) {
        this.mojZakladKlasa.platnosci = platnosci;
      } else {
        this.mojZakladKlasa.platnosci = {
          Apple_Pay: false,
          Google_Pay: false,
          blik: false,
          Visa: false,
          MasterCard: false,
        };
      }

      if (this.mojZakladKlasa.miasto.length > 0) {
        this.czyMiasto = true;
      } else {
        this.czyMiasto = false;
      }
    });
  }

  public zapisz() {
    this.komponentPracownikow?.wyslij();
    this.zapiszButton = false;
    this.zmodyfikuj = true;
    const dane = new MojZakladDTO(this.mojZakladKlasa);
    this.zablokowanyPrzycisk = true;
    this.listonosz
      .wyslij(Drzwi.daneMojZakladPracownik, dane)
      .then(udane => {
        if (typeof udane == 'string') {
          if (udane.split('_')[0] == 'reload') {
            //okno.onHidden.subscribe(k => {
            var adr = `http://${dane.identyfikator}.panel.fenek.tech`;
            if (!environment.production) {
              adr = `http://${dane.identyfikator}.panel.localhost:8005`;
            }
            window.location.replace(adr);
            //});
          }
        }
        this.komunikaty.modyfikacjaUdana();
      })
      .catch((blad: HttpError) => {
        switch (blad.error?.reasonCode) {
          case 1:
            this.komunikaty.komunikatBledu(Bledy.IdentyfikatorJestJuzUzywany);
            break;
          case 2:
            this.komunikaty.komunikatBledu(Bledy.zaCzestaZmianaIdentyfiaktora);
            break;
          case 10:
            this.komunikaty.komunikatBledu(Bledy.niedozwolonaNazwaIdentyfikatora);
            break;
          default:
            this.komunikaty.modyfikacjaNieUdana();
        }
      })
      .finally(() => {
        this.PodreczneDane.pobierajaca();
        this.pobieranieDanych();
        this.zablokowanyPrzycisk = false;
        this.zmienIdentyfikator = false;
      });
  }

  public zmienIdentyfikatorFun() {
    this.zmienIdentyfikator = true;
    // this.komunikaty.ZmianaIdentyfikatora();
    /*
      public ZmianaIdentyfikatora() {
    this.komunikaty.info('Zmiana identyfiaktora możliwa jest co minute', 'UWAGA', { timeOut: 10000 });
  }

     */
    this.komunikaty.zmianaIdentyfikatoraPrzekierowanie();
  }

  public zmodyfikujFunkcja() {
    this.zmodyfikuj = false;
    this.zapiszButton = true;
  }
}
