import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {


  @Input() name:string = 'default food';
  @Input() price:string = '9.99';

  constructor() { }

  ngOnInit(): void {
  }

}
