import { NgClass } from '@angular/common';
import {
  Input,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  effect,
  signal,
} from '@angular/core';
import { CartItem } from '@app/interfaces/cart';
import { Product } from '@app/interfaces/product';
import { GlobalStore } from '@app/store';

@Component({
  selector: 'app-button-cart',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button-cart.html',
  styleUrl: './button-cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCart {
  private cartStore = inject(GlobalStore);

  @Input({ required: true }) product!: Product;

  cartItem = signal<CartItem | null>(null);

  constructor() {
    effect(() => {
      const item = this.cartStore.getItem(this.product.id);

      this.cartItem.set(item);
    });
  }

  @HostBinding('class') hostClass = 'button-cart';
  hostClasses = 'button-cart';

  @Input()
  set class(value: string) {
    this.hostClass = `button-cart ${value}`;
    this.hostClasses = `button-cart ${value}`;
  }

  get isInCart(): boolean {
    return this.cartStore.isInCart(this.product.id);
  }

  onAddToCart() {
    this.cartStore.addItem({
      id: this.product.id,
      name: this.product.name,
      quantity: 0,
      price: this.product.price,
    });
  }

  onIncrementQuantity() {
    this.cartStore.increment(this.product.id);
  }

  onDecrementQuantity() {
    this.cartStore.decrement(this.product.id);
  }
}
