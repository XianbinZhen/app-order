import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { ShowOrderComponent } from './components/show-order/show-order.component';

const routes: Routes = [
  {path: 'add', component: AddOrderComponent},
  {path:'show', component: ShowOrderComponent},
  {path: '**', component: AddOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
