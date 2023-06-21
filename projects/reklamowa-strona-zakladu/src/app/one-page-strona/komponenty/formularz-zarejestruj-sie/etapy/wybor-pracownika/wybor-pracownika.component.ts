import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-wybor-pracownika',
  templateUrl: './wybor-pracownika.component.html',
  styleUrls: ['./wybor-pracownika.component.scss']
})
export class WyborPracownikaComponent {
  @Output() wyslijKrok = new EventEmitter<number>();

  public przejdzDalej() {
    this.wyslijKrok.emit(2)
  }
}
