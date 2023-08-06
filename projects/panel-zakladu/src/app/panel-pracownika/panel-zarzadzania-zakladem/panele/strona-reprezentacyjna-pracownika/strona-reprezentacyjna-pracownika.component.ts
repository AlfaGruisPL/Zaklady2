import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-strona-reprezentacyjna-pracownika',
  templateUrl: './strona-reprezentacyjna-pracownika.component.html',
  styleUrls: ['./strona-reprezentacyjna-pracownika.component.scss']
})
export class StronaReprezentacyjnaPracownikaComponent implements OnInit {
  randomIframeNumber = 123;
  linkDoPodlgadu = "http://smtp.fenek.tech:4000/?dummyVar=" + this.randomIframeNumber
  bezpiecznyLink: SafeResourceUrl = ''

  constructor(private sanitizer: DomSanitizer) {
    this.bezpiecznyLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu);
  }

  ngOnInit() {

  }

  OdswiezPodglad() {
    this.randomIframeNumber = Math.round(Math.random() * 1000000)
    this.bezpiecznyLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkDoPodlgadu);

  }
}
