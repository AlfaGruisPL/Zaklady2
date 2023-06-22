import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OnePageStronaComponent} from './one-page-strona/one-page-strona.component';
import {
  WyswietlanePracownicyComponent
} from './one-page-strona/komponenty/wyswietlane-pracownicy/wyswietlane-pracownicy.component';
import {
  InformacjaOJednymPracownikuComponent
} from './one-page-strona/komponenty/informacja-ojednym-pracowniku/informacja-ojednym-pracowniku.component';
import {StopkaComponent} from './one-page-strona/komponenty/stopka/stopka.component';
import {BannerComponent} from './one-page-strona/komponenty/banner/banner.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";
import {ZdjecieZakladuComponent} from './one-page-strona/komponenty/zdjecie-zakladu/zdjecie-zakladu.component';
import {InformacjaONasComponent} from './one-page-strona/komponenty/informacja-onas/informacja-onas.component';
import {NapiszNamComponent} from './one-page-strona/komponenty/napisz-nam/napisz-nam.component';
import {ZarejestrujSieComponent} from './one-page-strona/komponenty/zarejestruj-sie/zarejestruj-sie.component';
import {StrzalkaComponent} from './one-page-strona/strzalka/strzalka.component';
import {OgloszeniaComponent} from './one-page-strona/komponenty/ogloszenia/ogloszenia.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {StatystykiComponent} from './one-page-strona/komponenty/statystyki/statystyki.component';
import {
  FormularzZarejestrujSieComponent
} from './one-page-strona/komponenty/formularz-zarejestruj-sie/formularz-zarejestruj-sie.component';
import { WyborPracownikaComponent } from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wybor-pracownika/wybor-pracownika.component';
import { WyborUslugComponent } from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wybor-uslug/wybor-uslug.component';
import { KalendarzComponent } from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/kalendarz.component';
import { WpisanieDanychComponent } from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wpisanie-danych/wpisanie-danych.component';
import { PodsumowanieComponent } from './one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/podsumowanie/podsumowanie.component';
import { ONasDanePodstawoweComponent } from './one-page-strona/komponenty/informacja-onas/komponenty/onas-dane-podstawowe/onas-dane-podstawowe.component';
import { ONasAdresComponent } from './one-page-strona/komponenty/informacja-onas/komponenty/onas-adres/onas-adres.component';
import { ONasGodzinyOtwarciaComponent } from './one-page-strona/komponenty/informacja-onas/komponenty/onas-godziny-otwarcia/onas-godziny-otwarcia.component';
import { ONasKontaktComponent } from './one-page-strona/komponenty/informacja-onas/komponenty/onas-kontakt/onas-kontakt.component';
import { ONasUslugiComponent } from './one-page-strona/komponenty/informacja-onas/komponenty/onas-uslugi/onas-uslugi.component';
import { InformacjeOJednymPracownikuAdresComponent } from './one-page-strona/komponenty/informacja-ojednym-pracowniku/komponenty/informacje-ojednym-pracowniku-adres/informacje-ojednym-pracowniku-adres.component';
import { InformacjeOJednymPracownikuKontaktComponent } from './one-page-strona/komponenty/informacja-ojednym-pracowniku/komponenty/informacje-ojednym-pracowniku-kontakt/informacje-ojednym-pracowniku-kontakt.component';
import { InformacjeOJednymPracownikuOpisComponent } from './one-page-strona/komponenty/informacja-ojednym-pracowniku/komponenty/informacje-ojednym-pracowniku-opis/informacje-ojednym-pracowniku-opis.component';
import { InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent } from './one-page-strona/komponenty/informacja-ojednym-pracowniku/komponenty/informacje-ojednym-pracowniku-zdjecie-imie-nazwisko/informacje-ojednym-pracowniku-zdjecie-imie-nazwisko.component';
import { InformacjeOJednymPracownikuPytanieComponent } from './one-page-strona/komponenty/informacja-ojednym-pracowniku/komponenty/informacje-ojednym-pracowniku-pytanie/informacje-ojednym-pracowniku-pytanie.component';

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
    ZarejestrujSieComponent, StatystykiComponent,
    StrzalkaComponent,
    OgloszeniaComponent, FormularzZarejestrujSieComponent, WyborPracownikaComponent, WyborUslugComponent, KalendarzComponent, WpisanieDanychComponent, PodsumowanieComponent, ONasDanePodstawoweComponent, ONasAdresComponent, ONasGodzinyOtwarciaComponent, ONasKontaktComponent, ONasUslugiComponent, InformacjeOJednymPracownikuAdresComponent, InformacjeOJednymPracownikuKontaktComponent, InformacjeOJednymPracownikuOpisComponent, InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent, InformacjeOJednymPracownikuPytanieComponent,
  ],
  imports: [LeafletModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
