import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Pracownik} from "../../../../../../klasy/panelPracownika/pracownicy/pracownik";
import {ListonoszService} from "../../../../../../serwisy/listonosz.service";
import {PracownikDTO} from "../../../../../../klasy/panelPracownika/pracownicy/pracownik-dto";
import {Drzwi} from "../../../../../../enum/drzwi";
import {KomunikatyService} from "../../../../../../serwisy/komunikaty.service";
import {BledyNumery} from "../../../../../../enum/bledy-numery";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

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
  public formData: FormData | undefined = undefined
  public usunZdjecieProfiloweDTo = false

  public safeImageUrl: SafeUrl | null = null;

  constructor(public activeModal: NgbActiveModal,
              public listonosz: ListonoszService,
              private sanitizer: DomSanitizer,
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
      this.listonosz.wyslij(Drzwi.dodaniePracownikaDoTablicy, pracownikObjDTO).then(async idPracownika => {
        this.pracownikDodany = true;
        this.komunikaty.dodaniePracownikaUdane();
        await this.wyslijZdjecie(idPracownika)
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
      pracownikObjDTO.usunZdjecieProfilowe = this.usunZdjecieProfiloweDTo
      this.blokowaniePrzycisku = true
      this.listonosz.aktualizuj(Drzwi.pracownik + this.idUzytkownika, pracownikObjDTO).then(async dodano => {
        this.pracownikZmodyfikowany = true;
        this.komunikaty.modyfikowaniePracownikaUdane();
        await this.wyslijZdjecie(this.idUzytkownika)
        this.activeModal.close("Zmodyfikowanie udane");
      }).catch(nieudano => {
        this.pracownikZmodyfikowany = false;
        this.komunikaty.modyfikowaniePracownikaNieUdane();
      }).finally(() => {
        this.blokowaniePrzycisku = false;
      })

    }
  }

  usunZdjecieProfilowe() {
    this.usunZdjecieProfiloweDTo = true;
    this.safeImageUrl = null;
  }

  private async wyslijZdjecie(id: number) {

    if (this.formData != undefined) {

      try {
        await this.listonosz.wyslij("/pliki/zdjecieProfilowe/" + id, this.formData)
        this.komunikaty.zdjecieProfiloweZmodyfikowane();
      } catch (error) {

        this.komunikaty.zdjecieProfiloweNieZmodyfikowane();
      }
    }
  }

  wybierzPlik(event: any) {
    this.usunZdjecieProfiloweDTo = false
    const file: File = event.target.files[0];
    if (file) {
      this.formData = new FormData();
      this.formData.append("file", file);
      // @ts-ignore
      this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.formData.get('file')));
    }
  }
}
