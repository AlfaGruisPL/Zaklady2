import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  private IntervalCoSekunde: Subscription | null = null;

  ngOnInit() {
    this.IntervalCoSekunde = interval(2000).subscribe(() => {
      console.log(this.router.url);
    });
  }

  ngOnDestroy() {
    this.IntervalCoSekunde?.unsubscribe(); // Wymagane w celu anulowania subskrypcji przy zniszczeniu komponentu
  }
}
