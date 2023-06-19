import {Component, OnInit} from '@angular/core';
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Drzwi} from "../../../enum/drzwi";
import {Pracownik} from "../../../klasy/pracownik";

// @ts-ignore
@Component({
  selector: 'app-wyswietlane-pracownicy',
  templateUrl: './wyswietlane-pracownicy.component.html',
  styleUrls: ['./wyswietlane-pracownicy.component.scss'],
})
export class WyswietlanePracownicyComponent implements OnInit {


  public listaPracownikow: Array<Pracownik> = [];

  constructor(public listonosz: ListonoszService) {
  }


  ngOnInit() {
    setTimeout(() => {

      // @ts-ignore
      new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
    }, 10)
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
