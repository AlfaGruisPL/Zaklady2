import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-stopka-pracownika',
  templateUrl: './stopka-pracownika.component.html',
  styleUrls: ['./stopka-pracownika.component.scss'],
})
export class StopkaPracownikaComponent {
  env = environment;
}
