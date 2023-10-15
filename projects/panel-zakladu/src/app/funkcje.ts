import { environment } from '../environments/environment';

export class Funkcje {
  static doPracy() {
    return !environment.production;
  }
}
