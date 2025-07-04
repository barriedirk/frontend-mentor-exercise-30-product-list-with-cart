import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { GlobalStore } from '@store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cart {
  private cartStore = inject(GlobalStore);

  cartItems = this.cartStore.getItems;
  total = this.cartStore.total;

  onRemoveItem(id: string) {
    this.cartStore.removeItem(id);
  }
}
