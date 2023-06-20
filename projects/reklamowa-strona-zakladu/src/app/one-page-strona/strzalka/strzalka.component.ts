import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-strzalka',
  templateUrl: './strzalka.component.html',
  styleUrls: ['./strzalka.component.scss']
})
export class StrzalkaComponent {
  constructor(private router: Router) {
  }

  strzalka() {
    this.router.navigate(['.'])
    setTimeout(() => {
      this.router.navigate(['.'], {fragment: 'poczatek'})
    }, 0)
  }
}
