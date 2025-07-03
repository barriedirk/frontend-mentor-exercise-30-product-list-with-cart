import { Injectable } from '@angular/core';
import { signalStore, withState } from '@ngrx/signals';

import { Product } from '@interfaces/product';

import { Cart, CartItem } from '@interfaces/cart';

@Injectable({
  providedIn: 'root',
})
export class StoreCart {
  // https://ngrx.io/guide/signals/signal-store

  store = signalStore(
    withState<Cart>({
      cart: [
        {
          id: 'd8a054e4-8c2a-4db3-82b6-19f2ae7b8b56',
          name: 'Waffle with Berries',
          quantity: 3,
          price: 6.5,
        },

        {
          id: 'f1b43f3b-cf8f-47b5-9f7b-69c5e010f385',
          name: 'Vanilla Bean Crème Brûlée',
          quantity: 19,
          price: 7.0,
        },
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
