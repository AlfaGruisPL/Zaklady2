import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  StronaReprezentacyjnaUstawieniaComponent
} from "./strona-reprezentacyjna-ustawienia/strona-reprezentacyjna-ustawienia.component";
import {StronaReprezentacyjnaPracownikaComponent} from "./strona-reprezentacyjna-pracownika.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UiSwitchModule} from "ngx-ui-switch";


@NgModule({
  declarations: [StronaReprezentacyjnaUstawieniaComponent, StronaReprezentacyjnaPracownikaComponent],
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    UiSwitchModule
  ]
})
export class StronaReprezentacyjnaModule {
}
