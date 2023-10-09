import { FoodServiceService } from './../services/food-service.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public foods : any = [];
  public grandTotal !: number;
  constructor(private FoodService : FoodServiceService) { }

  ngOnInit(): void {
    this.FoodService.getProducts().subscribe(res => {
      console.log('Received data:', res); // Log the received data
      this.foods = res;
      this.grandTotal = this.FoodService.getTotalPrice();
    })
  }
  removeCartItem(item: any){
    this.FoodService.removeCartItem(item);
    this.grandTotal -= item.price;
  }
  removeAllCart(){
    this.FoodService.removeAllCart();
  }

}
