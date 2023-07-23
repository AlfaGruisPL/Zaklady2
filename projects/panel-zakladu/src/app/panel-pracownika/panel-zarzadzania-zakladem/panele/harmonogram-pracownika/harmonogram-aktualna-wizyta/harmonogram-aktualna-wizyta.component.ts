import {Component, OnDestroy, OnInit} from '@angular/core';
import {Wizyta} from "../../../../../klasy/panelPracownika/wizyta";
import {HarmonogramService} from "../harmonogram.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-harmonogram-aktualna-wizyta',
  templateUrl: './harmonogram-aktualna-wizyta.component.html',
  styleUrls: ['./harmonogram-aktualna-wizyta.component.scss']
})
export class HarmonogramAktualnaWizytaComponent implements OnInit, OnDestroy {
  public aktualnaWizyta: Wizyta | undefined;
  private sub1: Subscription | undefined;

  constructor(private harmonogram_: HarmonogramService) {
  }

  ngOnInit() {
    this.sub1 = this.harmonogram_.wizytaDzisObserveble.subscribe(wizyty => {
      const aktualnyCzas = new Date().getTime();
      this.aktualnaWizyta = wizyty.find(wizyta => {
        return wizyta.terminPoczatek.getTime() <= aktualnyCzas && wizyta.terminKoniec.getTime() >= aktualnyCzas;
      })

    })

  }

  czasDoKoncaWizyty(): string {
    const czas = new Date()
    if (this.aktualnaWizyta == undefined) {
      return ""
    }
    var wynik = Math.round((this.aktualnaWizyta.terminKoniec.getTime() - czas.getTime()) / 60000)
    return wynik + 'min'
  }

  ngOnDestroy() {
    this.sub1?.unsubscribe()
  }
}
