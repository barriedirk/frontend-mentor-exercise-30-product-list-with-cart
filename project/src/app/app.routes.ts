import { Routes } from '@angular/router';

import { ProductList } from '@pages/product-list/product-list';
import { PageNotFound } from '@pages/page-not-found/page-not-found';

export const routes: Routes = [
  // { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: '', component: ProductList },
  { path: 'product-list', component: ProductList },
  { path: '**', component: PageNotFound },
];
