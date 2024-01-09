import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BledyNumery } from '../enum/bledy-numery';
import { Bledy } from '../enum/bledy';
import { Udane } from '../enum/udane';
import { DomSanitizer } from '@angular/platform-browser';
import { Info } from '../enum/info';

@Injectable({
  providedIn: 'root',
})
export class KomunikatyService {
  constructor(private komunikaty: ToastrService, private sanitizer: DomSanitizer) {}

  public zmianaIdentyfikatoraPrzekierowanie() {
    return this.komunikaty.warning(
      "Zmiana identyfikatora wymusza przekierowanie na nowy adres panelu administratora.  <br><span class='powiadomienieCiemnyText'>Zmianie ulegnie również adres do reklamowej strony zakładu<br>Automatyczne przekierowanie nastąpi po zapisaniu zmian.</span>",
      'Zmiana identyfikatora',
      {
        positionClass: 'toast-top-full-width',
        enableHtml: true,
        extendedTimeOut: 15000,
        progressBar: true,
        timeOut: 10000,
        tapToDismiss: false,
      }
    );
  }

  public automatyczneWylogowanie() {
    this.komunikaty.warning(
      'Nastąpiło automatyczne wylogowanie. Zaloguj się ponownie aby móc dalej korzystać z systemu.',
      'Automatyczne wylogowanie!!'
    );
  }

  public nowePowiadomienia() {
    this.komunikaty.info('Nowe powiadomienia !!!', 'Powiadomienia');
  }

  public komunikatUdane(udane: Udane) {
    this.komunikaty.success(udane, 'Udane');
  }

  public komunikatBledu(Blad: Bledy, errorCode: number | undefined = undefined) {
    if (errorCode) {
      const kod = Blad + `<br>Kod błędu: ${errorCode}`;
      const safe = this.sanitizer.bypassSecurityTrustHtml(kod);
      this.komunikaty.error(
        // @ts-ignore
        kod,
        'Błąd',
        {
          enableHtml: true,
          // @ts-ignore -> This is importnat to TS compiler
          buttons: [
            {
              id: 1,
              title: 'view jobs 1',
            },
          ],
        }
      );
    } else {
      this.komunikaty.error(Blad, 'Błąd');
    }
  }

  public uslugaSmsWlaczona() {
    this.komunikaty.success('Usługa SMS została włączona', 'Udane');
  }

  public uslugaSmsWylaczona() {
    this.komunikaty.success('Usługa SMS została wyłączona', 'Udane');
  }

  public uslugaSmsNieWylaczona() {
    this.komunikaty.error('Wyłączenie usługi SMS nie powiodło się', 'Błąd');
  }

  public uslugaSmsNieWlaczona() {
    this.komunikaty.error('Włączenie usługi SMS nie powiodło się', 'Błąd');
  }

  public modyfikacjaUdana() {
    this.komunikaty.success('Zmodyfikowanie danych powiodło się', 'Udane');
  }

  public modyfikacjaNieUdana() {
    this.komunikaty.error('Zmodyfikowanie danych  nie powiodło się', 'Błąd');
  }

  public wyswietlenieBladNumer(numer: BledyNumery) {
    this.komunikaty.error('Wystąpił błąd numer ' + numer + ' Zgłoś numer błędu administratoru', 'Błąd');
  }

  public wylogowanieUdane() {
    this.komunikaty.success('Wylogowanie udane', 'Udane');
  }

  public wylogowanieNieUdane() {
    this.komunikaty.error('Wylogowanie nieudane', 'Bląd');
  }

  public kontoAktywowane() {
    this.komunikaty.success('Twoje konto zostało aktywowane', 'Udane');
  }

  public kontoWstrzymane() {
    this.komunikaty.success('Twoje konto zostało wstrzymane', 'Udane');
  }

  public kontoNieAktywowane_zabrakloPieniedzy() {
    this.komunikaty.error('Twoje konto nie zostało aktywowane, za mało funduszy na koncie', 'Bląd');
  }

  public kontoNieAktywowane() {
    this.komunikaty.error('Twoje konto nie zostało aktywowane', 'Bląd');
  }

  public kontoNieWstrzymane() {
    this.komunikaty.error('Twoje konto nie zostało wstrzymane', 'Bląd');
  }

  public dodaniePracownikaUdane() {
    this.komunikaty.success('Pracownik został dodany', 'Udane');
  }

  public zdjecieProfiloweZmodyfikowane() {
    this.komunikaty.success('Zdjęcie profilowe pracownika zostało zmienione', 'Udane');
  }

  public zdjecieProfiloweNieZmodyfikowane() {
    this.komunikaty.error('Zdjęcie profilowe pracownika nie zostało zmienione', 'Bląd');
  }

  public dodaniePracownikaNieUdane() {
    this.komunikaty.error('Pracownik  nie został dodany, skontaktuj się z administratorem', 'Udane');
  }

  public modyfikowaniePracownikaUdane() {
    this.komunikaty.success('Dane o pracowniku zostały zmodyfikowane', 'Udane');
  }

  public modyfikowaniePracownikaNieUdane() {
    this.komunikaty.error('Dane o pracowniku nie zostały zmodyfikowane, skontaktuj się z administratorem', 'Udane');
  }

  public pracownikUsuniety() {
    this.komunikaty.success('Dane o pracowniku zostały usunięte', 'Udane');
  }

  public pracownikNieUsuniety() {
    this.komunikaty.error('Dane o pracowniku nie zostały usunięte, skontaktuj się z administratorem', 'Udane');
  }

  public pracownikZarchiwizowany() {
    this.komunikaty.success("Pracownik został przeniesiony do tabeli 'Archiwum'", 'Udane');
  }

  public pracownikPrzywrocony() {
    this.komunikaty.success("Pracownik został przywrocony do tabeli 'Dostępni'", 'Udane');
  }

  public pracownikNiePrzywrocony() {
    this.komunikaty.error("Pracownik nie został przywrocony do tabeli 'Dostępni'", 'Udane');
  }

  public pracownikNieZarchiwizowany() {
    this.komunikaty.error("Pracownik nie został przeniesiony do tabeli 'Archiwum'", 'Udane');
  }

  public pracownikDodanyDoUrlopu() {
    this.komunikaty.success("Pracownik został przeniesiony  do tabeli 'Urlop'", 'Udane');
  }

  public pracownikNieDodanyDoUrlopu() {
    this.komunikaty.error("Pracownik nie został dodany do tabeli 'Urlop'", 'Udane');
  }

  nieMaszUprawnienDoDodaniaWizyty() {
    this.komunikaty.info('Nie możesz dodać wizyty innemu użytkownikowi', 'Brak uprawnień');
  }

  zdjecieProfiloweUsuniete() {
    this.komunikaty.success('Zdjęcie profilowe zostało usunięte', 'Udane');
  }

  zdjecieProfiloweNieUsuniete() {
    this.komunikaty.error('Zdjęcie profilowe nie zostało usunięte', 'Błąd');
  }

  minimalnaKwotaWplaty() {
    this.komunikaty.info('Minimalna kwota doładowania konta wynosi 30zł', 'Informacja');
  }

  komunikatInfo(string: string | Info) {
    this.komunikaty.info(string, 'Informacja');
  }

  waitingForPaying() {
    return this.komunikaty.info(
      'Twoja płatność została zakończona, trwa przetwarzanie płatności. Proces ten może zająć kilka minut',
      'Przetwarzanie płatności',
      {
        positionClass: 'toast-top-full-width',
        enableHtml: true,
        extendedTimeOut: 15000,
        progressBar: true,
        timeOut: 10000,
        tapToDismiss: false,
      }
    );
  }
}
