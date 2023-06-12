import {Component, OnDestroy, OnInit} from '@angular/core';
import {Platnosc} from "../../../../../../klasy/panelPracownika/platnosci/platnosc";
import {ListonoszService} from "../../../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../../../enum/drzwi";

@Component({
  selector: 'app-platnosci-pracownika-tabela',
  templateUrl: './platnosci-pracownika-tabela.component.html',
  styleUrls: ['./platnosci-pracownika-tabela.component.scss']
})
export class PlatnosciPracownikaTabelaComponent implements OnInit, OnDestroy {
  public listaPlatnosci: Array<Platnosc> = []

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
    this.listonosz.pobierz(Drzwi.listaPlatnosci).then(k => {
      Object.assign(this.listaPlatnosci, k)
    })
  }

  otworzPlatnosc(k: string) {
    window.open(k, "_blank");
  }

  zamknijWszystkie() {
    this.listaPlatnosci.forEach(k => {
      k.czyRozwiniete = false
    })

  }

  ngOnDestroy(): void {
    clearInterval(this.autoPobieranieDanych)
  }
}
