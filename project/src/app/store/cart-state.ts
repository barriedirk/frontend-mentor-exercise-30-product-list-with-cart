import { InjectionToken } from '@angular/core';
import { initialData } from './initial-data';
import { Cart, CartItem } from '@interfaces/cart';

function isValidCartItem(obj: any): obj is CartItem {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.quantity === 'number' &&
    typeof obj.price === 'number'
  );
}

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
      try {
        const parsed = JSON.parse(cartRaw);
        const isValid =
          typeof parsed === 'object' &&
          parsed !== null &&
          Object.values(parsed).every(isValidCartItem);

        if (isValid) {
          cart = parsed;
        } else {
          console.warn('Invalid cart data in localStorage. Resetting.');

          cart = initialData['cart'];
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      } catch (e) {
        console.error('Error parsing cart from localStorage:', e);

        cart = initialData['cart'];
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }

    return {
      cart,
      isLoading: false,
    };
  },
});
