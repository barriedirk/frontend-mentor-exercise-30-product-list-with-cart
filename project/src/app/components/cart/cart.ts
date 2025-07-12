import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ModalService } from '@app/modals/modal-cart-service';

import { GlobalStore } from '@store';
import { CartList } from '../cart-list/cart-list';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartList, DecimalPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cart {
  private cartStore = inject(GlobalStore);
  private modalService = inject(ModalService);

  cartItems = this.cartStore.getItems;
  total = this.cartStore.total;

  onRemoveItem(id: string) {
    this.cartStore.removeItem(id);
  }

  async onConfirmOrder() {
    await this.modalService.open(this.cartItems(), this.total());

    this.cartStore.clearCart();
  }
}
