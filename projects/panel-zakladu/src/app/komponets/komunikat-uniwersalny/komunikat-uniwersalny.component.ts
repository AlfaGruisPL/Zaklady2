import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, Observable, Subject, take } from 'rxjs';
import { RureczkiModule } from '../../rureczki/rureczki.module';

export class UniwersalMessageOption {
  defaultYes = false;
  defaultNo = false;
}

@Component({
  selector: 'app-komunikat-uniwersalny',
  standalone: true,
  imports: [CommonModule, RureczkiModule],
  templateUrl: './komunikat-uniwersalny.component.html',
  styleUrls: ['./komunikat-uniwersalny.component.scss'],
})
export class KomunikatUniwersalnyComponent implements OnInit {
  @Input({ required: true }) title: string = 'Komunikat';
  @Input({ required: true }) content: string = 'tresc';
  buttonList: { text: string; response: string; option: Partial<UniwersalMessageOption> }[] = [];
  close: Subject<any> = new Subject<any>();

  constructor(public activeModal: NgbActiveModal) {}

  addButton(text: string, option: Partial<UniwersalMessageOption>, response: string = text) {
    this.buttonList.push({ text, response, option });

    return this.close.pipe(
      filter(k => k == response),
      take(1)
    );
  }

  ngOnInit() {}

  closed(event: any): Observable<any> {
    this.close.next(event);
    this.activeModal.close();
    return this.close;
  }

  closeParam(param: string): Observable<any> {
    return this.close.pipe(
      filter(k => k == param),
      take(1)
    );
  }
}
