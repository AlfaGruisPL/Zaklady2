import { Component, OnInit } from '@angular/core';
import { NawigacjaService } from '../../../serwisy/nawigacja.service';
import { environment } from '../../../../environments/environment';
import { DanePodstawoweService } from '../../../serwisy/dane-podstawowe.service';
import { AnimationService } from '../../../serwisy/animation.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  env = environment;

  constructor(
    public nawigacja: NawigacjaService,
    public animation_: AnimationService,
    public danePodstawowe: DanePodstawoweService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      const banner = <HTMLDivElement>document.querySelector('.bannerShadowTmp');
      if (banner) {
        banner.classList.add('bannerShadow');
      }
    }, 0);
  }
}
