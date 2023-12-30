import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MojeKontoZdjecieProfiloweComponent } from '../../moje-konto-pracownika/moje-konto-zdjecie-profilowe/moje-konto-zdjecie-profilowe.component';
import { NgIf } from '@angular/common';
import { UiSwitchModule } from 'ngx-ui-switch';
import { Pracownik } from '../../../../../klasy/panelPracownika/pracownicy/pracownik';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { KomunikatyService } from '../../../../../serwisy/komunikaty.service';
import { ErrorAnalyzerService } from '../../../../../serwisy/error-analyzer.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { BledyNumery } from '../../../../../enum/bledy-numery';
import { PracownikDTO } from '../../../../../klasy/panelPracownika/pracownicy/pracownik-dto';
import { environment } from 'projects/panel-zakladu/src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { BackArrowComponent } from '../../../komponenty/back-arrow/back-arrow.component';
import { NgxEditorComponent } from '../../../komponenty/ngx-editor/ngx-editor.component';
import { WorkerModifyTable1Component } from './worker-modify-table1/worker-modify-table1.component';
import { RureczkiModule } from '../../../../../rureczki/rureczki.module';

@Component({
  selector: 'app-worker-modify',
  standalone: true,
  imports: [
    FormsModule,
    MojeKontoZdjecieProfiloweComponent,
    NgIf,
    UiSwitchModule,
    BackArrowComponent,
    NgxEditorComponent,
    WorkerModifyTable1Component,
    RureczkiModule,
  ],
  templateUrl: './worker-modify.component.html',
  styleUrl: './worker-modify.component.scss',
})
export class WorkerModifyComponent {
  @ViewChild(MojeKontoZdjecieProfiloweComponent) ZdjecieProfilowe: MojeKontoZdjecieProfiloweComponent | undefined;
  tryb: string = '';
  idUzytkownika: number = 0;
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
    public listonosz: ListonoszService,
    private sanitizer: DomSanitizer,
    public komunikaty: KomunikatyService,
    private error_: ErrorAnalyzerService,
    private Router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.Router.params.subscribe(k => {
      this.idUzytkownika = k['id'];
      this.tryb = k['mode'];
      this.pobierzPracownika();
    });
  }

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
        .then(async userFromPost => {
          this.pracownikZmodyfikowany = true;
          this.komunikaty.modyfikowaniePracownikaUdane();
          await this.ZdjecieProfilowe?.wyslijZdjecie(this.idUzytkownika);
          Object.assign(this.pracownikObj, userFromPost);
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
