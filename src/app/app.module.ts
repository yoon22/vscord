import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { MenuComponent } from './menu/menu.component';
import { BoardComponent } from './board/board.component';
import { InsertComponent } from './board/insert/insert.component';
import { ViewComponent } from './board/view/view.component';
import { PhoneboardComponent } from './phoneboard/phoneboard.component';
import { UpdateComponent } from './board/update/update.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { HomeComponent } from './home/home.component';
import { PhoneviewComponent } from './phoneboard/phoneview/phoneview.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JoinComponent,
    MenuComponent,
    BoardComponent,
    InsertComponent,
    ViewComponent,
    PhoneboardComponent,
    UpdateComponent,
    UserinfoComponent,
    HomeComponent,
    PhoneviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
