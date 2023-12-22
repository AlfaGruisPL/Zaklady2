import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  StronaReprezentacyjnaUstawieniaComponent
} from "./strona-reprezentacyjna-ustawienia/strona-reprezentacyjna-ustawienia.component";
import { StronaReprezentacyjnaPracownikaComponent } from "./strona-reprezentacyjna-pracownika.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiSwitchModule } from "ngx-ui-switch";
import { NgxSuneditorModule } from "ngx-suneditor";
import plugins from "suneditor/src/plugins";
import { RouterOutlet } from "@angular/router"; // Import all offical available plugins

@NgModule({
  declarations: [StronaReprezentacyjnaUstawieniaComponent, StronaReprezentacyjnaPracownikaComponent],
  imports: [
    NgxSuneditorModule.forRoot({
      plugins: plugins, // pass the imported plugins
      minWidth: "100%"
    }),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UiSwitchModule,
    RouterOutlet
  ]
})
export class StronaReprezentacyjnaModule {
}
