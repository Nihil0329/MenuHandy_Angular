import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  public cartItemList : any =[]
  public foodList = new BehaviorSubject<any>([]);

  constructor() { }

  getAll(): Food[]{
    return [
      {
        id:1,
        price:129,
        name:'Biriyani',
        imageUrl:'../../assets/images/food/biriyani.png',
        description:"Indian"
      },
      {
        id:2,
        price:55,
        name:'Dosa',
        imageUrl:'../../assets/images/food/Dosa.png',
        description:"Indian"

      },
      {
        id:3,
        price:20,
        name:'Samosa',
        imageUrl:'../../assets/images/food/Samosa.png',
        description:"Indian"

      },
      {
        id:4,
        price:119,
        name:'Indian Thali',
        imageUrl:'../../assets/images/food/indianthali.png',
        description:"Indian"

      },
      {
        id:5,
        price:179,
        name:'Pizza',
        imageUrl:'../../assets/images/food/italian pizza.png',
        description:"Italian"

      },
      {
        id:6,
        price:259,
        name:'Ramen',
        imageUrl:'../../assets/images/food/ramen.png',
        description:"Japanese"

      },
      {
        id:7,
        price:149,
        name:'Schezwan Noodles',
        imageUrl:'../../assets/images/food/noodles.png',
        description:"Chinese"

      },
      {
        id:8,
        price:109,
        name:'Veg noodles',
        imageUrl:'../../assets/images/food/veganfood.png',
        description:"Chinese"

      },
      {
        id:9,
        price:125,
        name:'Frappe',
        imageUrl:'../../assets/images/food/Frappe.png',
        description:"Italian"

      },
      {
        id:10,
        price:49,
        name:'Poori',
        imageUrl:'../../assets/images/food/poori.png',
        description:"Indian"

      },
      {
        id:11,
        price:18,
        name:'Idli',
        imageUrl:'../../assets/images/food/idli.png',
        description:"Indian"

      },
      {
        id:12,
        price:145,
        name:'Butter chicken',
        imageUrl:'../../assets/images/food/butter chicken.png',
        description:"Indian"

      },
      {
        id:13,
        price:79,
        name:'Bisibelabath',
        imageUrl:'../../assets/images/food/Bisi.png',
        description:"Indian"

      }
    ]
  }
  getProducts(){
    return this.foodList.asObservable();
  }
  setProduct(product: any){
    this.cartItemList.push(...product);
    this.foodList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.foodList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    const index = this.cartItemList.indexOf(product);
    this.cartItemList.splice(index, 1);
  }
  removeAllCart(){
    this.cartItemList = []
    this.foodList.next(this.cartItemList);
  }
}
