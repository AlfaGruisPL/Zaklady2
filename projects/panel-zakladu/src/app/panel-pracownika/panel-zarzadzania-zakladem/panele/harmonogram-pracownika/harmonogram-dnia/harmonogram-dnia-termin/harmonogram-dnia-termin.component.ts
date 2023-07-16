import {Component, Input} from '@angular/core';
import {Termin} from "../../../../../../klasy/termin";


@Component({
  selector: 'app-harmonogram-dnia-termin',
  templateUrl: './harmonogram-dnia-termin.component.html',
  styleUrls: ['./harmonogram-dnia-termin.component.scss']
})
export class HarmonogramDniaTerminComponent {
  @Input() termin: Termin = new Termin();
  public przesuniecieWPrawo = 150
  public szerokosc = 100;
}
