import { Component, OnInit } from '@angular/core';
import { ListonoszService } from '../../../serwisy/listonosz.service';
import { Drzwi } from '../../../enum/drzwi';
import { Pracownik } from '../../../klasy/pracownik';
import { environment } from '../../../../environments/environment';
import { AnimationService } from '../../../serwisy/animation.service';
import { DanePodstawoweService } from '../../../serwisy/dane-podstawowe.service';

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
  env = environment;
  slideConfig = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  protected readonly environment = environment;
  private slider: any;

  constructor(
    public listonosz: ListonoszService,
    public danePodstawowe_: DanePodstawoweService,
    public animation_: AnimationService
  ) {}

  generowanieKaruzeli() {}

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
