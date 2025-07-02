import { NgClass } from '@angular/common';
import { Input, ChangeDetectionStrategy, Component, HostBinding, signal } from '@angular/core';

@Component({
  selector: 'app-button-cart',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button-cart.html',
  styleUrl: './button-cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCart {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;

  showAddCartButton = signal(false);
  quantity = signal(0);

  @HostBinding('class') hostClass = 'button-cart';
  hostClasses = 'button-cart';

  @Input()
  set class(value: string) {
    this.hostClass = `button-cart ${value}`;
    this.hostClasses = `button-cart ${value}`;
  }

  onAddToCart() {
    // @todo, implement
  }

  onIncrementQuantity() {
    // @todo, implement
  }

  onDecrementQuantity() {
    // @todo, implement
  }
}
