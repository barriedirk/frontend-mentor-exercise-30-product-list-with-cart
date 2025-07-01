import { Injectable } from '@angular/core';
import { signalStore, withState } from '@ngrx/signals';

import { Product } from '@app/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class Store {
  // https://ngrx.io/guide/signals/signal-store

  store = signalStore(
    withState<{ products: { id: number; name: string }[] }>({
      products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ],
    })
  );

  // // Method to get the products state from the store
  // getProducts() {
  //   return this.store.select;
  //   return this.store.select((state) => state.products);
  // }

  // // Method to add a product to the store
  // addProduct(newProduct: { id: number; name: string }) {
  //   this.store.update((state) => ({
  //     ...state,
  //     products: [...state.products, newProduct],
  //   }));
  // }
}
