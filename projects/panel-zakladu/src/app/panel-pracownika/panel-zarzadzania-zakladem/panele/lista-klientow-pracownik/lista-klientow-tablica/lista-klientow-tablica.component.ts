import { Component } from '@angular/core';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListaKlientowService } from '../lista-klientow.service';
import { Klient } from '../../../../../klasy/listaKlientow/klient';
import { Router } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';
import { TemplateIdDirective } from '../../../../../komponets/table/template-id.directive';
import { TableComponent } from '../../../../../komponets/table/table.component';

@Component({
  selector: 'app-lista-klientow-tablica',
  standalone: true,
  templateUrl: './lista-klientow-tablica.component.html',
  styleUrls: ['./lista-klientow-tablica.component.scss'],
  imports: [
    NgIf,
    NgbDropdownMenu,
    NgbDropdown,
    NgbDropdownItem,
    TemplateIdDirective,
    TableComponent,
    DatePipe,
    NgbDropdownToggle,
  ],
})
export class ListaKlientowTablicaComponent {
  protected readonly Number = Number;
  protected readonly Math = Math;

  constructor(
    private router_: Router,
    private modal: NgbModal,
    public lista_: ListaKlientowService
  ) {}

  wyswietlInformacje(klient: Klient) {
    this.router_.navigate([`panelPracownika/customers/${klient.id}/${this.lista_.filter}`]);

    //const okno = this.modal.open(InformacjeOKliencieComponent, {size: 'xl'}); //, backdrop: "static"
    //okno.componentInstance.klient = klient;
  }

  test() {
    console.log(2);
  }
}
