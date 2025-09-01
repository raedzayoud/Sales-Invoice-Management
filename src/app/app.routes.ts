import { Routes } from '@angular/router';
import { Singup } from './auth/singup/singup';
import { Login } from './auth/login/login';
import { Seller } from './seller/seller';

export const routes: Routes = [
  { path: '', redirectTo: 'seller', pathMatch: 'full' },
  {
    path: 'singup',
    component: Singup,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'seller',
    component: Seller,
  },
];
