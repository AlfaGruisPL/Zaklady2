import {Component, OnInit} from '@angular/core';
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Drzwi} from "../../../enum/drzwi";
import {Pracownik} from "../../../klasy/pracownik";
import {OwlOptions} from "ngx-owl-carousel-o";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-wyswietlane-pracownicy',
  templateUrl: './wyswietlane-pracownicy.component.html',
  styleUrls: ['./wyswietlane-pracownicy.component.scss'],
  animations: [
    trigger('activeSlide', [
      state('active', style({
        transform: 'scale(1)',
        opacity: 1,
      })),
      state('inActive', style({
        transform: 'scale(0.6)',
        opacity: 0.6,
      })),
      transition('active => inActive', [
        animate('0.5s')
      ]),
      transition('inActive => active', [
        animate('0.5s')
      ])
    ])
  ]
})
export class WyswietlanePracownicyComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,

    navText: ['<<', '>>'],
    center: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3

      },
      940: {
        items: 5
      }
    },
    nav: true
  }
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
