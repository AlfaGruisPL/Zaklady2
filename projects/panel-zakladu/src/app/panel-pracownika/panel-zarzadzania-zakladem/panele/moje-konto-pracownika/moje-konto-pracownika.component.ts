import { Component, OnInit, ViewChild } from '@angular/core';
import { MojeKonto } from '../../../../klasy/panelPracownika/mojeKonto/moje-konto';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';
import { MojeKontoDTO } from '../../../../klasy/panelPracownika/mojeKonto/moje-konto-dto';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { BledyNumery } from '../../../../enum/bledy-numery';
import { FontAwesomeService } from '../../../../serwisy/font-awesome.service';
import { MojeKontoZdjecieProfiloweComponent } from './moje-konto-zdjecie-profilowe/moje-konto-zdjecie-profilowe.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TippyDirective } from '@ngneat/helipopper';
import { CommonModule } from '@angular/common';
import { UstawieniaPowiadomienComponent } from './ustawienia-powiadomien/ustawienia-powiadomien.component';
import { NgxEditorComponent } from '../../komponenty/ngx-editor/ngx-editor.component';
import { SelectImageComponent } from "../files/select-image/select-image.component";

@Component({
  standalone: true,
  selector: 'app-moje-konto-pracownika',
  templateUrl: './moje-konto-pracownika.component.html',
  styleUrls: ['./moje-konto-pracownika.component.scss'],
  imports: [
    UiSwitchModule,
    FontAwesomeModule,
    TippyDirective,
    CommonModule,
    MojeKontoZdjecieProfiloweComponent,
    UstawieniaPowiadomienComponent,
    NgxEditorComponent,
    SelectImageComponent,
  ],
})
export class MojeKontoPracownikaComponent implements OnInit {
  public mojeKontoObj = new MojeKonto();
  public wlaczPrzyciskZapisz: boolean = false;
  public podgladWlaczoneJeden: boolean = false;
  public podgladWlaczoneDwa: boolean = false;

  @ViewChild(MojeKontoZdjecieProfiloweComponent) ZdjecieProfilowe: MojeKontoZdjecieProfiloweComponent | undefined;

  constructor(
    public listonosz: ListonoszService,
    public komunikaty: KomunikatyService,
    public fontAwesome: FontAwesomeService
  ) {}

  ngOnInit() {
    this.pobierz();
  }

  public async zapisz() {
    const mojeKontoDTO = new MojeKontoDTO(this.mojeKontoObj);
    if (this.mojeKontoObj.opcjaZmianyHasla != false) {
      if (!this.mojeKontoObj.czyHaslaWpisaneFunkcja()) {
        return;
      }
      this.mojeKontoObj.czyHaslaTakieSameFunkcja();
      if (!this.mojeKontoObj.czyHaslaWpisane || !this.mojeKontoObj.czyHaslaTakieSame) {
        return;
      }
      mojeKontoDTO.hasloNowe = this.mojeKontoObj.powtorzNoweHaslo;
    }
    await this.ZdjecieProfilowe?.wyslijZdjecie();
    this.listonosz
      .aktualizuj(Drzwi.mojeKonto, mojeKontoDTO)
      .then(zapisane => {
        this.pobierz();
        this.komunikaty.modyfikacjaUdana();
        this.wlaczPrzyciskZapisz = false;
        this.mojeKontoObj.wpiszNoweHaslo = '';
        this.mojeKontoObj.powtorzNoweHaslo = '';
        this.pobierz();
      })
      .catch(niezapisane => {
        this.komunikaty.modyfikacjaNieUdana();
      })
      .finally(() => {
        this.mojeKontoObj.opcjaZmianyHasla = false;
      });
  }

  public pobierz() {
    this.listonosz
      .pobierz(Drzwi.mojeKonto)
      .then((pobrane: MojeKonto) => {
        const { numer_telefonu, ...dane } = pobrane;
        Object.assign(this.mojeKontoObj, dane);
        if (numer_telefonu) {
          this.mojeKontoObj.numer_telefonu = numer_telefonu.split('-')[1];
          this.mojeKontoObj.prefiks = numer_telefonu.split('-')[0];
        }
      })
      .catch(niepobrane => {
        this.komunikaty.wyswietlenieBladNumer(BledyNumery.niePobierajaSieDaneWmojeKonto);
      });
  }
}
