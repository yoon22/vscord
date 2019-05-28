import { Component, OnInit } from '@angular/core';
import { Phoneboard } from './phoneboard';
import { PhoneboardService } from './phoneboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phoneboard',
  templateUrl: './phoneboard.component.html',
  styleUrls: ['./phoneboard.component.css']
})
export class PhoneboardComponent implements OnInit {

  pboardList: Phoneboard[] = [];
  constructor(private _ps: PhoneboardService, private _router: Router) {
    this.findList(null);
  }
  findList(ps: Phoneboard) {
    this._ps.getBoardInfos(null).subscribe(res => {
      this.pboardList = res.response;
    })
  }

  ngOnInit() {
  }

  goPage(url: string) {
  
    this._router.navigate([url]);
  }

}
