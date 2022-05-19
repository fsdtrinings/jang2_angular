import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LinkPanelComponent } from './link-panel/link-panel.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccountInfoComponent } from './account-info/account-info.component';
import { HomeComponent } from './home/home.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';
import { DepositComponent } from './deposit/deposit.component';

const routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'addAccount',component:AddAccountComponent},
  {path:'accinfo',component:AccountInfoComponent},
  {path:'transferfund',component:TransferFundComponent},
  {path:'deposit',component:DepositComponent},
  {path:'**',component:HomeComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    LinkPanelComponent,
    MainPanelComponent,
    AddAccountComponent,
    AccountInfoComponent,
    HomeComponent,
    TransferFundComponent,
    DepositComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
