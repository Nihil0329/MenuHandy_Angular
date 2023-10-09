import { Food } from './../models/food';
import { FoodServiceService} from './../services/food-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  foods: Food[]= [];
  constructor(private FoodService:FoodServiceService){
  }
  ngOnInit(): void{
    this.foods=this.FoodService.getAll();
  }
  addtoCart(item: any){
    this.FoodService.addtoCart(item);
  }

}
