import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editform!:FormGroup;
  constructor(public api:AppService,
    public formbuilder:FormBuilder,
    public active:ActivatedRoute,
    public route:Router) { }

  ngOnInit(): void {
    const id = this.active.snapshot.paramMap.get('id');
    this.getuser(id);
   
    this.editform = this.formbuilder.group({
      title:[''],
      author:[''],
      content:['']
    })
    this.formupdate()
  }

  getuser(id:any){
    this.api.singleView(id).subscribe((res) => {
      this.editform.patchValue(res);
    })
  }

formupdate(){
  this.editform = this.formbuilder.group({
    title:[''],
    author:[''],
    content:['']
  })
}


onsubmit(){
  const id = this.active.snapshot.paramMap.get('id');
  this.api.edit(id,this.editform.value).subscribe((res) => {
    
  }, (err) =>{
    alert("edited sucessfully!");
    this.route.navigate(['/dashboard']);
  })
}


}
