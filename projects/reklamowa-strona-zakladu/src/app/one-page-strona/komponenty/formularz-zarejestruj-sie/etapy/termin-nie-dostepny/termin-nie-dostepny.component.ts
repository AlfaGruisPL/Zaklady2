import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-termin-nie-dostepny',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './termin-nie-dostepny.component.html',
  styleUrls: ['./termin-nie-dostepny.component.scss', '../../formularz-zarejestruj-sie.component.scss'],
})
export class TerminNieDostepnyComponent {
  @Output() wyslijKrok: EventEmitter<number> = new EventEmitter();
}
