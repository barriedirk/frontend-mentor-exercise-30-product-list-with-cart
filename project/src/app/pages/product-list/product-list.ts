import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { Data } from '@services/data';
import { Cart } from '@components/cart/cart';
import { ProductCard } from '@app/components/product-card/product-card';

import { Product } from '@interfaces/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [Cart, ProductCard, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductList implements OnInit {
  private dataService = inject(Data);
  private cdr = inject(ChangeDetectorRef);

  products = toSignal(this.dataService.getProducts(), { initialValue: [] });

  ngOnInit() {}
}
