import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { skip, take } from 'rxjs';

@Component({
  selector: 'app-strona-reprezentacyjna-pracownika',
  templateUrl: './strona-reprezentacyjna-pracownika.component.html',
  styleUrls: ['./strona-reprezentacyjna-pracownika.component.scss'],
})
export class StronaReprezentacyjnaPracownikaComponent implements OnInit {
  randomIframeNumber = 123;
  linkDoPodlgadu = '';
  bezpiecznyLink: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer, private danePodreczne_: PodreczneDaneService) {}

  ngOnInit() {
    if (this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu != '') {
      this.pobierz();
    }
    this.danePodreczne_.danePodreczneObserveble.pipe(skip(1), take(1)).subscribe(dane => {
      this.pobierz();
    });
  }

  pobierz() {
    this.linkDoPodlgadu =
      'http://' +
      this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu +
      '.mojzaklad.pl/?dummyVar=' +
      this.randomIframeNumber;
    this.bezpiecznyLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu);
  }

  OdswiezPodglad() {
    this.randomIframeNumber = Math.round(Math.random() * 1000000);
    this.bezpiecznyLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu);
  }
}
