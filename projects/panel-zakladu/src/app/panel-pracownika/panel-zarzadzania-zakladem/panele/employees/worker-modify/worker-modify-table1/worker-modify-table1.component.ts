import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Pracownik } from '../../../../../../klasy/panelPracownika/pracownicy/pracownik';

@Component({
  selector: 'app-worker-modify-table1',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './worker-modify-table1.component.html',
  styleUrl: './worker-modify-table1.component.scss',
})
export class WorkerModifyTable1Component {
  @Input({ required: true }) tryb!: string;

  @Input({ required: true }) iloscKlikniec!: number;
  @Output() iloscKlikniecChange = new EventEmitter<number>();

  @Input({ required: true }) pracownikObj!: Pracownik;
  @Output() pracownikObjChange = new EventEmitter<Pracownik>();
}
