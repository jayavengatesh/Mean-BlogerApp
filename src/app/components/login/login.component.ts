import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { FormGroup, FormGroupName } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formgroup!:FormGroup;
  error:any
  constructor(public api:AppService,
    public formbuider:FormBuilder,
    public route:Router) { }

  ngOnInit(): void {
    this.formgroup = this.formbuider.group({
      username:[''],
      password:['']
    })
  }

  ONlogin(){
    this.api.login(this.formgroup.value).subscribe( (res:any) => {
       
      if(res){
        alert("login was succesfull")
       this.api.saveuser(res.token,res.user);
       this.route.navigate(['dashboard']);
      }

    } ,(err) => {
      this.error = "username and password not valid"
      console.log(this.error)
    })
  }

}
