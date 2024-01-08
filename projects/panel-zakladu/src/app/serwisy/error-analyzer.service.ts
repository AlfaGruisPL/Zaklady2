import { Injectable } from '@angular/core';
import { HttpError } from '../../../../klasy/httpError';
import { KomunikatyService } from './komunikaty.service';
import { Bledy } from '../enum/bledy';

@Injectable({
  providedIn: 'root',
})
export class ErrorAnalyzerService {
  constructor(private komunikaty_: KomunikatyService) {}

  fileUploadAnalyze(error: HttpError) {
    if (error.error!.message.indexOf('expected type is') != -1) {
      const format = error.error!.message.split('(')[2].split(')')[0].replaceAll('|', ', ');
      this.komunikaty_.komunikatInfo('Nie poprawny format pliku, dozwolone formaty to ' + format);
    } else if (error.error!.message.indexOf('(expected size is less than') != -1) {
      const size = error.error!.message.split('than')[1].split(')')[0].trim();
      const sizeMB = Number(size) / 1048576;
      this.komunikaty_.komunikatInfo('Za duży rozmiar zdjęcia, maksymalny rozmiar to ' + sizeMB + 'MB');
    } else {
      this.komunikaty_.komunikatInfo(error.error!.message);
    }
  }

  analyze(error: HttpError, defaultErrorMessage: Bledy | undefined = undefined) {
    if (error && error.type) console.log((error.type = 'error'));
    switch (error.error?.reasonCode) {
      case 0: //demo
        this.komunikaty_.komunikatInfo('System w wersji demo, modyfikacja nie możliwa');
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
        if (error.status === 400) {
          console.log(error);
          if (error.error) this.komunikaty_.komunikatInfo(JSON.stringify(error.error.message));
        }
        if (defaultErrorMessage) {
          this.komunikaty_.komunikatBledu(defaultErrorMessage);
        } else {
          this.komunikaty_.komunikatBledu(Bledy.bladOgolny);
        }
    }
  }

  error120() {}
}
