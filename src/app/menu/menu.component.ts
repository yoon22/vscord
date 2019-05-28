import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _mu :MenuService) { }

  ngOnInit() {
  }

  search() :void{
    alert('검색하신 내용이나 작성자가 없습니다.');
  }
}
