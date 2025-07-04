import { InjectionToken } from '@angular/core';
import { initialData } from './initial-data';
import { Cart, CartItem } from '@interfaces/cart';

export type CartType = Record<string, CartItem>;

export const updateStorage = async (cart: CartType) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const CART_STATE = new InjectionToken<Cart>('Cart', {
  factory: () => {
    const cartRaw = localStorage.getItem('cart');
    let cart: CartType = {};

    if (!cartRaw) {
      localStorage.setItem('cart', JSON.stringify(initialData['cart']));

      cart = initialData['cart'];
    } else {
      cart = JSON.parse(cartRaw) as CartType;
    }

    return {
      cart,
      isLoading: false,
    };
  },
});
