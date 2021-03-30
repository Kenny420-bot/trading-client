import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Client} from "../models/Client"
import { Observable } from 'rxjs';
import { LoginDetails, LoginResponse, RegisterResponse} from '../models/Login';


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
  
  constructor(private http:HttpClient) { }

  registerCustomer(client:Client):Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(this.registerUrl, client, HttpOptions)
  }
  
  loginCustomer(loginDetails:LoginDetails):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.loginUrl,loginDetails, HttpOptions)
  }
  
}
