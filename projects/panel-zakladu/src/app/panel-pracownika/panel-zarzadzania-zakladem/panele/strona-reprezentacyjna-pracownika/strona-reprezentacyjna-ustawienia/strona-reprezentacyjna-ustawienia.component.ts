import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import {
  UstawieniaStronyReklamowej,
  UstawieniaStronyReklamowejDto,
} from '../../../../../klasy/panelPracownika/stronaReklamowa/ustawienia-strony-reklamowej';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { KomunikatyService } from '../../../../../serwisy/komunikaty.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-strona-reprezentacyjna-ustawienia',
  templateUrl: './strona-reprezentacyjna-ustawienia.component.html',
  styleUrls: ['./strona-reprezentacyjna-ustawienia.component.scss'],
})
export class StronaReprezentacyjnaUstawieniaComponent {
  protected readonly environment = environment;
  @Output() odswiez = new EventEmitter();
  ustawienia = new UstawieniaStronyReklamowej();
  bannerZdjecie_formData: undefined | FormData = undefined;
  zdjecieBanerRefresh = '?random=' + Math.round(Math.random() * 10000);
  LogoZdjecie_formData: undefined | FormData = undefined;
  formualrz: FormGroup = this.fb.group({});

  constructor(private listonosz: ListonoszService, private komunikaty: KomunikatyService, private fb: FormBuilder) {
    this.formualrz = this.fb.group({
      opisZakladu: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.listonosz.pobierz(Drzwi.UstawieniaStronyReklamowej).then(dane => {
      this.ustawienia.wstawDane(dane);
      console.log(this.ustawienia);
    });
  }

  async zapisz() {
    const dane = new UstawieniaStronyReklamowejDto(this.ustawienia);
    this.listonosz.wyslij(Drzwi.UstawieniaStronyReklamowej, dane).then(dane => {
      console.log('udane');
      this.odswiez.emit();
    });

    await this.wyslijZdjecie();
  }

  wybierzPlik(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.bannerZdjecie_formData = new FormData();
      this.bannerZdjecie_formData.append('file', file);
      //  this.bannerZdjecieUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.formData.get('file')));
    }
  }

  wybierzPlikLogo(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.LogoZdjecie_formData = new FormData();
      this.LogoZdjecie_formData.append('file', file);
    }
  }

  private async wyslijZdjecie() {
    try {
      if (this.bannerZdjecie_formData != undefined) {
        await this.listonosz.wyslij(Drzwi.banerStronyReklamowej, this.bannerZdjecie_formData);
        this.komunikaty.zdjecieProfiloweZmodyfikowane();
      }
      console.warn('wysylanie logo');
      if (this.LogoZdjecie_formData != undefined) {
        console.warn('wysylanie logo');
        await this.listonosz.wyslij(Drzwi.logoStronyReklamowej, this.LogoZdjecie_formData);
        this.komunikaty.zdjecieProfiloweZmodyfikowane();
      }
      this.zdjecieBanerRefresh = '?random=' + Math.round(Math.random() * 10000);
      this.odswiez.emit();
    } catch (error) {
      console.error(error);
      this.komunikaty.zdjecieProfiloweNieZmodyfikowane();
    }
  }
}
