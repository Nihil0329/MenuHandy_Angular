import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LanderComponent } from './lander/lander.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { MenuComponent } from './menu/menu.component';
import { UpiComponent } from './upi/upi.component';
import { PaymentComponent } from './payment/payment.component';
import { FinalComponent } from './final/final.component';
import { CartComponent } from './cart/cart.component';
import { CardComponent } from './card/card.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {path:'', component:LanderComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactComponent},
  {path:'cuisine', component:CuisineComponent},
  {path:'menu', component:MenuComponent},
  {path:'card', component:CardComponent},
  {path:'cart', component:CartComponent},
  {path:'final', component:FinalComponent},
  {path:'payment', component:PaymentComponent},
  {path:'upi', component:UpiComponent},
  {path:'address', component:AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
