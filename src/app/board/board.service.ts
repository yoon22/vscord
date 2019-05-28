import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Board } from './board';
import { parseHttpResponse } from 'selenium-webdriver/http';
import{
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse,
  
}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private baseUrl: string = 'http://localhost:88/'
  constructor(private _http:HttpClient) { }

  getBoardInfo(board: Board) {
    return ajax.get(this.baseUrl + 'boardinfos');
  }

  insertBoard(bo: Board) {
    return ajax.post(this.baseUrl + 'boardinfo', bo, { 'Content-Type': 'application/json', 'rxjs-custom-header': 'Rxjs' })
  }
  updateBoard(bo: Board){
    return ajax.put(this.baseUrl+'boardinfos', bo, { 'Content-Type': 'application/json', 'rxjs-custom-header': 'Rxjs' })
  }

  getBoardInfo2(biNum:number){
    return ajax.get(this.baseUrl + 'boardinfo?biNum='+ biNum);
  }
  deleteBoard(biNum:number){
    return ajax.delete(this.baseUrl+'boardinfo?biNum='+biNum);
  }

  addBoardInfo(board:Board){
    const url = this.baseUrl + "boardinfo";
    const formData = new FormData();
    for(var key in board){
      formData.append(key,board[key]);
    }
    
    console.log(formData);
    const req = new HttpRequest('POST',url,formData);
    return this._http.request(req);
  }
}
