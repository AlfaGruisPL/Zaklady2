import { Component, OnInit } from "@angular/core";
import { ListonoszService } from "../../../serwisy/listonosz.service";
import { Drzwi } from "../../../enum/drzwi";
import { Pracownik } from "../../../klasy/pracownik";
import { environment } from "../../../../environments/environment";
import { AnimationService } from "../../../serwisy/animation.service";

// @ts-ignore
@Component({
  selector: 'app-wyswietlane-pracownicy',
  templateUrl: './wyswietlane-pracownicy.component.html',
  styleUrls: ['./wyswietlane-pracownicy.component.scss'],
})
export class WyswietlanePracownicyComponent implements OnInit {
  public listaPracownikow: Array<Pracownik> = [];
  public czyPracownikKlikniety = false;
  public daneKliknietegoPracownika: Pracownik = new Pracownik();
  protected readonly environment = environment;
  private slider: any;

  constructor(public listonosz: ListonoszService, public animation_: AnimationService) {}

  generowanieKaruzeli() {
    // @ts-ignore
    this.slider = new Glider(document.querySelector('.glider'), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next',
      },
    });
  }

  ngOnInit() {
    this.pobierzPracownikow();
  }

  public pobierzPracownikow() {
    this.listonosz
      .pobierz(Drzwi.listaPracownikow)
      .then((pobrane: Array<Pracownik>) => {
        pobrane.forEach(pracownik => {
          const pracownikObj = new Pracownik();
          Object.assign(pracownikObj, pracownik);
          this.listaPracownikow.push(pracownikObj);
        });
        if (this.listaPracownikow.length > 4) {
          setTimeout(() => {
            this.generowanieKaruzeli();
          });
        }
      })
      .catch(niepobrane => {});
  }
}
