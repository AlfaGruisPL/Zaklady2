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
  @Input() employees: Array<Pracownik> = [];

  constructor(public activeModal: NgbActiveModal) {}

  czyZaznaczony(pracownik: any) {
    return (
      this.usluga.workers.find(k => {
        return k == pracownik.id;
      }) != undefined
    );
  }

  ustaw(event: any, pracownik: Pracownik) {
    console.log(event);
    if (event.target.checked) {
      this.usluga.workers.push(pracownik.id);
    } else {
      this.usluga.workers = this.usluga.workers.filter(k => {
        return k != pracownik.id;
      });
    }
  }
}
