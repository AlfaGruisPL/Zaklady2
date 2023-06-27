export class HistoriaSms {
  id: number = 0;
  termin: Date = new Date();
  wyslaneSMS: number = 0;
  oplacone: boolean = false;


  kwota() {
    return Math.round(this.wyslaneSMS * 0.09 * 100) / 100
  }
}

export class smsPowiadomienia {
  godzinaPrzed = false;
  dzienPrzed = false;
  potwierdzenieRejestracji = false;
}

export class PanelSms {

  status: boolean = false;
  historia: Array<HistoriaSms> = []
  smsDzis = 0;
  smsCalosc = 0
  smsSrednia = 0;
  smsPowiadomienia: smsPowiadomienia = new smsPowiadomienia()


}

