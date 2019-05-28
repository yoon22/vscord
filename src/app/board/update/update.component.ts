import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { BoardService } from '../board.service';
import { Board } from '../board';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  biNum: number;
  board: Board = new Board();
  boardList: Board[] = [];
  constructor(private _router: ActivatedRoute,
    private _bs: BoardService, private _moveRouter: Router) {

     }

  ngOnInit() {
    this._router.params.forEach(param => {
      this.biNum = param['biNum'];
  })
  this._bs.getBoardInfo2(this.biNum).subscribe(res => {
    console.log(res.response);
    this.board=res.response;
  });
}

doUpdate():void{
  this.board.biNum=this.biNum;
  this.board.biTitle=this.board.biTitle;
  this.board.biContent=this.board.biContent;
  this._bs.updateBoard(this.board).subscribe();
  
  alert('게시글이 수정되었습니다.')
  this._moveRouter.navigate(['/view/'+this.biNum])
  
}
goPage(url: string) {
  this._moveRouter.navigate([url]);
}
}
