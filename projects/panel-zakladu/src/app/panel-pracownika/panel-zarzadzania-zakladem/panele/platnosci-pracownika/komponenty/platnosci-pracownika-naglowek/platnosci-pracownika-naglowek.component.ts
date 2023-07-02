import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListonoszService } from '../../../../../../serwisy/listonosz.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OknoPlatnosciComponent } from '../okna/okno-platnosci/okno-platnosci.component';
import { InformacjeDoPaneluPlatnosci } from '../../../../../../klasy/panelPracownika/platnosci/informacje-do-panelu-platnosci';
import { Drzwi } from '../../../../../../enum/drzwi';
import { KomunikatyService } from '../../../../../../serwisy/komunikaty.service';
import { PlatnosciPracownikaPotwierdzenieAkcjiComponent } from '../../komunikaty/platnosci-pracownika-potwierdzenie-akcji/platnosci-pracownika-potwierdzenie-akcji.component';
import { PlatnosciSMSOknoComponent } from '../okna/platnosci-smsokno/platnosci-smsokno.component';
import { StartStopUslugaComponent } from '../okna/start-stop-usluga/start-stop-usluga.component';

@Component({
  selector: 'app-platnosci-pracownika-naglowek',
  templateUrl: './platnosci-pracownika-naglowek.component.html',
  styleUrls: ['./platnosci-pracownika-naglowek.component.scss'],
})
export class PlatnosciPracownikaNaglowekComponent {
  @Output() pobierzDane = new EventEmitter<void>();
  @Input() dane: InformacjeDoPaneluPlatnosci =
    new InformacjeDoPaneluPlatnosci();

  constructor(
    private modalService: NgbModal,
    private listonosz: ListonoszService,
    private komunikaty: KomunikatyService
  ) {}

  otworzSMS() {
    this.modalService.open(PlatnosciSMSOknoComponent, {
      size: 'xl',
      backdrop: 'static',
    });
  }

  nowaPlatnosc() {
    const okienko = this.modalService.open(OknoPlatnosciComponent, {
      backdrop: 'static',
      size: 'lg',
    });
  }

  aktywacjaKonta() {
    const okno = this.modalService.open(StartStopUslugaComponent, {
      size: 'lg',
    });
    okno.componentInstance.tryb = 'wlacz';
    okno.result
      .then((k) => {
        this.aktywacjaKontaZapytanie();
      })
      .catch((k) => {
        console.log(1, k);
      });
  }

  wstrzymajKonto() {
    const okno = this.modalService.open(StartStopUslugaComponent, {
      size: 'lg',
    });
    okno.componentInstance.tryb = 'wylacz';
    okno.result
      .then((k) => {
        this.wstrzymajKontoZapytanie();
      })
      .catch((k) => {});
  }

  DodajPracownika() {
    const okienko = this.modalService.open(
      PlatnosciPracownikaPotwierdzenieAkcjiComponent
    );
    okienko.componentInstance.tresc =
      'Zmodyfikowanie ilości pracowników może wiązać się z pobraniem dodatkowej opłaty zgodnej z cennikiem.';
    okienko.result.then(
      (result) => {
        this.DodajPracownikaZapytanie();
      },
      (reason) => {}
    );
  }

  DodajPracownikaZapytanie() {
    this.listonosz
      .wyslij(Drzwi.PlatnosciIloscPracownikow, { tryb: 'dodaj' })
      .then((k) => {
        console.log(k);
      })
      .catch((k) => {
        console.log('Źle');
      })
      .finally(() => {
        this.pobierzDane.emit();
      });
  }

  OdejmijPracownika() {
    const okienko = this.modalService.open(
      PlatnosciPracownikaPotwierdzenieAkcjiComponent
    );
    okienko.componentInstance.tresc =
      'Zmniejszenie liczby pracowników może wiązać się z zmianami na stronie reprezentacyjnej';
    okienko.result.then(
      (result) => {
        this.OdejmijPracownikaZapytanie();
      },
      (reason) => {}
    );
  }

  OdejmijPracownikaZapytanie() {
    this.listonosz
      .wyslij(Drzwi.PlatnosciIloscPracownikow, { tryb: 'odejmij' })
      .then((k) => {
        console.log(k);
      })
      .catch((k) => {
        console.log('Źle');
      })
      .finally(() => {
        this.pobierzDane.emit();
      });
  }

  zmianaUslugSms(event: boolean) {
    if (event) {
      const okienko = this.modalService.open(
        PlatnosciPracownikaPotwierdzenieAkcjiComponent
      );
      okienko.componentInstance.tresc =
        'Włączenie usługi sms może generować dodatkowe koszty zgodne z cennikiem ';
      okienko.result.then(
        (result) => {
          this.listonosz
            .wyslij(Drzwi.PlatnosciIUslugaSMS, { tryb: 'wlacz' })
            .then((k) => {
              this.komunikaty.uslugaSmsWlaczona();
            })
            .catch((k) => {
              this.komunikaty.uslugaSmsNieWlaczona();
            })
            .finally(() => {
              this.pobierzDane.emit();
            });
        },
        (reason) => {
          this.dane.uslugaSMS = false;
        }
      );
    }
    if (!event) {
      this.listonosz
        .wyslij(Drzwi.PlatnosciIUslugaSMS, { tryb: 'wylacz' })
        .then((k) => {
          this.komunikaty.uslugaSmsWylaczona();
        })
        .catch((k) => {
          this.komunikaty.uslugaSmsNieWylaczona();
        })
        .finally(() => {
          this.pobierzDane.emit();
        });
    }
  }

  private aktywacjaKontaZapytanie() {
    this.listonosz
      .wyslij(Drzwi.aktywacjaKonta, { aktywnosc: true })
      .then((k) => {
        this.komunikaty.kontoAktywowane();
      })
      .catch((k) => {
        if (k['error']['reasonCode'] == 3) {
          this.komunikaty.kontoNieAktywowane_zabrakloPieniedzy();
        } else {
          this.komunikaty.kontoNieAktywowane();
        }
      })
      .finally(() => {
        this.pobierzDane.emit();
      });
  }

  private wstrzymajKontoZapytanie() {
    this.listonosz
      .wyslij(Drzwi.aktywacjaKonta, { aktywnosc: false })
      .then((k) => {
        this.komunikaty.kontoWstrzymane();
      })
      .catch((k) => {
        this.komunikaty.kontoNieWstrzymane();
      })
      .finally(() => {
        this.pobierzDane.emit();
      });
  }
}
