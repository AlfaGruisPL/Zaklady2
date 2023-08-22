import { Component, NgZone, OnInit } from "@angular/core";
import { TokenService } from "./serwisy/token.service";
import { environment } from "./../environments/environment";
import packageInfo from "../../../../package.json";
import { PodreczneDaneService } from "./serwisy/podreczne-dane.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  environment = environment;
  wersja: string = packageInfo.version;
  data_wydania: string = packageInfo.data_wydania;

  constructor(
    private tokenService: TokenService,
    private podreczne: PodreczneDaneService,
    private ngZone: NgZone
  ) {
  }

  ngOnInit() {
    this.podreczne.identyfikacjaZakladu();
    this.tokenService.odczytajCookies();
    setInterval(() => {
      this.ticsForSecond = this.ticks;
      this.ticks = 0;
    }, 1000);
  }

  private ticks = 0;
  public ticsForSecond = 0;

  ngAfterViewChecked() {
    //console.trace();
  }


  count() {
    this.ticks++;

  }


  title = "PanelZakladu";
}
