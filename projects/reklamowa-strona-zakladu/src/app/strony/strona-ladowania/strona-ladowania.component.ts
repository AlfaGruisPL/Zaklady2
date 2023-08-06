import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StraznicyService} from "../../straznicy/straznicy.service";

@Component({
    selector: 'app-strona-ladowania',
    templateUrl: './strona-ladowania.component.html',
    styleUrls: ['./strona-ladowania.component.scss']
})
export class StronaLadowaniaComponent implements OnInit, OnDestroy {
    interval: any;

    constructor(private router: Router, private straznicy: StraznicyService) {
    }

    ngOnInit() {
        this.interval = setInterval(() => {
            this.router.navigate(['./'])
        }, 20)
    }

    ngOnDestroy() {
        clearInterval(this.interval)
    }
}
