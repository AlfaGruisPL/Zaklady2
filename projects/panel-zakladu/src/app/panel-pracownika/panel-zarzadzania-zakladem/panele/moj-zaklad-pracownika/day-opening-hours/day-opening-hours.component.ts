import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiSwitchModule } from 'ngx-ui-switch';
import { dzien } from '../../../../../klasy/panelPracownika/mojZaklad/moj-zaklad';

@Component({
  selector: 'tr [app-day-opening-hours]',
  standalone: true,
  imports: [UiSwitchModule],
  templateUrl: './day-opening-hours.component.html',
  styleUrl: './day-opening-hours.component.scss',
})
export class DayOpeningHoursComponent {
  @Input({ required: true }) dayName!: string;
  @Input({ required: true }) dzien!: dzien;
  @Output() dzienChange = new EventEmitter();

  @Input({ required: true }) zapiszButton!: boolean;
  @Output() zapiszButtonChange = new EventEmitter();
}
