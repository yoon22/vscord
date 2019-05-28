import { Component, OnInit } from '@angular/core';
import { Userinfo } from './userinfo';
import { UserinfoService } from './userinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  user: Userinfo = new Userinfo();
  userinfoList: Userinfo[] = [];
  constructor(private _us: UserinfoService, _router: Router) {
    this.findList(null);
  }

  findList(ui: Userinfo) {
    this._us.getUserInfo(null).subscribe(res => {
      this.userinfoList = res.response;
    })
  }
  ngOnInit() {
  }

}
