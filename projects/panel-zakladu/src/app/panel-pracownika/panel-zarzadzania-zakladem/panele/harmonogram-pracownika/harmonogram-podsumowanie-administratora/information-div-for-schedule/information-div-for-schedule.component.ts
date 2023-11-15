import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBacon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-information-div-for-schedule',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './information-div-for-schedule.component.html',
  styleUrls: ['./information-div-for-schedule.component.scss'],
})
export class InformationDivForScheduleComponent {
  @Input() titile = 'Lorem impsum';
  @Input() value: string | number | null = 9999;
  @Input() smallText = 'lorem impusm 5 more lorem ';
  @Input() last = false;
  @Input() icon = faBacon;
  protected readonly faBacon = faBacon;
}
