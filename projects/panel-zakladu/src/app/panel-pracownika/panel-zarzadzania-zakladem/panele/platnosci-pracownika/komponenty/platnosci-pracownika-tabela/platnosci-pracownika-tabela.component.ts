import {Component, OnInit} from '@angular/core';
import {Platnosc} from "../../../../../../klasy/panelPracownika/platnosci/platnosc";
import {ListonoszService} from "../../../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../../../enum/drzwi";

@Component({
  selector: 'app-platnosci-pracownika-tabela',
  templateUrl: './platnosci-pracownika-tabela.component.html',
  styleUrls: ['./platnosci-pracownika-tabela.component.scss']
})
export class PlatnosciPracownikaTabelaComponent implements OnInit {
  public listaPlatnosci: Array<Platnosc> = []

  constructor(private listonosz: ListonoszService) {
  }

  ngOnInit() {
    this.listonosz.pobierz(Drzwi.listaPlatnosci).then(k => {
      Object.assign(this.listaPlatnosci, k)
      console.log(this.listaPlatnosci)
    })
  }

  zamknijWszystkie() {
    this.listaPlatnosci.forEach(k => {
      k.czyRozwiniete = false
    })

  }
}
