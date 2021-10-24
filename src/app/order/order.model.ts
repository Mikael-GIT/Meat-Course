import { CartItem } from '../restaurant-detail/shopping-cart/CartItem';
class Order {
  address: string;
  number: number;
  optionalAddress: string;
  paymentOption: string;
  orderItems: OrderItem [] = []
}

class OrderItem {
  constructor(quantity: number, menuId: string){}
}

export {Order, OrderItem }
