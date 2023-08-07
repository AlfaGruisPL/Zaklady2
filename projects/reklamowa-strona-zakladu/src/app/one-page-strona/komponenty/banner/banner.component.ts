import {Component} from '@angular/core';
import {NawigacjaService} from "../../../serwisy/nawigacja.service";
import {environment} from "../../../../environments/environment";
import {DanePodstawoweService} from "../../../serwisy/dane-podstawowe.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  env = environment

  constructor(public nawigacja: NawigacjaService, public danePodstawowe: DanePodstawoweService) {
  }


}
