import { Injectable, OnDestroy } from '@angular/core';
import { Pracownik } from '../../../../../../klasy/panelPracownika/pracownicy/pracownik';
import { Drzwi } from '../../../../../../enum/drzwi';
import { BledyNumery } from '../../../../../../enum/bledy-numery';
import { ListonoszService } from '../../../../../../serwisy/listonosz.service';
import { KomunikatyService } from '../../../../../../serwisy/komunikaty.service';
import { CzyNaprawdeUsunacComponent } from '../../okienka/czy-naprawde-usunac/czy-naprawde-usunac.component';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KomunikatUniwersalnyService } from '../../../../../../komponets/komunikat-uniwersalny/komunikat-uniwersalny.service';
import { PodreczneDaneService } from '../../../../../../serwisy/podreczne-dane.service';
import { Info } from '../../../../../../enum/info';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WorkersTableService implements OnDestroy {
  public ListaPracownikow: Array<Pracownik> = [];
  public limitPracownikow = 0;
  public filter = 'dostepni';
  private sub1?: Subscription;
  private sub2?: Subscription;

  constructor(
    private http_: ListonoszService,
    private UniwersalnyKomunikat_: KomunikatUniwersalnyService,
    private modalService: NgbModal,
    private komunikaty: KomunikatyService,
    private podreczneDane: PodreczneDaneService,
    private router: Router
  ) {}

  public pobierzListePracownikow() {
    this.http_
      .pobierz(Drzwi.pobierzPracownikow)
      .then((pobrane: { dane: Array<Pracownik>; limitPracownikow: number }) => {
        this.ListaPracownikow = [];
        pobrane.dane.forEach(pracownik => {
          const pracownikObj = new Pracownik();
          Object.assign(pracownikObj, pracownik);
          this.ListaPracownikow.push(pracownikObj);
        });

        this.limitPracownikow = pobrane.limitPracownikow;
      })
      .catch(niepobrane => {
        this.komunikaty.wyswietlenieBladNumer(BledyNumery.NiePobieraSieListaPracownikowPanelPracownicy);
      });
  }

  public filtrowaniePracownikow(): Array<Pracownik> {
    return this.ListaPracownikow.filter(Pracownik => {
      switch (this.filter) {
        case 'zarchiwizuj':
          if (Pracownik.archived == true) {
            return true;
          } else {
            return false;
          }
          break;
        case 'dostepni':
          if (Pracownik.archived == false && Pracownik.urlop == false) {
            return true;
          } else {
            return false;
          }
          break;

        case 'urlop':
          if (Pracownik.archived == false && Pracownik.urlop == true) {
            return true;
          } else {
            return false;
          }
          break;

        default:
          return true;
      }
    });
  }

  activeWorker() {
    return this.ListaPracownikow.filter(k => k.archived == false).length;
  }

  public dodajPracownika() {
    //*blokada przed dodaniem pracownika kiedy brak miejsc
    if (this.activeWorker() == this.limitPracownikow) {
      this.komunikaty.komunikatInfo(Info.maksymalnaIloscPracownikow);
      return;
    }
    this.router.navigate([`panelPracownika/zarzadzaniePracownikami/0/dodawanie`]);
  }

  public zarchiwizujUzytkownika(id: number) {
    const okno = this.UniwersalnyKomunikat_.open(
      'Czy na pewno chcesz zarchiwizować?',
      'Operacja ta powoduje zwolnienie miejsca w ograniczonej ilości pracowników'
    );
    okno.addButton('Nie', {
      defaultNo: true,
    });
    okno
      .addButton('Tak', {
        defaultYes: true,
      })
      .subscribe(k => {
        this.http_
          .aktualizuj(Drzwi.zwolnionyPrzywroconyPracownikMojZaklad + '/' + id, { archived: true })
          .then(udane => {
            this.komunikaty.pracownikZarchiwizowany();
            this.pobierzListePracownikow();
          })
          .catch(nieudane => {
            this.komunikaty.pracownikNieZarchiwizowany();
          });
      });
  }

  public urlop(id: number) {
    this.http_
      .aktualizuj(Drzwi.zwolnionyPrzywroconyPracownikMojZaklad + '/' + id, {
        urlop: true,
        archived: false,
      })
      .then(udane => {
        this.komunikaty.pracownikDodanyDoUrlopu();
        this.pobierzListePracownikow();
      })
      .catch(nieudane => {
        this.komunikaty.pracownikNieDodanyDoUrlopu();
      });
  }

  public przywrocUzytkownika(id: number) {
    this.http_
      .aktualizuj(Drzwi.zwolnionyPrzywroconyPracownikMojZaklad + '/' + id, {
        archived: false,
        urlop: false,
      })
      .then(udane => {
        this.komunikaty.pracownikPrzywrocony();
        this.pobierzListePracownikow();
      })
      .catch(nieudane => {
        this.komunikaty.pracownikNiePrzywrocony();
      });
  }

  public przywrocUzytkownikaZUrlopu(id: number) {
    this.http_
      .aktualizuj(Drzwi.zwolnionyPrzywroconyPracownikMojZaklad + '/' + id, { urlop: false })
      .then(udane => {
        this.komunikaty.pracownikPrzywrocony();
        this.pobierzListePracownikow();
      })
      .catch(nieudane => {
        this.komunikaty.pracownikNiePrzywrocony();
      });
  }

  public zmodyfikujUzytkownika(id: number) {
    this.router.navigate([`panelPracownika/zarzadzaniePracownikami/${id}/modyfikacja`]);
  }

  public wyswietlUzytkownika(id: number) {
    this.router.navigate([`panelPracownika/zarzadzaniePracownikami/${id}/wyswietlenie`]);
  }

  public usunPracownika(pracownikId: number) {
    const sterowanie = this.modalService.open(CzyNaprawdeUsunacComponent, { size: 'lg' });
    const sub = sterowanie.closed.subscribe(k => {
      if (k == 'Nie') {
        return;
      } else {
        this.http_
          .usun(Drzwi.pracownik + pracownikId + '/true')
          .then(usunieto => {
            this.komunikaty.pracownikUsuniety();
          })
          .catch(nieusunieto => {
            this.komunikaty.pracownikNieUsuniety();
          })
          .finally(() => {
            this.pobierzListePracownikow();
          });
      }
      sub.unsubscribe();
    });
  }

  ngOnDestroy(): void {
    // if(this.sub1 != undefined){
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    //  }
  }
}
