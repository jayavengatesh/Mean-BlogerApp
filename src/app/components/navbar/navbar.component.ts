import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

declare var navbar:any

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public api:AppService,
    public route:Router) { }

  ngOnInit(): void {
  
  }

logout()
{
  if(window.confirm("do you want to logout?"))
  this.api.logout();
  this.route.navigate(['']);
}
}
