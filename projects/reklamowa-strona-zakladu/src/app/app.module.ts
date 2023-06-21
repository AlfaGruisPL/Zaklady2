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
import {MapaComponent} from './one-page-strona/komponenty/mapa/mapa.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";


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
    StrzalkaComponent,
    OgloszeniaComponent,
    MapaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, BrowserAnimationsModule,
    CarouselModule, LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
