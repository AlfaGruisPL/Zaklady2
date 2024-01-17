import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PayMetodComponent } from './pay-metod/pay-metod.component';
import { MojZaklad } from '../../../../../klasy/panelPracownika/mojZaklad/moj-zaklad';

@Component({
  selector: 'app-pay-method-container',
  standalone: true,
  imports: [PayMetodComponent],
  templateUrl: './pay-method-container.component.html',
  styleUrl: './pay-method-container.component.scss',
})
export class PayMethodContainerComponent {
  @Input({ required: true }) mojZakladKlasa!: MojZaklad;
  @Output() mojZakladKlasaChange = new EventEmitter();

  @Input({ required: true }) zapiszButton!: boolean;
  @Output() zapiszButtonChange = new EventEmitter();
}
