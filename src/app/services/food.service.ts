import { Injectable } from '@angular/core';
import { Food } from '../models/food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  order: Food[] = [];
  table: Food[][] = [[]];
  tableNumber: number = 0;
  tableTotal: number = 1;

  defaultMenu: Food[] = [
    {name: 'Chicken Sandwich Meal', price: 9.59},
    {name: 'Duluxe Meal', price: 10.79},
    {name: 'Double Cheese Meal', price: 12.09},
    {name: 'Checken Nuggets Meal', price: 10.49},
    {name: 'French Fries', price: 2.69},
    {name: 'Crispy Chicken Sandwich', price: 5.29},
    {name: 'CheeseBurger', price: 2.09},
    {name: 'Quarter Pounder', price: 6.59},
    {name: 'Double Hamburger', price: 4.39},
    {name: 'Bacon Sandwich', price: 5.39},
    {name: 'Coke', price: 1.49},
    {name: 'Premium Roast Coffee', price: 1.59},
    {name: 'Hot Tea', price: 1.09},
    {name: 'Iced Coffee', price: 2.09},
    {name: 'Hot Chocolate', price: 2.39},
    {name: 'Caramel Macchiato', price: 2.39},
    {name: 'Latte', price: 2.39},
    {name: 'Caramel Sundae', price: 3.09},
    {name: 'Apple Pie', price: 2},
    {name: 'Milk', price: 1.19},
  ];

  constructor() { }
}
