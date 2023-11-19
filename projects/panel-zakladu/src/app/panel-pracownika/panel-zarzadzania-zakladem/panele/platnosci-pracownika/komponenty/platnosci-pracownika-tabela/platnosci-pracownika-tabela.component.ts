import { Component, OnDestroy, OnInit } from '@angular/core';
import { Platnosc } from '../../../../../../klasy/panelPracownika/platnosci/platnosc';
import { ListonoszService } from '../../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../../enum/drzwi';

@Component({
  selector: 'app-platnosci-pracownika-tabela',
  templateUrl: './platnosci-pracownika-tabela.component.html',
  styleUrls: ['./platnosci-pracownika-tabela.component.scss'],
})
export class PlatnosciPracownikaTabelaComponent implements OnInit, OnDestroy {
  public listaPlatnosci: Array<Platnosc> = [];
  public page = 0;
  public pageSize = 5;
  autoPobieranieDanych: any;

  constructor(private listonosz: ListonoszService) {}

  isMobile() {
    return document.body.offsetWidth < 1200 ? 17 : 45;
  }

  ngOnInit() {
    this.pobieranieDanych();
    this.autoPobieranieDanych = setInterval(() => {
      this.pobieranieDanych();
    }, 7000);
  }

  liczba(k: any) {
    return Number(k);
  }

  pobieranieDanych() {
    const rozwiniete = this.listaPlatnosci.find(k => {
      return k.czyRozwiniete == true;
    });
    this.listonosz.pobierz(Drzwi.listaPlatnosci).then((k: Array<Platnosc>) => {
      Object.assign(this.listaPlatnosci, k);
      if (rozwiniete != undefined) {
        this.listaPlatnosci.find(k2 => {
          if (k2.id == rozwiniete.id) {
            k2.czyRozwiniete = true;
          }
        });
      }
    });
  }

  otworzPlatnosc(k: string) {
    window.open(k, '_blank');
  }

  zamknijWszystkie() {
    this.listaPlatnosci.forEach(k => {
      k.czyRozwiniete = false;
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.autoPobieranieDanych);
  }

  pageCount(): number {
    return Math.ceil(this.listaPlatnosci.length / this.pageSize);
  }
}
