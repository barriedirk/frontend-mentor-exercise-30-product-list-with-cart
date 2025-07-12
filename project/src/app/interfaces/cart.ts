export interface CartTotal {
  totalPrice: number;
  totalItems: number;
}

export interface Cart {
  cart: Record<string, CartItem>;
  isLoading?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  thumbnail: string;
  quantity: number;
  price: number;
}

export interface CartItemSubTotal extends CartItem {
  subTotal: number;
}
