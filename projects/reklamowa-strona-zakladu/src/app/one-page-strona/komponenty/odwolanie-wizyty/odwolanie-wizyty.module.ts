import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OdwolanieWizytyComponent} from "./odwolanie-wizyty.component";
import {BrakWizytyComponent} from './brak-wizyty/brak-wizyty.component';
import {WizytaPoTerminieComponent} from './wizyta-po-terminie/wizyta-po-terminie.component';
import {WizytaJuzOdwolanaComponent} from './wizyta-juz-odwolana/wizyta-juz-odwolana.component';
import {WizytaNiePotwirdzonaComponent} from './wizyta-nie-potwirdzona/wizyta-nie-potwirdzona.component';
import {
    CzyNaPewnoChceszOdwolacWizyteComponent
} from './czy-na-pewno-chcesz-odwolac-wizyte/czy-na-pewno-chcesz-odwolac-wizyte.component';
import {WizytaOdwolaniaPoprawnieComponent} from './wizyta-odwolania-poprawnie/wizyta-odwolania-poprawnie.component';
import {WizytaBladOdwolaniaComponent} from './wizyta-blad-odwolania/wizyta-blad-odwolania.component';


@NgModule({
    declarations: [
        OdwolanieWizytyComponent,
        BrakWizytyComponent,
        WizytaPoTerminieComponent,
        WizytaJuzOdwolanaComponent,
        WizytaNiePotwirdzonaComponent,
        CzyNaPewnoChceszOdwolacWizyteComponent,
        WizytaOdwolaniaPoprawnieComponent,
        WizytaBladOdwolaniaComponent],
    exports: [
        OdwolanieWizytyComponent
    ],
    imports: [
        CommonModule
    ]
})
export class OdwolanieWizytyModule {
}
