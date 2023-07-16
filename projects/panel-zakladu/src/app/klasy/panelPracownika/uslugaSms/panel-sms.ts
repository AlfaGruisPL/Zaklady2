export class HistoriaSms {
  id: number = 0;
  termin: Date = new Date();
  wyslaneSMS: number = 0;
  oplacone: boolean = false;
  darmoweSMS: number = 0;
  kosztSMS: number = 0;

  kwota() {
    return Math.round(this.wyslaneSMS * 0.09 * 100) / 100;
  }
}

export class smsPowiadomienia {
  godzinaPrzed = false;
  trzyGodzinyPrzed = false;
  dzienPrzed = false;
  trzyDniPrzed = false;
  potwierdzenieRejestracji = false;
}

export class PanelSms {
  status: boolean = false;
  historia: Array<HistoriaSms> = [];
  smsDzis = 0;
  smsCalosc = 0;
  smsSrednia = 0;
  oplataDzis = 0;
  oplataSuma = 0;
  darmoweSMS = 0;
  uslugaSMS: boolean = false;

  wykorzystaneZDarmowych = 0;
  smsPowiadomienia: smsPowiadomienia = new smsPowiadomienia();
}
