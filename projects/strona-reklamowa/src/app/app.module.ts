import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ListonoszService} from "./serwisy/listonosz.service";
import {ListyService} from "./serwisy/listy.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {CommonModule} from "@angular/common";
import {
  ReklamowaStronaNaszegoSystemuComponent
} from './reklamowa-strona-naszego-systemu/reklamowa-strona-naszego-systemu.component';

@NgModule({
  declarations: [
    AppComponent,
    ReklamowaStronaNaszegoSystemuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ListonoszService, ListyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
