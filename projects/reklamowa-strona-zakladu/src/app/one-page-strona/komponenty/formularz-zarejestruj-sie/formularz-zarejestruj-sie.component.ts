import { Component, OnInit } from '@angular/core';
import { DaneKlienta, DaneKlientaDTO } from './etapy/klasy/dane-klienta';
import { ListonoszService } from '../../../serwisy/listonosz.service';
import { Drzwi } from '../../../enum/drzwi';
import { ZarejestrujSieService } from './zarejestrujSie.service';

@Component({
  selector: 'app-formularz-zarejestruj-sie',
  templateUrl: './formularz-zarejestruj-sie.component.html',
  styleUrls: ['./formularz-zarejestruj-sie.component.scss'],
})
export class FormularzZarejestrujSieComponent implements OnInit {
  public krok: number = 3;
  public daneKlientaKlasa = new DaneKlienta();

  constructor(
    public listonosz: ListonoszService,
    public zarejestrujSieService: ZarejestrujSieService
  ) {}

  ngOnInit() {
    this.zarejestrujSieService.DaneKlientaClass = this.daneKlientaKlasa;
  }

  ustawKrok(nowyKrok: number) {
    if (nowyKrok == 5) {
      //kiedy kliknięte w 4
      this.wyslijDane();
    } else if (nowyKrok == 6) {
      //kiedy kliknięte w 5
      this.wyslijKod();
    } else {
      this.krok = nowyKrok;
    }
  }

  public wyslijDane() {
    this.daneKlientaKlasa.daneNieWyslane = false;
    const daneDTO = new DaneKlientaDTO(this.daneKlientaKlasa);
    this.listonosz
      .wyslij(Drzwi.daneKlientaRejestracja, daneDTO)
      .then((identyfikatorWizyty) => {
        this.daneKlientaKlasa.identyfikator = identyfikatorWizyty;
        this.krok = 5;
      })
      .catch((nieudane) => {
        this.daneKlientaKlasa.daneNieWyslane = true;
      });
  }

  public wyslijKod() {
    this.daneKlientaKlasa.niepoprawnyKod = false;
    const kodDTO = {
      kod: this.daneKlientaKlasa.kodWeryfikacja,
      identyfikator: this.daneKlientaKlasa.identyfikator,
    };
    this.listonosz
      .wyslij(Drzwi.kodWeryfikacyjnyIdentyfikator, kodDTO)
      .then((udane) => {
        this.krok = 6;
      })
      .catch((nieudane) => {
        this.daneKlientaKlasa.niepoprawnyKod = true;
      });
  }
}
