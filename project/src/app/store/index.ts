import { computed, inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { CartItem, CartItemSubTotal, CartTotal } from '@interfaces/cart';
import { CART_STATE, updateStorage } from './cart-state';

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState(() => inject(CART_STATE)),
  withMethods((store) => ({
    addItem(item: CartItem) {
      patchState(store, { isLoading: true });

      const cart = structuredClone(store.cart());

      if (cart[item.id]) {
        cart[item.id].quantity++;
      } else {
        cart[item.id] = { ...item, quantity: 1 };
      }

      updateStorage(cart);
      patchState(store, { isLoading: false, cart });
    },
    increment(id: string) {
      const cart = structuredClone(store.cart());

      if (cart[id]) cart[id].quantity++;

      patchState(store, { cart });
    },
    decrement(id: string) {
      const cart = structuredClone(store.cart());

      if (cart[id]) {
        cart[id].quantity--;
        if (cart[id].quantity <= 0) {
          delete cart[id];
        }
      }

      updateStorage(cart);
      patchState(store, { cart });
    },
    removeItem(id: string) {
      const cart = structuredClone(store.cart());
      delete cart[id];

      updateStorage(cart);
      patchState(store, { cart });
    },
    isInCart(id: string): boolean {
      return !!store.cart()[id];
    },
    subTotal(id: string): number {
      const item = store.cart()[id];

      return !item ? 0 : item.quantity * item.price;
    },
    total: computed<CartTotal>(() =>
      Object.values(store.cart()).reduce(
        (acc, item) => {
          acc.totalItems += item.quantity;
          acc.totalPrice += item.quantity * item.price;

          return acc;
        },
        { totalPrice: 0, totalItems: 0 }
      )
    ),
    getItems: computed<CartItemSubTotal[]>(() =>
      Object.values(store.cart())
        .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
        .map((item) => ({ ...item, subTotal: item.price * item.quantity }))
    ),
    getItem: (id: string): CartItem | null => {
      return store.cart()[id] ?? null;
    },
  }))
);
