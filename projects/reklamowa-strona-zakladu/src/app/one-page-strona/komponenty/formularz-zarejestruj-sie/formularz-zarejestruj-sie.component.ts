import { Component, OnInit } from '@angular/core';
import { DaneKlientaDTO } from './etapy/klasy/dane-klienta';
import { ListonoszService } from '../../../serwisy/listonosz.service';
import { Drzwi } from '../../../enum/drzwi';
import { ZarejestrujSieService } from './zarejestrujSie.service';
import { NawigacjaService } from '../../../serwisy/nawigacja.service';
import { NawigacjaEnum } from '../../../enum/nawigacja.enum';

@Component({
  selector: 'app-formularz-zarejestruj-sie',
  templateUrl: './formularz-zarejestruj-sie.component.html',
  styleUrls: ['./formularz-zarejestruj-sie.component.scss'],
})
export class FormularzZarejestrujSieComponent implements OnInit {
  public krok: number = 1;

  constructor(
    public listonosz: ListonoszService,
    public zarejestrujSieService: ZarejestrujSieService,
    private nawigacja_: NawigacjaService
  ) {}

  ngOnInit() {}

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
    this.nawigacja_.przeniesDoPanelu(NawigacjaEnum.rejestracjaFormularz);
  }

  public wyslijDane() {
    this.zarejestrujSieService.butonDisabled_wyslijDane = true;
    this.zarejestrujSieService.DaneKlientaClass.daneNieWyslane = false;
    const daneDTO = new DaneKlientaDTO(this.zarejestrujSieService.DaneKlientaClass);
    console.log(daneDTO);
    this.listonosz
      .wyslij(Drzwi.daneKlientaRejestracja, daneDTO)
      .then(identyfikatorWizyty => {
        this.zarejestrujSieService.DaneKlientaClass.identyfikator = identyfikatorWizyty;
        this.krok = 5;
      })
      .catch((nieudane: any) => {
        if (nieudane.error.reasonCode == 301) {
          this.krok = -1;
        }
        this.zarejestrujSieService.DaneKlientaClass.daneNieWyslane = true;
      })
      .finally(() => {
        this.zarejestrujSieService.butonDisabled_wyslijDane = false;
      });
  }

  public wyslijKod() {
    this.zarejestrujSieService.DaneKlientaClass.niepoprawnyKod = false;
    this.zarejestrujSieService.butonDisabled_weryfikacjaKodu = true;
    const kodDTO = {
      veryficationCode: this.zarejestrujSieService.DaneKlientaClass.kodWeryfikacja,
      veryficationId: this.zarejestrujSieService.DaneKlientaClass.identyfikator,
    };
    this.listonosz
      .wyslij(Drzwi.kodWeryfikacyjnyIdentyfikator, kodDTO)
      .then(udane => {
        this.krok = 6;
      })
      .catch(nieudane => {
        if (nieudane.error.reasonCode == 301) {
          this.krok = -1;
        }
        this.zarejestrujSieService.DaneKlientaClass.niepoprawnyKod = true;
      })
      .finally(() => {
        this.zarejestrujSieService.butonDisabled_weryfikacjaKodu = false;
      });
  }
}
