import { Component, OnInit } from '@angular/core';
import { BalanceRequest } from 'src/app/models/Portfolio';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  amount:number
  
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  topUpBalance(){
    const accountDetails:BalanceRequest={
      account_balance:this.amount
    }

    this.accountService.topUpAccount(accountDetails).subscribe(response=>{
      if(response.status==200){
        localStorage.setItem('balance',response.data.account_balance)
        return
      }
    })
  }

}
