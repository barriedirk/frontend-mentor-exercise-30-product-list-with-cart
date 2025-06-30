import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { Product } from '@app/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class Data {
  dataUrl = 'assets/data/products.json';
  http = inject(HttpClient);

  private productsSubject = new BehaviorSubject<Product[] | null>(null);

  getProducts(): Observable<Product[]> {
    if (this.productsSubject.value) {
      return this.productsSubject.asObservable().pipe(filter((data) => data !== null));
    }

    return this.http
      .get<Product[]>(this.dataUrl)
      .pipe(tap((data) => this.productsSubject.next(data)));
  }
}
