import { BaseComponent } from '../Services/base-component';
import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {

  items:any;
  order_total:any;
  public orderForm: FormGroup;
  constructor(injector: Injector) {
    super(injector);
  }

  onSubmit(value: any) {
    let order = {
      ho_ten: value.ho_ten,
      dia_chi:value.dia_chi,
      sdt:value.sdt,
      order_total: this.order_total,
      listjson_chitiet:this.items};
    this._api.post('api/HDB/create', order)
    .takeUntil(this.unsubscribe)
    .subscribe(res => {
      alert('Đặt hàng thành công');
       }, err => { });

  }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      ho_ten: new FormControl('', Validators.required),
      dia_chi: new FormControl('', ),
      sdt: new FormControl('', ),
    });

    this._cart.items.subscribe((res) => {
      this.items = res;
      this.order_total = 0;
      for(let x of this.items){
        x.so_luong = +x.quantity;
        x.money = x.quantity * x.dongia;
        this.order_total += x.quantity * x.dongia;
      }
    });

  }

}
