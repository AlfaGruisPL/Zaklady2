import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-arrow',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './back-arrow.component.html',
  styleUrl: './back-arrow.component.scss',
})
export class BackArrowComponent {
  protected readonly faArrowCircleLeft = faArrowCircleLeft;

  constructor(private router: Router) {}

  back() {
    history.back();
  }
}
