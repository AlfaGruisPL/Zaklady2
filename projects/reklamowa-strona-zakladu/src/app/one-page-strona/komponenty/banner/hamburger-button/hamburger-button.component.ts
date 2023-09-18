import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NawigacjaService } from '../../../../serwisy/nawigacja.service';
import { DanePodstawoweService } from '../../../../serwisy/dane-podstawowe.service';

@Component({
  selector: 'app-hamburger-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.scss'],
})
export class HamburgerButtonComponent implements OnInit {
  openHamburger = false;

  constructor(
    public nawigacja: NawigacjaService,
    public danePodstawowe: DanePodstawoweService,
    private eRef: ElementRef
  ) {}

  open() {
    this.openHamburger = !this.openHamburger;
  }

  close() {
    this.openHamburger = false;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: { target: any }) {
    if (event.target.closest('.nic') == null && this.openHamburger && !event.target.closest('app-hamburger-button')) {
      this.openHamburger = false;
    }
  }

  ngOnInit() {
    const div = document.getElementById('menuDiv');
    if (div) {
      // @ts-ignore
      div.parentNode.parentNode.parentNode.parentNode.append(div);
    }
  }
}
