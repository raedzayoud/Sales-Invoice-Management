import { Routes } from '@angular/router';
import { Singup } from './auth/singup/singup';
import { Login } from './auth/login/login';
import { Seller } from './seller/seller';
import { Voirproduits } from './voirproduits/voirproduits';
import { Ventes } from './ventes/ventes';
import { Tousventes } from './tousventes/tousventes';
import { Admin } from './admin/admin';
import { Tableau } from './tableau/tableau';
import { Produit } from './produit/produit';
import { Categorie } from './categorie/categorie';
import { Venteradmin } from './venteradmin/venteradmin';
import { Fournisseur } from './fournisseur/fournisseur';
import { Rapport } from './rapport/rapport';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },

  { path: 'singup', component: Singup },
  { path: 'login', component: Login },

  {
    path: 'seller',
    component: Seller,
    children: [
      { path: '', redirectTo: 'ventes', pathMatch: 'full' },
      { path: 'voirproduits', component: Voirproduits },
      { path: 'ventes', component: Ventes },
      { path: 'tousventes', component: Tousventes },
    ],
  },

  {
    path: 'admin',
    component: Admin,
    children: [
      { path: '', redirectTo: 'tableau', pathMatch: 'full' },
      { path: 'tableau', component: Tableau },
      { path: 'produit', component: Produit },
      { path: 'categorie', component: Categorie },
      { path: 'venteradmin', component: Venteradmin },
      { path: 'fournisseur', component: Fournisseur },
      { path: 'rapport', component: Rapport },
    ],
  },
];
