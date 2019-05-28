import { Component, OnInit } from '@angular/core';
import { Join } from './join';
import { JoinService } from './join.service';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  jo: Join = new Join();
  constructor(private _ls: JoinService) { }

  ngOnInit() {
  }
  join(): void {

    if (!this.jo.uiId) {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (!this.jo.uiPwd) {
      alert('비밀번호 입력해주세요.');
      return;
    }
    this._ls.join(this.jo).subscribe(res => {
      if (res.response) {
        this.jo = res.response;
        alert('회원가입에 성공하였습니다.');
        location.href = '/login';
      }
      
    });

  }
}
