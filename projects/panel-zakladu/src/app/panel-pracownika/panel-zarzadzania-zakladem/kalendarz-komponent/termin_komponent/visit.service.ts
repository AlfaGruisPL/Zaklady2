import { Injectable } from '@angular/core';
import { Wizyta } from '../../../../klasy/panelPracownika/wizyta';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';
import { ErrorAnalyzerService } from '../../../../serwisy/error-analyzer.service';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { Udane } from '../../../../enum/udane';
import { KalendarzKomponentService } from '../kalendarz-komponent.service';

@Injectable({
  providedIn: 'root',
})
export class VisitService {
  actualTrigeredElements: any[] = [];

  constructor(
    public http: ListonoszService,
    private error_: ErrorAnalyzerService,
    private komunikaty_: KomunikatyService,
    private kalendarz_: KalendarzKomponentService
  ) {}

  async confirmVisit(visit: Wizyta, updateCalendarService = true) {
    await this.http
      .aktualizuj(Drzwi.changeCompleteStatus + visit.id, { completed: true })
      .then(dane => {
        this.komunikaty_.komunikatUdane(Udane.wizytaOznaczonaJakoWykonana);
        visit.completed = true;
        if (updateCalendarService) {
          this.kalendarz_.pobierzDane();
        }
      })
      .catch(error => {
        this.error_.analyze(error);
      });
    return true;
  }

  async disConfirmVisit(visit: Wizyta, updateCalendarService = true) {
    await this.http
      .aktualizuj(Drzwi.changeCompleteStatus + visit.id, { completed: false })
      .then(dane => {
        this.komunikaty_.komunikatUdane(Udane.wizytaOznaczonaJakoNieWykonana);
        if (updateCalendarService) {
          this.kalendarz_.pobierzDane();
        }
        visit.completed = false;
      })
      .catch(error => {
        this.error_.analyze(error);
      });
    return true;
  }
}
