import {Component} from '@angular/core';
import {DanePodstawoweService} from '../../../../../serwisy/dane-podstawowe.service';
import {FaIconsService} from "../../../../../serwisy/fa-icons.service";

@Component({
  selector: 'app-onas-godziny-otwarcia',
  templateUrl: './onas-godziny-otwarcia.component.html',
  styleUrls: [
    './onas-godziny-otwarcia.component.scss',
    '../../informacja-onas.component.scss',
  ],
})
export class ONasGodzinyOtwarciaComponent {
  constructor(public DanePodstawowe_: DanePodstawoweService,
              public faIcons: FaIconsService) {
  }
}
