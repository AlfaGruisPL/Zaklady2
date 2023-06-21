import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NawigacjaEnum} from "../enum/nawigacja.enum";


@Injectable({
  providedIn: 'root'
})
export class NawigacjaService {

  public nav = NawigacjaEnum;

  constructor(private router: Router, private route: ActivatedRoute) {
  }


  Start() {

  }

  przeniesDoPanelu(element: NawigacjaEnum): void {

    /* const sub =  this.route.fragment.subscribe(fragment => {
        console.log("My hash fragment is here => ", fragment)
      })*/
    this.router.navigate(['.'])
    setTimeout(() => {
      this.router.navigate(['.'], {fragment: element})
    }, 0)
  }
}
