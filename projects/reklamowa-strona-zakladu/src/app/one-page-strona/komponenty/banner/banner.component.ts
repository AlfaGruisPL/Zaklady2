import {Component} from '@angular/core';
import {NawigacjaService} from "../../../serwisy/nawigacja.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  constructor(public nawigacja: NawigacjaService) {
  }


}
