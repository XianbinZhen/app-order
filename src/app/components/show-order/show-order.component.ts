import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.scss']
})
export class ShowOrderComponent implements OnInit {

  order:Food[] = [];
  total:number = 0;

  constructor(private foodService:FoodService) { 
    this.order = this.foodService.order;
    this.order.forEach( e => {
      this.total += e.price;
    });
  }

  ngOnInit(): void {
  }

}
