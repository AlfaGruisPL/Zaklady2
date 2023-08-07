import {Component, OnInit} from '@angular/core';
import {ListonoszService} from "../../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../../enum/drzwi";
import {
  HarmonogramDaneDlaAdministratora
} from "../../../../../klasy/panelPracownika/harmonogram/harmonogramDaneDlaAdministratora";

@Component({
  selector: 'app-harmonogram-podsumowanie-administratora',
  templateUrl: './harmonogram-podsumowanie-administratora.component.html',
  styleUrls: ['./harmonogram-podsumowanie-administratora.component.scss']
})
export class HarmonogramPodsumowanieAdministratoraComponent implements OnInit {
  HarmonogramDaneDlaAdministratora = new HarmonogramDaneDlaAdministratora({})

  constructor(private listonosz: ListonoszService) {
  }

  ngOnInit() {
    this.listonosz.pobierz(Drzwi.harmonogramDniaInformacjeDlaAdministratora).then(dane => {
      this.HarmonogramDaneDlaAdministratora = new HarmonogramDaneDlaAdministratora(dane)
    }).catch(error => {

    })
  }

}
