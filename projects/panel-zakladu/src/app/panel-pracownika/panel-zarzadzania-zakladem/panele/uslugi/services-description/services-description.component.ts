import { Component, Input } from '@angular/core';
import { Usluga } from '../../../../../klasy/panelPracownika/usluga/usluga';
import { NgxEditorComponent } from '../../../komponenty/ngx-editor/ngx-editor.component';
import { NgForOf } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services-description',
  standalone: true,
  imports: [NgxEditorComponent, NgForOf],
  templateUrl: './services-description.component.html',
  styleUrl: './services-description.component.scss',
})
export class ServicesDescriptionComponent {
  @Input() usluga: Usluga = new Usluga();

  constructor(public activeModal: NgbActiveModal) {}
}
