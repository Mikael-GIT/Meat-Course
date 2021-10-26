import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule } from "@angular/core";
import { RestaurantService } from 'app/restaurants/restaurants.service';

@NgModule({
  providers: [ShoppingCartService, RestaurantService, OrderService]
})
export class CoreModule {

}
