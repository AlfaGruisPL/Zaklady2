import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PodreczneDaneService } from '../../serwisy/podreczne-dane.service';
import { BehaviorSubject, filter, Subscription, take } from 'rxjs';
import { DanePodreczneClass } from '../../klasy/panelPracownika/dane-podreczne';

@Component({
  selector: 'app-select-dotyczy',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './select-dotyczy.component.html',
  styleUrls: ['./select-dotyczy.component.scss'],
})
export class SelectDotyczyComponent implements OnInit, OnDestroy {
  @Input()
  dotyczy = 0;
  @Input()
  ustaw: BehaviorSubject<number> | undefined = undefined;

  @Output()
  dotyczyChange = new EventEmitter();
  @Output()
  ustawChange = new EventEmitter();
  @Input()
  wyswietlanieOpcjiZakladu = false;
  zablokowanyChangeDetection = true;
  reload = true;
  private sub1: Subscription | undefined;

  constructor(public danePodreczne: PodreczneDaneService) {}

  ngOnDestroy() {
    this.sub1?.unsubscribe();
  }

  odblokuj() {
    this.zablokowanyChangeDetection = false;
  }

  ngOnInit(): void {
    if (this.ustaw != undefined) {
      //jest to aktualizacja pola select z zewnętrznego źródła, skip dla 0 jest dlatego że nie zawsze jest pole zakłądu
      this.sub1 = this.ustaw.subscribe(dane => {
        //blokada przed przedwczesnym ponownym pobieraniu danych
        if (!this.zablokowanyChangeDetection) {
          //if (!(this.wyswietlanieOpcjiZakladu && dane == 0)) {
          this.dotyczy = dane;
          this.ustawChange.emit();
          //    }
        }
      });
    }
    this.danePodreczne.danePodreczneObserveble
      .pipe(
        filter(k => k !== undefined),
        take(1)
      )
      .subscribe(value => {
        if ((value as DanePodreczneClass).zalogowanyUzytkownik?.id != undefined) {
          // @ts-ignore
          this.dotyczy = (value as DanePodreczneClass).zalogowanyUzytkownik.id;
          this.dotyczyChange.emit(this.dotyczy);
        } else {
          console.warn('selectDotyczy- przy pobieraniu danych podstawowych, brakuje danych o zalpgowanym użytkowniku');
        }
      });
  }
}
