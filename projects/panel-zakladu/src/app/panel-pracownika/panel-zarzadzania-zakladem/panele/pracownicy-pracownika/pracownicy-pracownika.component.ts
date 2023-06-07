import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  DodawanieIModyfikacjaPracownikaComponent
} from "./okienka/dodawanie-imodyfikacja-pracownika/dodawanie-imodyfikacja-pracownika.component";
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {Pracownik} from "../../../../klasy/panelPracownika/pracownicy/pracownik";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pracownicy-pracownika',
  templateUrl: './pracownicy-pracownika.component.html',
  styleUrls: ['./pracownicy-pracownika.component.scss']
})
export class PracownicyPracownikaComponent implements OnInit, OnDestroy {
  public ListaPracownikow: Array<Pracownik> = [];

  constructor(private modalService: NgbModal,
              private listonosz: ListonoszService) {
  }

  ngOnInit() {
    this.pobierzPracownika();
  }

  public pobierzPracownika() {
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

  private sub1?: Subscription;

  public dodajPracownika() {
    const okienko = this.modalService.open(DodawanieIModyfikacjaPracownikaComponent, {backdrop: "static", size: 'xl'});
    okienko.componentInstance.tryb = "dodawanie";
    this.sub1 = okienko.closed.subscribe(zamkniete => {
      if (zamkniete == "Zapisanie udane") {
        this.pobierzPracownika();

      }
      this.sub1?.unsubscribe();
    })
  }

  ngOnDestroy(): void {
    // if(this.sub1 != undefined){
    this.sub1?.unsubscribe()
    //  }
  }
}
