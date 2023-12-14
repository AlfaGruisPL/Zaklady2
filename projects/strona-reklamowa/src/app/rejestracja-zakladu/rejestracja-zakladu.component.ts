import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";


import { CommonModule, Location } from "@angular/common";
import { RejestracjaZakladu, RejestracjaZakladuDTO } from "../../../../panel-zakladu/src/app/klasy/rejestracja-zakladu";
import { ListonoszService } from "../serwisy/listonosz.service";
import { Drzwi } from "../../../../panel-zakladu/src/app/enum/drzwi";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCircleLeft, faEye, faEyeSlash, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { TippyDirective } from "@ngneat/helipopper";
import { environment } from "../../environments/environment";


@Component({
  selector: "app-rejestracja-zakladu",
  standalone: true,
  templateUrl: "./rejestracja-zakladu.component.html",
  styleUrls: ["./rejestracja-zakladu.component.scss"],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    TippyDirective,
    RouterLink
  ]
})
export class RejestracjaZakladuComponent implements OnInit {
  public daneRejestracji = new RejestracjaZakladu();
  public podgladWlaczJeden: boolean = false;
  public podgladWlaczDwa: boolean = false;
  public rejestracjaUdana = false;

  public env = environment;
  public strzalka = false;
  protected readonly eval = eval;
  protected readonly faCircleLeft = faCircleLeft;
  protected readonly faQuestionCircle = faQuestionCircle;
  protected readonly faEye = faEye;
  protected readonly faEyeSlash = faEyeSlash;

  constructor(
    private listonosz: ListonoszService,
    private location: Location,
    private routing: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.routing.queryParams.subscribe(k => {
      this.strzalka = k["strzalka"];
    });
  }

  public zarejestruj() {
    this.daneRejestracji.hasloSpelniaWymagania = true;
    this.daneRejestracji.czyHaslaTakieSame_ = true;
    this.daneRejestracji.czyWszystkoPoprawne = true;
    this.daneRejestracji.identyfikatorWykorzystany = false;
    this.daneRejestracji.emailWykorzystany = false;
    this.daneRejestracji.nmumerTelefonuWykorzystany = false;
    this.daneRejestracji.rejestracjaUdana = true;
    var czyHaslaTakieSame = this.daneRejestracji.czyHaslaTakieSame();
    var czyDaneDobre = this.daneRejestracji.czyWszystkiePolaUzupelnione();
    var czywalidacjadobra = this.daneRejestracji.czyDanePoprawne();
    if (!czyDaneDobre || !czyHaslaTakieSame) {
      return;
    }
    if (!this.daneRejestracji.walidacjaHasla()) {
      return;
    }
    if (czyDaneDobre && czyHaslaTakieSame && czywalidacjadobra && this.daneRejestracji.hasloSpelniaWymagania) {
      const daneDTO = new RejestracjaZakladuDTO(this.daneRejestracji);
      this.daneRejestracji.przyciskAktywny = false;
      this.listonosz
        .wyslij(Drzwi.dodajZaklad, daneDTO)
        .then(k => {
          this.rejestracjaUdana = true;
        })
        .catch(error => {
          switch (error["error"]["reasonCode"]) {
            case 1:
            case 2:
              this.daneRejestracji.emailWykorzystany = true;
              break;
            case 3:
              this.daneRejestracji.nmumerTelefonuWykorzystany = true;
              break;
            case 4:
              this.daneRejestracji.identyfikatorWykorzystany = true;
              break;

            default:
              this.daneRejestracji.rejestracjaUdana = false;
              break;
          }
        })
        .finally(() => {
          this.daneRejestracji.przyciskAktywny = true;
        });
    }
  }

  public powrotOJedenKrok() {
    this.location.back();
  }
}
