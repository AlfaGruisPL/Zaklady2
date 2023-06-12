import {Component} from '@angular/core';
import {ListonoszService} from "../../../../../../serwisy/listonosz.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OknoPlatnosciComponent} from "../okna/okno-platnosci/okno-platnosci.component";

@Component({
  selector: 'app-platnosci-pracownika-naglowek',
  templateUrl: './platnosci-pracownika-naglowek.component.html',
  styleUrls: ['./platnosci-pracownika-naglowek.component.scss']
})
export class PlatnosciPracownikaNaglowekComponent {
  constructor(private modalService: NgbModal, private listonosz: ListonoszService) {
  }

  nowaPlatnosc() {

    const okienko = this.modalService.open(OknoPlatnosciComponent, {
      backdrop: "static",
      size: 'lg'
    });
  }
}