import { RestaurantService } from './restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import {trigger, state, style, transition, animate} from "@angular/animations"

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      }))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden'

  restaurants: Restaurant [];

  constructor(private restaurant: RestaurantService) { }

  ngOnInit() {
    this.restaurant.getRestaurants().subscribe(response => this.restaurants = response); //Este método subscribe é chamado toda vez que o dado chegar, ele retona
    //o que vem do método que estamos chamando.
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }
}
