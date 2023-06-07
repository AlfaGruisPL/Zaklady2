import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaszPanelZarzadzaniaZakladamiComponent } from './nasz-panel-zarzadzania-zakladami/nasz-panel-zarzadzania-zakladami.component';

@NgModule({
  declarations: [
    AppComponent,
    NaszPanelZarzadzaniaZakladamiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
