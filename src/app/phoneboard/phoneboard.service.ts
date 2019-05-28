import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Phoneboard } from './phoneboard';

@Injectable({
  providedIn: 'root'
})
export class PhoneboardService {
  private baseUrl: string = 'http://192.168.0.6:88/'
  constructor() { }

  getBoardInfos(pb: Phoneboard) {
    return ajax.get(this.baseUrl + 'phoneinfos');
  }
  getBoardInfo(phNum:number) {
    return ajax.get(this.baseUrl + 'phoneinfo?phNum='+phNum);
  }
}
