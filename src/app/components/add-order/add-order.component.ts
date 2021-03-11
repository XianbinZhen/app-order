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
  tableNumber: number = 0;
  tableTotal: number = 0;

  constructor(private foodService:FoodService) {
    this.defaultMenu = this.foodService.defaultMenu;
    this.tableNumber = this.foodService.tableNumber;
    this.order = this.foodService.table[this.tableNumber];
    this.tableTotal = this.foodService.table.length;
  }

  ngOnInit(): void {
  }
  
  addCustomFood(): void {
    let newFood:Food = new Food(this.foodName, this.foodPrice);
    this.foodService.table[this.tableNumber].push(newFood);
    this.order = this.foodService.table[this.tableNumber];
  }
  
  addFood(food:Food): void {
    this.foodService.table[this.tableNumber].push(food);
    this.order = this.foodService.table[this.tableNumber];
  }

  removeFood(index:number): void {
    this.foodService.table[this.tableNumber].splice(index, 1);
  }

  addTable(): void {
    this.foodService.table[this.foodService.tableTotal] = [];
    this.foodService.tableNumber = this.foodService.tableTotal;
    this.foodService.tableTotal++;
    this.order = [];
    this.tableNumber = this.foodService.tableNumber;
    this.tableTotal = this.foodService.tableTotal;
  }

  changeTable(num:number): void {
    this.tableNumber = num;
    this.foodService.tableNumber = num;
    this.order = this.foodService.table[this.tableNumber];
  }

}
