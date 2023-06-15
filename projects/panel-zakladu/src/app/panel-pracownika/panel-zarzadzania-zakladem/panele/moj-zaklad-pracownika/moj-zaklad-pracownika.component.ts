import {Component, OnInit} from '@angular/core';
import {MojZaklad} from "../../../../klasy/panelPracownika/mojZaklad/moj-zaklad";
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {MojZakladDTO} from "../../../../klasy/panelPracownika/mojZaklad/moj-zaklad-dto";
import {KomunikatyService} from "../../../../serwisy/komunikaty.service";
import {PodreczneDaneService} from "../../../../serwisy/podreczne-dane.service";

@Component({
  selector: 'app-moj-zaklad-pracownika',
  templateUrl: './moj-zaklad-pracownika.component.html',
  styleUrls: ['./moj-zaklad-pracownika.component.scss']
})
export class MojZakladPracownikaComponent implements OnInit {
  public mojZakladKlasa = new MojZaklad();
  public zapiszButton: boolean = false;
  public zmodyfikuj: boolean = true;

  constructor(private listonosz: ListonoszService, private komunikaty: KomunikatyService,
              public PodreczneDane: PodreczneDaneService) {
  }

  ngOnInit() {
    this.pobieranieDanych()
  }

  pobieranieDanych() {
    this.listonosz.pobierz(Drzwi.daneMojZakladPracownik).then((dane: MojZaklad) => {
      Object.assign(this.mojZakladKlasa.poniedzialek, dane.poniedzialek)
      Object.assign(this.mojZakladKlasa.wtorek, dane.wtorek)
      Object.assign(this.mojZakladKlasa.sroda, dane.sroda)
      Object.assign(this.mojZakladKlasa.czwartek, dane.czwartek)
      Object.assign(this.mojZakladKlasa.piatek, dane.piatek)
      Object.assign(this.mojZakladKlasa.sobota, dane.sobota)
      Object.assign(this.mojZakladKlasa.niedziela, dane.niedziela)
      const {niedziela, poniedzialek, wtorek, sroda, czwartek, piatek, sobota, ...reszta} = dane;
      Object.assign(this.mojZakladKlasa, reszta)
    })
  }

  public zapisz() {
    this.zapiszButton = false;
    this.zmodyfikuj = true;
    const dane = new MojZakladDTO(this.mojZakladKlasa);
    this.listonosz.wyslij(Drzwi.daneMojZakladPracownik, dane).then(udane => {
      this.komunikaty.modyfikacjaUdana();
      this.PodreczneDane.pobierajaca();
      this.pobieranieDanych()
    }).catch(blad => {
      this.komunikaty.modyfikacjaNieUdana();
    })
  }

  public zmodyfikujFunkcja() {
    this.zmodyfikuj = false;
    this.zapiszButton = true;
  }
}
