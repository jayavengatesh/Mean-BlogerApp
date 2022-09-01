import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor{

  constructor(public api:AppService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token:any = localStorage.getItem('token')
    let jwtToken = req.clone({
      setHeaders:{
       Authorization: "Bearer " + token
      }
     })
     return next.handle(jwtToken)
  }


  }

