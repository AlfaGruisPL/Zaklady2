import {Component} from '@angular/core';
import {NawigacjaService} from "../../../serwisy/nawigacja.service";

@Component({
  selector: 'app-informacja-onas',
  templateUrl: './informacja-onas.component.html',
  styleUrls: ['./informacja-onas.component.scss']
})
export class InformacjaONasComponent {
  constructor(public nawigacja: NawigacjaService) {
  }
}
