import { Component } from '@angular/core';
import { ICommonProduct } from '../../../mf-payment/src/app/payment/payment.component';
import PubSub from 'pubsub-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
  count = 0;
  private _products: ICommonProduct[] = [];

  ngOnInit(): void {
    PubSub.subscribe('products', (_messsage, data) => {
      this._products.push(data as unknown as ICommonProduct);
      this.count++;
      localStorage.setItem('products', JSON.stringify(this._products));
    });
  }
}
