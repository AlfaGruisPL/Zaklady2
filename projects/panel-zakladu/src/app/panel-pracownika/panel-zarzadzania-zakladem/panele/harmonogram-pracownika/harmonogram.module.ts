import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HarmonogramDniaComponent} from "./harmonogram-dnia/harmonogram-dnia.component";
import {
  HarmonogramDniaTerminComponent
} from "./harmonogram-dnia/harmonogram-dnia-termin/harmonogram-dnia-termin.component";
import {HarmonogramAktualnaWizytaComponent} from "./harmonogram-aktualna-wizyta/harmonogram-aktualna-wizyta.component";
import {HarmonogramNastepnaWizytaComponent} from "./harmonogram-nastepna-wizyta/harmonogram-nastepna-wizyta.component";
import {HarmonogramPracownikaComponent} from "./harmonogram-pracownika.component";
import {FormsModule} from "@angular/forms";
import {
  HarmonogramDniaAktualnaGodzinaComponent
} from './harmonogram-dnia/harmonogram-dnia-aktualna-godzina/harmonogram-dnia-aktualna-godzina.component';
import {TippyDirective} from "@ngneat/helipopper";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HarmonogramPodsumowanieAdministratoraComponent } from './harmonogram-podsumowanie-administratora/harmonogram-podsumowanie-administratora.component';


@NgModule({
  declarations: [
    HarmonogramDniaComponent,
    HarmonogramDniaTerminComponent,
    HarmonogramAktualnaWizytaComponent, HarmonogramPracownikaComponent,
    HarmonogramNastepnaWizytaComponent,
    HarmonogramDniaAktualnaGodzinaComponent,
    HarmonogramPodsumowanieAdministratoraComponent],
  imports: [
    FormsModule,
    CommonModule, TippyDirective, NgbModule,

  ]
})
export class HarmonogramModule {
}
