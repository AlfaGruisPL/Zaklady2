import { Component, Input } from '@angular/core';
import { NapiszNam, NapiszNamDto } from './klasa/napisz-nam';
import { ListonoszService } from '../../../serwisy/listonosz.service';
import { Drzwi } from '../../../enum/drzwi';
import { Pracownik } from '../../../klasy/pracownik';
import { NapiszNamService } from './napisz-nam.service';

@Component({
  selector: 'app-napisz-nam',
  templateUrl: './napisz-nam.component.html',
  styleUrls: ['./napisz-nam.component.scss'],
})
export class NapiszNamComponent {
  @Input() listaPracownikow: Pracownik[] = [];

  public wiadomoscWyslana: boolean = false;
  public wiadomoscNieWyslana: boolean = false;

  constructor(
    public listonosz: ListonoszService,
    public napiszNam: NapiszNamService
  ) {}

  public wyslij() {
    this.napiszNam.napiszNamObj.czyWszystkoUzupelnioneFunkcja();
    this.wiadomoscNieWyslana = false;
    this.wiadomoscWyslana = false;
    const napiszNamDTO = new NapiszNamDto(this.napiszNam.napiszNamObj);
    this.listonosz
      .wyslij(Drzwi.napiszNam, napiszNamDTO)
      .then((udane) => {
        this.napiszNam.napiszNamObj = new NapiszNam();
        this.wiadomoscWyslana = true;
      })
      .catch((nieudane) => {
        this.wiadomoscNieWyslana = true;
      });
  }

  public reset() {
    this.wiadomoscNieWyslana = false;
    this.wiadomoscWyslana = false;
    this.napiszNam.napiszNamObj = new NapiszNam();
  }
}
