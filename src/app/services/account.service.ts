import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';
import { BalanceRequest, BalanceResponse } from '../models/Portfolio';
import { Observable } from 'rxjs';

const HttpOptions = {
  headers: new HttpHeaders().set('content-type', 'application/json')
   .set('Access-Control-Allow-Origin', '*').set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  
}

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private http:HttpClient) { }

  topUpBalanceUrl:string=`${environment.baseUrl}/customer/topup/balance/${localStorage.getItem('userId')}`
  
  topUpAccount(balance:BalanceRequest):Observable<BalanceResponse>{
    return this.http.put<BalanceResponse>(this.topUpBalanceUrl,balance, HttpOptions)
  }
}
