import { Component } from '@angular/core';
import { TokenService } from '../../../../serwisy/token.service';
import { environment } from '../../../../../environments/environment';
import { FontAwesomeService } from '../../../../serwisy/font-awesome.service';
import packageInfo from '../../../../../../../../package.json';

@Component({
  selector: 'app-stopka-pracownik',
  templateUrl: './stopka-pracownik.component.html',
  styleUrls: ['./stopka-pracownik.component.scss'],
})
export class StopkaPracownikComponent {
  public data = new Date();
  version = packageInfo.version;
  relase_date = packageInfo.relase_date;
  protected readonly environment = environment;

  constructor(public token_: TokenService, public ikonki: FontAwesomeService) {}

  czasWaznosciSesji() {
    if (this.token_.tokenTerminWaznosci != undefined) {
      const czas = this.token_.tokenTerminWaznosci.getTime() - new Date().getTime();
      return Math.round(czas / (60 * 1000));
    }
    return 0;
  }
}
