import { Component, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";
import { FontAwesomeService } from "../../../../serwisy/font-awesome.service";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { TokenService } from "../../../../serwisy/token.service";
import { PodreczneDaneService } from "../../../../serwisy/podreczne-dane.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { faFile } from "@fortawesome/free-solid-svg-icons";

@Component({
  standalone: true,
  selector: "app-menu-pracownik",
  templateUrl: "./menu-pracownik.component.html",
  styleUrls: ["./menu-pracownik.component.scss"],
  imports: [RouterLink, FontAwesomeModule, RouterLinkActive, CommonModule]
})
export class MenuPracownikComponent {
  @Output() outside = new EventEmitter();
  /*
      public menu(k: any) {
        return true
      }*/
  protected readonly faFile = faFile;

  constructor(
    public ikonki: FontAwesomeService,
    private router: Router,
    public token_: TokenService,
    public podreczne_: PodreczneDaneService,
    private eRef: ElementRef
  ) {
  }

  @HostListener("document:click", ["$event"])
  clickout(event: { target: any }) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      const ifBurger = event.target.classList.contains("hamburgerMenuLine");
      this.outside.emit(ifBurger);
    }
  }
}
