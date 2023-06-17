import {Component, OnInit} from '@angular/core';
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Drzwi} from "../../../enum/drzwi";
import {Pracownik} from "../../../klasy/pracownik";

@Component({
  selector: 'app-wyswietlane-pracownicy',
  templateUrl: './wyswietlane-pracownicy.component.html',
  styleUrls: ['./wyswietlane-pracownicy.component.scss']
})
export class WyswietlanePracownicyComponent implements OnInit {

  public listaPracownikow: Array<Pracownik> = [];

  constructor(public listonosz: ListonoszService) {
  }

  ngOnInit() {
    this.pobierzPracownikow();
  }

  public pobierzPracownikow() {
    this.listonosz.pobierz(Drzwi.listaPracownikow).then((pobrane: Array<Pracownik>) => {
      pobrane.forEach(pracownik => {
        const pracownikObj = new Pracownik();
        Object.assign(pracownikObj, pracownik);
        this.listaPracownikow.push(pracownikObj);
      })
    }).catch(niepobrane => {

    })
  }


}
