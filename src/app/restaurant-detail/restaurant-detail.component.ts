import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { RestaurantService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private RestaurantService: RestaurantService, private route: ActivatedRoute) { }

  restaurant: Restaurant

  ngOnInit() {
    this.RestaurantService.getRestaurantById(this.route.snapshot.params['id']).subscribe(restaurant => this.restaurant = restaurant);
  }

}
