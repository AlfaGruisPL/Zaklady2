import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Pracownik} from "../../../../../../klasy/panelPracownika/pracownicy/pracownik";
import {ListonoszService} from "../../../../../../serwisy/listonosz.service";
import {PracownikDTO} from "../../../../../../klasy/panelPracownika/pracownicy/pracownik-dto";
import {Drzwi} from "../../../../../../enum/drzwi";
import {KomunikatyService} from "../../../../../../serwisy/komunikaty.service";
import {BledyNumery} from "../../../../../../enum/bledy-numery";

@Component({
  selector: 'app-dodawanie-imodyfikacja-pracownika',
  templateUrl: './dodawanie-imodyfikacja-pracownika.component.html',
  styleUrls: ['./dodawanie-imodyfikacja-pracownika.component.scss']
})
export class DodawanieIModyfikacjaPracownikaComponent {
  @Input() tryb: string = "";
  @Input() idUzytkownika: number = 0;
  public iloscKlikniec = 0
  public pracownikObj = new Pracownik();
  public pracownikDodany: boolean = true;
  public pracownikZmodyfikowany: boolean = true;
  public blokowaniePrzycisku: boolean = false;


  constructor(public activeModal: NgbActiveModal,
              public listonosz: ListonoszService,
              public komunikaty: KomunikatyService) {
  }

  pobierzPracownika() {
    this.listonosz.pobierz(Drzwi.pracownik + this.idUzytkownika).then(pobrany => {
      Object.assign(this.pracownikObj, pobrany);
    }).catch(niepobrany => {
      this.komunikaty.wyswietlenieBladNumer(BledyNumery.niePobierajaSieDaneOPracowniku);
    })
  }

  zapisz() {
    this.iloscKlikniec++;
    this.pracownikObj.czyWszystkoWpisaneFunkcja();
    if (this.iloscKlikniec >= 2) {
      this.blokowaniePrzycisku = true;
      const pracownikObjDTO = new PracownikDTO(this.pracownikObj);
      this.listonosz.wyslij(Drzwi.dodaniePracownikaDoTablicy, pracownikObjDTO).then(dodano => {
        this.pracownikDodany = true;
        this.komunikaty.dodaniePracownikaUdane();
        this.activeModal.close("Zapisanie udane");
      }).catch(nieudano => {
        this.pracownikDodany = false;
        this.komunikaty.dodaniePracownikaNieUdane();
      }).finally(() => {
        this.blokowaniePrzycisku = false;
      })
    }


  }

  public zmodyfikuj() {
    this.iloscKlikniec++;
    if (this.iloscKlikniec >= 2) {
      const pracownikObjDTO = new PracownikDTO(this.pracownikObj);
      this.blokowaniePrzycisku = true
      this.listonosz.aktualizuj(Drzwi.pracownik + this.idUzytkownika, pracownikObjDTO).then(dodano => {
        this.pracownikZmodyfikowany = true;
        this.komunikaty.modyfikowaniePracownikaUdane();
        this.activeModal.close("Zmodyfikowanie udane");
      }).catch(nieudano => {
        this.pracownikZmodyfikowany = false;
        this.komunikaty.modyfikowaniePracownikaNieUdane();
      }).finally(() => {
        this.blokowaniePrzycisku = false;
      })
    }
  }

}
