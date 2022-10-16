
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  signinForm!:FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient,private r:Router) { }

  ngOnInit(): void {
    this.signinForm=this.formbuilder.group({
      email:[''],Password:['']
    })
  }
   login(){
    
    this.http.get<any>("http://localhost:3000/user").subscribe(res=>
    {
      const user=res.find((a:any)=>{
      return a.email==this.signinForm.value.email && a.Password===this.signinForm.value.Password

    })
    if(user){
      alert("user exist");
      this.signinForm.reset();
    }
   })
}
}
