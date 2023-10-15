import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import {
  UstawieniaStronyReklamowej,
  UstawieniaStronyReklamowejDto,
} from '../../../../../klasy/panelPracownika/stronaReklamowa/ustawienia-strony-reklamowej';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { KomunikatyService } from '../../../../../serwisy/komunikaty.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSuneditorComponent } from 'ngx-suneditor';
import { Bledy } from '../../../../../enum/bledy';
import { Udane } from '../../../../../enum/udane';

import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';

@Component({
  selector: 'app-strona-reprezentacyjna-ustawienia',
  templateUrl: './strona-reprezentacyjna-ustawienia.component.html',
  styleUrls: ['./strona-reprezentacyjna-ustawienia.component.scss'],
})
export class StronaReprezentacyjnaUstawieniaComponent implements AfterViewInit {
  @ViewChild(NgxSuneditorComponent) ngxSunEditor: NgxSuneditorComponent | undefined;
  @Output() odswiez = new EventEmitter();
  ustawienia = new UstawieniaStronyReklamowej();
  bannerZdjecie_formData: undefined | FormData = undefined;
  zdjecieBanerRefresh = '?random=' + Math.round(Math.random() * 10000);
  LogoZdjecie_formData: undefined | FormData = undefined;
  formualrz: FormGroup = this.fb.group({});
  protected readonly environment = environment;
  protected readonly String = String;

  constructor(
    private listonosz: ListonoszService,
    public danePodreczne_: PodreczneDaneService,
    private komunikaty: KomunikatyService,
    private fb: FormBuilder
  ) {
    this.formualrz = this.fb.group({
      //  opisZakladuWStopce: ['', [Validators.required]],
    });
  }

  ngAfterViewInit() {
    const buttonList = [
      ['undo', 'redo'],
      ['font', 'fontSize', 'formatBlock'],
      ['paragraphStyle', 'blockquote'],
      ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
      ['fontColor', 'hiliteColor'],
      ['removeFormat'],
      ['outdent', 'indent'],
      ['align', 'horizontalRule', 'list', 'lineHeight'],
      ['table', 'link'],
    ];
    this.ngxSunEditor?.setToolbarButtons(buttonList);
    this.ngxSunEditor?.setOptions({ height: '300px' });
    this.ngxSunEditor?.disabled();
  }

  ngOnInit() {
    this.listonosz.pobierz(Drzwi.UstawieniaStronyReklamowej).then(dane => {
      this.ustawienia.wstawDane(dane);
      this.formualrz.patchValue(dane);

      // @ts-ignore
      this.ngxSunEditor?.getEditor().setContents(this.ustawienia.opisZakladuWStopce);
      console.log(this.ngxSunEditor?.getEditor());
      this.ngxSunEditor?.enabled();
    });
  }

  async zapisz() {
    const dane = new UstawieniaStronyReklamowejDto(this.ustawienia);
    dane.opisZakladuWStopce = this.ngxSunEditor?.getContents(true);
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
        this.komunikaty.komunikatUdane(Udane.bannerStronyZaktualizowany);
      }
      console.warn('wysylanie logo');
      if (this.LogoZdjecie_formData != undefined) {
        console.warn('wysylanie logo');
        await this.listonosz.wyslij(Drzwi.logoStronyReklamowej, this.LogoZdjecie_formData);
        this.komunikaty.komunikatUdane(Udane.logoZakladuZaktualizowane);
      }
      this.zdjecieBanerRefresh = '?random=' + Math.round(Math.random() * 10000);
      this.odswiez.emit();
    } catch (error) {
      console.error(error);
      this.komunikaty.komunikatBledu(Bledy.aktualizacjaNieUdana);
      this.komunikaty.zdjecieProfiloweNieZmodyfikowane();
    }
  }
}
