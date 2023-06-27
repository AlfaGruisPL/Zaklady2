import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  PanelZarzadzaniaZaklademComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panel-zarzadzania-zakladem.component';
import {PanelKlientaComponent} from './panel-klienta/panel-klienta.component';
import {
  PanelLogowaniaPracownikowComponent
} from './panel-pracownika/poczatkowy-panel-pracownika/panel-logowania-pracownikow/panel-logowania-pracownikow.component';
import {FormsModule} from "@angular/forms";
import {
  ResetHaslaPracownikowComponent
} from './panel-pracownika/poczatkowy-panel-pracownika/reset-hasla-pracownikow/reset-hasla-pracownikow.component';
import {HttpClientModule} from "@angular/common/http";

import {PanelPracownikaComponent} from './panel-pracownika/panel-pracownika.component';
import {PanelOblugiKlientaComponent} from './panel-klienta/panel-oblugi-klienta/panel-oblugi-klienta.component';
import {
  PanelLogowaniaKlientaComponent
} from './panel-klienta/poczatkowyPanelKlienta/panel-logowania-klienta/panel-logowania-klienta.component';
import {
  PanelRejestracjiKlientaComponent
} from './panel-klienta/poczatkowyPanelKlienta/panel-rejestracji-klienta/panel-rejestracji-klienta.component';
import {
  ResetHaslaKlientaComponent
} from './panel-klienta/poczatkowyPanelKlienta/reset-hasla-klienta/reset-hasla-klienta.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {
  PoczatkowyPanelPracownikaComponent
} from './panel-pracownika/poczatkowy-panel-pracownika/poczatkowy-panel-pracownika.component';
import {
  BannerPracownikaComponent
} from './panel-pracownika/poczatkowy-panel-pracownika/banner-pracownika/banner-pracownika.component';
import {
  StopkaPracownikaComponent
} from './panel-pracownika/poczatkowy-panel-pracownika/stopka-pracownika/stopka-pracownika.component';
import {
  MenuPracownikComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/komponenty/menu/menu-pracownik.component';
import {
  StronaStartowaPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/strona-startowa-pracownika/strona-startowa-pracownika.component';
import {
  MojeKontoPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/moje-konto-pracownika/moje-konto-pracownika.component';
import {
  ZarejestrowaneWizytyPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/zarejestrowane-wizyty-pracownika/zarejestrowane-wizyty-pracownika.component';
import {
  PracownicyPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/pracownicy-pracownika/pracownicy-pracownika.component';
import {
  KalendarzTerminowComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/kalendarz-terminow/kalendarz-terminow.component';
import {
  CennikiPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/cenniki-pracownika/cenniki-pracownika.component';
import {
  StronaReprezentacyjnaPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/strona-reprezentacyjna-pracownika/strona-reprezentacyjna-pracownika.component';
import {
  RaportyPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/raporty-pracownika/raporty-pracownika.component';
import {
  MojZakladPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/moj-zaklad-pracownika/moj-zaklad-pracownika.component';
import {popperVariation, provideTippyConfig, TippyDirective, tooltipVariation} from '@ngneat/helipopper';
import {
  RejestracjaZakladuComponent
} from './panel-pracownika/poczatkowy-panel-pracownika/rejestracja-zakladu/rejestracja-zakladu.component';
import {
  PoczatkowyPanelKlientaComponent
} from './panel-klienta/poczatkowyPanelKlienta/poczatkowy-panel-klienta.component';
import {
  BannerKlientaComponent
} from './panel-klienta/poczatkowyPanelKlienta/components/banner-klienta/banner-klienta.component';
import {
  StopkaKlientaComponent
} from './panel-klienta/poczatkowyPanelKlienta/components/stopka-klienta/stopka-klienta.component';
import {
  BannerPracownikComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/komponenty/banner/banner-pracownik.component";
import {
  StopkaPracownikComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/komponenty/stopka/stopka-pracownik.component';
import {CookieModule} from "ngx-cookie";
import {MaxDlugoscPipe} from './rureczki/max-dlugosc.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  DodawanieIModyfikacjaPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/pracownicy-pracownika/okienka/dodawanie-imodyfikacja-pracownika/dodawanie-imodyfikacja-pracownika.component';
import {
  HarmonogramPracownikaComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/harmonogram-pracownika/harmonogram-pracownika.component';
import {
  ListaKlientowPracownikComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/lista-klientow-pracownik/lista-klientow-pracownik.component';
import {UiSwitchModule} from "ngx-ui-switch";
import {
  PracownicyMojZakladComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/moj-zaklad-pracownika/pracownicy-moj-zaklad/pracownicy-moj-zaklad.component';
import {
  CzyNaprawdeUsunacComponent
} from './panel-pracownika/panel-zarzadzania-zakladem/panele/pracownicy-pracownika/okienka/czy-naprawde-usunac/czy-naprawde-usunac.component';
import {
  PlatnosciPracownikaModule
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/platnosci-pracownika/platnosciPracownika.module";
import {
  UslugaSmsPracownikaModule
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/usluga-sms-pracownika/usluga-sms-pracownika.module";

@NgModule({
  declarations: [
    AppComponent,
    PanelZarzadzaniaZaklademComponent,
    PanelKlientaComponent,
    PanelLogowaniaPracownikowComponent,
    ResetHaslaPracownikowComponent,
    PanelPracownikaComponent,
    PanelOblugiKlientaComponent,
    PanelLogowaniaKlientaComponent,
    PanelRejestracjiKlientaComponent,
    ResetHaslaKlientaComponent,
    PoczatkowyPanelPracownikaComponent,
    BannerPracownikaComponent,
    StopkaPracownikaComponent,
    MenuPracownikComponent,
    StronaStartowaPracownikaComponent,
    MojeKontoPracownikaComponent,
    ZarejestrowaneWizytyPracownikaComponent,
    PracownicyPracownikaComponent,
    KalendarzTerminowComponent,
    CennikiPracownikaComponent,
    StronaReprezentacyjnaPracownikaComponent,
    RaportyPracownikaComponent,

    MojZakladPracownikaComponent,
    RejestracjaZakladuComponent,
    PoczatkowyPanelKlientaComponent,
    BannerKlientaComponent,
    StopkaKlientaComponent,
    BannerPracownikComponent,
    StopkaPracownikComponent,
    MaxDlugoscPipe,
    DodawanieIModyfikacjaPracownikaComponent,
    HarmonogramPracownikaComponent,
    ListaKlientowPracownikComponent,

    PracownicyMojZakladComponent,
    CzyNaprawdeUsunacComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CookieModule.withOptions(),
    FontAwesomeModule,
    TippyDirective,
    UiSwitchModule.forRoot({
      size: "small",
      color: "rgb(16 67 207)",
      switchColor: "#8faaf5",
      defaultBgColor: "rgb(229 236 255)",
      defaultBoColor: "rgb(75 67 223)",
      checkedTextColor: "rgb(255,255,255)",
      uncheckedTextColor: "rgb(0,0,0)"
    }),
    NgbModule,
    PlatnosciPracownikaModule,
    UslugaSmsPracownikaModule
  ],
  providers: [


    provideTippyConfig({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      },
    })


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
