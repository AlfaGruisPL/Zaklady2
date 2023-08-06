import {Component} from '@angular/core';
import {TokenService} from "../../../../serwisy/token.service";

@Component({
  selector: 'app-stopka-pracownik',
  templateUrl: './stopka-pracownik.component.html',
  styleUrls: ['./stopka-pracownik.component.scss']
})
export class StopkaPracownikComponent {
  public data = new Date()

  constructor(public token_: TokenService) {

  }

  czasWaznosciSesji() {
    if (this.token_.tokenTerminWaznosci != undefined) {

      const czas = this.token_.tokenTerminWaznosci.getTime() - new Date().getTime()
      return Math.round(czas / (60 * 1000))
    }
    return 0
  }
}
