export enum Drzwi {
  nazwaZakladu = '/zaklady/nazwaZakladu',

  systemActive = '/panelPracownika/systemActive',
  logowanie = '/auth/login',
  wylogowanie = '/auth/logout',
  resetHasla = '/auth/resetHasla',
  resetHaslaKrok2 = '/auth/resetHaslaKrok2',
  resetHaslaKrok3 = '/auth/resetHaslaKrok3',
  dodajZaklad = '/workspace/registration',
  rejestracjaKlienta = '/klient/auth/rejestracja',
  logowanieKlienta = '/klient/auth/login',
  daneMojZakladPracownik = '/zaklady/daneZakladu',
  podreczneDanePobierz = '/panelPracownika/daneStartowe',
  pobierzPracownikow = '/listaPracownikow/pracownicyZakladu',
  dodaniePracownikaDoTablicy = '/uzytkownicyWZakladach/dodawaniePracownika',
  pobierzPracownikowMojZaklad = '/uzytkownicyWZakladach/pracownikWidocznosc',
  aktualizujPracownikowMojZaklad = '/uzytkownicyWZakladach/pracownikWidocznosc',

  listaPlatnosci = '/platnosci/listaPlatnosci',
  utworzeniePlatnosci = '/platnosci/nowaPlatnosc',
  aktywacjaKonta = '/platnosci/aktywacjaKonta',
  autoRenew = '/pay/autoRenew',
  pracownik = '/uzytkownicyWZakladach/pracownik/',
  PlatnosciIloscPracownikow = '/platnosci/iloscPracownikow',
  smsNotification = '/sms/powiadomieniaSms',
  mojeKonto = '/users/profil',

  informacjeDoPaneluPlatnosci = '/platnosci/informacjeDoPaneluPlatnosci',
  listaOplat = '/platnosci/listaOplat',
  zwolnionyPrzywroconyPracownikMojZaklad = '/listaPracownikow/zwolnionyPrzywrocony',

  panelSms = '/sms/panelUslugi',
  wykresStanuKonta = '/platnosci/wykresStanuKOnta',

  uslugiPanel = '/uslugi/panel',

  zarejestrowaneWizytyTerminy = '/kalendarzTerminow/dane',
  zarejestrowaneWizytyDlaPracownika = '/kalendarzTerminow/terminyDlaPracownika',

  //wizyty
  wizytyDzis = '/wizyty/wizytyDzis',
  wizytyZakladu = '/wizyty/wizytyZakladu',
  odwolanieWizyty = '/wizyty/odwolanie/',

  kalendarzTerminowPrzerwa = 'kalendarzTerminow/przerwa',
  kalendarzRejestracjaWizytyZPanelu = '/kalendarzTerminow/rejestracjaWizyty',

  kalendarzTerminowDniWolneIPrzerwyZakladu = '/dniWolnePrzerwy',
  kalendarzOznaczJakoDzienWolny = '/dniWolne/dzienWolny',
  kalendarzOznaczJakoDzienPracy = '/dniWolne/dzienPracy',
  tabelaPrzerwDane = '/dniWolnePrzerwy/daneDoTabeli',

  //wolne dni/przerwy
  utworzWolnyDzien = '/dniWolne/dzienWolny',
  utworzPrzerwe = '/przerwy',

  usunPrzerweRegularna = '/przerwy/regularne',
  usunWolnyDzienRegularny = '/dniWolne/regularne',
  usunPrzerweNieRegularna = '/przerwy',
  usunWolnyDzienNieRegularny = '/dniWolne',

  listaKlientowCalosc = '/klienci/listaCalosc',
  listaKlientowZalogowanegoUzytkownika = '/klienci/lista',
  listaKlientowUzytkownika = '/klienci/lista',
  customerInformation = '/klienci/customerInformation/',
  //harmonogram dnia
  harmonogramDniaInformacjeDlaAdministratora = '/panelPracownika/harmonogram/daneDlaAdministratora',

  //powiadomienia zakładu
  listaPowiadomienDlaZakladu = '/powiadomienia',
  listaPowiadomienOdczytajPowiadomienie = '/powiadomienia/odczytaj/',
  listaPowiadomienUsunPowiadomienie = '/powiadomienia/usun/',

  //powiadomienia uzytkownika
  listaPowiadomienDlaUzytkownika = '/powiadomieniaUzytkownika',
  listaPowiadomienUzytkownikaUsunPowiadomienie = '/powiadomieniaUzytkownika/usun/',
  listaPowiadomienUzytkownikaOdczytajPowiadomienie = '/powiadomieniaUzytkownika/odczytaj/',

  //strona reklamowa
  UstawieniaStronyReklamowej = '/stronaReklamowaDane/ustawieniaStronyReklamowej',
  banerStronyReklamowej = '/pliki/banerStronyReklamowej',
  logoStronyReklamowej = '/pliki/logoStronyReklamowej',

  //podsumowanie
  podsumowanieDaneDoWykresu = '/wizyty/daneDoWykresuPodsumowanie',
  podsumowanieTabela = '/podsumowanieZakladu/tabela',
  podsumowanieInformacje = '/podsumowanieZakladu/informacje',
  wizytaAktualizacja = '/wizyty/',
  changeCompleteStatus = '/wizyty/completed/',

  //files
  filesList = '/pliki/list',
  sendImage = '/pliki/image',
  deleteImage = '/pliki/image',
}
