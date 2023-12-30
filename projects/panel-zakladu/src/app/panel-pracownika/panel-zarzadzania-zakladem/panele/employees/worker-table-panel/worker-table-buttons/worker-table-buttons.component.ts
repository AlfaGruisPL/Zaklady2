import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pracownik } from '../../../../../../klasy/panelPracownika/pracownicy/pracownik';
import { WorkersTableService } from '../workers-table/workers-table.service';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-worker-table-buttons',
  standalone: true,
  imports: [CommonModule, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle, NgbDropdown],
  templateUrl: './worker-table-buttons.component.html',
  styles: [],
})
export class WorkerTableButtonsComponent {
  @Input({ required: true }) worker!: Pracownik;

  constructor(public workersTable_: WorkersTableService) {}
}
