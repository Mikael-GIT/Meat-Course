import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './CartItem';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  items: CartItem [] = []

  constructor() { }

  addItem(item : MenuItem){
    let foundItem = this.items.find(mItem =>  mItem.menuItem.id === item.id);
    if(foundItem){
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item : CartItem){
    this.items.splice(this.items.indexOf(item), 1);
  }
  total(): number {
    return this.items.map(item => item.total()).reduce((prev, value) => prev + value, 0);
  }

  clear(){
    this.items = []
  }
}
