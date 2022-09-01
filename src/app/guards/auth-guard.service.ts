import { Injectable } from '@angular/core';
import { AppService } from '../services/app.service';
import {  CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public api:AppService,
    public route:Router) { }

  canActivate(){
    if(! this.api.isLoggedin()){
      return true
    }else{
      this.route.navigate(['/login']);
      return false
    }

  }


}
