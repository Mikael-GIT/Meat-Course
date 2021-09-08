import { RestaurantService } from './restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant [];

  constructor(private restaurant: RestaurantService) { }

  ngOnInit() {
    this.restaurant.getRestaurants().subscribe(response => this.restaurants = response); //Este método subscribe é chamado toda vez que o dado chegar, ele retona
    //o que vem do método que estamos chamando.
  }

}
