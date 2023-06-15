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

@Component({
  selector: 'app-pracownicy-pracownika',
  templateUrl: './pracownicy-pracownika.component.html',
  styleUrls: ['./pracownicy-pracownika.component.scss']
})
export class PracownicyPracownikaComponent implements OnInit, OnDestroy {
  public ListaPracownikow: Array<Pracownik> = [];
  private sub1?: Subscription;
  private sub2?: Subscription;

  constructor(private modalService: NgbModal,
              private listonosz: ListonoszService,
              private komunikaty: KomunikatyService) {
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

  public zmodyfikujUzytkownika(id: number) {
    const okienko = this.modalService.open(DodawanieIModyfikacjaPracownikaComponent, {backdrop: "static", size: 'xl'});
    okienko.componentInstance.tryb = "modyfikacja";
    okienko.componentInstance.idUzytkownika = id;
    okienko.componentInstance.pobierzPracownika();
    this.sub2 = okienko.closed.subscribe(zamkniete => {
      if (zamkniete == "Zmodyfikowanie udane") {
        this.pobierzListePracownikow();

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
    this.listonosz.usun(Drzwi.pracownik + pracownikId + '/true').then(usunieto => {
      this.komunikaty.pracownikUsuniety();
    }).catch(nieusunieto => {
      this.komunikaty.pracownikNieUsuniety();
    }).finally(() => {
      this.pobierzListePracownikow();
    })

  }

  ngOnDestroy(): void {
    // if(this.sub1 != undefined){
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe()
    //  }
  }
}
