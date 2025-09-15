import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common'; // ✅ apporte NgFor, NgIf, NgClass
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  stock: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-ventes',
  imports: [NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './ventes.html',
  styleUrl: './ventes.scss',
  standalone: true,
})
export class Ventes {
  products: Product[] = [
    { name: 'Samsung Galaxy S23', price: 899, stock: 5 },
    { name: 'iPhone 14 Pro', price: 1199, stock: 25 },
    { name: 'MacBook Pro 16"', price: 2499, stock: 2 },
    { name: 'Nike Air Max', price: 129, stock: 45 },
    { name: 'Chaise de bureau', price: 199, stock: 12 },
  ];
  cart: CartItem[] = [];
  get subtotal() {
    return this.cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }
  get total() {
    return this.subtotal;
  }
  addToCart(product: any) {
    if (product.stock > 0) {
      let item = this.cart.find((i) => i.product.name === product.name);
      if (item) {
        item.quantity++;
      } else {
        this.cart.push({ product, quantity: 1 });
      }
      product.stock--;
    }
  }

  increaseQwuantity(item: any) {
    if (item.product.stock > 0) {
      item.quantity++;
      item.product.stock--;
    }
  }

  decreaseQwuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.product.stock++;
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: any) {
    item.product.stock += item.quantity;
    this.cart = this.cart.filter((i) => i !== item);
  }

  clearCart() {
    this.cart.forEach((item) => {
      item.product.stock += item.quantity;
    });
    this.cart = [];
  }
}
