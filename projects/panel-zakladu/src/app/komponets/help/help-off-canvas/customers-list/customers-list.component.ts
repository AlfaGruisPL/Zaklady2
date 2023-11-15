import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers-list-help',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss', '../help-off-canvas.component.scss'],
})
export class CustomersListHelpComponent {}
