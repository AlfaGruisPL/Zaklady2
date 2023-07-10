import {Component} from '@angular/core';
import {DanePodstawoweService} from '../../../../../serwisy/dane-podstawowe.service';
import {FaIconsService} from "../../../../../serwisy/fa-icons.service";

@Component({
  selector: 'app-onas-dane-podstawowe',
  templateUrl: './onas-dane-podstawowe.component.html',
  styleUrls: [
    './onas-dane-podstawowe.component.scss',
    '../../informacja-onas.component.scss',
  ],
})
export class ONasDanePodstawoweComponent {
  constructor(public DanePodstawowe_: DanePodstawoweService,
              public faIcons: FaIconsService) {
  }
}
