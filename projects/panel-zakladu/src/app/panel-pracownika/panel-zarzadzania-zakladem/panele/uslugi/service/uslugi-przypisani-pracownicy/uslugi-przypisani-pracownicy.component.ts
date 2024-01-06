import { Component, Input } from '@angular/core';
import { Usluga } from '../../../../../../klasy/panelPracownika/usluga/usluga';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pracownik } from '../../../../../../klasy/panelPracownika/pracownicy/pracownik';

@Component({
  selector: 'app-uslugi-przypisani-pracownicy',
  templateUrl: './uslugi-przypisani-pracownicy.component.html',
  styleUrls: ['./uslugi-przypisani-pracownicy.component.scss'],
})
export class UslugiPrzypisaniPracownicyComponent {
  @Input() usluga: Usluga = new Usluga();
  @Input() pracownicy: Array<Pracownik> = [];

  constructor(public activeModal: NgbActiveModal) {}

  czyZaznaczony(pracownik: any) {
    return (
      this.usluga.pracownicy.find(k => {
        return k == pracownik.id;
      }) != undefined
    );
  }

  ustaw(event: any, pracownik: Pracownik) {
    console.log(event);
    if (event.target.checked) {
      this.usluga.pracownicy.push(pracownik.id);
    } else {
      this.usluga.pracownicy = this.usluga.pracownicy.filter(k => {
        return k != pracownik.id;
      });
    }
  }
}
