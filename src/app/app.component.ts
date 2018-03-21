import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'app';
  constructor() {}
  route: string = "login";

  ngDoCheck() {
    var login = document.getElementById('log');
     if (sessionStorage.getItem('token')==null) {
      this.route = "login";
      login.textContent = "Login";
    }
    else {
      this.route = "logout";
      login.textContent = "Log Out";
    }
  }
   myFunction() {
     debugger
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
  
}
