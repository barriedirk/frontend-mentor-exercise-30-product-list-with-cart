import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { GlobalStore } from '@store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DecimalPipe],
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

  onConfirmOrder() {
    alert('@todo, need implementation');
  }
}
