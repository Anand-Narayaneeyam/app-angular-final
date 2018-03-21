import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AppService]
})
export class SignupComponent implements OnInit {

  userDetails: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
  }
  onSignUp(event) {
    debugger
    var that = this;
    if (event.password != event.confirmPassword) {
      alert("Password and Confrim password are not same...");
      return;
    }
    else {
      if(event.confirmPassword) 
        delete event.confirmPassword;
      this.appService.signUp(event).subscribe(data => {
        debugger
        if (data["Status"] == "success") {
          that.userDetails = data["Data"];
          alert(" Sign Up is successfull....");
        }
        else
          alert("Login Name already exits....");
      });
    }
  }
  resetClick(data?: NgForm) {
    if (data != null)
      data.reset();
  }
}
