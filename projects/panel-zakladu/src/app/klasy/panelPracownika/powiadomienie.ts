export class Powiadomienie {
  id: number = 0;
  tytul: string = '';
  tresc: string = '';
  typ: string = '';
  odczytane: boolean = false;
  data: Date = new Date();
  usuniete = false
}
