import { Component, OnInit } from '@angular/core';
import { WorkersTableService } from './workers-table/workers-table.service';

@Component({
  selector: 'app-pracownicy-pracownika',
  templateUrl: './pracownicy-pracownika.component.html',
  styleUrls: ['./pracownicy-pracownika.component.scss'],
})
export class PracownicyPracownikaComponent implements OnInit {
  constructor(public workersTable_: WorkersTableService) {}

  ngOnInit() {
    this.workersTable_.pobierzListePracownikow();
  }

  activeWorker() {
    return this.workersTable_.ListaPracownikow.filter(k => k.archived == false).length;
  }
}
