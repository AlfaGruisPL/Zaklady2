import { Injectable } from "@angular/core";
import { HttpError } from "../../../../klasy/httpError";
import { KomunikatyService } from "./komunikaty.service";
import { Bledy } from "../enum/bledy";

@Injectable({
  providedIn: "root"
})
export class ErrorAnalyzerService {
  constructor(private komunikaty_: KomunikatyService) {
  }

  analyze(error: HttpError, defaultErrorHandler: undefined | Function = undefined) {
    switch (error.error?.reasonCode) {
      case 0: //demo
        this.komunikaty_.komunikatInfo("System w wersji demo, modyfikacja nie możliwa");
        break;
      case 120: //błąd, kiedy przy pobieraniu szczegółowych danych o kliencie na podstawie wizyty nie zostanie odnaleziony customer, prawdopodobnie brak relacji
        this.komunikaty_.komunikatBledu(Bledy.klientNieZnaleziony, 120);
        break;
      case 101:
        this.komunikaty_.komunikatBledu(Bledy.wizytaNieZostalaOdowlana);
        break;
      case 102:
        this.komunikaty_.komunikatBledu(Bledy.wizytaJuzSieoDbyla);
        break;
      case 200:
        this.komunikaty_.komunikatBledu(Bledy.bladUtworzeniaPlatnosci);
        break;
      case 201:
        this.komunikaty_.komunikatBledu(Bledy.bladUtworzeniaPlatnosci_BrakNumeruTelefonu);
        break;
      case 331:
        this.komunikaty_.komunikatBledu(Bledy.emailJestJuzWykorzystany);
        break;
      case 501:
        this.komunikaty_.komunikatBledu(Bledy.emailJestNiePoprawny);
        break;
      default:
        console.log(error.status);
        if (defaultErrorHandler) {
          defaultErrorHandler();
        } else {
          this.komunikaty_.komunikatBledu(Bledy.bladOgolny);
        }
    }
  }

  error120() {
  }
}
