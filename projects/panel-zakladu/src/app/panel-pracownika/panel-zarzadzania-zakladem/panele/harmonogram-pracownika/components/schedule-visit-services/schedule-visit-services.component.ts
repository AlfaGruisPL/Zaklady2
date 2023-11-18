import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wizyta } from '../../../../../../klasy/panelPracownika/wizyta';

@Component({
  selector: 'app-schedule-visit-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule-visit-services.component.html',
  styleUrls: ['./schedule-visit-services.component.scss'],
})
export class ScheduleVisitServicesComponent {
  @Input() visit: Wizyta | undefined;
  protected readonly webkitURL = webkitURL;
}
