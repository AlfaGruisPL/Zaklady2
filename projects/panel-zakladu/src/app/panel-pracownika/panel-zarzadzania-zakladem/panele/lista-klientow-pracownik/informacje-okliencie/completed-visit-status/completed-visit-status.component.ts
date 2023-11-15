import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wizyta } from '../../../../../../klasy/panelPracownika/wizyta';

@Component({
  selector: 'app-completed-visit-status',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="true" *ngIf="visit.completed == true">Wykonana</span>
    <span class="false" *ngIf="visit.completed == false">Niewykonana</span>
    <span class="undefined" *ngIf="visit.completed == undefined">Nieoznaczona</span>
  `,
  styles: [
    `
      .true,
      .false,
      .undefined {
        font-weight: bold;
      }

      .true {
        color: #0b7006;
      }

      .false {
        color: #7e0000;
      }

      .undefined {
        color: #3d2323;
      }
    `,
  ],
})
export class CompletedVisitStatusComponent {
  @Input({ required: true }) visit!: Wizyta;
}
