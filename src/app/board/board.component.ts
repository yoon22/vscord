import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';
import { Board } from './board';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board = new Board();
  boardList: Board[] = [];
  cNum:string;
  constructor(private _bs: BoardService, private _router: Router) {
    this.findList(null);
  }
  findList(board: Board) {
    this._bs.getBoardInfo(board).subscribe(res => {
      this.boardList = res.response;
    })
  }
  ngOnInit() {
   
  }

  goContentPage(url: string) {
      
      var cNums = url.split("/");
      this.cNum = cNums[1];
      this.board.biNum=parseInt(this.cNum);
      this.board.biCnt =1;
      this.cntUpdate(this.board);
      this._router.navigate([url]);
  }
  goInsertPage(url: string) {
    this._router.navigate([url]);
}
  cntUpdate(board:Board){
     this._bs.updateBoard(this.board).subscribe();
    
  }

  
}
