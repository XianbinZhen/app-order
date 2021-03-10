import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { ShowOrderComponent } from './components/show-order/show-order.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { FormsModule } from '@angular/forms';
import { TaxPipe } from './pipes/tax.pipe';
import { ShortenStrPipe } from './pipes/shorten-str.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddOrderComponent,
    ShowOrderComponent,
    MenuButtonComponent,
    TaxPipe,
    ShortenStrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
