import {Component, OnInit} from '@angular/core';
import {MojeKonto} from "../../../../klasy/panelPracownika/mojeKonto/moje-konto";
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {MojeKontoDTO} from "../../../../klasy/panelPracownika/mojeKonto/moje-konto-dto";
import {KomunikatyService} from "../../../../serwisy/komunikaty.service";
import {BledyNumery} from "../../../../enum/bledy-numery";
import {FontAwesomeService} from "../../../../serwisy/font-awesome.service";

@Component({
  selector: 'app-moje-konto-pracownika',
  templateUrl: './moje-konto-pracownika.component.html',
  styleUrls: ['./moje-konto-pracownika.component.scss']
})
export class MojeKontoPracownikaComponent implements OnInit {
  public mojeKontoObj = new MojeKonto();
  public wlaczPrzyciskZapisz: boolean = false;
  public podgladWlaczoneJeden: boolean = false;
  public podgladWlaczoneDwa: boolean = false;

  constructor(public listonosz: ListonoszService,
              public komunikaty: KomunikatyService,
              public fontAwesome: FontAwesomeService) {

  }

  ngOnInit() {
    this.pobierz();
  }

  public zapisz() {
    const mojeKontoDTO = new MojeKontoDTO(this.mojeKontoObj);
    if (this.mojeKontoObj.opcjaZmianyHasla != false) {
      if (!this.mojeKontoObj.czyHaslaWpisaneFunkcja()) {
        return
      }
      this.mojeKontoObj.czyHaslaTakieSameFunkcja();
      if (!this.mojeKontoObj.czyHaslaWpisane || !this.mojeKontoObj.czyHaslaTakieSame) {
        return
      }
      mojeKontoDTO.hasloNowe = this.mojeKontoObj.powtorzNoweHaslo;


    }


    this.listonosz.aktualizuj(Drzwi.mojeKonto, mojeKontoDTO).then(zapisane => {
      this.pobierz();
      this.komunikaty.modyfikacjaUdana();
      this.wlaczPrzyciskZapisz = false;
      this.mojeKontoObj.wpiszNoweHaslo = "";
      this.mojeKontoObj.powtorzNoweHaslo = "";

    }).catch(niezapisane => {
      this.komunikaty.modyfikacjaNieUdana();
    }).finally(() => {
      this.mojeKontoObj.opcjaZmianyHasla = false
    })
  }

  public pobierz() {
    this.listonosz.pobierz(Drzwi.mojeKonto).then(pobrane => {
      Object.assign(this.mojeKontoObj, pobrane);
    }).catch(niepobrane => {
      this.komunikaty.wyswietlenieBladNumer(BledyNumery.niePobierajaSieDaneWmojeKonto)
    })
  }

}
