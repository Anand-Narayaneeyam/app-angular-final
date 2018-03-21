import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  signUp(data) {
    // return this.http.post('http://localhost:5000/signup', data);
     return this.http.post('https://mean-app-anand.herokuapp.com/signup', data);
  }
  login(data) {
    // return this.http.post('http://localhost:5000/login', data);
     return this.http.post('https://mean-app-anand.herokuapp.com/login', data);
  }
  getsession() {
    if (sessionStorage.getItem('token')!=null)
      return true;
    else
      return false;
  };
  getUsersList(){
    // return this.http.post('http://localhost:5000/mainList','');
     return this.http.post('https://mean-app-anand.herokuapp.com/mainList','');
  }
  updateData(data,selectedId){
   // return this.http.put('http://localhost:5000/update/'+selectedId,data);
     return this.http.put('https://mean-app-anand.herokuapp.com/update/'+selectedId,data);
  }
  deleteData(selectedId){
   // return this.http.delete('http://localhost:5000/delete/'+selectedId);
     return this.http.delete('https://mean-app-anand.herokuapp.com/delete/'+selectedId);
  }
}
