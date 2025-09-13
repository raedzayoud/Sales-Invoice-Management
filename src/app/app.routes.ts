import { Routes } from '@angular/router';
import { Singup } from './auth/singup/singup';
import { Login } from './auth/login/login';
import { Seller } from './pages/seller/seller';
import { Voirproduits } from './pages/voirproduits/voirproduits';
import { Ventes } from './pages/ventes/ventes';
import { Tousventes } from './pages/tousventes/tousventes';
import { Admin } from './pages/admin/admin';
import { Tableau } from './pages/tableau/tableau';
import { Produit } from './pages/produit/produit';
import { Categorie } from './pages/categorie/categorie';
import { Venteradmin } from './pages/venteradmin/venteradmin';
import { Fournisseur } from './pages/fournisseur/fournisseur';
import { Rapport } from './pages/rapport/rapport';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },

  { path: 'signup', component: Singup }, // corrected

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
