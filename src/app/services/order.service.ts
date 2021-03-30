import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CustomerOrderResponse, Order, OrderResponse } from '../models/Order';


const HttpOptions = {
  headers: new HttpHeaders().set('content-type', 'application/json')
   .set('Access-Control-Allow-Origin', '*').set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  
}


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  customerId:string = localStorage.getItem('userId')
  fetchOrderUrl = `${environment.baseUrl}/order/customer/${this.customerId}`
  pendingOrderUrl = `${environment.baseUrl}/order/customer/order/pending/${this.customerId}`
  succesfulOrderUrl = `${environment.baseUrl}/order/customer/order/pending/${this.customerId}`
  createOrderUrl = `${environment.baseUrl}/order`

  getCustomerOrders():Observable<CustomerOrderResponse>{
    return this.http.get<CustomerOrderResponse>(this.fetchOrderUrl,HttpOptions)
  }

  getCustomerPendingOrders():Observable<CustomerOrderResponse>{
    return this.http.get<CustomerOrderResponse>(this.pendingOrderUrl, HttpOptions)
  }
  getSuccessfulCustomerOrders():Observable<CustomerOrderResponse>{
    return this.http.get<CustomerOrderResponse>(this.succesfulOrderUrl, HttpOptions)
  }

  createOrder(order:Order):Observable<OrderResponse>{
  
    return this.http.post<OrderResponse>(this.createOrderUrl,order, HttpOptions)
  }
}
