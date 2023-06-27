import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UslugaSmsPracownikaComponent} from "./usluga-sms-pracownika.component";
import {UslugaSMSNaglowekComponent} from './usluga-sms-naglowek/usluga-sms-naglowek.component';
import {
  UslugaSmsStatystykiComponent
} from './usluga-sms-naglowek/usluga-sms-statystyki/usluga-sms-statystyki.component';
import {UslugaSmsHistoriaComponent} from './usluga-sms-historia/usluga-sms-historia.component';
import {
  UslugaSmsInformacjeComponent
} from './usluga-sms-naglowek/usluga-sms-informacje/usluga-sms-informacje.component';
import {UslugaSmsUstawieniaComponent} from './usluga-sms-ustawienia/usluga-sms-ustawienia.component';
import {UiSwitchModule} from "ngx-ui-switch";
import {UslugaSmsService} from "./uslugaSms.service";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    UslugaSmsPracownikaComponent,
    UslugaSMSNaglowekComponent,
    UslugaSmsStatystykiComponent,
    UslugaSmsHistoriaComponent,
    UslugaSmsInformacjeComponent,
    UslugaSmsUstawieniaComponent],
  imports: [
    CommonModule,
    UiSwitchModule,
    NgbPagination
  ],
  providers: [
    UslugaSmsService
  ]
})
export class UslugaSmsPracownikaModule {
}
