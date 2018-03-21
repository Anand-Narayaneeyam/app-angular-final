import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Approutes} from './app.route';
import {AppGuard} from './app.guard';
import { FormsModule } from '@angular/forms';
import { AppService } from "./app.service";

import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListComponent } from './list/list.component';
import { MainListComponent } from './main-list/main-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    LogoutComponent,
    HomeComponent,
    PagenotfoundComponent,
    ListComponent,
    MainListComponent
  ],
  imports: [
    BrowserModule,
    Approutes,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppGuard,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
