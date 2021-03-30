import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { PortfolioRequest } from 'src/app/models/Portfolio';

@Component({
  selector: 'app-trade-view',
  templateUrl: './trade-view.component.html',
  styleUrls: ['./trade-view.component.css']
})




export class TradeViewComponent implements OnInit {
  product:string
  quantity:number
  price:number
  side:string
  responseMessage:string
  is_loading:boolean=false
  is_submiting:boolean=false
  customerOrders:any[]
  customerPendingOrders:any[]
  customerCompleteOrders:any[]
  martketData:any[]



  constructor(private orderService:OrderService, private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.getCustomerOrders()
    this.getCustomerPendingOrders()
    this.getCustomerCompleteOrders()
    this.getMarketData()
    
  }


  getCustomerOrders(){
    this.is_loading=true;
    this.orderService.getCustomerOrders( ).subscribe(response=>{
      if(response.status!=200){
        this.is_loading=false
        this.customerOrders=[]
      }
      this.is_loading=false
      this.customerOrders = response.data
      console.log(this.customerOrders)
    })
  }
  getCustomerPendingOrders(){
    this.is_loading=true;
    this.orderService.getCustomerPendingOrders( ).subscribe(response=>{
      if(response.status!=200){
        this.is_loading=false
        this.customerPendingOrders=[]
      }
      this.is_loading=false
      this.customerPendingOrders = response.data
    })
  }

  getCustomerCompleteOrders(){
    this.is_loading=true;
    this.orderService.getSuccessfulCustomerOrders( ).subscribe(response=>{
      if(response.status!=200){
        this.is_loading=false
        this.customerCompleteOrders=[]
      }
      this.is_loading=false
      this.customerCompleteOrders = response.data
      
    })
  }
  createOrder(){
    const orderDetails:Order={
      price:this.price,
      quantity:this.quantity,
      side:this.side,
      product:this.product,
      customerId:localStorage.getItem('userId')
      
    }
    this.is_submiting=true
    this.orderService.createOrder(orderDetails).subscribe(response=>{
      if(response.status!=200){
        this.is_loading=false
        this.responseMessage='error submitting order. Please try again'
        return
      }
      this.is_submiting=false
      this.responseMessage=response.message
    })

  }

  addItemToPortfolio(orderId:number){
    const portfolioRequest:PortfolioRequest={
      order_id:orderId,
      customer_id:localStorage.getItem('userId')

    }
  this.portfolioService.addItemToPortfolio(portfolioRequest).subscribe(response=>{
    console.log(response.data)
  })

}

getMarketData(){
  this.orderService.getMartketData().subscribe(response=>{
    this.martketData=response
    //console.log(this.martketData)

  })
}

}
