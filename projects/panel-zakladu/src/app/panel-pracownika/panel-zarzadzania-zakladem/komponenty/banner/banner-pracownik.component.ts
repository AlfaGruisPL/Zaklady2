import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeService } from '../../../../serwisy/font-awesome.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { PowiadomieniaService } from './powiadomienia.service';
import { StraznicyService } from '../../../../straznicy/straznicy.service';
import { TokenService } from '../../../../serwisy/token.service';

@Component({
  selector: 'app-banner-pracownik',
  templateUrl: './banner-pracownik.component.html',
  styleUrls: ['./banner-pracownik.component.scss'],
})
export class BannerPracownikComponent implements OnInit, OnDestroy {
  constructor(
    public fontAwesome: FontAwesomeService,
    private Router: Router,
    private route: ActivatedRoute,
    public DanePodreczne: PodreczneDaneService,
    public powiadomienia_: PowiadomieniaService,
    private straznik_: StraznicyService,
    public token_: TokenService,
    public komunikaty: KomunikatyService,
    private listonosz: ListonoszService
  ) {}

  losowaLiczba = Math.round(Math.random() * 100);

  async ngOnInit() {
    this.token_.czyWlasciciel();
    await this.powiadomienia_.pobierzPowiadomienia();
  }

  doHarmonogramu() {
    this.Router.navigate(['/panelPracownika/harmonogram']);
  }

  popoverUzytkownika: any;
  popoverZakladu: any;

  otworz(popover: any) {
    popover.open();
    this.popoverZakladu = popover;
    if (this.popoverUzytkownika != undefined) {
      this.popoverUzytkownika.close();
    }
  }

  otworzZakladu(popover: any) {
    popover.open();
    this.popoverUzytkownika = popover;
    if (this.popoverZakladu != undefined) {
      this.popoverZakladu.close();
    }
  }

  public wyloguj() {
    this.straznik_.zatrzymajSprawdzanie();
    this.listonosz
      .wyloguj()
      .then(k => {
        this.komunikaty.wylogowanieUdane();
      })
      .catch(k => {
        this.komunikaty.wylogowanieNieUdane();
      })
      .finally(() => {
        this.Router.navigate(['']);
      });
  }

  zamkniecie(event: any, popover: any, id: string) {
    //  console.log(popoverDrugi)
    var znaleziono = false;
    var tmp = event.target;
    var ikonka = tmp.tagName == 'path';
    for (let k = 0; k < 15; k++) {
      if (tmp != undefined) {
        if (
          tmp.id == 'powiadomienieZakladu_button' ||
          tmp.id == 'powiadomieniaUzytkownika_Button'
        ) {
          ikonka = true;
        }
        if (tmp.id == popover.id) {
        }
        if (tmp.localName == 'ngb-popover-window') {
          znaleziono = true;
        }
        tmp = tmp.parentElement;
      }
    }
    if (!znaleziono && !ikonka) {
      popover.close();
    }
    console.groupEnd();
  }

  UsunWszystko() {
    this.powiadomienia_.powiadomieniaZakladu.forEach(powiadomienie => {
      this.powiadomienia_.usunPowiadomienieZakladu(powiadomienie);
    });
  }

  PrzeczytajWszystko() {
    this.powiadomienia_.powiadomieniaZakladu.forEach(powiadomienie => {
      this.powiadomienia_.odczytajPowiadomienieZakladu(powiadomienie);
    });
  }

  UsunWszystkoUzytkownika() {
    this.powiadomienia_.powiadomieniaUzytkownika.forEach(powiadomienie => {
      this.powiadomienia_.usunPowiadomienieUzytkownika(powiadomienie);
    });
  }

  PrzeczytajWszystkoUzytkownika() {
    this.powiadomienia_.powiadomieniaUzytkownika.forEach(powiadomienie => {
      this.powiadomienia_.odczytajPowiadomienieZakladu(powiadomienie);
    });
  }

  ngOnDestroy(): void {
    this.powiadomienia_.zatrzymajPobieraniePowiadomien();
  }
}
