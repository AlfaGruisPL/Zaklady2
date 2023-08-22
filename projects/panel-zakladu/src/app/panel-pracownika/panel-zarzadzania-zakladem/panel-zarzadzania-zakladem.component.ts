import { Component, OnDestroy, OnInit } from "@angular/core";
import { FontAwesomeService } from "../../serwisy/font-awesome.service";
import { Router } from "@angular/router";
import { PodreczneDaneService } from "../../serwisy/podreczne-dane.service";
import { he } from "suneditor/src/lang";

@Component({
  selector: "app-panel-zarzadzania-zakladem",
  templateUrl: "./panel-zarzadzania-zakladem.component.html",
  styleUrls: ["./panel-zarzadzania-zakladem.component.scss"]
})
export class PanelZarzadzaniaZaklademComponent implements OnInit, OnDestroy {
  godzina = new Date();
  private godzinaInterval: any;

  constructor(
    public fontAwesome: FontAwesomeService,
    public DanePodreczne: PodreczneDaneService,
    private Router: Router
  ) {
  }

  ngOnInit() {

    this.godzinaInterval = setInterval(() => {
      this.godzina = new Date();
      const element = document.getElementById("trescPaneluAdministratoraID");
      if (element) {
        this.height = element.scrollTop;
      }
    }, 180);
    this.DanePodreczne.pobierajaca();
    this.DanePodreczne.ustawZmienneTypuUzytkownika();

  }


  public height = 0;

  ngOnDestroy() {
    clearInterval(this.godzinaInterval);
  }

  protected readonly he = he;
}
