import {Component, OnInit} from '@angular/core';
import {PodreczneDaneService} from "../serwisy/podreczne-dane.service";

@Component({
  selector: 'app-panel-pracownika',
  templateUrl: './panel-pracownika.component.html',
  styleUrls: ['./panel-pracownika.component.scss']
})
export class PanelPracownikaComponent implements OnInit {

  ngOnInit() {
    console.log(1)
    //this.podreczneDane_.identyfikacjaZakladu()
  }

  constructor(private podreczneDane_: PodreczneDaneService) {
  }


}
