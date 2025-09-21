import { Component, OnInit } from '@angular/core';
import { CategorieModel } from '../../services/models/categorie';
import { CategorieService } from '../../services/api/categorie/categorie';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorie',
  imports: [NgFor, CommonModule],
  templateUrl: './categorie.html',
  styleUrl: './categorie.scss',
})
export class Categorie implements OnInit {
  showClientForm: boolean = false;
  categorieModel: CategorieModel[] = [];
  constructor(private categorieService: CategorieService) {}
  ngOnInit(): void {
    this.getAllCategorie();
  }

  getAllCategorie() {
    this.categorieService.getAllCategorie().subscribe({
      next: (respose: any) => {
        this.categorieModel = respose.categories;
      },
      error: () => {
        console.log('error when fetching data');
      },
    });
  }

  openClientForm() {
    this.showClientForm = true;
  }

  closeClientForm() {
    this.showClientForm = false;
  }
}
