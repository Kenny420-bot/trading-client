import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TradeViewComponent } from './components/trade-view/trade-view.component';
import { PortfolioViewComponent } from './components/portfolio-view/portfolio-view.component';
import { AccountViewComponent } from './components/account-view/account-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginRegisterComponent },
  {
    path: 'dashboard', children: [
      { path: 'trade', component: TradeViewComponent },
      { path: 'portfolio', component: PortfolioViewComponent },
      { path: 'account', component: AccountViewComponent },
    ], component: DashboardComponent
  },
  // { path: '**', component: '' }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }