import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Router} from '@angular/router'
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private appService: AppService, private router: Router,private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
