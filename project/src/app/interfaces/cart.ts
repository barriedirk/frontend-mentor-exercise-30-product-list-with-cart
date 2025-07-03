export interface Cart {
  cart: CartItem[];
}

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}
