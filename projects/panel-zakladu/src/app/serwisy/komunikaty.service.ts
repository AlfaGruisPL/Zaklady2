import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {BledyNumery} from "../enum/bledy-numery";

@Injectable({
  providedIn: 'root'
})
export class KomunikatyService {

  constructor(private komunikaty: ToastrService) {
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

  public dodaniePracownikaUdane() {
    this.komunikaty.success("Pracownik został dodany", 'Udane');
  }

  public dodaniePracownikaNieUdane() {
    this.komunikaty.error("Pracownik  nie został dodany, skontaktuj się z administratorem", 'Udane')
  }

  public modyfikowaniePracownikaUdane() {
    this.komunikaty.success("Dane o pracowniku zostały zmodyfikowane", 'Udane');
  }

  public modyfikowaniePracownikaNieUdane() {
    this.komunikaty.error("Dane o pracowniku nie zostały zmodyfikowane, skontaktuj się z administratorem", 'Udane')
  }

  public pracownikUsuniety() {
    this.komunikaty.success("Dane o pracowniku zostały usunięte", 'Udane');
  }

  public pracownikNieUsuniety() {
    this.komunikaty.error("Dane o pracowniku nie zostały usunięte, skontaktuj się z administratorem", 'Udane')
  }

  public pracownikZarchiwizowany() {
    this.komunikaty.success("Pracownik został przeniesiony do tabeli 'Archiwum'", 'Udane')
  }

  public pracownikPrzywrocony() {
    this.komunikaty.success("Pracownik został przywrocony do tabeli 'Dostępni'", 'Udane')
  }

  public pracownikNiePrzywrocony() {
    this.komunikaty.error("Pracownik nie został przywrocony do tabeli 'Dostępni'", 'Udane')
  }

  public pracownikNieZarchiwizowany() {
    this.komunikaty.error("Pracownik nie został przeniesiony do tabeli 'Archiwum'", 'Udane')
  }


  public pracownikDodanyDoUrlopu() {
    this.komunikaty.success("Pracownik został przeniesiony  do tabeli 'Urlop'", 'Udane')
  }

  public pracownikNieDodanyDoUrlopu() {
    this.komunikaty.error("Pracownik nie został dodany do tabeli 'Urlop'", 'Udane')
  }
}
