import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  DodawanieIModyfikacjaPracownikaComponent
} from "./okienka/dodawanie-imodyfikacja-pracownika/dodawanie-imodyfikacja-pracownika.component";
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {Pracownik} from "../../../../klasy/panelPracownika/pracownicy/pracownik";
import {Subscription} from "rxjs";
import {KomunikatyService} from "../../../../serwisy/komunikaty.service";
import {BledyNumery} from "../../../../enum/bledy-numery";
import {CzyNaprawdeUsunacComponent} from "./okienka/czy-naprawde-usunac/czy-naprawde-usunac.component";
import {PodreczneDaneService} from "../../../../serwisy/podreczne-dane.service";

@Component({
  selector: 'app-pracownicy-pracownika',
  templateUrl: './pracownicy-pracownika.component.html',
  styleUrls: ['./pracownicy-pracownika.component.scss']
})
export class PracownicyPracownikaComponent implements OnInit, OnDestroy {
  public ListaPracownikow: Array<Pracownik> = [];
  private sub1?: Subscription;
  private sub2?: Subscription;
  public filter = "dostepni";

  constructor(private modalService: NgbModal,
              private listonosz: ListonoszService,
              private komunikaty: KomunikatyService,
              private podreczneDane: PodreczneDaneService,
              private okienka: NgbModal) {
  }

  ngOnInit() {
    this.pobierzListePracownikow();
  }

  public pobierzListePracownikow() {
    this.listonosz.pobierz(Drzwi.pobierzPracownikow).then((pobrane: Array<Pracownik>) => {
      this.ListaPracownikow = [];
      pobrane.forEach(pracownik => {
        const pracownikObj = new Pracownik();

        Object.assign(pracownikObj, pracownik)


        this.ListaPracownikow.push(pracownikObj)
      })
    }).catch(niepobrane => {
      this.komunikaty.wyswietlenieBladNumer(BledyNumery.NiePobieraSieListaPracownikowPanelPracownicy);
    })
  }


  public filtrowaniePracownikow(): Array<Pracownik> {
    return this.ListaPracownikow.filter(Pracownik => {
      switch (this.filter) {
        case "zarchiwizuj":
          if (Pracownik.status == "zarchiwizuj") {
            return true;
          } else {
            return false;
          }
          break;
        case "dostepni":
          if (Pracownik.status == "dostepni" && Pracownik.urlop == false) {
            return true;
          } else {
            return false;
          }
          break;

        case "urlop":
          if (Pracownik.status == "dostepni" && Pracownik.urlop == true) {
            return true;
          } else {
            return false;
          }
          break

        default:
          return true;
      }

    })
  }


  public dodajPracownika() {
    const okienko = this.modalService.open(DodawanieIModyfikacjaPracownikaComponent, {backdrop: "static", size: 'xl'});
    okienko.componentInstance.tryb = "dodawanie";

    this.sub1 = okienko.closed.subscribe(zamkniete => {
      if (zamkniete == "Zapisanie udane") {
        this.pobierzListePracownikow();

      }
      this.sub1?.unsubscribe();
    })
  }

  public zarchiwizujUzytkownika(id: number) {
    this.listonosz.aktualizuj(Drzwi.zwolnionyPrzywroconyPracownikMojZaklad + "/" + id, {status: "zarchiwizuj"}).then(udane => {
      this.komunikaty.pracownikZarchiwizowany();
      this.pobierzListePracownikow();
    }).catch(nieudane => {
      this.komunikaty.pracownikNieZarchiwizowany();
    })
  }

  public urlop(id: number) {
    this.listonosz.aktualizuj(Drzwi.zwolnionyPrzywroconyPracownikMojZaklad + "/" + id, {
      urlop: true,
      status: "dostepni"
    }).then(udane => {
      this.komunikaty.pracownikDodanyDoUrlopu()
      this.pobierzListePracownikow();
    }).catch(nieudane => {
      this.komunikaty.pracownikNieDodanyDoUrlopu();
    })
  }

  public przywrocUzytkownika(id: number) {
    this.listonosz.aktualizuj(Drzwi.zwolnionyPrzywroconyPracownikMojZaklad + "/" + id, {
      status: "dostepni",
      urlop: false
    }).then(udane => {
      this.komunikaty.pracownikPrzywrocony();
      this.pobierzListePracownikow();
    }).catch(nieudane => {
      this.komunikaty.pracownikNiePrzywrocony()
    })
  }

  public przywrocUzytkownikaZUrlopu(id: number) {
    this.listonosz.aktualizuj(Drzwi.zwolnionyPrzywroconyPracownikMojZaklad + "/" + id, {urlop: false}).then(udane => {
      this.komunikaty.pracownikPrzywrocony();
      this.pobierzListePracownikow();
    }).catch(nieudane => {
      this.komunikaty.pracownikNiePrzywrocony()
    })
  }


  public zmodyfikujUzytkownika(id: number) {
    const okienko = this.modalService.open(DodawanieIModyfikacjaPracownikaComponent, {backdrop: "static", size: 'xl'});
    okienko.componentInstance.tryb = "modyfikacja";
    okienko.componentInstance.idUzytkownika = id;
    okienko.componentInstance.pobierzPracownika();
    this.sub2 = okienko.closed.subscribe(zamkniete => {
      if (zamkniete == "Zmodyfikowanie udane") {
        this.pobierzListePracownikow();
        this.podreczneDane.wygenerujNowaLiczbeLosowaDlaZdjec()

      }
      this.sub2?.unsubscribe();
    })
  }

  public wyswietlUzytkownika(id: number) {
    const okienko = this.modalService.open(DodawanieIModyfikacjaPracownikaComponent, {backdrop: "static", size: 'xl'});
    okienko.componentInstance.tryb = "wyswietlenie";
    okienko.componentInstance.idUzytkownika = id;
    okienko.componentInstance.pobierzPracownika();
  }


  public usunPracownika(pracownikId: number) {
    const sterowanie = this.okienka.open(CzyNaprawdeUsunacComponent, {size: 'lg'});
    const sub = sterowanie.closed.subscribe(k => {
      if (k == "Nie") {
        return
      } else {
        this.listonosz.usun(Drzwi.pracownik + pracownikId + '/true').then(usunieto => {
          this.komunikaty.pracownikUsuniety();
        }).catch(nieusunieto => {
          this.komunikaty.pracownikNieUsuniety();
        }).finally(() => {
          this.pobierzListePracownikow();
        })
      }
      sub.unsubscribe();
    })


  }

  ngOnDestroy(): void {
    // if(this.sub1 != undefined){
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe()
    //  }
  }
}
