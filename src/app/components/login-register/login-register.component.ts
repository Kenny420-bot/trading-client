import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { LoginDetails } from 'src/app/models/Login';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  login_email: string;
  login_password: string;
  register_first_name: string;
  register_last_name: string;
  register_email: string;
  register_password: string;

  is_loading:boolean=false
  responseMessage:string
  hide:boolean = true;
  constructor(private authService:AuthenticationService, private router:Router) { }
  
  ngOnInit(): void {
    this.authService.isUserLoggedIn()
  }
 
  loginUser(){
    const loginDetails:LoginDetails ={
      email:this.login_email,
      password:this.login_password
    }
    this.is_loading=true
    this.authService.loginCustomer(loginDetails).subscribe(response=>{
      if (response.data.jwt==null) {
        this.is_loading=false
        this.responseMessage='login fail. check credential and try again'
        return
      }
      this.is_loading=false
      localStorage.setItem('token', response.data.jwt)
      localStorage.setItem('userId',response.data.id.toString())
      localStorage.setItem('email',response.data.email)
      localStorage.setItem('balance',response.data.account_balance)
      const redirectUrl ='/dashboard/trade'
      this.router.navigate([redirectUrl])
    })

  }
  

  registerUser(){
    const clientDetails:Client={
      first_name:this.register_first_name,
      last_name:this.register_last_name,
      email:this.register_email,
      password:this.register_password,
      account_balance:100
    }

    this.is_loading=true
    this.authService.registerCustomer(clientDetails).subscribe(response=>{
      if (response.status!=200) {
        this.is_loading=false
        this.responseMessage="registration failed. try again please"
        return
      }
      this.is_loading=false
      this.responseMessage='registration successful. Please login with your new credentials'
     
    })
  }



}
