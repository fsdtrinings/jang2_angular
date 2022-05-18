import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinkPanelComponent } from './link-panel/link-panel.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccountInfoComponent } from './account-info/account-info.component';

const routes:Routes = [
  {path:'addAccount',component:AddAccountComponent},
  {path:'accinfo',component:AccountInfoComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    LinkPanelComponent,
    MainPanelComponent,
    AddAccountComponent,
    AccountInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
