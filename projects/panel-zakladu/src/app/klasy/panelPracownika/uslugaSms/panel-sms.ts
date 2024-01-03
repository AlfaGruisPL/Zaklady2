export class HistoriaSms {
  id: number = 0;
  date: Date = new Date();
  send: number = 0;
  oplacone: boolean = false;
  free: number = 0;
  cost: number = 0;
  avgCreditsCost = 0;

  kwota() {
    return Math.round(this.send * 0.09 * 100) / 100;
  }
}

export class smsPowiadomienia {
  hourBefore = false;
  threeHoursBefore = false;
  dayBefore = false;
  threeDaysBefore = false;
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
