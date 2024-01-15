import { Component, OnInit } from '@angular/core';
import { WorkersTableComponent } from './workers-table/workers-table.component';
import { WorkersTableFilterComponent } from './workers-table-filter/workers-table-filter.component';
import { WorkersTableService } from './workers-table/workers-table.service';

@Component({
  selector: 'app-worker-table-panel',
  standalone: true,
  imports: [WorkersTableComponent, WorkersTableFilterComponent],
  templateUrl: './worker-table-panel.component.html',
  styleUrl: './worker-table-panel.component.scss',
})
export class WorkerTablePanelComponent implements OnInit {
  constructor(public workersTable_: WorkersTableService) {}

  ngOnInit() {
    this.workersTable_.pobierzListePracownikow();
  }

  activeWorker() {
    return this.workersTable_.ListaPracownikow.filter(k => k.archived == false).length;
  }
}
