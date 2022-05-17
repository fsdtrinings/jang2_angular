import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllLinksComponent } from './all-links/all-links.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { PhoneComponent } from './phone/phone.component';
import { CameraComponent } from './camera/camera.component';
import { SmarttvComponent } from './smarttv/smarttv.component';
import { LaptopComponent } from './laptop/laptop.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddProductComponent } from './add-product/add-product.component';




const routes:Routes = [

  {path:'',component:HomePageComponent},
  {path:'camera',component:CameraComponent},
  {path:'laptop',component:LaptopComponent},
  {path:'phone',component:PhoneComponent},
  {path:'smarttv',component:SmarttvComponent},
  {path:'cart',component:CartComponent},
  {path:'addProduct',component:AddProductComponent},
  

];

@NgModule({
  declarations: [
    AppComponent,
    AllLinksComponent,
    MainAreaComponent,
    PhoneComponent,
    CameraComponent,
    SmarttvComponent,
    LaptopComponent,
    CartComponent,
    HomePageComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
