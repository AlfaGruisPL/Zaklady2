import { Component } from "@angular/core";
import { KalendarzKomponentModule } from "../../kalendarz-komponent/kalendarz-komponent.module";
import { TabelaPrzerwComponent } from "./tabela-przerw/tabela-przerw.component";

@Component({
  selector: "app-kalendarz-terminow",
  templateUrl: "./kalendarz-terminow.component.html",
  styleUrls: ["./kalendarz-terminow.component.scss"],
  imports: [KalendarzKomponentModule, TabelaPrzerwComponent],
  standalone: true
})
export class KalendarzTerminowComponent {

}
