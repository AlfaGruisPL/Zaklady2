import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KomunikatUniwersalnyComponent } from './komunikat-uniwersalny.component';

@Injectable({
  providedIn: 'root',
})
export class KomunikatUniwersalnyService {
  constructor(public modal: NgbModal) {}

  open(title: string, content: string): KomunikatUniwersalnyComponent {
    let component = this.modal.open(KomunikatUniwersalnyComponent);
    component.componentInstance.title = title;
    component.componentInstance.content = content;
    return component.componentInstance;
  }
}
