import {NgModule} from '@angular/core';
// @ts-ignore
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OnePageStronaComponent} from './one-page-strona/one-page-strona.component';
import {
    WyswietlanePracownicyComponent
} from './one-page-strona/komponenty/wyswietlane-pracownicy/wyswietlane-pracownicy.component';
import {
    InformacjaOJednymPracownikuComponent
} from './one-page-strona/komponenty/informacja-ojednym-pracowniku/informacja-ojednym-pracowniku.component';
import {BannerComponent} from './one-page-strona/komponenty/banner/banner.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ZdjecieZakladuComponent} from './one-page-strona/komponenty/zdjecie-zakladu/zdjecie-zakladu.component';
import {InformacjaONasComponent} from './one-page-strona/komponenty/informacja-onas/informacja-onas.component';
import {NapiszNamComponent} from './one-page-strona/komponenty/napisz-nam/napisz-nam.component';
import {ZarejestrujSieComponent} from './one-page-strona/komponenty/zarejestruj-sie/zarejestruj-sie.component';
import {StrzalkaComponent} from './one-page-strona/strzalka/strzalka.component';
import {OgloszeniaComponent} from './one-page-strona/komponenty/ogloszenia/ogloszenia.component';
import {StatystykiComponent} from './one-page-strona/komponenty/statystyki/statystyki.component';
import {
    FormularzZarejestrujSieComponent
} from './one-page-strona/komponenty/formularz-zarejestruj-sie/formularz-zarejestruj-sie.component';
import {
    WyborPracownikaComponent
} from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wybor-pracownika/wybor-pracownika.component';
import {
    WyborUslugComponent
} from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wybor-uslug/wybor-uslug.component';
import {
    KalendarzComponent
} from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/kalendarz.component';
import {
    WpisanieDanychComponent
} from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wpisanie-danych/wpisanie-danych.component';
import {
    PodsumowanieComponent
} from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/podsumowanie/podsumowanie.component';
import {
    ONasDanePodstawoweComponent
} from './one-page-strona/komponenty/informacja-onas/komponenty/onas-dane-podstawowe/onas-dane-podstawowe.component';
import {
    ONasAdresComponent
} from './one-page-strona/komponenty/informacja-onas/komponenty/onas-adres/onas-adres.component';
import {
    ONasGodzinyOtwarciaComponent
} from './one-page-strona/komponenty/informacja-onas/komponenty/onas-godziny-otwarcia/onas-godziny-otwarcia.component';
import {
    ONasKontaktComponent
} from './one-page-strona/komponenty/informacja-onas/komponenty/onas-kontakt/onas-kontakt.component';
import {
    ONasUslugiComponent
} from './one-page-strona/komponenty/informacja-onas/komponenty/onas-uslugi/onas-uslugi.component';
import {
    InformacjeOJednymPracownikuKontaktComponent
} from './one-page-strona/komponenty/informacja-ojednym-pracowniku/komponenty/informacje-ojednym-pracowniku-kontakt/informacje-ojednym-pracowniku-kontakt.component';
import {
    InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent
} from './one-page-strona/komponenty/informacja-ojednym-pracowniku/komponenty/informacje-ojednym-pracowniku-zdjecie-imie-nazwisko/informacje-ojednym-pracowniku-zdjecie-imie-nazwisko.component';

import {
    WeryfikacjaComponent
} from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/weryfikacja/weryfikacja.component';
import {ZegarComponent} from './one-page-strona/komponenty/zarejestruj-sie/zegar/zegar.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {
    TerminComponent
} from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/termin/termin.component';
import {ZdjeciePipe} from './rurki/zdjecie.pipe';
import {PageNotFoundComponent} from './strony/page-not-found/page-not-found.component';
import {NgxIfPlatformModule} from "ngx-if-platform";
import {StopkaComponent} from "./one-page-strona/komponenty/stopka/stopka.component";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {OdwolanieWizytyModule} from "./one-page-strona/komponenty/odwolanie-wizyty/odwolanie-wizyty.module";
import {StronaWylaczonaComponent} from "./strony/strona-wylaczona/strona-wylaczona.component";
import {SerwerNieDostepnyComponent} from "./strony/serwer-nie-dostepny/serwer-nie-dostepny.component";
import {StronaLadowaniaComponent} from "./strony/strona-ladowania/strona-ladowania.component";
import {IdentyfikatorPipe} from "./rurki/identyfikator.pipe";
import {SafePipe} from "./rurki/safe.pipe";

@NgModule({
    declarations: [
        AppComponent,
        OnePageStronaComponent,
        WyswietlanePracownicyComponent,
        InformacjaOJednymPracownikuComponent,
        StopkaComponent,
        BannerComponent,
        ZdjecieZakladuComponent,
        InformacjaONasComponent,
        NapiszNamComponent,
        ZarejestrujSieComponent,
        StatystykiComponent,
        StrzalkaComponent,
        OgloszeniaComponent,
        FormularzZarejestrujSieComponent,
        WyborPracownikaComponent,
        WyborUslugComponent,
        KalendarzComponent,
        WpisanieDanychComponent,
        PodsumowanieComponent,
        ONasDanePodstawoweComponent,
        ONasAdresComponent,
        ONasGodzinyOtwarciaComponent,
        ONasKontaktComponent,
        ONasUslugiComponent,
        InformacjeOJednymPracownikuKontaktComponent,
        InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent,
        WeryfikacjaComponent,
        ZegarComponent,
        TerminComponent,
        ZdjeciePipe, IdentyfikatorPipe, SafePipe,
        PageNotFoundComponent,
        StopkaComponent,
        StronaWylaczonaComponent,
        SerwerNieDostepnyComponent,
        StronaLadowaniaComponent


    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        HttpClientModule,
        FormsModule, NgxIfPlatformModule,
        BrowserAnimationsModule,
        CarouselModule,
        NgSelectModule,
        NgbPaginationModule,
        NgbModule,
        FontAwesomeModule,
        LeafletModule,
        OdwolanieWizytyModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
