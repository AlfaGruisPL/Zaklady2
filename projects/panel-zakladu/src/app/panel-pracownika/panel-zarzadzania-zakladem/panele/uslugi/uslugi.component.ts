import { Component, HostListener, OnInit } from '@angular/core';
import { Usluga } from '../../../../klasy/panelPracownika/usluga/usluga';
import { FontAwesomeService } from '../../../../serwisy/font-awesome.service';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UslugiPrzypisaniPracownicyComponent } from './uslugi-przypisani-pracownicy/uslugi-przypisani-pracownicy.component';
import { Pracownik } from '../../../../klasy/panelPracownika/pracownicy/pracownik';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';

@Component({
  selector: 'app-uslugi',
  templateUrl: './uslugi.component.html',
  styleUrls: ['./uslugi.component.scss'],
})
export class UslugiPracownikaComponent implements OnInit {
  public listaUslug: Array<Usluga> = [new Usluga()];
  public pracownicy: Array<Pracownik> = [];

  constructor(
    public fontAwesome: FontAwesomeService,
    private listonosz: ListonoszService,
    private modal: NgbModal,
    public komunikat: KomunikatyService
  ) {}

  ngOnInit() {
    this.pobieranieDanych();
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    console.log('test');
  }

  public dodajWiersz() {
    const usluga = new Usluga();
    this.pracownicy.forEach(k => {
      usluga.pracownicy.push(k.id);
    });

    this.listaUslug.push(usluga);
  }

  public modyfikacjaPracownikow(usluga: Usluga) {
    const okno = this.modal.open(UslugiPrzypisaniPracownicyComponent, {
      size: 'lg',
    });
    okno.componentInstance.usluga = usluga;
    okno.componentInstance.pracownicy = this.pracownicy;
  }

  public zapisz() {
    //usunięcie pustych usług
    this.listaUslug = this.listaUslug.filter(usluga => {
      return usluga.nazwa.length > 0;
    });
    this.listonosz
      .wyslij(Drzwi.uslugiPanel, this.listaUslug)
      .then(k => {
        this.komunikat.modyfikacjaUdana();
      })
      .catch(k => {
        this.komunikat.modyfikacjaNieUdana();
      })
      .finally(() => {
        this.pobieranieDanych();
      });
  }

  public usunWiersz(index: number) {
    let k = 0;
    this.listaUslug = this.listaUslug.filter(usluga => {
      if (k == index) {
        k++;
        return false;
      }
      k++;
      return true;
    });
  }

  private pobieranieDanych() {
    this.listonosz.pobierz(Drzwi.uslugiPanel).then(dane => {
      this.listaUslug = [];
      Object.assign(this.listaUslug, dane['uslugi']);
      this.pracownicy = [];
      Object.assign(this.pracownicy, dane['pracownicy']);
    });
  }
}
