import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Wizyta} from "../../../../klasy/panelPracownika/wizyta";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {UslugiService} from "../../panele/uslugi/uslugi.service";
import {Usluga} from "../../../../klasy/panelPracownika/usluga/usluga";

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

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              private listonosz: ListonoszService,
              public uslugi_: UslugiService) {
    this.formualrzRejestracjiWizyty = this.fb.group({
      imie: ['', [Validators.required]],
      nazwisko: ['', [Validators.required]],
      termin: ['', [Validators.required]],
      poczatek: ['12:00', [Validators.required]],
      prefix: ['', [Validators.required]],
      koniec: ['12:00', [Validators.required]],
      telefon: ['', [Validators.required]],
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
    if (this.tryb = 'auto') {
      this.kliknieteUslugi.forEach(k => {
        uslugiId.push(k.id)
      })
      data['uslugiId'] = uslugiId
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
    if (this.tryb == 'manual') {
      this.activeModal.update({size: ''})

    } else {
      this.activeModal.update({size: 'lg'})

    }
  }
}
