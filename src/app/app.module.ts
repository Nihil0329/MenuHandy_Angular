import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LanderComponent } from './lander/lander.component';
import { ContactComponent } from './contact/contact.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CardComponent } from './card/card.component';
import { UpiComponent } from './upi/upi.component';
import { FinalComponent } from './final/final.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LanderComponent,
    ContactComponent,
    CuisineComponent,
    MenuComponent,
    CartComponent,
    PaymentComponent,
    CardComponent,
    UpiComponent,
    FinalComponent,
    AddressComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
