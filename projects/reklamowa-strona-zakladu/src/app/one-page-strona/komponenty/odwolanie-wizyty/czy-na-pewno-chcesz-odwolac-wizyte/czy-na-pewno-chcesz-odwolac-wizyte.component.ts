import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-czy-na-pewno-chcesz-odwolac-wizyte',
    templateUrl: './czy-na-pewno-chcesz-odwolac-wizyte.component.html',
    styleUrls: ['./czy-na-pewno-chcesz-odwolac-wizyte.component.scss']
})
export class CzyNaPewnoChceszOdwolacWizyteComponent {

    constructor(public modal: NgbActiveModal) {

    }


}
