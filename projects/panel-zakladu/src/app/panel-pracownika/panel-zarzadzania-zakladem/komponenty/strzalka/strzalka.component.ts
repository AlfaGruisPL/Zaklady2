import {Component, Input, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-strzalka',
  templateUrl: './strzalka.component.html',
  styleUrls: ['./strzalka.component.scss'],
  imports: [
    CommonModule
  ],
  standalone: true
})
export class StrzalkaComponent {
  @Input() ScrollTop = 0;
  wyswietlStrzalke = false;
  strzalkaKreciSie = false;

  constructor(private router: Router) {
  }

  private poprzedniaWysokosc = 0;

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
    const scrollStep = -scrollDiv.scrollTop / 10; // Skok przewijania w każdej iteracji
    let scrollInterval = setInterval(function () {
      if (scrollDiv.scrollTop !== 0) {
        scrollDiv.scrollTop += scrollStep;
      } else {
        clearInterval(scrollInterval); // Zatrzymanie animacji po osiągnięciu góry
      }
    }, 7); // Częstotliwość iteracji (szybkość animacji)
  }
}
