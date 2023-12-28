import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DanePodstawoweService } from '../../../serwisy/dane-podstawowe.service';

@Component({
  selector: 'app-zdjecie-zakladu',
  templateUrl: './zdjecie-zakladu.component.html',
  styleUrls: ['./zdjecie-zakladu.component.scss'],
})
export class ZdjecieZakladuComponent {
  env = environment;

  constructor(public danePodstawowe_: DanePodstawoweService) {}
}
