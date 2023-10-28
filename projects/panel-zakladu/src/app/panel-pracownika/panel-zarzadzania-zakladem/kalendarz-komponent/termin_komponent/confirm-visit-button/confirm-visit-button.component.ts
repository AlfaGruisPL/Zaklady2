import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Wizyta } from '../../../../../klasy/panelPracownika/wizyta';
import { VisitService } from '../visit.service';
import { KomunikatUniwersalnyService } from '../../../../../komponets/komunikat-uniwersalny/komunikat-uniwersalny.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-confirm-visit-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './confirm-visit-button.component.html',
  styleUrls: ['./confirm-visit-button.component.scss'],
})
export class ConfirmVisitButtonComponent {
  @Input({ required: true }) visit!: Wizyta;
  @Output() updateComplete = new EventEmitter(true);

  constructor(public visit_: VisitService, private unuwersalMessage_: KomunikatUniwersalnyService) {}

  async disConfirmVisit() {
    const message = this.unuwersalMessage_.open(
      'Czy jesteś pewny?',
      'Czy na pewno chcesz oznaczyć wizytę jako niewykonaną? <br> Nie będzie wtedy wliczana do statystyk.'
    );
    message
      .addButton('Tak', { defaultYes: true })
      .pipe(take(1))
      .subscribe(async k => {
        await this.visit_.disConfirmVisit(this.visit, !this.updateComplete.observed);
        this.updateComplete.emit(true);
      });
    message.addButton('Nie', { defaultNo: true });
  }

  async confirmVisit() {
    await this.visit_.confirmVisit(this.visit, !this.updateComplete.observed);
    this.updateComplete.emit(true);
  }
}
