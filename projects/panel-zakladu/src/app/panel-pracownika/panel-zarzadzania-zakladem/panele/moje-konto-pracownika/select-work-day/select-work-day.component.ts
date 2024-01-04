import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-select-work-day',
  standalone: true,
  imports: [NgClass],
  templateUrl: './select-work-day.component.html',
  styleUrl: './select-work-day.component.scss',
})
export class SelectWorkDayComponent {
  @Input({ required: true }) WorkDay!: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  @Output() WorkDayChange = new EventEmitter();
  @Input() disabled = false;

  change(day: string) {
    // @ts-ignore
    this.WorkDay[day] = !this.WorkDay[day];
    this.WorkDayChange.emit(this.WorkDay);
  }
}
