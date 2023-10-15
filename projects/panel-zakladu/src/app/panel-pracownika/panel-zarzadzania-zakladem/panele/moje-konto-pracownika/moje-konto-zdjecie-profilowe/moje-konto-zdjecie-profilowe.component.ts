import { Component, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../../environments/environment';
import { RureczkiModule } from '../../../../../rureczki/rureczki.module';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { KomunikatyService } from '../../../../../serwisy/komunikaty.service';
import { RouterOutlet } from '@angular/router';
import { KomunikatUniwersalnyService } from '../../../../../komponets/komunikat-uniwersalny/komunikat-uniwersalny.service';

@Component({
  selector: 'app-moje-konto-zdjecie-profilowe',
  standalone: true,
  imports: [CommonModule, RureczkiModule, RouterOutlet],
  templateUrl: './moje-konto-zdjecie-profilowe.component.html',
  styleUrls: ['./moje-konto-zdjecie-profilowe.component.scss'],
})
export class MojeKontoZdjecieProfiloweComponent {
  @Input({ required: true }) modyfikacja = false;
  @Input({ required: true }) idUzytkownika = 0;
  @Input() width = 300;
  @Input() wlasne = true;
  public formData: FormData | undefined = undefined;
  public usunZdjecieProfiloweDTo = false;
  public safeImageUrl: SafeUrl | null = null;
  blokadaPrzycisku = false;
  public fileName = '';
  imageDelete = new EventEmitter();
  protected readonly environment = environment;
  protected readonly undefined = undefined;

  constructor(
    public listonosz: ListonoszService,
    private sanitizer: DomSanitizer,
    public komunikaty: KomunikatyService,
    private komunikatUniwersalny_: KomunikatUniwersalnyService
  ) {}

  wybierzPlik(event: any) {
    this.usunZdjecieProfiloweDTo = false;
    const file: File = event.target.files[0];
    this.fileName = file.name;
    if (file) {
      this.formData = new FormData();
      this.formData.append('file', file);
      // @ts-ignore
      this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.formData.get('file')));
    }
  }

  clearImageSelect() {
    this.safeImageUrl = '';
    this.fileName = '';
  }

  public async wyslijZdjecie(id: number = 0) {
    if (this.formData != undefined) {
      try {
        this.blokadaPrzycisku = true;
        if (id == 0) {
          await this.listonosz.wyslij('/pliki/zdjecieProfilowe', this.formData);
        } else {
          await this.listonosz.wyslij('/pliki/zdjecieProfilowe/' + id, this.formData);
        }
        this.blokadaPrzycisku = false;
        this.komunikaty.zdjecieProfiloweZmodyfikowane();
        this.clearImageSelect();
      } catch (error) {
        this.komunikaty.zdjecieProfiloweNieZmodyfikowane();
      }
    }
  }

  async usunZdjecieProfilowe() {
    const okno = this.komunikatUniwersalny_.open(
      'Czy na pewno chcesz usunąć zdjęcie profilowe?',
      'Usunięcie zostanie wykonane natychmiastowo oraz jest to operacja nie odwracalna'
    );
    okno.addButton('nie', { defaultNo: true });
    okno.addButton('tak', { defaultYes: true }).subscribe(async k => {
      this.blokadaPrzycisku = true;
      try {
        if (this.wlasne) {
          await this.listonosz.usun('/pliki/zdjecieProfilowe');
        } else {
          await this.listonosz.usun('/pliki/zdjecieProfilowe/' + this.idUzytkownika);
        }
        this.blokadaPrzycisku = false;
        this.komunikaty.zdjecieProfiloweUsuniete();
        this.clearImageSelect();
      } catch (error) {
        this.komunikaty.zdjecieProfiloweNieUsuniete();
      }
    });
  }
}
