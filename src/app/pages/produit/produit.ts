import { Component, OnInit } from '@angular/core';
import { produitService } from '../../services/api/produit/produit';
import { ProduitModel } from '../../services/models/produitmodel';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-produit',
  imports: [NgFor],
  templateUrl: './produit.html',
  styleUrl: './produit.scss',
})
export class Produit implements OnInit {
  produitModel: ProduitModel[] = [];
  constructor(private produitService: produitService) {}
  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.produitService.getAllProduits().subscribe({
      next: (respose: any) => {
        this.produitModel = respose.products;
      },
      error: () => {
        console.log('error when fetching data');
      },
    });
  }
}
