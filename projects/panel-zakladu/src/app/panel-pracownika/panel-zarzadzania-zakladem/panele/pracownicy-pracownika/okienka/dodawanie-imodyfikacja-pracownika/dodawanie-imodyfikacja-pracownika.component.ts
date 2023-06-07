import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Pracownik} from "../../../../../../klasy/panelPracownika/pracownicy/pracownik";
import {ListonoszService} from "../../../../../../serwisy/listonosz.service";
import {PracownikDTO} from "../../../../../../klasy/panelPracownika/pracownicy/pracownik-dto";
import {Drzwi} from "../../../../../../enum/drzwi";
import {KomunikatyService} from "../../../../../../serwisy/komunikaty.service";

@Component({
  selector: 'app-dodawanie-imodyfikacja-pracownika',
  templateUrl: './dodawanie-imodyfikacja-pracownika.component.html',
  styleUrls: ['./dodawanie-imodyfikacja-pracownika.component.scss']
})
export class DodawanieIModyfikacjaPracownikaComponent {
  @Input() tryb: string = "";
  public iloscKlikniec = 0
  public pracownikObj = new Pracownik();
  public pracownikDodany: boolean = true;


  constructor(public activeModal: NgbActiveModal,
              public listonosz: ListonoszService,
              public komunikaty: KomunikatyService) {
  }

  zapisz() {
    this.iloscKlikniec++;

    this.pracownikObj.czyWszystkoWpisaneFunkcja();
    if (this.iloscKlikniec == 2) {
      const pracownikObjDTO = new PracownikDTO(this.pracownikObj);
      this.listonosz.wyslij(Drzwi.dodaniePracownikaDoTablicy, pracownikObjDTO).then(dodano => {
        this.pracownikDodany = true;
        this.komunikaty.dodaniePracownikaUdane();
        this.activeModal.close("Zapisanie udane");
      }).catch(nieudano => {
        this.pracownikDodany = false;
      })
    }


  }
}
