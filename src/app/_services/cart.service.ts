import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cart } from '../_models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(`${environment.apiUrl}/carts`);
  }

  getById(id: number) {
    return this.http.get<any>(`${environment.apiUrl}/carts/${id}`);
  }

  add(cart: Cart) {
    return this.http.post(`${environment.apiUrl}/carts`, cart);
  }

  update(cart: Cart) {
    return this.http.put(`${environment.apiUrl}/carts/${cart.id}`, cart);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/carts/${id}`);
  }

}
