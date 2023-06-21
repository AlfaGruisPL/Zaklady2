import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-podsumowanie',
  templateUrl: './podsumowanie.component.html',
  styleUrls: ['./podsumowanie.component.scss']
})
export class PodsumowanieComponent {
  @Output() wyslijKrok = new EventEmitter<number>();

  public przejdzDalej() {
    this.wyslijKrok.emit(1)
  }
}
