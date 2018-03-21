import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppService } from "./app.service";

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private service: AppService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.service.getsession();
  }
}



// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { DataService } from './data.service';

// @Injectable()
// export class ProtectGuard implements CanActivate {

//   constructor(private dataService: DataService) { }
//   canActivate(): boolean {

//     if (this.dataService.getSessionData()) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

