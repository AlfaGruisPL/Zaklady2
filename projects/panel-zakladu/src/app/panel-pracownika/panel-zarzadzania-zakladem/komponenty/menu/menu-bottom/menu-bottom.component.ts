import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PodreczneDaneService } from "../../../../../serwisy/podreczne-dane.service";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-menu-bottom",
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: "./menu-bottom.component.html",
  styleUrls: ["./menu-bottom.component.scss"]
})
export class MenuBottomComponent implements OnInit, OnDestroy {
  time = new Date();
  timeInterval: any;
  protected readonly faLink = faLink;

  constructor(
    public DanePodreczne: PodreczneDaneService) {
  }

  ngOnInit() {
    this.timeInterval = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timeInterval);
  }
}
