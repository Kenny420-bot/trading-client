import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment.prod";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Client} from "../models/Client"
import { Observable } from 'rxjs';
import { LoginDetails, LoginResponse, RegisterResponse} from '../models/Login';
import { Router } from '@angular/router';


const HttpOptions = {
  headers: new HttpHeaders().set('content-type', 'application/json')
   .set('Access-Control-Allow-Origin', '*')
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginUrl:string = `${environment.baseUrl}/customer/login`
  registerUrl:string = `${environment.baseUrl}/customer/register`
  
  constructor(private http:HttpClient, private router:Router) { }

  registerCustomer(client:Client):Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(this.registerUrl, client, HttpOptions)
  }
  
  loginCustomer(loginDetails:LoginDetails):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.loginUrl,loginDetails, HttpOptions)
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }

  isUserLoggedIn(){
    const isTokenPresent:boolean= localStorage.getItem('token')==null
    if(isTokenPresent){
      this.router.navigate(['/login'])

    }else{
      this.router.navigate(['/dashboard/trade'])
    }
  }
  
}
