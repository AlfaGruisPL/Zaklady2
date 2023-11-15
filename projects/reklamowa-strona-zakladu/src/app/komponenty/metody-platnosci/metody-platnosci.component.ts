import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanePodstawoweService } from '../../serwisy/dane-podstawowe.service';
import { AnimationService } from '../../serwisy/animation.service';

@Component({
  selector: 'app-metody-platnosci',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metody-platnosci.component.html',
  styleUrls: ['./metody-platnosci.component.scss'],
})
export class MetodyPlatnosciComponent {
  constructor(public dane_: DanePodstawoweService, public animation_: AnimationService) {}
}
