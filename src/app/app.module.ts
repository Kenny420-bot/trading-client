import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TradeViewComponent } from './components/trade-view/trade-view.component';
import { PortfolioViewComponent } from './components/portfolio-view/portfolio-view.component';
import { AccountViewComponent } from './components/account-view/account-view.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    DashboardComponent,
    TradeViewComponent,
    PortfolioViewComponent,
    AccountViewComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
