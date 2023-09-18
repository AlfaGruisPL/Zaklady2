import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strzalka',
  templateUrl: './strzalka.component.html',
  styleUrls: ['./strzalka.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class StrzalkaComponent {
  @Input() ScrollTop = 0;
  wyswietlStrzalke = false;
  strzalkaKreciSie = false;
  private poprzedniaWysokosc = 0;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    let scrollY = 0;
    if (this.ScrollTop == -1) {
      scrollY = window.scrollY || window.pageYOffset;
    } else {
      scrollY = this.ScrollTop;
    }

    if (this.poprzedniaWysokosc < scrollY) {
      this.strzalkaKreciSie = false;
    }
    this.wyswietlStrzalke = scrollY > window.innerHeight * 0.4;
    this.poprzedniaWysokosc = scrollY;
  }

  strzalka() {
    this.strzalkaKreciSie = true;
    setTimeout(() => {
      this.strzalkaKreciSie = false;
    }, 800);
    const scrollDiv: any = document.getElementById('trescPaneluAdministratoraID');
    scrollDiv.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
