import { Component, OnInit } from '@angular/core';
import { Phoneboard } from '../phoneboard';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneboardService } from '../phoneboard.service';

@Component({
  selector: 'app-phoneview',
  templateUrl: './phoneview.component.html',
  styleUrls: ['./phoneview.component.css']
})
export class PhoneviewComponent implements OnInit {
  phNum: number;
  board: Phoneboard = new Phoneboard();
  phoneboardList: Phoneboard[] = [];

  constructor(private _router: ActivatedRoute,
    private _ps: PhoneboardService, private _moveRouter: Router) { }
   
  ngOnInit() {
    console.log(this._router.paramMap);
    this._router.params.forEach(param => {
      this.phNum = param['phNum'];

    })
    this._ps.getBoardInfo(this.phNum).subscribe(res => {
      console.log(res.response);
      this.phoneboardList=res.response;
    });
  }
  goPage(url: string) {
    this._moveRouter.navigate([url]);
  }
}
