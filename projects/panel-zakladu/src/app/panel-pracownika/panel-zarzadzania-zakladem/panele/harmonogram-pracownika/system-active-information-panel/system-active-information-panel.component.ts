import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { SystemActivePageActiveComponent } from './system-active-page-active.component';

@Component({
  selector: 'app-system-active-information-panel',
  standalone: true,
  imports: [CommonModule, SystemActivePageActiveComponent],
  templateUrl: './system-active-information-panel.component.html',
  styleUrls: ['./system-active-information-panel.component.scss'],
})
export class SystemActiveInformationPanelComponent implements OnInit {
  public status = -2;
  public active = false;

  constructor(public http_: ListonoszService) {}

  ngOnInit() {
    this.http_.pobierz(Drzwi.systemActive).then(dane => {
      this.status = dane.status;
      this.active = dane.active;
    });
  }
}
