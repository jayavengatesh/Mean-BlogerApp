import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   users:any;
  constructor(public api:AppService) { }

  ngOnInit(): void {
    this.api.getprofile().subscribe((res) => {
      alert("welcome to users page!")
    })
  }

}
