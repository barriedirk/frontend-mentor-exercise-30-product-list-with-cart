import {
  Injectable,
  inject,
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
} from '@angular/core';

import { ModalCartComponent } from './modal-cart-component';
import { CartItemSubTotal, CartTotal } from '@app/interfaces/cart';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private appRef = inject(ApplicationRef);
  private injector = inject(EnvironmentInjector);
  private modalRef: ComponentRef<ModalCartComponent> | null = null;

  open(cartItems: CartItemSubTotal[], total: CartTotal): Promise<any> {
    if (this.modalRef) return Promise.reject('Modal already open');

    this.modalRef = createComponent(ModalCartComponent, {
      environmentInjector: this.injector,
    });

    this.modalRef.instance.cartItems = cartItems;
    this.modalRef.instance.total = total;

    // this.modalRef.instance.close.subscribe(() => this.close());

    const result = new Promise<any>((resolve) => {
      this.modalRef!.instance.close.subscribe(() => {
        resolve('Modal closed');
        this.close();
      });
    });

    this.appRef.attachView(this.modalRef.hostView);
    document.body.appendChild(this.modalRef.location.nativeElement);

    return result;
  }

  close() {
    if (this.modalRef) {
      this.appRef.detachView(this.modalRef.hostView);
      this.modalRef.destroy();
      this.modalRef = null;
    }
  }
}
