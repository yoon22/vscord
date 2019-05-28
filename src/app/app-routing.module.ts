import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { BoardComponent } from './board/board.component';
import { InsertComponent } from './board/insert/insert.component';
import { ViewComponent } from './board/view/view.component';
import { PhoneboardComponent } from './phoneboard/phoneboard.component';
import { UpdateComponent } from './board/update/update.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { HomeComponent } from './home/home.component';
import { PhoneviewComponent } from './phoneboard/phoneview/phoneview.component';

const routes: Routes = [
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'join',
    component: JoinComponent
  },
  {
    path: 'insert',
    component: InsertComponent
  },
  {
    path: 'view/:biNum',
    component: ViewComponent
  },
  {
    path: 'phoneboard',
    component: PhoneboardComponent
  },
  {
    path: 'update/:biNum',
    component: UpdateComponent
  },
  {
    path: 'userinfo',
    component: UserinfoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'phoneinfo/:phNum',
    component: PhoneviewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
