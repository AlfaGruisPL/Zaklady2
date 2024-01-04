import { Injectable } from "@angular/core";
import { ListonoszService } from "./listonosz.service";
import { Drzwi } from "../enum/drzwi";
import { KomunikatyService } from "./komunikaty.service";
import { BledyNumery } from "../enum/bledy-numery";
import { DanePodreczneClass } from "../klasy/panelPracownika/dane-podreczne";
import { BehaviorSubject } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root"
})
export class PodreczneDaneService {
  public danePodreczneObiekt = new DanePodreczneClass();
  public danePodreczneObserveble = new BehaviorSubject<DanePodreczneClass | undefined>(undefined);
  public losowaLiczba = Math.round(Math.random() * 100000000);
  public wlasciciel = false;
  public nazwaZakladu_domenowe = "";
  public zakladZnaleziony_domenowe: boolean = true;
  public subDomainID = false;
  public wartoscAutomatycznegoIdentyfikatora = "_";

  constructor(
    private listonosz: ListonoszService,
    private komunikaty: KomunikatyService,
    public token_: TokenService
  ) {
  }

  wygenerujNowaLiczbeLosowaDlaZdjec() {
    this.losowaLiczba += 1;
  }

  public linkDoStronyReklamowej(): string {
    return `https://${this.danePodreczneObiekt.identyfikatorZakladu}.mojzaklad.pl`;
  }

  returnWorkerFromIf(workerId: number | undefined) {
    const find = this.danePodreczneObiekt.pracownicy.find(worker => worker.id == workerId);
    return find?.imie + " " + find?.nazwisko;
  }

  public async identyfikacjaZakladu() {
    await this.listonosz
      .pobierz(Drzwi.nazwaZakladu)
      .then(k => {
        this.nazwaZakladu_domenowe = k.nazwa;
        this.zakladZnaleziony_domenowe = true;
      })
      .catch(error => {
        this.zakladZnaleziony_domenowe = false;
        this.ponowneSprawdzanieZakladu();
      });
  }

  public ustawZmienneTypuUzytkownika() {
    if (this.token_.tokenGrupy != undefined) {
      this.wlasciciel = this.token_.tokenGrupy.find(k => k == 2) != undefined;
    }
  }

  public pobierajaca() {
    this.listonosz
      .pobierz(Drzwi.podreczneDanePobierz)
      .then(dane => {
        Object.assign(this.danePodreczneObiekt, dane);
        this.danePodreczneObserveble.next(this.danePodreczneObiekt);
      })
      .catch(nieudane => {
        this.komunikaty.wyswietlenieBladNumer(BledyNumery.BladWyswietlaniaDanychPodrecznych);
      });
  }

  private ponowneSprawdzanieZakladu() {
    setTimeout(async () => {
      await this.identyfikacjaZakladu();
    }, 2000);
  }
}
