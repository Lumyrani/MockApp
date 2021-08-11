
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

import{HttpClient}from '@angular/common/http'
import { Injectable } from '@angular/core';

@Component({

  selector: 'app-mockapp',

  templateUrl: './mockapp.component.html',

  styleUrls: ['./mockapp.component.css']

})
export class MockappComponent implements OnInit {
  isEdit:boolean =false
  // constructor(private fb: FormBuilder, private http: HttpClient, private mk: MockService) {
  constructor(private fb: FormBuilder , private http: HttpClient) {

  }

  profileform = this.fb.group({

    name: ["", [Validators.required, Validators.minLength(4)]],

    email: ["", [Validators.required, Validators.minLength(2)]],

    num: ["", [Validators.required, Validators.minLength(8)]],

    age: ["", [Validators.required, Validators.minLength(2)]],

  })

  get f() {

    // console.log( this.profileform.controls)

    return this.profileform.controls

  }

  user1: any

  ngOnInit(): void {

  
// add() {
//   this.user1= this.profileform.value
//     console.log(this.profileform.value)



// readUrl(){
//   return this.http.get("http://jsonplaceholder.typicode.com/todos/").subscribe((data) => {

//       this.user1 = data;

//       console.log(this.user1)

//     })

  
// }
// }
    this.http.get("http://localhost:3000/comments").subscribe((data) => {

      this.user1 = data;

      console.log(this.user1)

    })
  }
 onSubmit(user: any) {

  if(!this.isEdit){
    this.http.post("http://localhost:3000/comments", user).subscribe((result) => {

      console.log("user is added")

      this.profileform.reset()

    })
  }
    else{

      this.http.put("http://localhost:3000/comments", user).subscribe((result) => {

        console.log("user is added")
  
        this.profileform.reset()
  
      })
    }
    console.warn(user);



  }
  edit(user:any){
    console.log(user)
   this.isEdit =true
    
    }
  
  delete(user:any){
    this.http.delete("http://localhost:3000/comments", user).subscribe(() => {


      console.log("user is added")

      this.profileform.reset()

    })
      user.id=""
      user.name="";
      user.email="";
      user.num="";
      user.age="";
    
  }
}