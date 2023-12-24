import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "[app-second-template-menu]",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./second-template-menu.component.html",
  styleUrls: ["./second-template-menu.component.scss"]
})
export class SecondTemplateMenuComponent {

}
