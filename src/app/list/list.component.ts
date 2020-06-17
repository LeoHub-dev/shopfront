import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/product';
import { CartService } from '../_services/cart.service';
import { Cart } from '../_models/cart';
import { CartproductService } from '../_services/cartproduct.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productList: Product[] = [];
  activeCart: Cart;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private cartProductService: CartproductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((response) => {
      this.productList = response.data;
    },
    error => {
      console.log(error);
    })

    this.cartService.getAll().subscribe((response) => {
      this.activeCart = response.data;
    },
    error => {
      console.log(error);
    })
  }

  addToCart(id){
    this.cartProductService.add({product_id: id, cart_id: this.activeCart.id, quantity: 1}).subscribe((response) => {
      this.activeCart.products.push(this.productList.find(el => el.id == id));
    })
  }

  deleteFromCart(id){
    this.cartProductService.delete({product_id: id, cart_id: this.activeCart.id}).subscribe((response) => {
      let index = this.activeCart.products.findIndex((el) => el.id == id)
      if(index != -1){
        this.activeCart.products.splice(index, 1);
      }
    })
  }

  logChange(event, id){
    console.log('Cambio', id, event.target.value)
    this.cartProductService.add({product_id: id, cart_id: this.activeCart.id, quantity: event.target.value}).subscribe((response) => {
      let index = this.activeCart.products.findIndex((el) => el.id == id)
      if(index != -1){
        this.activeCart.products[index] = this.productList.find(el => el.id == id);
      }
    })
  }

}
