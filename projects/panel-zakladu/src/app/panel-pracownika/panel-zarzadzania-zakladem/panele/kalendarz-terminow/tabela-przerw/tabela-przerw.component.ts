import { Component } from "@angular/core";
import { TabelaPrzerwFilterComponent } from "./tabela-przerw-filter/tabela-przerw-filter.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { PodreczneDaneService } from "../../../../../serwisy/podreczne-dane.service";
import { TablePaginationComponent } from "../../../../../komponets/table-pagination/table-pagination.component";

@Component({
  selector: "app-tabela-przerw",
  templateUrl: "./tabela-przerw.component.html",
  styleUrls: ["./tabela-przerw.component.scss"],
  standalone: true,
  imports: [TabelaPrzerwFilterComponent, FontAwesomeModule, NgbPagination, CommonModule, TablePaginationComponent]
})
export class TabelaPrzerwComponent {
  constructor(public danePodreczne_: PodreczneDaneService) {
  }

  onSearchChange(event: any) {
  }
}
