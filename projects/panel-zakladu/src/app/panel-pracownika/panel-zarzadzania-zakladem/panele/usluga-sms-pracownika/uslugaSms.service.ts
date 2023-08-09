import {Injectable} from '@angular/core';
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {HistoriaSms, PanelSms} from "../../../../klasy/panelPracownika/uslugaSms/panel-sms";
import {BehaviorSubject} from "rxjs";
import {
  PlatnosciPracownikaPotwierdzenieAkcjiComponent
} from "../platnosci-pracownika/komunikaty/platnosci-pracownika-potwierdzenie-akcji/platnosci-pracownika-potwierdzenie-akcji.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {KomunikatyService} from "../../../../serwisy/komunikaty.service";

@Injectable({
  providedIn: 'root'
})
export class UslugaSmsService {
  public dane: PanelSms = new PanelSms()
  public daneObserveble = new BehaviorSubject<PanelSms>(new PanelSms())

  constructor(private listonosz: ListonoszService, private modalService: NgbModal, private komunikaty: KomunikatyService) {

  }

  pobierzDane() {
    this.listonosz.pobierz(Drzwi.panelSms).then(k => {
      this.dane = new PanelSms()
      const historia = [...k.historia];
      historia.forEach(k2 => {
        const obj = new HistoriaSms()
        Object.assign(obj, k2)
        this.dane.historia.push(obj);
      })
      delete k.historia
      Object.assign(this.dane, k)
      this.daneObserveble.next(this.dane)
    }).catch(k => {

    })
  }

  zmianaUslugSms(event: boolean) {
    if (event) {
      const okienko = this.modalService.open(
        PlatnosciPracownikaPotwierdzenieAkcjiComponent
      );
      okienko.componentInstance.tresc =
        'Włączenie usługi sms może generować dodatkowe koszty zgodne z cennikiem ';
      okienko.result.then(
        (result) => {
          this.listonosz
            .wyslij(Drzwi.PlatnosciIUslugaSMS, {tryb: 'wlacz'})
            .then((k) => {
              this.komunikaty.uslugaSmsWlaczona();
            })
            .catch((k) => {
              this.komunikaty.uslugaSmsNieWlaczona();
            })
            .finally(() => {
              this.pobierzDane()
            });
        },
        (reason) => {
          this.dane.uslugaSMS = false;
        }
      );
    }
    if (!event) {
      this.listonosz
        .wyslij(Drzwi.PlatnosciIUslugaSMS, {tryb: 'wylacz'})
        .then((k) => {
          this.komunikaty.uslugaSmsWylaczona();
        })
        .catch((k) => {
          this.komunikaty.uslugaSmsNieWylaczona();
        })
        .finally(() => {
          this.pobierzDane()
        });
    }
  }

}
