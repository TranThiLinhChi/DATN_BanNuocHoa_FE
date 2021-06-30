import { BaseComponent } from '../Services/base-component';
import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseComponent implements OnInit {

  items:any;
  total:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for(let x of this.items){
        x.money = x.quantity * x.dongia;
        this.total += x.quantity * x.dongia;
      }
    });
  }
  clearCart() {
    this._cart.clearCart();
    alert('Xóa thành công');
  }
  addQty(item, quantity){
   
    item.quantity =  quantity;
    item.money =  Number.parseInt(item.quantity) *  item.dongia;
    this._cart.addQty(item);
    
    
  }
}
