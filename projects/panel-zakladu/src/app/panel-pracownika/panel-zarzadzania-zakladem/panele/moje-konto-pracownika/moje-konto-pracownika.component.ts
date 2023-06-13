import {Component, OnInit} from '@angular/core';
import {MojeKonto} from "../../../../klasy/panelPracownika/mojeKonto/moje-konto";
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {MojeKontoDTO} from "../../../../klasy/panelPracownika/mojeKonto/moje-konto-dto";
import {KomunikatyService} from "../../../../serwisy/komunikaty.service";
import {BledyNumery} from "../../../../enum/bledy-numery";

@Component({
  selector: 'app-moje-konto-pracownika',
  templateUrl: './moje-konto-pracownika.component.html',
  styleUrls: ['./moje-konto-pracownika.component.scss']
})
export class MojeKontoPracownikaComponent implements OnInit{
 public mojeKontoObj = new MojeKonto();
 public wlaczPrzyciskZapisz : boolean = false;

  constructor(public listonosz: ListonoszService,
              public komunikaty:KomunikatyService) {

  }

  ngOnInit() {
    this.pobierz();
  }
public zapisz(){
  if(this.mojeKontoObj.opcjaZmianyHasla != false){
    if(!this.mojeKontoObj.czyHaslaWpisaneFunkcja()){
      return
    }
    this.mojeKontoObj.czyHaslaTakieSameFunkcja();
    if(!this.mojeKontoObj.czyHaslaWpisane || !this.mojeKontoObj.czyHaslaTakieSame){
      return
    }
  }

  const mojeKontoDTO = new MojeKontoDTO(this.mojeKontoObj);
  this.listonosz.aktualizuj(Drzwi.mojeKonto, mojeKontoDTO).then(zapisane => {
    this.pobierz();
this.komunikaty.modyfikacjaUdana();
this.wlaczPrzyciskZapisz = false;

  }).catch(niezapisane => {
this.komunikaty.modyfikacjaNieUdana();
  })
}

public pobierz(){
  this.listonosz.pobierz(Drzwi.mojeKonto).then(pobrane => {
Object.assign(this.mojeKontoObj, pobrane);
  }).catch(niepobrane => {
    this.komunikaty.wyswietlenieBladNumer(BledyNumery.niePobierajaSieDaneWmojeKonto)
  })
}

}
