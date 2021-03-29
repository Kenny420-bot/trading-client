import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  hide:boolean = true;
  login_email: string;
  login_password: string;
  register_first_name: string;
  register_last_name: string;
  register_email: string;
  register_password: string;

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log("Login");
    console.log(this.login_email);
    console.log(this.login_password);
  }

  registerUser(){
    console.log("Register");
  }

}
