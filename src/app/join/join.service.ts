import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Join } from './join';

@Injectable({
  providedIn: 'root'
})
export class JoinService {
  private baseUrl: string = 'http://192.168.0.6:88/'
  constructor() { }

  join(jo: Join) {
    return ajax.post(this.baseUrl + 'userinfo', jo, { 'Content-Type': 'application/json', 'rxjs-custom-header': 'Rxjs' }
    )
  };
}
