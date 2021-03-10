import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';

import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  foodName:string = '';
  foodPrice:number = 0;
  defaultMenu:Food[] = [];
  order:Food[] = [];

  constructor(private foodService:FoodService) {
    this.order = this.foodService.order;
    this.defaultMenu = this.foodService.defaultMenu;
  }

  ngOnInit(): void {
  }
  
  addCustomFood(): void{
    let newFood:Food = new Food(this.foodName, this.foodPrice);
    this.foodService.order.push(newFood);
    this.order = this.foodService.order;
  }
  
  addFood(food:Food): void{
    this.foodService.order.push(food);
    this.order = this.foodService.order;
  }

  removeFood(index:number): void {
    this.foodService.order.splice(index, 1);
  }



}
