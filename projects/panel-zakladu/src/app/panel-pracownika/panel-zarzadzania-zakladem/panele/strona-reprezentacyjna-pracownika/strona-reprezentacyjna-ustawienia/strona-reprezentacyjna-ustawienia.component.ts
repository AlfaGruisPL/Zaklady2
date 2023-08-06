import {Component, EventEmitter, Output} from '@angular/core';
import {environment} from "../../../../../../environments/environment";
import {
  UstawieniaStronyReklamowej,
  UstawieniaStronyReklamowejDto
} from "../../../../../klasy/panelPracownika/stronaReklamowa/ustawienia-strony-reklamowej";
import {ListonoszService} from "../../../../../serwisy/listonosz.service";
import {KomunikatyService} from "../../../../../serwisy/komunikaty.service";
import {Drzwi} from "../../../../../enum/drzwi";

@Component({
  selector: 'app-strona-reprezentacyjna-ustawienia',
  templateUrl: './strona-reprezentacyjna-ustawienia.component.html',
  styleUrls: ['./strona-reprezentacyjna-ustawienia.component.scss']
})
export class StronaReprezentacyjnaUstawieniaComponent {
  protected readonly environment = environment;
  @Output() odswiez = new EventEmitter()
  ustawienia = new UstawieniaStronyReklamowej()
  bannerZdjecie_formData: undefined | FormData = undefined;
  bannerZdjecieUrl = new FormData();
  zdjecieBanerRefresh = "?random=" + Math.round(Math.random() * 10000);

  constructor(private listonosz: ListonoszService, private komunikaty: KomunikatyService) {
  }

  ngOnInit() {
    this.listonosz.pobierz(Drzwi.UstawieniaStronyReklamowej).then(dane => {
      this.ustawienia.wstawDane(dane)
      console.log(this.ustawienia)
    })
  }

  zapisz() {
    const dane = new UstawieniaStronyReklamowejDto(this.ustawienia)
    this.listonosz.wyslij(Drzwi.UstawieniaStronyReklamowej, dane).then(dane => {
      console.log('udane')
      this.odswiez.emit()
    })
    if (this.bannerZdjecie_formData != undefined) {

      this.wyslijZdjecie().then(dane => {
        console.log('udane')
      }).finally(() => {
        this.zdjecieBanerRefresh = "?random=" + Math.round(Math.random() * 10000);

        this.odswiez.emit()
      })
    }
  }

  wybierzPlik(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.bannerZdjecie_formData = new FormData();
      this.bannerZdjecie_formData.append("file", file);
      // @ts-ignore
      this.bannerZdjecieUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.formData.get('file')));
    }
  }

  private async wyslijZdjecie() {
    if (this.bannerZdjecie_formData != undefined) {
      try {
        await this.listonosz.wyslij("/pliki/banerStronyReklamowej", this.bannerZdjecie_formData)
        this.komunikaty.zdjecieProfiloweZmodyfikowane();
      } catch (error) {

        this.komunikaty.zdjecieProfiloweNieZmodyfikowane();
      }
    }
  }
}
