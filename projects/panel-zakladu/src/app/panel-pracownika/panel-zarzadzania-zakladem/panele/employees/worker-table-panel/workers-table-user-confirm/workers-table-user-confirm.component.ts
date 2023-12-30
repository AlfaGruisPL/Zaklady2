import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pracownik } from '../../../../../../klasy/panelPracownika/pracownicy/pracownik';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-workers-table-user-confirm',
  standalone: true,
  imports: [CommonModule, NgbPopover],
  templateUrl: './workers-table-user-confirm.component.html',
  styles: [
    `
      .alert {
        color: red;
        font-weight: bold;
        cursor: help;
      }
    `,
  ],
})
export class WorkersTableUserConfirmComponent {
  @Input({ required: true }) worker!: Pracownik;
}
