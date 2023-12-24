import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { PodreczneDaneService } from "../../../../serwisy/podreczne-dane.service";
import { skip, take } from "rxjs";
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
  randomIframeNumber = 123;
  linkDoPodlgadu = "";
  bezpiecznyLink: SafeResourceUrl = "";

  constructor(private sanitizer: DomSanitizer, private danePodreczne_: PodreczneDaneService) {
  }

  ngOnInit() {
    if (this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu != "") {
      this.pobierz();
    }
    this.danePodreczne_.danePodreczneObserveble.pipe(skip(1), take(1)).subscribe(dane => {
      this.pobierz();
    });
  }

  pobierz() {
    this.linkDoPodlgadu =
      "https://" +
      this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu +
      ".mojzaklad.pl/?dummyVar=" +
      this.randomIframeNumber;
    this.bezpiecznyLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu);
  }

  OdswiezPodglad() {
    this.randomIframeNumber = Math.round(Math.random() * 1000000);
    this.bezpiecznyLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu);
  }

}
