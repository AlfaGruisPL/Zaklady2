import { Component, HostListener, OnInit } from '@angular/core';
import { Usluga } from '../../../../klasy/panelPracownika/usluga/usluga';
import { FontAwesomeService } from '../../../../serwisy/font-awesome.service';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UslugiPrzypisaniPracownicyComponent } from './uslugi-przypisani-pracownicy/uslugi-przypisani-pracownicy.component';
import { Pracownik } from '../../../../klasy/panelPracownika/pracownicy/pracownik';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction, take } from 'rxjs';
import { faBook, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { ServicesDescriptionComponent } from './services-description/services-description.component';
import { KomunikatUniwersalnyService } from '../../../../komponets/komunikat-uniwersalny/komunikat-uniwersalny.service';

@Component({
  selector: 'app-uslugi',
  templateUrl: './uslugi.component.html',
  styleUrls: ['./uslugi.component.scss'],
})
export class UslugiPracownikaComponent implements OnInit {
  public listaUslug: Array<Usluga> = [new Usluga()];
  public pracownicy: Array<Pracownik> = [];
  public ladoowanieDanych = false;
  model = '';
  protected readonly faNoteSticky = faNoteSticky;
  protected readonly faBook = faBook;

  constructor(
    public fontAwesome: FontAwesomeService,
    private listonosz: ListonoszService,
    private modal: NgbModal,
    private defaultPrompt: KomunikatUniwersalnyService,
    public komunikat: KomunikatyService
  ) {}

  ngOnInit() {
    this.pobieranieDanych();
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    // console.log('test');
  }

  public dodajWiersz() {
    const usluga = new Usluga();
    this.pracownicy.forEach(k => {
      usluga.pracownicy.push(k.id);
    });

    this.listaUslug.push(usluga);
  }

  public modyfikacjaPracownikow(usluga: Usluga) {
    const okno = this.modal.open(UslugiPrzypisaniPracownicyComponent, {
      size: 'lg',
    });
    okno.componentInstance.usluga = usluga;
    okno.componentInstance.pracownicy = this.pracownicy;
  }

  public modifyDescription(service: Usluga) {
    const okno = this.modal.open(ServicesDescriptionComponent, {
      size: 'lg',
    });
    okno.componentInstance.usluga = service;
  }

  public zapisz() {
    //usunięcie pustych usług
    this.listaUslug = this.listaUslug.filter(usluga => {
      return usluga.nazwa.length > 0;
    });
    this.listonosz
      .wyslij(Drzwi.uslugiPanel, this.listaUslug)
      .then(dane => {
        this.saveFetchDataToVariable(dane);
        this.komunikat.modyfikacjaUdana();
      })
      .catch(k => {
        this.komunikat.modyfikacjaNieUdana();
      })
      .finally(() => {
        // this.pobieranieDanych();
      });
  }

  public usunWiersz(index: number) {
    const prompt = this.defaultPrompt.open('Czy na pewno chcesz usunąć usługę?', '');
    prompt.addButton('Nie', { defaultNo: true });
    prompt
      .addButton('Tak', { defaultYes: true })
      .pipe(take(1))
      .subscribe(() => {
        let k = 0;
        this.listaUslug = this.listaUslug.filter(usluga => {
          if (k == index) {
            k++;
            return false;
          }
          k++;
          return true;
        });
      });
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      map(term => {
        const tmp: Array<any> = [];
        console.log(this.listaUslug);
        this.listaUslug.forEach(service => {
          if (service.category !== undefined) {
            tmp.push(service.category);
          }
        });
        console.log(123);
        return term === '' ? [] : tmp.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
      })
    );

  private pobieranieDanych() {
    this.ladoowanieDanych = true;
    this.listonosz
      .pobierz(Drzwi.uslugiPanel)
      .then(dane => {
        this.saveFetchDataToVariable(dane);
        // Object.assign(this.listaUslug, dane['uslugi']);
        this.pracownicy = [];
        Object.assign(this.pracownicy, dane['pracownicy']);
      })
      .finally(() => {
        this.ladoowanieDanych = false;
      });
  }

  private saveFetchDataToVariable(data: any) {
    this.listaUslug = [];
    data['uslugi'].forEach((k: any) => {
      const k2 = new Usluga();
      Object.assign(k2, k);
      this.listaUslug.push(k);
    });
  }
}
