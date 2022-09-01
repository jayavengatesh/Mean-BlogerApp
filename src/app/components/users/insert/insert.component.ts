import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  formgroup!:FormGroup

  constructor(public formbuilder:FormBuilder,
    public api:AppService,
    public route:Router
    ) { }

  ngOnInit(): void {
   this.formgroup = this.formbuilder.group({
     title:[''],
     author:[''],
     content:['']
   })
  }

onsubmit(){
this.api.insert(this.formgroup.value).subscribe((res) => {
  alert("values are added");
} , (err) => {
  alert("values upload!");
  this.route.navigate(['dashboard']);
})
}


}
