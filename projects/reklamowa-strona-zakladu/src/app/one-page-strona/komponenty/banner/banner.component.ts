import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(private router: Router) {
  }

  przeniesDoPanelu(element: string): void {
    this.router.navigate(['.'])
    setTimeout(() => {
      this.router.navigate(['.'], {fragment: element})
    }, 0)
  }
}
