import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Portfolio, PortfolioRequest, PortfolioResponse } from '../models/Portfolio';

const HttpOptions = {
  headers: new HttpHeaders().set('content-type', 'application/json')
   .set('Access-Control-Allow-Origin', '*').set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  
}
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  userPortfolioUrl:string=`${environment.baseUrl}/portfolio`


  constructor(private http:HttpClient) { }

  getUserPortfolio():Observable<PortfolioResponse>{
    console.log(HttpOptions)
    return this.http.get<PortfolioResponse>(this.userPortfolioUrl, HttpOptions)
  }

  addItemToPortfolio(portfolioRequest:PortfolioRequest):Observable<Portfolio>{
    return this.http.post<Portfolio>(this.userPortfolioUrl, portfolioRequest, HttpOptions)
  }

  deleteItemFromPportfolio(itemId:number):Observable<any>{
    return this.http.delete(`${this.userPortfolioUrl}/delete/${itemId}`, HttpOptions)
  }

}
