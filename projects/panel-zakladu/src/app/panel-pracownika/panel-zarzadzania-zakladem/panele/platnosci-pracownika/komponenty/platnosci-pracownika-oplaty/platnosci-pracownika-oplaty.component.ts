import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListonoszService} from "../../../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../../../enum/drzwi";
import {
  ListaOplatDoPaneluPlatnosci
} from "../../../../../../klasy/panelPracownika/platnosci/lista-oplat-do-panelu-platnosci";

@Component({
  selector: 'app-platnosci-pracownika-oplaty',
  templateUrl: './platnosci-pracownika-oplaty.component.html',
  styleUrls: ['./platnosci-pracownika-oplaty.component.scss']
})
export class PlatnosciPracownikaOplatyComponent implements OnInit, OnDestroy {
  public page = 1;
  public pageSize = 5;

  pageCount(): number {
    return Math.ceil(this.listaPlatnosci.length / this.pageSize)
  }

  array(number: number) {
    const k2 = [];
    for (let k = 0; k < number; k++) {
      k2.push("")
    }
    return k2
  }

  public listaPlatnosci: Array<ListaOplatDoPaneluPlatnosci> = []

  constructor(private listonosz: ListonoszService) {
  }

  autoPobieranieDanych: any;

  ngOnInit() {
    this.pobieranieDanych();
    this.autoPobieranieDanych = setInterval(() => {
      this.pobieranieDanych();
    }, 7000)
  }


  pobieranieDanych() {
    this.listonosz.pobierz(Drzwi.listaOplat).then((k: Array<any>) => {
      Object.assign(this.listaPlatnosci, k)
    })
  }


  ngOnDestroy(): void {
    clearInterval(this.autoPobieranieDanych)
  }
}
