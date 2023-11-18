import { Component } from '@angular/core';
import { ListaKlientowService } from '../lista-klientow.service';
import { Klient } from '../../../../../klasy/listaKlientow/klient';
import {
  faCalculator,
  faGreaterThan,
  faGreaterThanEqual,
  faPlus,
  faPlusMinus,
  faUsersBetweenLines,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-klientow-podsumowanie',
  templateUrl: './lista-klientow-podsumowanie.component.html',
  styleUrls: ['./lista-klientow-podsumowanie.component.scss'],
})
export class ListaKlientowPodsumowanieComponent {
  protected readonly faCalculator = faCalculator;
  protected readonly faGreaterThan = faGreaterThan;
  protected readonly faUsersBetweenLines = faUsersBetweenLines;
  protected readonly faPlus = faPlus;
  protected readonly faPlusMinus = faPlusMinus;
  protected readonly faGreaterThanEqual = faGreaterThanEqual;
  private znalezionyNajczestszyKlient: Klient | null = null;

  constructor(public lista_: ListaKlientowService) {}
}
