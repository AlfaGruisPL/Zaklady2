import { NgModule } from "@angular/core";
import {
  KalendarzModyfikacjaTerminuComponent
} from "./kalendarz-modyfikacja-terminu/kalendarz-modyfikacja-terminu.component";
import {
  KalendarzGodzinaKreskaKomponentComponent
} from "./kalendarz-godzina-kreska-komponent/kalendarz-godzina-kreska-komponent.component";
import {
  KalendarzZarzadzanieTerminemComponent
} from "./kalendarz-zarzadzanie-terminem/kalendarz-zarzadzanie-terminem.component";
import { KalendarzPanelSterowaniaComponent } from "./kalendarz-panel-sterowania/kalendarz-panel-sterowania.component";
import { KalendarzPrzerwaComponent } from "./kalendarz-przerwa/kalendarz-przerwa.component";
import { KalendarzPrzerwaKomponentComponent } from "./kalendarz-przerwa-komponent/kalendarz-przerwa-komponent.component";
import { Termin_komponentComponent } from "./termin_komponent/termin_komponent.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle, NgbPopover } from "@ng-bootstrap/ng-bootstrap";
import { KalendarzKomponentComponent } from "./kalendarz-komponent.component";
import {
  KalendarzPrzerwaPrzerwaComponent
} from "./kalendarz-przerwa/kalendarz-przerwa-przerwa/kalendarz-przerwa-przerwa.component";
import {
  KalendarzPrzerwaDzienWolnyComponent
} from "./kalendarz-przerwa/kalendarz-przerwa-dzien-wolny/kalendarz-przerwa-dzien-wolny.component";
import { CommonModule } from "@angular/common";
import { SelectDotyczyComponent } from "../../../komponets/select-dotyczy/select-dotyczy.component";

@NgModule({
  declarations: [
    KalendarzModyfikacjaTerminuComponent,
    KalendarzGodzinaKreskaKomponentComponent,
    KalendarzZarzadzanieTerminemComponent,
    KalendarzPanelSterowaniaComponent,
    KalendarzPrzerwaComponent,
    KalendarzPrzerwaKomponentComponent,
    Termin_komponentComponent,
    KalendarzKomponentComponent,
    KalendarzPrzerwaPrzerwaComponent,
    KalendarzPrzerwaDzienWolnyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserAnimationsModule,
    NgbDropdownToggle,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbPopover,
    SelectDotyczyComponent
  ],
  exports: [KalendarzKomponentComponent]
})
export class KalendarzKomponentModule {
}
