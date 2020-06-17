import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/product';
import { CartService } from '../_services/cart.service';
import { Cart } from '../_models/cart';

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
    private cartService: CartService) { }

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

}
