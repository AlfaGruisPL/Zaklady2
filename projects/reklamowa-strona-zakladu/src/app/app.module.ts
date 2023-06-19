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

@NgModule({
  declarations: [
    AppComponent,
    OnePageStronaComponent,
    WyswietlanePracownicyComponent,
    InformacjaOJednymPracownikuComponent,
    StopkaComponent,
    BannerComponent,
  ],
  imports: [
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
