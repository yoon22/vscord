import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { BoardService } from '../board.service';
import { Board } from '../board';
import { bypassSanitizationTrustHtml } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  biNum: number;
  board: Board = new Board();
  boardList: Board[] = [];

  constructor(private _router: ActivatedRoute,
    private _bs: BoardService, private _moveRouter: Router) {
      
     }
   
  ngOnInit() {
    console.log(this._router.paramMap);
    this._router.params.forEach(param => {
      this.biNum = param['biNum'];

    })
    this._bs.getBoardInfo2(this.biNum).subscribe(res => {
      console.log(res.response);
      this.board=res.response;
    });
  }

  doDelete():void{
    this._bs.deleteBoard(this.biNum).subscribe();
    alert(this.biNum+'번이 삭제되었습니다.');
    window.location.href = "/board";
    
  }
  like():void{
  console.log(this.board);
  this.board.biLike = this.board.biLike+1;
  this._bs.updateBoard(this.board).subscribe();
  
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
