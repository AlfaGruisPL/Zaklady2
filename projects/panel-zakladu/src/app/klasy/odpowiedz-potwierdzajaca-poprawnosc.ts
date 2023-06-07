export class OdpowiedzPotwierdzajacaPoprawnosc<zawartoscPudelka> {
  public token?: boolean;
  public info?: {
    request_counter: number,
    server_time: number,
    request_time: string
  }
  public value?: zawartoscPudelka;
}
