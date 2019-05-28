import { Injectable } from '@angular/core';
import { Userinfo } from './userinfo';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  private baseUrl: string = 'http://192.168.0.6:88/'
  constructor() { }

  getUserInfo(user: Userinfo) {
    return ajax.get(this.baseUrl + 'userinfos');
  }
}
