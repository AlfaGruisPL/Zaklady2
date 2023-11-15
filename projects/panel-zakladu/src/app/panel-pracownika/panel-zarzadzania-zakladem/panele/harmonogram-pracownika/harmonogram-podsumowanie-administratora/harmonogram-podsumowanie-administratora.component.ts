import { Component, OnInit } from '@angular/core';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { HarmonogramDaneDlaAdministratora } from '../../../../../klasy/panelPracownika/harmonogram/harmonogramDaneDlaAdministratora';
import {
  faBook,
  faCalculator,
  faCalendar,
  faCalendarWeek,
  faList,
  faMoneyBills,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-harmonogram-podsumowanie-administratora',
  templateUrl: './harmonogram-podsumowanie-administratora.component.html',
  styleUrls: ['./harmonogram-podsumowanie-administratora.component.scss'],
})
export class HarmonogramPodsumowanieAdministratoraComponent implements OnInit {
  HarmonogramDaneDlaAdministratora = new HarmonogramDaneDlaAdministratora({});
  protected readonly faMoneyBills = faMoneyBills;
  protected readonly faCalendar = faCalendar;
  protected readonly faBook = faBook;
  protected readonly faList = faList;
  protected readonly faCalendarWeek = faCalendarWeek;
  protected readonly faCalculator = faCalculator;

  constructor(private listonosz: ListonoszService) {}

  ngOnInit() {
    this.listonosz
      .pobierz(Drzwi.harmonogramDniaInformacjeDlaAdministratora)
      .then(dane => {
        this.HarmonogramDaneDlaAdministratora = new HarmonogramDaneDlaAdministratora(dane);
      })
      .catch(error => {});
  }
}
