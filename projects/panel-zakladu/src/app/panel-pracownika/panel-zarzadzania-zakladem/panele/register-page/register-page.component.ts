import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import {
  StronaReprezentacyjnaUstawieniaComponent
} from "./strona-reprezentacyjna-ustawienia/strona-reprezentacyjna-ustawienia.component";
import { RegisterPageMenuComponent } from "./register-page-menu/register-page-menu.component";

@Component({
  selector: "app-register-page",
  standalone: true,
  imports: [CommonModule, RouterOutlet, StronaReprezentacyjnaUstawieniaComponent, RegisterPageMenuComponent],
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"]
})
export class RegisterPageComponent {


}
