import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantService } from './../restaurants/restaurants.service';
import { OrderService } from './../order/order.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import {NgModule, ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService, RestaurantService, OrderService]
    }
  }
}
