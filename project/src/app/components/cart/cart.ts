import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { StoreCart } from '@store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cart {
  totalItems = signal(0);
}
