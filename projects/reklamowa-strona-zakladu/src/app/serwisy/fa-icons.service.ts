import {Injectable} from '@angular/core';
import {
  faCircleInfo,
  faClipboardList,
  faClock,
  faMapLocationDot,
  faSquarePhone
} from "@fortawesome/free-solid-svg-icons";

@Injectable({
  providedIn: 'root'
})
export class FaIconsService {
  telefon = faSquarePhone
  info = faCircleInfo
  uslugi = faClipboardList
  zegarek = faClock
  mapa = faMapLocationDot

  constructor() {
  }
}
