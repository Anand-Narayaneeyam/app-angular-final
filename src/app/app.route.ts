import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../app/login/login.component'
import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { SignupComponent } from '../app/signup/signup.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { AppGuard } from './app.guard'
import { LogoutComponent } from '../app/logout/logout.component';
import { HomeComponent } from '../app/home/home.component';
import { PagenotfoundComponent } from '../app/pagenotfound/pagenotfound.component';

const route: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AppGuard]
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];

export const Approutes = RouterModule.forRoot(route);