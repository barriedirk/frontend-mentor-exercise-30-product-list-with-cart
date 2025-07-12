import { DecimalPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CartItemSubTotal } from '@interfaces/cart';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [DecimalPipe, NgClass],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartList {
  @Input() cartItems: CartItemSubTotal[] = [];
  @Input() showRemoveItem: boolean = true;

  @Output() removeItem = new EventEmitter<string>();

  onRemoveItem(id: string) {
    this.removeItem.emit(id);
  }
}
