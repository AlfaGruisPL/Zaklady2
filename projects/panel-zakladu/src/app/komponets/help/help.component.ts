import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { HelpOffCanvasComponent } from './help-off-canvas/help-off-canvas.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  display = false;
  @Input() simple = false;

  constructor(private offcanvasService: NgbOffcanvas) {}

  ngOnInit() {}

  openHelp() {
    this.display = true;
    const offcanvasRef = this.offcanvasService.open(HelpOffCanvasComponent);
    offcanvasRef.hidden.pipe(take(1)).subscribe(k => {
      this.displayButton();
    });
  }

  private displayButton() {
    setTimeout(() => {
      this.display = false;
    }, 1000);
  }
}
