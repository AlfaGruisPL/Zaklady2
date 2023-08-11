import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelZarzadzaniaZaklademComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panel-zarzadzania-zakladem.component';
import { PanelLogowaniaPracownikowComponent } from './panel-pracownika/poczatkowy-panel-pracownika/panel-logowania-pracownikow/panel-logowania-pracownikow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetHaslaPracownikowComponent } from './panel-pracownika/poczatkowy-panel-pracownika/reset-hasla-pracownikow/reset-hasla-pracownikow.component';
import { HttpClientModule } from '@angular/common/http';

import { PanelPracownikaComponent } from './panel-pracownika/panel-pracownika.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PoczatkowyPanelPracownikaComponent } from './panel-pracownika/poczatkowy-panel-pracownika/poczatkowy-panel-pracownika.component';
import { BannerPracownikaComponent } from './panel-pracownika/poczatkowy-panel-pracownika/banner-pracownika/banner-pracownika.component';
import { StopkaPracownikaComponent } from './panel-pracownika/poczatkowy-panel-pracownika/stopka-pracownika/stopka-pracownika.component';
import { MenuPracownikComponent } from './panel-pracownika/panel-zarzadzania-zakladem/komponenty/menu/menu-pracownik.component';
import { StronaStartowaPracownikaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/strona-startowa-pracownika/strona-startowa-pracownika.component';
import { MojeKontoPracownikaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/moje-konto-pracownika/moje-konto-pracownika.component';
import { ZarejestrowaneWizytyPracownikaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/zarejestrowane-wizyty-pracownika/zarejestrowane-wizyty-pracownika.component';
import { KalendarzTerminowComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/kalendarz-terminow/kalendarz-terminow.component';
import { MojZakladPracownikaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/moj-zaklad-pracownika/moj-zaklad-pracownika.component';
import {
  popperVariation,
  provideTippyConfig,
  TippyDirective,
  tooltipVariation,
} from '@ngneat/helipopper';
import { RejestracjaZakladuComponent } from './panel-pracownika/poczatkowy-panel-pracownika/rejestracja-zakladu/rejestracja-zakladu.component';
import { BannerPracownikComponent } from './panel-pracownika/panel-zarzadzania-zakladem/komponenty/banner/banner-pracownik.component';
import { StopkaPracownikComponent } from './panel-pracownika/panel-zarzadzania-zakladem/komponenty/stopka/stopka-pracownik.component';
import { CookieModule } from 'ngx-cookie';
import {
  NgbDropdown,
  NgbDropdownModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { PracownicyMojZakladComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/moj-zaklad-pracownika/pracownicy-moj-zaklad/pracownicy-moj-zaklad.component';
import { UslugaSmsPracownikaModule } from './panel-pracownika/panel-zarzadzania-zakladem/panele/usluga-sms-pracownika/usluga-sms-pracownika.module';
import { UslugiPracownikaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/uslugi/uslugi.component';
import { UslugiPrzypisaniPracownicyComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/uslugi/uslugi-przypisani-pracownicy/uslugi-przypisani-pracownicy.component';
import { RejestracjaUdanaComponent } from './panel-pracownika/poczatkowy-panel-pracownika/rejestracja-zakladu/rejestracja-udana/rejestracja-udana.component';
import { KalendarzKomponentComponent } from './panel-pracownika/panel-zarzadzania-zakladem/kalendarz-komponent/kalendarz-komponent.component';
import { Termin_komponentComponent } from './panel-pracownika/panel-zarzadzania-zakladem/kalendarz-komponent/termin_komponent/termin_komponent.component';
import { KalendarzGodzinaKreskaKomponentComponent } from './panel-pracownika/panel-zarzadzania-zakladem/kalendarz-komponent/kalendarz-godzina-kreska-komponent/kalendarz-godzina-kreska-komponent.component';
import { KalendarzZarzadzanieTerminemComponent } from './panel-pracownika/panel-zarzadzania-zakladem/kalendarz-komponent/kalendarz-zarzadzanie-terminem/kalendarz-zarzadzanie-terminem.component';
import { KalendarzPrzerwaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/kalendarz-komponent/kalendarz-przerwa/kalendarz-przerwa.component';
import { InformacjeOKliencieComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/lista-klientow-pracownik/informacje-okliencie/informacje-okliencie.component';
import { KalendarzPrzerwaKomponentComponent } from './panel-pracownika/panel-zarzadzania-zakladem/kalendarz-komponent/kalendarz-przerwa-komponent/kalendarz-przerwa-komponent.component';
import { PracownicyModule } from './panel-pracownika/panel-zarzadzania-zakladem/panele/pracownicy-pracownika/pracownicy.module';
import { RureczkiModule } from './rureczki/rureczki.module';
import { StronaReprezentacyjnaModule } from './panel-pracownika/panel-zarzadzania-zakladem/panele/strona-reprezentacyjna-pracownika/strona-reprezentacyjna.module';
import { KalendarzModyfikacjaTerminuComponent } from './panel-pracownika/panel-zarzadzania-zakladem/kalendarz-komponent/kalendarz-modyfikacja-terminu/kalendarz-modyfikacja-terminu.component';
import { ListaKlientowModule } from './panel-pracownika/panel-zarzadzania-zakladem/panele/lista-klientow-pracownik/lista-klientow.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PanelZarzadzaniaZaklademComponent,
    PanelLogowaniaPracownikowComponent,
    ResetHaslaPracownikowComponent,
    PanelPracownikaComponent,
    PoczatkowyPanelPracownikaComponent,
    BannerPracownikaComponent,
    StopkaPracownikaComponent,
    MenuPracownikComponent,
    StronaStartowaPracownikaComponent,
    MojeKontoPracownikaComponent,
    ZarejestrowaneWizytyPracownikaComponent,
    KalendarzTerminowComponent,
    MojZakladPracownikaComponent,
    RejestracjaZakladuComponent,
    BannerPracownikComponent,
    StopkaPracownikComponent,

    PracownicyMojZakladComponent,
    KalendarzPrzerwaKomponentComponent,
    UslugiPracownikaComponent,
    UslugiPrzypisaniPracownicyComponent,
    RejestracjaUdanaComponent,
    KalendarzKomponentComponent,
    Termin_komponentComponent,
    KalendarzGodzinaKreskaKomponentComponent,
    KalendarzZarzadzanieTerminemComponent,
    KalendarzPrzerwaComponent,
    InformacjeOKliencieComponent,
    KalendarzModyfikacjaTerminuComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ListaKlientowModule,
    HttpClientModule,
    RureczkiModule,
    StronaReprezentacyjnaModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ closeButton: true }),
    CookieModule.withOptions(),
    FontAwesomeModule,
    NgbDropdownModule,
    TippyDirective,
    PracownicyModule,
    UiSwitchModule.forRoot({
      size: 'small',
      color: 'rgb(16 67 207)',
      switchColor: '#8faaf5',
      defaultBgColor: 'rgb(229 236 255)',
      defaultBoColor: 'rgb(75 67 223)',
      checkedTextColor: 'rgb(255,255,255)',
      uncheckedTextColor: 'rgb(0,0,0)',
    }),
    NgbModule,
    UslugaSmsPracownikaModule,
    ReactiveFormsModule,
  ],
  providers: [
    NgbDropdown,
    provideTippyConfig({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
