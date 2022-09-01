import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  maindata:any
  constructor(public api :AppService) { }


  ngOnInit(): void {
    this.api.datataker().subscribe((res) => {
      this.maindata = res;
    })
  }


}
