import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RegisterVisitHelpComponent } from './register-visit/register-visit.component';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { PaymentHelpComponent } from './payment/payment.component';
import { CustomersListHelpComponent } from './customers-list/customers-list.component';

@Component({
  selector: 'app-help-off-canvas',
  standalone: true,
  imports: [CommonModule, RegisterVisitHelpComponent, PaymentHelpComponent, CustomersListHelpComponent],
  templateUrl: './help-off-canvas.component.html',
  styleUrls: ['./help-off-canvas.component.scss'],
})
export class HelpOffCanvasComponent implements OnInit {
  pageFound = false;

  constructor(private router_: Router, public offcanvas: NgbActiveOffcanvas) {}

  ngOnInit() {
    console.log();
  }

  iSPage(pageName: string) {
    const found = this.router_.url.indexOf(pageName) != -1;
    if (found) this.pageFound = true;
    return found;
  }
}
