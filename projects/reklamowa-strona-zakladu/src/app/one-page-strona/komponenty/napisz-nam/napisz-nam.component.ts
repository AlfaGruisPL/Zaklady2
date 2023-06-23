import {Component} from '@angular/core';
import {NapiszNam, NapiszNamDto} from "./klasa/napisz-nam";
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Drzwi} from "../../../enum/drzwi";

@Component({
  selector: 'app-napisz-nam',
  templateUrl: './napisz-nam.component.html',
  styleUrls: ['./napisz-nam.component.scss']
})
export class NapiszNamComponent {
  public napiszNamObj = new NapiszNam();
  public wiadomoscWyslana: boolean = false;
  public wiadomoscNieWyslana: boolean = false;

  constructor(public listonosz: ListonoszService) {
  }

  public wyslij() {
    this.napiszNamObj.czyWszystkoUzupelnioneFunkcja();
    this.wiadomoscNieWyslana = false;
    this.wiadomoscWyslana = false;
    const napiszNamDTO = new NapiszNamDto(this.napiszNamObj);
    this.listonosz.wyslij(Drzwi.napiszNam, napiszNamDTO).then(udane => {
      this.napiszNamObj = new NapiszNam();
      this.wiadomoscWyslana = true;
    }).catch(nieudane => {
      this.wiadomoscNieWyslana = true;
    })

  }

  public reset() {
    this.wiadomoscNieWyslana = false;
    this.wiadomoscWyslana = false;
    this.napiszNamObj = new NapiszNam();
  }

}
