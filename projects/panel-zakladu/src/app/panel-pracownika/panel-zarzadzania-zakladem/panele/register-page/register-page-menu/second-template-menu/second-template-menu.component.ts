import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: '[app-second-template-menu]',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './second-template-menu.component.html',
  styleUrls: ['./second-template-menu.component.scss'],
})
export class SecondTemplateMenuComponent implements OnInit {
  ngOnInit() {
    /* document.querySelectorAll('.Atag').forEach(tag => {
       const parent = tag.parentElement;
       if (parent) {
         const parent2 = parent.parentElement;
         if (parent2) {
           parent2.appendChild(tag);
         }
       }
     });*/
  }
}
