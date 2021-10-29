import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Restaurant } from "./restaurant/restaurant.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error-handler";


@Injectable()
export class RestaurantService {

  baseUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient){}

  getRestaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined
    if(search){
      params = new HttpParams().append('q', search)
    }
    return this.http.get<Restaurant[]>(`${this.baseUrl}restaurants`, {params: params})
  }

  rests: Restaurant[] = [];


  getRestaurantById(id: string): Observable<Restaurant>{
    return this.http.get<Restaurant>(`${this.baseUrl}restaurants/${id}`)
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.baseUrl}restaurants/${id}/menu`)
  }
}

