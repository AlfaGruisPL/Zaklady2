import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: " [app-first-template-menu]",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./first-template-menu.component.html",
  styleUrls: ["./first-template-menu.component.scss"]
})
export class FirstTemplateMenuComponent {

}
