import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  authheaders:any
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public http:HttpClient ,public jwthelper:JwtHelperService) { }

  register(data:any){
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json')
    return this.http.post("auth/register",data,{headers:header}).pipe(map(res =>res))
  }


  login(user:any){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    return this.http.post("auth/login",user).pipe(map(res => res ))
  }
    
  saveuser(token:any, user:any){
    localStorage.setItem('token',token);
    localStorage.setItem('user' ,user)
  }


 getprofile(){
     this.authheaders = new HttpHeaders();
     const token = localStorage.getItem('token');
     this.authheaders = this.authheaders.set('Authorization', token);
     this.authheaders = this.authheaders.set('Content-Type', 'application/json');
     console.log(this.authheaders);

    return this.http.get("auth/profile",{headers:this.authheaders}).pipe(map(res => res))
 }

 
  Loadtoken(){
    return localStorage.getItem('token')
  }


  isLoggedin(){
    const token:any = localStorage.getItem('token');
    return this.jwthelper.isTokenExpired(token);
  }

  logout(){
  localStorage.clear();
  }

//crud starts here:

insert(data:any){
  return this.http.post("users",data).pipe(map(res => res))
}


datataker(){
  return this.http.get('users/data').pipe(map(res => res) )
}

singleView(id:any){
  return this.http.get("users/data/"+id ). pipe(map (res =>res)) 
}


delete(id:any){
  return this.http.delete("users/delete/"+id ). pipe(map (res =>res)) 
}

edit(id:any,data:any){
  return this.http.put("users/edit/"+id,data).pipe(map(res =>res))
}


}
