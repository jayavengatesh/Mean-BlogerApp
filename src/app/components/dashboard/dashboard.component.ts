import { Component, OnInit } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';
import { AppService } from 'src/app/services/app.service';

declare var name:any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  username:any;
  data:any;
  constructor(public api:AppService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('user');
    this.getdata()
    new name();
  }

  getdata(){
   this.api.datataker().subscribe(  (res) => {
    this.data = res;
    console.log(this.data)
   }) 
   
  }

 delete(data:any){
  if(window.confirm("are sure want to delete this?"))
  this.api.delete(data).subscribe((res) => {
   
  }, (err) => {
    alert("data deleted!");
    this.getdata()
  })
 }

 


}
