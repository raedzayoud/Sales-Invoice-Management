import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common'; // ✅ apporte NgFor, NgIf, NgClass
import { FormsModule } from '@angular/forms';
import { ProduitModel } from '../../services/models/produitmodel';
import { produitService } from '../../services/api/produit/produit';

interface CartItem {
  product: ProduitModel;
  quantity: number;
}

@Component({
  selector: 'app-ventes',
  imports: [NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './ventes.html',
  styleUrl: './ventes.scss',
  standalone: true,
})
export class ventes implements OnInit {
  constructor(private produitService: produitService) {}
  products: ProduitModel[] = [];
  cart: CartItem[] = [];
  loading = true;

  ngOnInit(): void {
    this.produitService.getAllProduits().subscribe({
      next: (data: any) => {
        this.products = data.products;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

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
