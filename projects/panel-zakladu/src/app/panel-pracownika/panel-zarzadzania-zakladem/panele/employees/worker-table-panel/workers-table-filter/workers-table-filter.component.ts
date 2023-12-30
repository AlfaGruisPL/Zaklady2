import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersTableService } from '../workers-table/workers-table.service';

@Component({
  selector: 'app-workers-table-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workers-table-filter.component.html',
  styleUrls: ['./workers-table-filter.component.scss'],
})
export class WorkersTableFilterComponent {
  constructor(public workersTable: WorkersTableService) {}
}
