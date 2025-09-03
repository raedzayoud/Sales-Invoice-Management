import { Routes } from '@angular/router';
import { Singup } from './auth/singup/singup';
import { Login } from './auth/login/login';
import { Seller } from './seller/seller';
import { Voirproduits } from './voirproduits/voirproduits';
import { Ventes } from './ventes/ventes';
import { Tousventes } from './tousventes/tousventes';

export const routes: Routes = [
  { path: '', redirectTo: 'seller', pathMatch: 'full' },

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
];
