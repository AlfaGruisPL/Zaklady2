import { Component, OnInit } from '@angular/core';
import { ListonoszService } from '../../../serwisy/listonosz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FontAwesomeService } from '../../../serwisy/font-awesome.service';
import { PodreczneDaneService } from '../../../serwisy/podreczne-dane.service';

@Component({
  selector: 'app-panel-logowania-pracownikow',
  templateUrl: './panel-logowania-pracownikow.component.html',
  styleUrls: ['./panel-logowania-pracownikow.component.scss'],
})
export class PanelLogowaniaPracownikowComponent implements OnInit {
  public email: string = 'korneliamushak@gmail.com';
  public haslo: string = '';
  public czyPrawidloweDane: boolean = true;

  public czyEmailWpisany: boolean = true;
  public czyHasloWpisane: boolean = true;
  public czyWszystkieDaneWpisane: boolean = true;
  public czyWolnoLogowac = true;
  public czyKontoPotwierdzone = true;

  public bladPrzyLogowaniu: boolean = true;

  public Podglad: boolean = false;
  subDomain = '';

  ngOnInit() {}

  latweLogowanie(event: any) {
    this.email = event.target.value.split(',')[0];
    this.haslo = event.target.value.split(',')[1];
  }

  public czyDaneWpisane() {
    this.czyWszystkieDaneWpisane = true;
    if (this.email.length > 0) {
      this.czyEmailWpisany = true;
    } else {
      this.czyEmailWpisany = false;
      this.czyWszystkieDaneWpisane = false;
    }

    if (this.haslo.length > 0) {
      this.czyHasloWpisane = true;
    } else {
      this.czyHasloWpisane = false;
      this.czyWszystkieDaneWpisane = false;
    }
    return this.czyWszystkieDaneWpisane;
  }

  constructor(
    private listonosz: ListonoszService,
    private Router: Router,
    private route: ActivatedRoute,
    private toasts: ToastrService,
    public podreczne_: PodreczneDaneService,
    public fontAwesome: FontAwesomeService
  ) {}

  public logowanie() {
    this.czyPrawidloweDane = true;
    this.czyWolnoLogowac = true;
    this.czyDaneWpisane();
    if (!this.czyWszystkieDaneWpisane) {
      return;
    }
    const dane = {
      email: this.email,
      haslo: this.haslo,
    };
    this.bladPrzyLogowaniu = true;
    this.czyKontoPotwierdzone = true;
    this.listonosz
      .zaloguj(dane)
      .then(udane => {
        this.Router.navigate(['/panelPracownika']);
      })
      .catch(blad => {
        switch (blad['error']['reasonCode']) {
          case 3:
            this.czyWolnoLogowac = false;
            break;
          case 4:
            this.czyKontoPotwierdzone = false;
            break;
          case 5:
            this.czyPrawidloweDane = false;
            break;
          default:
            this.bladPrzyLogowaniu = false;
        }
      });
  }
}
