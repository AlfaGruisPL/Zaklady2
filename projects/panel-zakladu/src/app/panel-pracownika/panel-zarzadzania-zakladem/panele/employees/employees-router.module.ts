import { Route } from '@angular/router';
import { WorkerModifyComponent } from './worker-modify/worker-modify.component';
import { WorkerTablePanelComponent } from './worker-table-panel/worker-table-panel.component';
import { PracownicyPracownikaComponent } from './pracownicy-pracownika.component';

export const routes: Route[] = [
  {
    path: '',
    component: PracownicyPracownikaComponent,
    children: [
      {
        component: WorkerTablePanelComponent,
        path: '',
      },
      {
        path: ':id/:mode',
        component: WorkerModifyComponent,
      },
    ],
  },
];
