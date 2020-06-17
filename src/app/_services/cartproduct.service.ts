import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartproductService {

  constructor(private http: HttpClient) { }

  add(cart: any) {
    return this.http.post(`${environment.apiUrl}/cartproduct`, cart);
  }

  update(cart: any) {
    return this.http.put(`${environment.apiUrl}/cartproduct/${cart.id}`, cart);
  }

  delete(cart: any) {
    return this.http.post(`${environment.apiUrl}/cartproduct-delete/`, cart);
  }
}
