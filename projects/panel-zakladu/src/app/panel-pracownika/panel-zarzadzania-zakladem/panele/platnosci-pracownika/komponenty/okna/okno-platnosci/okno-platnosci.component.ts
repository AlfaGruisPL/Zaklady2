import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ListonoszService } from '../../../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../../../enum/drzwi';
import { ZleceniePlatnosciDto } from '../../../../../../../klasy/panelPracownika/platnosci/zleceniePlatnosciDto';
import { environment } from '../../../../../../../../environments/environment';
import { KomunikatyService } from '../../../../../../../serwisy/komunikaty.service';
import { ErrorAnalyzerService } from '../../../../../../../serwisy/error-analyzer.service';

@Component({
  selector: 'app-okno-platnosci',
  templateUrl: './okno-platnosci.component.html',
  styleUrls: ['./okno-platnosci.component.scss'],
})
export class OknoPlatnosciComponent {
  ZaplacNieAktywne = false;
  public kwota = 50;
  public regulamin = false;
  protected readonly environment = environment;
  protected readonly Number = Number;

  constructor(
    public activeModal: NgbActiveModal,
    private listonosz: ListonoszService,
    private komunikaty_: KomunikatyService,
    private errorAnalyzer: ErrorAnalyzerService
  ) {}

  zaplac() {
    if (!this.check()) return;
    this.ZaplacNieAktywne = true;
    const dane: ZleceniePlatnosciDto = {
      kwota: this.kwota,
    };
    this.listonosz
      .wyslij(Drzwi.utworzeniePlatnosci, dane)
      .then(udane => {
        window.open(udane, '_blank');
        this.activeModal.close('zaplac');
      })
      .catch(error => {
        this.errorAnalyzer.analyze(error);
      })
      .finally(() => {
        this.ZaplacNieAktywne = false;
      });
  }

  check() {
    if (this.kwota < 30) {
      this.komunikaty_.minimalnaKwotaWplaty();
      return false;
    }
    return true;
  }
}
