import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartList } from '@app/components/cart-list/cart-list';
import { CartItemSubTotal, CartTotal } from '@app/interfaces/cart';

@Component({
  selector: 'app-modal',
  imports: [DecimalPipe, CartList],
  standalone: true,
  templateUrl: './modal-cart-component.html',
  styleUrl: './modal-cart-component.scss',
})
export class ModalCartComponent {
  @Input() cartItems: CartItemSubTotal[] = [];
  @Input() total!: CartTotal;

  @Output() close = new EventEmitter<string>();

  onClose(action: string) {
    this.close.emit(action);
  }
}
