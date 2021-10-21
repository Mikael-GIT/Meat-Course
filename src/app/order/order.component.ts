import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';

import { RadioOption } from './../shared/radio/RadioOption';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/CartItem';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {


  paymentOptions: RadioOption [] = [
    { label: 'Dinheiro', value: 'MON'},
    { label: 'Cartão de Débito', value: 'DEB'},
    { label: 'Cartão de Refeição', value: 'REF'}
  ]
  constructor(public orderService: OrderService, private cartItem: ShoppingCartService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

}
