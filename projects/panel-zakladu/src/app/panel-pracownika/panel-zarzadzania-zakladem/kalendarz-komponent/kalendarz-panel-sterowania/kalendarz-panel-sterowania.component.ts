import { Component } from "@angular/core";
import { ListonoszService } from "../../../../serwisy/listonosz.service";
import { KalendarzKomponentService } from "../kalendarz-komponent.service";
import { PodreczneDaneService } from "../../../../serwisy/podreczne-dane.service";

@Component({
  selector: "app-kalendarz-panel-sterowania",
  templateUrl: "./kalendarz-panel-sterowania.component.html",
  styleUrls: ["./kalendarz-panel-sterowania.component.scss"]
})
export class KalendarzPanelSterowaniaComponent {
  protected readonly PodreczneDaneService = PodreczneDaneService;

  constructor(private listonosz: ListonoszService, public Kalendarz_: KalendarzKomponentService, public danePodreczne: PodreczneDaneService) {
  }

  public WPrawo() {
    this.Kalendarz_.licznikPrzyciskow++;
    this.Kalendarz_.kursor = new Date(this.Kalendarz_.kursor.getTime() + 7 * 24 * 60 * 60 * 1000);

    this.Kalendarz_.dni.forEach(k => {
      k.data = new Date(this.Kalendarz_.kursor);
      k.ustawDate();
    });
    this.Kalendarz_.pobierzDane();
  }

  public teraz() {
    this.Kalendarz_.licznikPrzyciskow = 0;
    this.Kalendarz_.kursor = new Date();
    this.Kalendarz_.dni.forEach(k => {
      k.data = new Date(this.Kalendarz_.kursor);
      k.ustawDate();
    });
    this.Kalendarz_.pobierzDane();
  }

  public WLEWO() {
    this.Kalendarz_.licznikPrzyciskow--;
    this.Kalendarz_.kursor = new Date(this.Kalendarz_.kursor.getTime() - 7 * 24 * 60 * 60 * 1000);
    this.Kalendarz_.dni.forEach(k => {
      k.data = new Date(this.Kalendarz_.kursor);
      k.ustawDate();
    });
    this.Kalendarz_.pobierzDane();
  }

  public miesiac() {
    return this.Kalendarz_.kursor.getMonth() + 1;
  }

  public tydzien() {
    return Math.ceil(this.Kalendarz_.kursor.getDate() / 7);
  }
}
