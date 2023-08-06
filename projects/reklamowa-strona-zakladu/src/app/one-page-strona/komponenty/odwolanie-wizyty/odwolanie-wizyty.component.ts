import {Component, EventEmitter, Input, OnInit, Output, Type} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Drzwi} from "../../../enum/drzwi";
import {Wizyta} from "../../../../../../panel-zakladu/src/app/klasy/panelPracownika/wizyta";
import {HttpError} from "../../../../../../klasy/httpError";
import {BrakWizytyComponent} from "./brak-wizyty/brak-wizyty.component";
import {WizytaJuzOdwolanaComponent} from "./wizyta-juz-odwolana/wizyta-juz-odwolana.component";
import {WizytaPoTerminieComponent} from "./wizyta-po-terminie/wizyta-po-terminie.component";
import {WizytaNiePotwirdzonaComponent} from "./wizyta-nie-potwirdzona/wizyta-nie-potwirdzona.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
    CzyNaPewnoChceszOdwolacWizyteComponent
} from "./czy-na-pewno-chcesz-odwolac-wizyte/czy-na-pewno-chcesz-odwolac-wizyte.component";
import {WyborPracownikaComponent} from "../formularz-zarejestruj-sie/etapy/wybor-pracownika/wybor-pracownika.component";
import {WizytaOdwolaniaPoprawnieComponent} from "./wizyta-odwolania-poprawnie/wizyta-odwolania-poprawnie.component";
import {WizytaBladOdwolaniaComponent} from "./wizyta-blad-odwolania/wizyta-blad-odwolania.component";

@Component({
    selector: 'app-odwolanie-wizyty',
    templateUrl: './odwolanie-wizyty.component.html',
    styleUrls: ['./odwolanie-wizyty.component.scss']
})
export class OdwolanieWizytyComponent implements OnInit {
    @Output() anulujEmiter = new EventEmitter()
    @Input() kodOdwolania: string = ''
    wybranyKomponent: Type<any> | null = null;
    wizyta = new Wizyta({})
    przyciskDisabled = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private listonosz: ListonoszService,
        private modal: NgbModal) {
    }

    private wyswietlKomponentBledu(error: HttpError) {
        switch (error.error?.reasonCode) {
            case 1:
                this.wybranyKomponent = BrakWizytyComponent
                break;
            case 2:
                this.wybranyKomponent = WizytaJuzOdwolanaComponent
                break;
            case 3:
                this.wybranyKomponent = WizytaNiePotwirdzonaComponent
                break;
            case 4:
                this.wybranyKomponent = WizytaPoTerminieComponent
                break;
            default:
                this.wybranyKomponent = WizytaBladOdwolaniaComponent
        }

    }

    ngOnInit() {
        this.listonosz.pobierz(Drzwi.informacjeOWizycieDoOdwolania + this.kodOdwolania).then(k => {
            this.wizyta = new Wizyta(k)
        }).catch((error: HttpError) => {
            this.wyswietlKomponentBledu(error)
            console.warn(error.error)
        })

    }

    anuluj() {
        this.router.navigate([], {
            queryParams: {
                'odwolanieWizyty': null
            },
            queryParamsHandling: 'merge'
        })
        //this.anulujEmiter.emit()
    }

    potwierdz() {
        this.przyciskDisabled = true
        const okno = this.modal.open(CzyNaPewnoChceszOdwolacWizyteComponent, {backdrop: 'static'})
        okno.closed.subscribe(k => {
            console.log(this.wizyta);
            this.listonosz.usun(Drzwi.informacjeOWizycieDoOdwolania + this.wizyta.kodOdwolania).then(k => {
                this.wybranyKomponent = WizytaOdwolaniaPoprawnieComponent
            }).catch(error => {
                this.wyswietlKomponentBledu(error)
            }).finally(() => {
                this.przyciskDisabled = false
            })
        })
    }

    protected readonly WyborPracownikaComponent = WyborPracownikaComponent;
}
