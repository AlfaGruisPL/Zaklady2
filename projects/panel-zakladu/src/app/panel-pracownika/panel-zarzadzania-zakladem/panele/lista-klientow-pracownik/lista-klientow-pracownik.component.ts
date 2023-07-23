import {Component, OnInit} from '@angular/core';
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {Klient} from "../../../../klasy/listaKlientow/klient";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {InformacjeOKliencieComponent} from "./informacje-okliencie/informacje-okliencie.component";

@Component({
  selector: 'app-lista-klientow-pracownik',
  templateUrl: './lista-klientow-pracownik.component.html',
  styleUrls: ['./lista-klientow-pracownik.component.scss']
})
export class ListaKlientowPracownikComponent implements OnInit {
  public listaKlientow: Array<Klient> = []
  public page = 0
  public pageSize = 5;

  constructor(private listonosz: ListonoszService, private modal: NgbModal) {
  }

  ngOnInit() {
    this.listonosz.pobierz(Drzwi.listaKlientow).then((lista: Array<Klient>) => {
      lista.forEach(klient => {
        this.listaKlientow.push(new Klient(klient))
      })
    })
  }

  wyswietlInformacje(klient: Klient) {
    const okno = this.modal.open(InformacjeOKliencieComponent, {size: 'xl'})//, backdrop: "static"
    okno.componentInstance.klient = klient
  }
}
