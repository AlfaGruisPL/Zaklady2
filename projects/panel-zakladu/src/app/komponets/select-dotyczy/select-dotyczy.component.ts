import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PodreczneDaneService } from "../../serwisy/podreczne-dane.service";
import { filter, take } from "rxjs";
import { DanePodreczneClass } from "../../klasy/panelPracownika/dane-podreczne";

@Component({
  selector: "app-select-dotyczy",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: "./select-dotyczy.component.html",
  styleUrls: ["./select-dotyczy.component.scss"]
})
export class SelectDotyczyComponent implements OnInit {
  @Input()
  dotyczy = 0;

  @Output()
  dotyczyChange = new EventEmitter();
  @Input()
  wyswietlanieOpcjiZakladu = false;

  constructor(public danePodreczne: PodreczneDaneService) {

  }

  ngOnInit(): void {
    this.danePodreczne.danePodreczneObserveble.pipe(filter(k => k !== undefined), take(1)).subscribe(value => {
      if ((value as DanePodreczneClass).zalogowanyUzytkownik?.id != undefined) {      // @ts-ignore
        this.dotyczy = (value as DanePodreczneClass).zalogowanyUzytkownik.id;
        this.dotyczyChange.emit(this.dotyczy);
      } else {
        console.warn("selectDotyczy- przy pobieraniu danych podstawowych, brakuje danych o zalgowanym uzytkowniku");
      }
    });
  }


}
