import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  board: Board = new Board();
  constructor(private _bo: BoardService, private _moveRouter: Router) { }

  ngOnInit() {
  }
  doSave(): void {

    if (!this.board.biTitle) {
      alert('제목을 입력해주세요.');
      return;
    }
    if (!this.board.biContent) {
      alert('내용을 입력해주세요.');
      return;
    }
    if (!this.board.biWriter) {
      alert('작성자를 입력해주세요.');
      return;
    }
    this._bo.insertBoard(this.board).subscribe(res => {
      if (res.response) {
        this.board = res.response;
        alert('등록 완료.');
        location.href = '/board';
      }
    });
  }
  goPage(url: string) {
    this._moveRouter.navigate([url]);
  }
  getFiles(evt){
    this.board.biFile = evt.target.files[0];
  }
}
