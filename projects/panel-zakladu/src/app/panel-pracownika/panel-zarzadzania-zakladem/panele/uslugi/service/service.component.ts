import { Component, Input } from '@angular/core';
import { faBook, faMinusCircle, faPerson } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usluga } from '../../../../../klasy/panelPracownika/usluga/usluga';
import { UslugiPrzypisaniPracownicyComponent } from './uslugi-przypisani-pracownicy/uslugi-przypisani-pracownicy.component';
import { ServicesDescriptionComponent } from './services-description/services-description.component';
import { take } from 'rxjs';
import { NgbModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { KomunikatUniwersalnyService } from '../../../../../komponets/komunikat-uniwersalny/komunikat-uniwersalny.service';
import { UslugiService } from '../uslugi.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'tr [app-service]',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, NgbTypeahead],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  @Input({ required: true }) usluga!: Usluga;
  @Input({ required: true }) index!: number;
  protected readonly faBook = faBook;
  protected readonly faPerson = faPerson;
  protected readonly faMinusCircle = faMinusCircle;

  constructor(
    private service_: UslugiService,
    private modal: NgbModal,
    private defaultPrompt: KomunikatUniwersalnyService
  ) {}

  public modyfikacjaPracownikow(usluga: Usluga) {
    const okno = this.modal.open(UslugiPrzypisaniPracownicyComponent, {
      size: 'lg',
    });
    okno.componentInstance.usluga = usluga;

    okno.componentInstance.employees = this.service_.pracownicy;
  }

  public modifyDescription(service: Usluga) {
    const okno = this.modal.open(ServicesDescriptionComponent, {
      size: 'lg',
    });
    okno.componentInstance.usluga = service;
  }

  public usunWiersz(index: number) {
    const prompt = this.defaultPrompt.open('Czy na pewno chcesz usunąć usługę?', '');
    prompt.addButton('Nie', { defaultNo: true });
    prompt
      .addButton('Tak', { defaultYes: true })
      .pipe(take(1))
      .subscribe(() => {
        let k = 0;
        this.service_.listaUslug = this.service_.listaUslug.filter(usluga => {
          if (k == index) {
            k++;
            return false;
          }
          k++;
          return true;
        });
      });
  }
}
