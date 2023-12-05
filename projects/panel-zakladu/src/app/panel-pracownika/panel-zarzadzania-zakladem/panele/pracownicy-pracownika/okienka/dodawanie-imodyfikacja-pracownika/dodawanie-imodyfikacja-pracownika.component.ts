import { Component, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pracownik } from '../../../../../../klasy/panelPracownika/pracownicy/pracownik';
import { ListonoszService } from '../../../../../../serwisy/listonosz.service';
import { PracownikDTO } from '../../../../../../klasy/panelPracownika/pracownicy/pracownik-dto';
import { Drzwi } from '../../../../../../enum/drzwi';
import { KomunikatyService } from '../../../../../../serwisy/komunikaty.service';
import { BledyNumery } from '../../../../../../enum/bledy-numery';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../../../../../../environments/environment';
import { MojeKontoZdjecieProfiloweComponent } from '../../../moje-konto-pracownika/moje-konto-zdjecie-profilowe/moje-konto-zdjecie-profilowe.component';
import { ErrorAnalyzerService } from '../../../../../../serwisy/error-analyzer.service';

@Component({
  selector: 'app-dodawanie-imodyfikacja-pracownika',
  templateUrl: './dodawanie-imodyfikacja-pracownika.component.html',
  styleUrls: ['./dodawanie-imodyfikacja-pracownika.component.scss'],
})
export class DodawanieIModyfikacjaPracownikaComponent {
  @ViewChild(MojeKontoZdjecieProfiloweComponent) ZdjecieProfilowe: MojeKontoZdjecieProfiloweComponent | undefined;
  @Input() tryb: string = '';
  @Input() idUzytkownika: number = 0;
  public iloscKlikniec = 0;
  public pracownikObj = new Pracownik();
  public pracownikDodany: boolean = true;
  public pracownikZmodyfikowany: boolean = true;
  public blokowaniePrzycisku: boolean = false;
  public formData: FormData | undefined = undefined;
  public usunZdjecieProfiloweDTo = false;

  public safeImageUrl: SafeUrl | null = null;
  protected readonly environment = environment;

  constructor(
    public activeModal: NgbActiveModal,
    public listonosz: ListonoszService,
    private sanitizer: DomSanitizer,
    public komunikaty: KomunikatyService,
    private error_: ErrorAnalyzerService
  ) {}

  pobierzPracownika() {
    this.listonosz
      .pobierz(Drzwi.pracownik + this.idUzytkownika)
      .then(pobrany => {
        Object.assign(this.pracownikObj, pobrany);
      })
      .catch(niepobrany => {
        this.komunikaty.wyswietlenieBladNumer(BledyNumery.niePobierajaSieDaneOPracowniku);
      });
  }

  zapisz() {
    if (
      this.pracownikObj.imie.length == 0 ||
      this.pracownikObj.nazwisko.length == 0 ||
      this.pracownikObj.adresEmail.length == 0
    ) {
      this.komunikaty.komunikatInfo('Uzupełnij wymagane dane oznaczone *');
      return;
    }
    this.iloscKlikniec++;
    this.pracownikObj.czyWszystkoWpisaneFunkcja();
    if (this.iloscKlikniec >= 2) {
      this.blokowaniePrzycisku = true;
      const pracownikObjDTO = new PracownikDTO(this.pracownikObj);
      this.listonosz
        .wyslij(Drzwi.dodaniePracownikaDoTablicy, pracownikObjDTO)
        .then(async idPracownika => {
          this.pracownikDodany = true;
          this.komunikaty.dodaniePracownikaUdane();
          await this.ZdjecieProfilowe?.wyslijZdjecie(this.idUzytkownika);
          this.activeModal.close('Zapisanie udane');
        })
        .catch(error => {
          this.pracownikDodany = false;
          this.error_.analyze(error, this.komunikaty.dodaniePracownikaNieUdane);
        })
        .finally(() => {
          this.blokowaniePrzycisku = false;
        });
    }
  }

  public zmodyfikuj() {
    this.iloscKlikniec++;
    if (this.iloscKlikniec >= 2) {
      const pracownikObjDTO = new PracownikDTO(this.pracownikObj);
      pracownikObjDTO.usunZdjecieProfilowe = this.usunZdjecieProfiloweDTo;
      this.blokowaniePrzycisku = true;
      this.listonosz
        .aktualizuj(Drzwi.pracownik + this.idUzytkownika, pracownikObjDTO)
        .then(async dodano => {
          this.pracownikZmodyfikowany = true;
          this.komunikaty.modyfikowaniePracownikaUdane();
          await this.ZdjecieProfilowe?.wyslijZdjecie(this.idUzytkownika);
          this.activeModal.close('Zmodyfikowanie udane');
        })
        .catch(nieudano => {
          this.pracownikZmodyfikowany = false;
          this.komunikaty.modyfikowaniePracownikaNieUdane();
        })
        .finally(() => {
          this.blokowaniePrzycisku = false;
        });
    }
  }
}
