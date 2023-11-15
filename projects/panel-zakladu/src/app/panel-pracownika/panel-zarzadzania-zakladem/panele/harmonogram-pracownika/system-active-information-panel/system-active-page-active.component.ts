import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faExclamation, faPager, faToiletPaper } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-system-active-page-active',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <span class="page" title="Strona reklamowa jest włączona" *ngIf="active && status"
      ><fa-icon [icon]="faPager" />&nbsp;<fa-icon [icon]="faCheck"
    /></span>
    <span class="page disabled" title="Strona reklamowa jest wyłączona" *ngIf="!active || !status"
      ><fa-icon [icon]="faPager" />&nbsp;<fa-icon [icon]="faExclamation"
    /></span>
  `,
  styles: [
    `
      .page {
        position: absolute;
        right: 20px;
        top: -6px;
        font-weight: bolder;
        font-size: 27px;
        text-shadow: 1px 1px 2px black;
        color: #eaeaea;
        filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.53));

        &.disabled {
          color: red;
          filter: drop-shadow(1px 1px 1px black);
        }
      }
    `,
  ],
})
export class SystemActivePageActiveComponent {
  @Input() active!: boolean;
  @Input() status: boolean = true;

  protected readonly faToiletPaper = faToiletPaper;
  protected readonly faPager = faPager;
  protected readonly faExclamation = faExclamation;
  protected readonly faCheck = faCheck;
}
