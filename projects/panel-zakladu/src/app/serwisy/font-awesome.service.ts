import { Injectable } from '@angular/core';
import {
  faArrowRightFromBracket,
  faCircleCheck,
  faCircleLeft,
  faCircleMinus,
  faCirclePlus,
  faCircleQuestion,
  faCommentSms,
  faEye,
  faEyeSlash,
  faForward,
  faHomeUser,
  faPersonThroughWindow,
  faTags,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAddressBook,
  faBuilding,
  faChartBar,
  faCreditCard,
  faFontAwesomeFlag,
  faIdBadge,
  faIdCard,
  faImage,
  faMoneyBill1,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons/faCalendarDays';

@Injectable({
  providedIn: 'root',
})
export class FontAwesomeService {
  wylogowanieIconka = faArrowRightFromBracket;
  powrotIconka = faCircleLeft;
  arrowWprawo = faForward;
  potwierdzenie = faCircleCheck;
  znakZapytajnika = faCircleQuestion;
  oczko = faEye;
  tag = faTags;
  oczkoZamkniete = faEyeSlash;
  czlowieczek = faUser;
  czlowieczki = faAddressBook;
  kalendarz = faCalendarDays;
  karta = faIdCard;
  kartaPlatnicza = faCreditCard;
  pieniadz = faMoneyBill1;
  wykres = faChartBar;
  czlowieczekWOknie = faPersonThroughWindow;
  wiezowiec = faBuilding;
  zdjecie = faImage;
  klienci = faIdBadge;
  flaga = faFontAwesomeFlag;
  dom = faHomeUser;
  sms = faCommentSms;
  plusWKolku = faCirclePlus;
  minusWKolku = faCircleMinus;

  constructor() {}
}
