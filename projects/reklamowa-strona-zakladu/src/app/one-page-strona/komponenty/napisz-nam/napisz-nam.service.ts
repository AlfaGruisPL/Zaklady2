import { Injectable } from '@angular/core';
import { NapiszNam } from './klasa/napisz-nam';

@Injectable({
  providedIn: 'root',
})
export class NapiszNamService {
  public napiszNamObj = new NapiszNam();

  constructor() {}
}
