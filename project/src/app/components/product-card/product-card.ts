import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '@interfaces/product';
import { ButtonCart } from '@components/button-cart/button-cart';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DecimalPipe, ButtonCart],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  @Input({ required: true }) product!: Product;

  get idProductName(): string {
    return `productName${this.product.id}`;
  }

  get idProductCategory(): string {
    return `productCategory${this.product.id}`;
  }
}
