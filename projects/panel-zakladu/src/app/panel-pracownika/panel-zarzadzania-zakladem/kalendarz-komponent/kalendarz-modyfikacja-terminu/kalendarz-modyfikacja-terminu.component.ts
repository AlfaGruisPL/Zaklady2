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
import { environment } from '../../../../../environments/environment';
import { Funkcje } from '../../../../funkcje';
import * as EmailValidator from 'email-validator';

@Component({
  selector: 'app-kalendarz-modyfikacja-terminu',
  templateUrl: './kalendarz-modyfikacja-terminu.component.html',
  styleUrls: ['./kalendarz-modyfikacja-terminu.component.scss'],
})
export class KalendarzModyfikacjaTerminuComponent implements OnInit {
  @Input() formualrzRejestracjiWizyty: FormGroup = this.fb.group({});
  @Input() parentNgbActiveModal: NgbActiveModal | undefined;
  public auto = true;
  public edit = false;
  public wizyta = new Wizyta({});
  kliknieteUslugi: Usluga[] = [];
  buttonBlock = false;
  env = environment;

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
    if (Funkcje.doPracy()) {
      this.formualrzRejestracjiWizyty = this.fb.group({
        imie: ['Korneliia', [Validators.required]],
        nazwisko: ['Mushak', [Validators.required]],
        termin: ['', [Validators.required]],
        poczatek: ['12:00', [Validators.required]],
        prefix: ['+48', [Validators.required]],
        confirmed: [''],

        koniec: ['12:00', [Validators.required]],
        telefon: ['530322879', [Validators.required]],
        wykonawca: [this.kalendarz_.wybranyPracownik.value, [Validators.required]],
        opis: ['', []],
        cena: [8, [Validators.required]],
        email: ['alfagruis@gmail.com', []],
      });
    } else {
      this.formualrzRejestracjiWizyty = this.fb.group({
        imie: ['', [Validators.required]],
        nazwisko: ['', [Validators.required]],
        termin: ['', [Validators.required]],
        poczatek: ['12:00', [Validators.required]],
        prefix: ['+48', [Validators.required]],
        confirmed: [''],

        koniec: ['12:00', [Validators.required]],
        telefon: ['', [Validators.required]],
        wykonawca: [this.kalendarz_.wybranyPracownik.value, [Validators.required]],
        opis: ['', []],
        cena: [0, [Validators.required]],
        email: ['', []],
      });
    }
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
    this.formualrzRejestracjiWizyty.patchValue({ koniec: this.obliczCzas() });
  }

  obliczCzas(): string {
    let czas = 0;
    this.kliknieteUslugi.forEach(usluga => (czas += Number(usluga.czas)));
    const startVisit = this.formualrzRejestracjiWizyty.controls['poczatek'].value.split(':');
    const dateStartVisit = new Date().setHours(startVisit[0], startVisit[1], 0, 0);
    const newDate = new Date(dateStartVisit + czas * 1000 * 60).toLocaleTimeString();
    return `${newDate.split(':')[0]}:${newDate.split(':')[1]}`;
  }

  obliczCene(): number {
    let liczba = 0;
    this.kliknieteUslugi.forEach(usluga => (liczba += Number(usluga.cena)));
    return Math.round(liczba * 100) / 100;
  }

  ngOnInit() {
    this.uslugi_.pobieranieDanych();
  }

  sendHandler() {
    ///walidacja Email jeśli nie pusty
    const emailValue = this.formualrzRejestracjiWizyty.controls['email'].value;
    if (emailValue.length > 0) {
      if (!EmailValidator.validate(emailValue)) {
        this.formualrzRejestracjiWizyty.controls['email'].setErrors({ email: false });
        this.komunikaty_.komunikatInfo('');
        return;
      }
    }
    this.buttonBlock = true;
    const data = this.formualrzRejestracjiWizyty.value;
    const uslugiId: number[] = [];
    if (this.auto) {
      this.kliknieteUslugi.forEach(k => {
        uslugiId.push(k.id);
      });
      data['uslugiId'] = uslugiId;
    }
    if (!this.edit) {
      this.send(data);
    } else {
      this.update(data);
    }
  }

  zmianaOkna(event: any) {
    this.auto = !event;
  }

  size() {
    if (document.body.clientWidth < 700) return 'small';
    return 'medium';
  }

  private send(data: any) {
    //todo tu trzeba się zastanowić bo nw o co i jak i gdzie i po co
    //if (!this.token_.czyWlasciciel()) {
    // data['wykonawca'] = -1;
    //}=
    // @ts-ignore
    delete data.confirmed;
    data['tryb'] = this.auto ? 'auto' : 'manual';
    this.listonosz
      .wyslij(Drzwi.kalendarzRejestracjaWizytyZPanelu, data)
      .then(k => {
        this.activeModal.close();
        this.komunikaty_.komunikatUdane(Udane.wizytaZostalaZarejestrowana);
      })
      .catch(error => {
        this.errorAnalyzer_.analyze(error);
        console.log(error);
      })
      .finally(() => {
        this.buttonBlock = false;
      });
  }

  private update(data: Object) {
    this.listonosz
      .aktualizuj(Drzwi.wizytaAktualizacja + this.wizyta.id, data)
      .then(k => {
        this.activeModal.close();
        this.komunikaty_.komunikatUdane(Udane.wizytaZostalaZmodyfikowana);
        this.kalendarz_.pobierzDane();
        this.parentNgbActiveModal?.close();
      })
      .catch(error => {
        this.errorAnalyzer_.analyze(error);
        console.log(error);
      })
      .finally(() => {
        this.buttonBlock = false;
      });
  }
}
