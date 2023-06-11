export class Platnosc {
  id: number = 0;
  dataUtworzenia: Date = new Date();
  kwota: string = "";
  opis: string = "";
  probyPlatnosci: Array<probaPlatnosci> = []
  listaProb: Array<string> = []
  czyRozwiniete = false;


}

export class probaPlatnosci {
  data: Date = new Date();
  status: string = '';
  identyfikatorPayNow: string = '';
}
