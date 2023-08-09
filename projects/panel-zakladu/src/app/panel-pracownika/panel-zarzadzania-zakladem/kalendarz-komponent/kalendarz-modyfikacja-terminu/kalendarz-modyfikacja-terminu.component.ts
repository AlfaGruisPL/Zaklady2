import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Wizyta} from "../../../../klasy/panelPracownika/wizyta";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {UslugiService} from "../../panele/uslugi/uslugi.service";
import {Usluga} from "../../../../klasy/panelPracownika/usluga/usluga";
import {KalendarzKomponentService} from "../kalendarz-komponent.service";
import {TokenService} from "../../../../serwisy/token.service";

@Component({
  selector: 'app-kalendarz-modyfikacja-terminu',
  templateUrl: './kalendarz-modyfikacja-terminu.component.html',
  styleUrls: ['./kalendarz-modyfikacja-terminu.component.scss']
})
export class KalendarzModyfikacjaTerminuComponent implements OnInit {
  @Input() formualrzRejestracjiWizyty: FormGroup = this.fb.group({})
  public tryb = 'manual'
  public wizyta = new Wizyta({})
  kliknieteUslugi: Usluga[] = []
  formualrzDirty = false

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              public kalendarz_: KalendarzKomponentService,
              private listonosz: ListonoszService,
              public token_: TokenService,
              public uslugi_: UslugiService) {
    this.formualrzRejestracjiWizyty = this.fb.group({
      imie: ['', [Validators.required]],
      nazwisko: ['', [Validators.required]],
      termin: ['', [Validators.required]],
      poczatek: ['12:00', [Validators.required]],
      prefix: ['+48', [Validators.required]],
      koniec: ['12:00', [Validators.required]],
      telefon: ['', [Validators.required]],
      wykonawca: [this.kalendarz_.wlasciciel.id, [Validators.required]],
      opis: ['', []],
      cena: [0, [Validators.required]],
      email: ['', []]
    })


  }

  klikniecie(event: any, usluga: Usluga) {
    if (event.target.checked) {
      this.kliknieteUslugi.push(usluga)
    } else {
      this.kliknieteUslugi = this.kliknieteUslugi.filter(k => {
        return k.id != usluga.id
      })
      console.log(this.kliknieteUslugi)
    }
    this.formualrzRejestracjiWizyty.patchValue({cena: this.obliczCene()})
  }

  obliczCene(): number {
    let liczba = 0
    this.kliknieteUslugi.forEach((usluga) => liczba += Number(usluga.cena));
    return Math.round(liczba * 100) / 100
  }

  ngOnInit() {


    this.uslugi_.pobieranieDanych()
  }

  wyslij() {
    const data = this.formualrzRejestracjiWizyty.value
    const uslugiId: number[] = []
    if (this.tryb == 'auto') {
      this.kliknieteUslugi.forEach(k => {
        uslugiId.push(k.id)
      })
      data['uslugiId'] = uslugiId
    }
    data['tryb'] = this.tryb
    if (!this.token_.czyWlasciciel()) {
      data['wykonawca'] = -1;
    }

    this.listonosz.wyslij(Drzwi.kalendarzRejestracjaWizytyZPanelu, data).then(k => {
      this.activeModal.close()
      console.log(k)
    }).catch(error => {
      console.log(error)
    })
  }

  zmianaOkna(event: any) {
    this.tryb = event.target.value
  }
}
