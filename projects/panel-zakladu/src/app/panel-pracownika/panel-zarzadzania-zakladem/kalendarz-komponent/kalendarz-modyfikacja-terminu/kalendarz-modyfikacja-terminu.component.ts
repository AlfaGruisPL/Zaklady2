import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Wizyta } from '../../../../klasy/panelPracownika/wizyta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';
import { UslugiService } from '../../panele/uslugi/uslugi.service';
import { Usluga } from '../../../../klasy/panelPracownika/usluga/usluga';
import { KalendarzKomponentService } from '../kalendarz-komponent.service';
import { TokenService } from '../../../../serwisy/token.service';
import { ErrorAnalyzerService } from '../../../../serwisy/error-analyzer.service';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { Udane } from '../../../../enum/udane';

@Component({
  selector: 'app-kalendarz-modyfikacja-terminu',
  templateUrl: './kalendarz-modyfikacja-terminu.component.html',
  styleUrls: ['./kalendarz-modyfikacja-terminu.component.scss'],
})
export class KalendarzModyfikacjaTerminuComponent implements OnInit {
  @Input() formualrzRejestracjiWizyty: FormGroup = this.fb.group({});
  public tryb = 'manual';
  public edit = false;
  public wizyta = new Wizyta({});
  kliknieteUslugi: Usluga[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    public kalendarz_: KalendarzKomponentService,
    private listonosz: ListonoszService,
    public token_: TokenService,
    public uslugi_: UslugiService,
    private errorAnalyzer_: ErrorAnalyzerService,
    private komunikaty_: KomunikatyService
  ) {
    this.formualrzRejestracjiWizyty = this.fb.group({
      imie: ['', [Validators.required]],
      nazwisko: ['', [Validators.required]],
      termin: ['', [Validators.required]],
      poczatek: ['12:00', [Validators.required]],
      prefix: ['+48', [Validators.required]],
      koniec: ['12:00', [Validators.required]],
      telefon: ['', [Validators.required]],
      wykonawca: [this.kalendarz_.wybranyPracownik.value, [Validators.required]],
      opis: ['', []],
      cena: [0, [Validators.required]],
      email: ['', []],
    });
  }

  klikniecie(event: any, usluga: Usluga) {
    if (event.target.checked) {
      this.kliknieteUslugi.push(usluga);
    } else {
      this.kliknieteUslugi = this.kliknieteUslugi.filter(k => {
        return k.id != usluga.id;
      });
    }
    this.formualrzRejestracjiWizyty.patchValue({ cena: this.obliczCene() });
  }

  obliczCene(): number {
    let liczba = 0;
    this.kliknieteUslugi.forEach(usluga => (liczba += Number(usluga.cena)));
    return Math.round(liczba * 100) / 100;
  }

  ngOnInit() {
    this.uslugi_.pobieranieDanych();
  }

  wyslij() {
    const data = this.formualrzRejestracjiWizyty.value;
    const uslugiId: number[] = [];
    if (this.tryb == 'auto') {
      this.kliknieteUslugi.forEach(k => {
        uslugiId.push(k.id);
      });
      data['uslugiId'] = uslugiId;
    }
    data['tryb'] = this.tryb;
    if (!this.token_.czyWlasciciel()) {
      data['wykonawca'] = -1;
    }

    this.listonosz
      .wyslij(Drzwi.kalendarzRejestracjaWizytyZPanelu, data)
      .then(k => {
        this.activeModal.close();
        this.komunikaty_.komunikatUdane(Udane.wizytaZostalaZarejestrowana);
      })
      .catch(error => {
        this.errorAnalyzer_.analyze(error);
        console.log(error);
      });
  }

  zmianaOkna(event: any) {
    this.tryb = event.target.value;
  }
}
