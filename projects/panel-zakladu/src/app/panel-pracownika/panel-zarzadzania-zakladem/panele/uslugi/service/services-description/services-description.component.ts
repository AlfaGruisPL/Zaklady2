import { Component, Input } from '@angular/core';
import { Usluga } from '../../../../../../klasy/panelPracownika/usluga/usluga';
import { NgxEditorComponent } from '../../../../komponenty/ngx-editor/ngx-editor.component';
import { NgForOf } from '@angular/common';
import { NgbActiveModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { SelectImageComponent } from '../../../files/select-image/select-image.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';
import { UslugiService } from '../../uslugi.service';

@Component({
  selector: 'app-services-description',
  standalone: true,
  imports: [NgxEditorComponent, NgForOf, SelectImageComponent, NgbTypeahead, UiSwitchModule],
  templateUrl: './services-description.component.html',
  styleUrl: './services-description.component.scss',
})
export class ServicesDescriptionComponent {
  @Input() usluga: Usluga = new Usluga();

  constructor(public activeModal: NgbActiveModal, private service_: UslugiService) {}

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      map(term => {
        const tmp: Array<any> = [];
        this.service_.listaUslug.forEach(service => {
          if (service.category !== undefined) {
            tmp.push(service.category);
          }
        });
        return term === '' ? [] : tmp.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    );
}
