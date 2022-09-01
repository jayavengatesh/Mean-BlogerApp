import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';

declare var validation:any

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formgroup!:FormGroup;
  data:any;
  constructor(public formbuilder:FormBuilder,
    public api:AppService,
    public flasher:FlashMessagesService,
    public route:Router
    ) { }

  ngOnInit(): void {
    this.flasher.show('welcome to register page!',{cssClass:'alert',timeout:1000 });
   
 this.formgroup = this.formbuilder.group({
  name:[''],
  email:[''],
  username:[''],
  password:['']
 })

  new validation();
  }

 onsubmit(){
  this.api.register(this.formgroup.value).subscribe( (res) => {
    if(res){
      alert("register success!");
      this.route.navigate(['/login'])
     
    }
  
  },(err) => alert("error while register"))
 }

}
