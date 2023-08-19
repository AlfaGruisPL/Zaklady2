import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kalendarz-przerwa-dzien-wolny',
  templateUrl: './kalendarz-przerwa-dzien-wolny.component.html',
  styleUrls: ['./kalendarz-przerwa-dzien-wolny.component.scss'],
})
export class KalendarzPrzerwaDzienWolnyComponent {
  @Input() godzinaRozpoczecia = new Date();
  @Input() godzinaZakonczenia = new Date();
}
