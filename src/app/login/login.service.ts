import { Injectable } from '@angular/core';
import { User } from './user';
import { ajax } from 'rxjs/ajax';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = 'http://192.168.0.6:88/'
  constructor() { }

  doLogin(us: User) {
    return ajax.post(this.baseUrl + 'login', us, { 'Content-Type': 'application/json', 'rxjs-custom-header': 'Rxjs' }
    );
  }

  
}