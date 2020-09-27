import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;
  form;

  constructor(/*private fb:FormBuilder,*/private router:Router) { 
  /*  this.form=this.fb.group({
      email:['',Validators.required,Validators.minLength(4)],
      password:['',Validators.required,Validators.minLength(6)]
      
    });
    */
  }


  ngOnInit(): void {
  }

  loginUser(){
    //console.log(this.email);
    //console.log(this.form.value);
    if(this.email=="admin@gmail.com" && this.password=="admin123"){
       // this.router.navigate(../home);
       this.router.navigateByUrl('/home');
       console.log("welcome");
    }
    else{
      alert("Wrong username or password");
    }
  }

  resetForm(){
    this.form.reset();
  }

}
