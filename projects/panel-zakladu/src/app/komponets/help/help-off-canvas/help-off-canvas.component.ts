import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RegisterVisitHelpComponent } from './register-visit/register-visit.component';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-help-off-canvas',
  standalone: true,
  imports: [CommonModule, RegisterVisitHelpComponent],
  templateUrl: './help-off-canvas.component.html',
  styleUrls: ['./help-off-canvas.component.scss'],
})
export class HelpOffCanvasComponent implements OnInit {
  constructor(private router_: Router, public offcanvas: NgbActiveOffcanvas) {}

  ngOnInit() {
    console.log();
  }

  iSPage(pageName: string) {
    return this.router_.url.indexOf(pageName) != -1;
  }
}
