import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../../environments/environment';
import { UiSwitchModule } from 'ngx-ui-switch';

@Component({
  selector: 'app-ustawienia-powiadomien',
  standalone: true,
  imports: [CommonModule, UiSwitchModule],
  templateUrl: './ustawienia-powiadomien.component.html',
  styleUrls: ['./ustawienia-powiadomien.component.scss'],
})
export class UstawieniaPowiadomienComponent {
  environment = environment;
}
