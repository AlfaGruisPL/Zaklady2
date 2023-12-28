import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PodreczneDaneService } from '../../../../../../serwisy/podreczne-dane.service';
import { skip, take } from 'rxjs';
import { NgIf } from '@angular/common';
import { environment } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-register-page-iframe',
  standalone: true,
  imports: [NgIf],
  templateUrl: './register-page-iframe.component.html',
  styleUrl: './register-page-iframe.component.scss',
})
export class RegisterPageIframeComponent {
  randomIframeNumber = 123;
  linkDoPodlgadu = '';
  bezpiecznyLink: SafeResourceUrl = '';
  env = environment;

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
    if (this.env.production == false) {
      this.linkDoPodlgadu =
        'https://' +
        this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu +
        '.fenek.tech/?dummyVar=' +
        this.randomIframeNumber;
    } else {
      this.linkDoPodlgadu =
        'https://' +
        this.danePodreczne_.danePodreczneObiekt.identyfikatorZakladu +
        '.mojzaklad.pl/?dummyVar=' +
        this.randomIframeNumber;
    }
    this.bezpiecznyLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu);
  }

  OdswiezPodglad() {
    this.randomIframeNumber = Math.round(Math.random() * 1000000);
    this.bezpiecznyLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu);
  }
}
