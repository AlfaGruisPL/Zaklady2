import { Component } from '@angular/core';
import { NawigacjaService } from '../../../serwisy/nawigacja.service';
import { DanePodstawoweService } from '../../../serwisy/dane-podstawowe.service';
import { AnimationService } from '../../../serwisy/animation.service';

@Component({
  selector: 'app-informacja-onas',
  templateUrl: './informacja-onas.component.html',
  styleUrls: ['./informacja-onas.component.scss'],
})
export class InformacjaONasComponent {
  constructor(
    public nawigacja: NawigacjaService,
    public danePodstawowe: DanePodstawoweService,
    public animation_: AnimationService
  ) {}
}
