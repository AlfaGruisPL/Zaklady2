import { Component, Input, OnInit } from '@angular/core';
import { NapiszNam, NapiszNamDto } from './klasa/napisz-nam';
import { ListonoszService } from '../../../serwisy/listonosz.service';
import { Drzwi } from '../../../enum/drzwi';
import { Pracownik } from '../../../klasy/pracownik';
import { NapiszNamService } from './napisz-nam.service';
import { FaIconsService } from '../../../serwisy/fa-icons.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-napisz-nam',
  templateUrl: './napisz-nam.component.html',
  styleUrls: ['./napisz-nam.component.scss'],
})
export class NapiszNamComponent implements OnInit {
  @Input() listaPracownikow: Pracownik[] = [];

  public wiadomoscWyslana: boolean = false;
  public wiadomoscNieWyslana: boolean = false;
  public aktywnyPrzycisk: boolean = false;
  public emailPrawidlowy: boolean = true;
  captcha: null | string = null;
  protected readonly env = environment;

  constructor(
    public listonosz: ListonoszService,
    public napiszNam: NapiszNamService,
    public faIcons: FaIconsService
  ) {}

  ngOnInit() {}

  public wyslij() {
    this.emailPrawidlowy = true;
    this.napiszNam.napiszNamObj.czyWszystkoUzupelnioneFunkcja();
    this.wiadomoscNieWyslana = false;
    this.wiadomoscWyslana = false;
    const napiszNamDTO = new NapiszNamDto(this.napiszNam.napiszNamObj);
    this.aktywnyPrzycisk = true;
    this.listonosz
      .wyslij(Drzwi.napiszNam, napiszNamDTO)
      .then(udane => {
        this.napiszNam.napiszNamObj = new NapiszNam();
        this.wiadomoscWyslana = true;
      })
      .catch(nieudane => {
        if (nieudane['error']['reasonCode'] == 1 && this.napiszNam.napiszNamObj.czyWszystkoUzupelnione == true) {
          this.emailPrawidlowy = false;
        } else {
          this.wiadomoscNieWyslana = true;
        }
      })
      .finally(() => {
        this.aktywnyPrzycisk = false;
      });
  }

  public czyEmailPrawidlowy_() {}

  resolved(value: string | null) {
    this.captcha = value;
  }

  public reset() {
    this.wiadomoscNieWyslana = false;
    this.wiadomoscWyslana = false;
    this.napiszNam.napiszNamObj = new NapiszNam();
  }
}
