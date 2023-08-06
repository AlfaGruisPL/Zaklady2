import {Injectable} from '@angular/core';
import {ListonoszService} from "../serwisy/listonosz.service";

@Injectable({
    providedIn: 'root'
})
export class StraznicyService {
    serwerAktywny: boolean | null = null
    stronaWlaczona: boolean | null = null

    constructor(private listonosz: ListonoszService,) {
    }

    sprawdzenieCzySerwerAktywny() {
        this.listonosz.pobierz('ping').then(() => {
            this.serwerAktywny = true;
            console.log('dostepny')
        }).catch(() => {
            this.serwerAktywny = false
            console.log('niedostepny');
        })
    }

    sprawdzenieCzyStronaWlaczona() {
        this.listonosz.pobierz('stronaReklamowa/dostepnosc').then(() => {
            this.stronaWlaczona = true;
            console.log('wlaczona')
        }).catch(() => {
            this.stronaWlaczona = false
            console.log('wylaczona');
        })
    }
}
