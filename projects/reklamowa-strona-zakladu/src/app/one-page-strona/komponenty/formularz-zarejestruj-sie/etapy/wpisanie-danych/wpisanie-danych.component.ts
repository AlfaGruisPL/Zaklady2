import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-wpisanie-danych',
  templateUrl: './wpisanie-danych.component.html',
  styleUrls: ['./wpisanie-danych.component.scss']
})
export class WpisanieDanychComponent {
  @Output() wyslijKrok = new EventEmitter<number>();

  public przejdzDalej() {
    this.wyslijKrok.emit(4)
  }
}
