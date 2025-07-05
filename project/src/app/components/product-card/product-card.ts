import { DecimalPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, Input, signal } from '@angular/core';

import { Product } from '@interfaces/product';
import { ButtonCart } from '@components/button-cart/button-cart';
import { GlobalStore } from '@app/store';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DecimalPipe, ButtonCart, NgClass],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  private cartStore = inject(GlobalStore);

  @Input({ required: true }) product!: Product;

  isInCart = signal<boolean>(false);

  constructor() {
    effect(() => {
      const item = this.cartStore.getItem(this.product.id);

      this.isInCart.set(!!item);
    });
  }

  get idProductName(): string {
    return `productName${this.product.id}`;
  }

  get idProductCategory(): string {
    return `productCategory${this.product.id}`;
  }
}
