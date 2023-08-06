import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-serwer-nie-dostepny',
    templateUrl: './serwer-nie-dostepny.component.html',
    styleUrls: ['./serwer-nie-dostepny.component.scss']
})
export class SerwerNieDostepnyComponent implements OnInit, OnDestroy {
    interval: any;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.interval = setInterval(() => {
            console.log('Próba restart')
            this.router.navigate(['./'])
        }, 10000)
    }

    ngOnDestroy() {

        clearInterval(this.interval)
    }

}
