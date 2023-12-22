import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faLink, faList } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-menu-top",
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: "./menu-top.component.html",
  styleUrls: ["./menu-top.component.scss"]
})
export class MenuTopComponent {

  protected readonly faList = faList;
  protected readonly faLink = faLink;
}
