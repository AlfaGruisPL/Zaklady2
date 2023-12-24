import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import packageInfo from "../../../../../../../../../package.json";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBacon, faPerson, faSms, faTags } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faIdBadge, faImage } from "@fortawesome/free-regular-svg-icons";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TokenService } from "../../../../../serwisy/token.service";

@Component({
  selector: "app-footer-menu-panel",
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLinkActive, RouterLink],
  templateUrl: "./footer-menu-panel.component.html",
  styleUrls: ["./footer-menu-panel.component.scss"]
})
export class FooterMenuPanelComponent {
  @Input() open: boolean = false;
  @Output() close = new EventEmitter();
  version = packageInfo.version;
  relase_date = packageInfo.relase_date;
  public menuArray = [
    { title: "Moje konto", icon: faPerson, router: "mojeKonto", admin: false },
    { title: "Uslugi", icon: faTags, router: "uslugi", admin: true },
    { title: "Pracownicy", icon: faIdBadge, router: "zarzadzaniePracownikami", admin: true },
    { title: "Usługa SMS", icon: faSms, router: "sms", admin: true },
    { title: "Strona rejestracji", icon: faImage, router: "registerPage", admin: true },
    { title: "Mój zakład", icon: faBuilding, router: "mojZaklad", admin: true }
  ];
  protected readonly faBacon = faBacon;

  constructor(public token_: TokenService) {
  }

  returnMenuArray() {
    if (this.token_.czyWlasciciel()) {
      return this.menuArray;
    }
    return this.menuArray.filter(k => !k.admin);
  }
}
