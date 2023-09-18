import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-ciasteczka-komunikat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ciasteczka-komunikat.component.html',
  styleUrls: ['./ciasteczka-komunikat.component.scss'],
})
export class CiasteczkaKomunikatComponent implements OnInit {
  cookiesDisplay = false;

  constructor(private cookies_: CookieService) {}

  ngOnInit() {
    this.cookiesDisplay = !this.cookies_.hasKey('cookies');
  }

  close() {
    this.cookies_.put('cookies', 'true', {
      expires: new Date(new Date().setFullYear(2999)),
      sameSite: 'lax',
      secure: false,
    });
    this.cookiesDisplay = false;
  }
}
