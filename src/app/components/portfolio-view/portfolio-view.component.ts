import { Component, OnInit } from '@angular/core';
import { PortfolioRequest } from 'src/app/models/Portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css']
})
export class PortfolioViewComponent implements OnInit {

  customerPortofolio:any[]
  is_loading:boolean = false


  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.getCustomerPortfolio()
  }
  
  getCustomerPortfolio(){
    this.is_loading=true
    return this.portfolioService.getUserPortfolio().subscribe(response=>{
      if(response.status!=200){
        this.is_loading=false
        this.customerPortofolio=[]
        return
      }
      this.is_loading=false
      this.customerPortofolio = response.data
      console.log(response.data)
    })
  }

  

  deleteItemfromPortfolio(itemId:number){
    this.portfolioService.deleteItemFromPportfolio(itemId).subscribe(response=>{
      console.log(response)
    })
  }

}
