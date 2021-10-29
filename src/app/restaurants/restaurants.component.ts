import { RestaurantService } from './restaurants.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Restaurant } from './restaurant/restaurant.model';
import { trigger, state, style, transition, animate } from "@angular/animations"
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import { Observable } from 'rxjs';

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

  restaurants: Restaurant[];

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restaurant: RestaurantService, private formBuilder: FormBuilder) {

    this.searchControl = this.formBuilder.control('')

    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    })
  }

  ngOnInit() {
    this.restaurant.getRestaurants().subscribe(response => this.restaurants = response); //Este método subscribe é chamado toda vez que o dado chegar, ele retona
    //o que vem do método que estamos chamando.

    this.searchControl.valueChanges
      .debounceTime(500) //Esperar 500 ms para executar o evento
      .distinctUntilChanged() //Se o resultado for igual ao ultimo ele nao chama de novo
      .switchMap(
        searchTerm => this.restaurant.getRestaurants(searchTerm)
        .catch(error =>
        Observable.from([])))
      .subscribe(restaurants => this.restaurants = restaurants)
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }
}
