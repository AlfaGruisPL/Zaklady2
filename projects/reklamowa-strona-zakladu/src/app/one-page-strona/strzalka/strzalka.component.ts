import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strzalka',
  templateUrl: './strzalka.component.html',
  styleUrls: ['./strzalka.component.scss'],
})
export class StrzalkaComponent {
  wyswietlStrzalke = false;
  strzalkaKreciSie = false;

  constructor(private router: Router) {}

  private poprzedniaWysokosc = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollY = window.scrollY || window.pageYOffset;
    if (this.poprzedniaWysokosc < scrollY) {
      this.strzalkaKreciSie = false;
    }
    this.wyswietlStrzalke = scrollY > window.innerHeight * 0.55;
    this.poprzedniaWysokosc = scrollY;
  }

  strzalka() {
    this.strzalkaKreciSie = true;
    setTimeout(() => {
      this.strzalkaKreciSie = false;
    }, 800);
    this.router.navigate(['.']);
    setTimeout(() => {
      this.router.navigate(['.'], { fragment: 'poczatek' });
    }, 0);
  }
}
