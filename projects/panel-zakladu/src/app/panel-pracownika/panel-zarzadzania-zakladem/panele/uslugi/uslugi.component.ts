import { Component, OnInit } from '@angular/core';
import { Usluga } from '../../../../klasy/panelPracownika/usluga/usluga';
import { FontAwesomeService } from '../../../../serwisy/font-awesome.service';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { UslugiService } from './uslugi.service';

@Component({
  selector: 'app-uslugi',
  templateUrl: './uslugi.component.html',
  styleUrls: ['./uslugi.component.scss'],
})
export class UslugiPracownikaComponent implements OnInit {
  model = '';

  constructor(
    public fontAwesome: FontAwesomeService,
    public komunikat: KomunikatyService,
    public service_: UslugiService
  ) {}

  ngOnInit() {
    this.service_.pobieranieDanych();
  }

  public dodajWiersz() {
    const usluga = new Usluga();
    this.service_.pracownicy.forEach(k => {
      usluga.workers.push(k.id);
    });
    this.service_.listaUslug.push(usluga);
  }
}
