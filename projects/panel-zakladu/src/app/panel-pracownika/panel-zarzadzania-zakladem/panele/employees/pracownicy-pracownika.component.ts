import { Component, OnInit } from '@angular/core';
import { WorkersTableService } from './worker-table-panel/workers-table/workers-table.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pracownicy-pracownika',
  standalone: true,
  templateUrl: './pracownicy-pracownika.component.html',
  styleUrls: ['./pracownicy-pracownika.component.scss'],
  imports: [RouterOutlet],
})
export class PracownicyPracownikaComponent implements OnInit {
  constructor(public workersTable_: WorkersTableService) {}

  ngOnInit() {
    this.workersTable_.pobierzListePracownikow();
  }
}
