import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  view:any = []
  constructor(public api:AppService,
    public active:ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.active.snapshot.paramMap.get('id');
    this.api.singleView(id).subscribe(  (res) => {
      this.view.push(res)
    })
  }

}
