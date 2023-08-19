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
import { MojZakladPracownikaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/moj-zaklad-pracownika/moj-zaklad-pracownika.component';
import { popperVariation, provideTippyConfig, TippyDirective, tooltipVariation } from '@ngneat/helipopper';
import { RejestracjaZakladuComponent } from './panel-pracownika/poczatkowy-panel-pracownika/rejestracja-zakladu/rejestracja-zakladu.component';
import { BannerPracownikComponent } from './panel-pracownika/panel-zarzadzania-zakladem/komponenty/banner/banner-pracownik.component';
import { StopkaPracownikComponent } from './panel-pracownika/panel-zarzadzania-zakladem/komponenty/stopka/stopka-pracownik.component';
import { CookieModule } from 'ngx-cookie';
import { NgbDropdown, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { PracownicyMojZakladComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/moj-zaklad-pracownika/pracownicy-moj-zaklad/pracownicy-moj-zaklad.component';
import { UslugaSmsPracownikaModule } from './panel-pracownika/panel-zarzadzania-zakladem/panele/usluga-sms-pracownika/usluga-sms-pracownika.module';
import { UslugiPracownikaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/uslugi/uslugi.component';
import { UslugiPrzypisaniPracownicyComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/uslugi/uslugi-przypisani-pracownicy/uslugi-przypisani-pracownicy.component';
import { RejestracjaUdanaComponent } from './panel-pracownika/poczatkowy-panel-pracownika/rejestracja-zakladu/rejestracja-udana/rejestracja-udana.component';
import { InformacjeOKliencieComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/lista-klientow-pracownik/informacje-okliencie/informacje-okliencie.component';
import { PracownicyModule } from './panel-pracownika/panel-zarzadzania-zakladem/panele/pracownicy-pracownika/pracownicy.module';
import { RureczkiModule } from './rureczki/rureczki.module';
import { StronaReprezentacyjnaModule } from './panel-pracownika/panel-zarzadzania-zakladem/panele/strona-reprezentacyjna-pracownika/strona-reprezentacyjna.module';
import { ListaKlientowModule } from './panel-pracownika/panel-zarzadzania-zakladem/panele/lista-klientow-pracownik/lista-klientow.module';
import { SharedModule } from './shared.module';
import { KalendarzKomponentModule } from './panel-pracownika/panel-zarzadzania-zakladem/kalendarz-komponent/kalendarz-komponent.module';
import { StrzalkaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/komponenty/strzalka/strzalka.component';
import { BrowserModule } from '@angular/platform-browser';

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
    MojZakladPracownikaComponent,
    RejestracjaZakladuComponent,
    BannerPracownikComponent,
    StopkaPracownikComponent,

    PracownicyMojZakladComponent,
    UslugiPracownikaComponent,
    UslugiPrzypisaniPracownicyComponent,
    RejestracjaUdanaComponent,
    InformacjeOKliencieComponent,
    StrzalkaComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    KalendarzKomponentModule,
    ListaKlientowModule,
    HttpClientModule,
    RureczkiModule,
    StronaReprezentacyjnaModule,
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
  exports: [BrowserAnimationsModule],
})
export class AppModule {}
