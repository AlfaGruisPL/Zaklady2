import {Component} from '@angular/core';
import {NawigacjaService} from "../../../../../serwisy/nawigacja.service";

@Component({
  selector: 'app-onas-adres',
  templateUrl: './onas-adres.component.html',
  styleUrls: ['./onas-adres.component.scss', '../../informacja-onas.component.scss']
})
export class ONasAdresComponent {
  constructor(public nawigacja: NawigacjaService) {
  }
}
