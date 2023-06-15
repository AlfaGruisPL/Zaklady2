import { Component, Input } from '@angular/core';
import { ListonoszService } from '../../../../../../serwisy/listonosz.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OknoPlatnosciComponent } from '../okna/okno-platnosci/okno-platnosci.component';
import { InformacjeDoPaneluPlatnosci } from '../../../../../../klasy/panelPracownika/platnosci/informacje-do-panelu-platnosci';

@Component({
  selector: 'app-platnosci-pracownika-naglowek',
  templateUrl: './platnosci-pracownika-naglowek.component.html',
  styleUrls: ['./platnosci-pracownika-naglowek.component.scss'],
})
export class PlatnosciPracownikaNaglowekComponent {
  @Input() dane: InformacjeDoPaneluPlatnosci | undefined;

  constructor(
    private modalService: NgbModal,
    private listonosz: ListonoszService
  ) {}

  nowaPlatnosc() {
    const okienko = this.modalService.open(OknoPlatnosciComponent, {
      backdrop: 'static',
      size: 'lg',
    });
  }
}
