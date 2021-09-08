import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Restaurant } from "./restaurant/restaurant.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error-handler";


@Injectable()
export class RestaurantService {

  baseUrl = 'http://localhost:3000/'

  constructor(private http: Http){}

  getRestaurants(): Observable<Restaurant[]> { //Este método vai retornar um array de restaurants
    return this.http.get(`${this.baseUrl}restaurants`)
    .map(response => response.json()) //Este método vai retornar um response, este response tem o status, o corpo e afins, então precisamos fazer um map
    //para "filtrar" o que precisamos. Ou seja, estamos mapeando, trocando a resposta pelo json que vem com a resposta.
    .catch(ErrorHandler.handleError);
  }

  rests: Restaurant[] = [];


  getRestaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${this.baseUrl}restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}restaurants/${id}/reviews`)
    .map(restaurant => restaurant.json())
    .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${this.baseUrl}restaurants/${id}/menu`)
    .map(restaurant => restaurant.json())
    .catch(ErrorHandler.handleError);
  }
}

