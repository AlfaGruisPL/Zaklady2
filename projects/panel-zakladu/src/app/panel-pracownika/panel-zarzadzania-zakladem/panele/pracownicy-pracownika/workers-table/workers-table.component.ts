import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../../environments/environment';
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbPopover,
} from '@ng-bootstrap/ng-bootstrap';
import { WorkersTableFilterComponent } from './workers-table-filter/workers-table-filter.component';
import { WorkersTableService } from './workers-table.service';
import { RureczkiModule } from '../../../../../rureczki/rureczki.module';
import { CompletedVisitStatusComponent } from '../../lista-klientow-pracownik/informacje-okliencie/completed-visit-status/completed-visit-status.component';
import { TableComponent } from '../../../../../komponets/table/table.component';
import { TemplateIdDirective } from '../../../../../komponets/table/template-id.directive';
import { WorkersTableUserConfirmComponent } from './workers-table-user-confirm/workers-table-user-confirm.component';
import { WorkerTableButtonsComponent } from './worker-table-buttons/worker-table-buttons.component';

@Component({
  selector: 'app-workers-table',
  standalone: true,
  imports: [
    CommonModule,
    NgbDropdown,
    WorkersTableFilterComponent,
    NgbPopover,
    RureczkiModule,
    CompletedVisitStatusComponent,
    TableComponent,
    TemplateIdDirective,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NgbDropdownItem,
    WorkersTableUserConfirmComponent,
    WorkerTableButtonsComponent,
  ],
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.scss'],
})
export class WorkersTableComponent {
  protected readonly environment = environment;

  constructor(private modalService: NgbModal, public workersTable_: WorkersTableService) {}
}
