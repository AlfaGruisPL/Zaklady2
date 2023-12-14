import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-complete',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './register-complete.component.html',
  styleUrls: ['./register-complete.component.scss'],
})
export class RegisterCompleteComponent {}
