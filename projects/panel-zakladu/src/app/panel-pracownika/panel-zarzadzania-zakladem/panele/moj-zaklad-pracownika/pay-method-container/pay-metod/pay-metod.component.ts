import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiSwitchModule } from 'ngx-ui-switch';

@Component({
  selector: 'tr [app-pay-metod]',
  standalone: true,
  imports: [UiSwitchModule],
  templateUrl: './pay-metod.component.html',
  styleUrl: './pay-metod.component.scss',
})
export class PayMetodComponent {
  @Input({ required: true }) payMethodName!: string;
  @Input({ required: true }) payMethod!: boolean;
  @Output() payMethodChange = new EventEmitter();

  @Input({ required: true }) zapiszButton!: boolean;
  @Output() zapiszButtonChange = new EventEmitter();
}
