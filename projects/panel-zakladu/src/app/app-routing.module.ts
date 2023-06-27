import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ResetHaslaPracownikowComponent
} from "./panel-pracownika/poczatkowy-panel-pracownika/reset-hasla-pracownikow/reset-hasla-pracownikow.component";
import {
  PoczatkowyPanelPracownikaComponent
} from "./panel-pracownika/poczatkowy-panel-pracownika/poczatkowy-panel-pracownika.component";
import {
  PanelLogowaniaPracownikowComponent
} from "./panel-pracownika/poczatkowy-panel-pracownika/panel-logowania-pracownikow/panel-logowania-pracownikow.component";
import {
  PanelZarzadzaniaZaklademComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panel-zarzadzania-zakladem.component";
import {
  StronaStartowaPracownikaComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/strona-startowa-pracownika/strona-startowa-pracownika.component";
import {
  MojeKontoPracownikaComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/moje-konto-pracownika/moje-konto-pracownika.component";
import {
  ZarejestrowaneWizytyPracownikaComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/zarejestrowane-wizyty-pracownika/zarejestrowane-wizyty-pracownika.component";
import {
  PracownicyPracownikaComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/pracownicy-pracownika/pracownicy-pracownika.component";
import {
  KalendarzTerminowComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/kalendarz-terminow/kalendarz-terminow.component";
import {
  CennikiPracownikaComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/cenniki-pracownika/cenniki-pracownika.component";
import {
  StronaReprezentacyjnaPracownikaComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/strona-reprezentacyjna-pracownika/strona-reprezentacyjna-pracownika.component";
import {
  RaportyPracownikaComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/raporty-pracownika/raporty-pracownika.component";
import {
  MojZakladPracownikaComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/moj-zaklad-pracownika/moj-zaklad-pracownika.component";
import {
  PlatnosciPracownikaComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/platnosci-pracownika/platnosci-pracownika.component";
import {
  RejestracjaZakladuComponent
} from "./panel-pracownika/poczatkowy-panel-pracownika/rejestracja-zakladu/rejestracja-zakladu.component";
import {
  PanelRejestracjiKlientaComponent
} from "./panel-klienta/poczatkowyPanelKlienta/panel-rejestracji-klienta/panel-rejestracji-klienta.component";
import {
  PoczatkowyPanelKlientaComponent
} from "./panel-klienta/poczatkowyPanelKlienta/poczatkowy-panel-klienta.component";
import {
  PanelLogowaniaKlientaComponent
} from "./panel-klienta/poczatkowyPanelKlienta/panel-logowania-klienta/panel-logowania-klienta.component";
import {PanelOblugiKlientaComponent} from "./panel-klienta/panel-oblugi-klienta/panel-oblugi-klienta.component";
import {
  HarmonogramPracownikaComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/harmonogram-pracownika/harmonogram-pracownika.component";
import {
  ListaKlientowPracownikComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/lista-klientow-pracownik/lista-klientow-pracownik.component";
import {
  UslugaSmsPracownikaComponent
} from "./panel-pracownika/panel-zarzadzania-zakladem/panele/usluga-sms-pracownika/usluga-sms-pracownika.component";

const routes: Routes = [
  {
    path: 'zaklad',
    component: PoczatkowyPanelPracownikaComponent,
    children: [
      {
        path: 'logowanie',
        component: PanelLogowaniaPracownikowComponent
      },
      {
        path: 'reset',
        component: ResetHaslaPracownikowComponent
      },
      {
        path: 'rejestracja',
        component: RejestracjaZakladuComponent
      },
      {
        path: '', redirectTo: 'logowanie', pathMatch: 'full'
      }
    ]
  },

  {
    path: 'panelPracownika',
    component: PanelZarzadzaniaZaklademComponent,
    children: [
      {
        path: 'stronaStartowa',
        component: StronaStartowaPracownikaComponent
      },
      {
        path: 'mojeKonto',
        component: MojeKontoPracownikaComponent
      },
      {
        path: 'zarejestrowaneWizyty',
        component: ZarejestrowaneWizytyPracownikaComponent
      },
      {
        path: 'zarzadzaniePracownikami',
        component: PracownicyPracownikaComponent
      },
      {
        path: 'kalendarzTerminow',
        component: KalendarzTerminowComponent
      },
      {
        path: 'cenniki',
        component: CennikiPracownikaComponent
      },
      {
        path: 'stronaReprezentacyjnaUstawienia',
        component: StronaReprezentacyjnaPracownikaComponent
      },
      {
        path: 'raporty',
        component: RaportyPracownikaComponent
      },
      {
        path: 'mojZaklad',
        component: MojZakladPracownikaComponent
      },
      {
        path: 'platnosci',
        component: PlatnosciPracownikaComponent
      },
      {
        path: 'sms',
        component: UslugaSmsPracownikaComponent
      },
      {
        path: 'harmonogram',
        component: HarmonogramPracownikaComponent
      },
      {
        path: 'listaKlientow',
        component: ListaKlientowPracownikComponent
      },
      {
        path: '',
        redirectTo: 'stronaStartowa', pathMatch: 'full'
      }
    ]
  },


  {
    path: 'rezerwacjaWizyt',
    component: PoczatkowyPanelKlientaComponent,
    children: [
      {
        path: 'logowanieKlienta',
        component: PanelLogowaniaKlientaComponent
      },
      {
        path: 'rejestracjaKlienta',
        component: PanelRejestracjiKlientaComponent
      },
      {
        path: 'reset',
        component: ResetHaslaPracownikowComponent
      },
      {
        path: '',
        redirectTo: 'logowanieKlienta', pathMatch: 'full'
      }
    ]
  },

  {
    path: 'panelKlienta',
    component: PanelOblugiKlientaComponent
  },

  {path: '', redirectTo: 'zaklad', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true},)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
