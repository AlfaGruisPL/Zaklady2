import { Component, OnDestroy, OnInit } from '@angular/core';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';

@Component({
  selector: 'app-banner-pracownik',
  templateUrl: './banner-pracownik.component.html',
  styleUrls: ['./banner-pracownik.component.scss'],
})
export class BannerPracownikComponent implements OnInit, OnDestroy {
  constructor(public podreczne_: PodreczneDaneService) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {}
}
