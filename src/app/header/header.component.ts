import { Component,Injector, OnInit ,ViewChild} from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from '../Services/base-component';
import { FormBuilder, Validators} from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

loai: any;
thuonghieu:any;
loaith:any;
total: any;
items: any;
name: any;
public products: any;
public product: any;
public totalRecords:any;
public pageSize = 3;
public page = 1;
public uploadedFiles: any[] = [];
public formsearch: any;
public formdata: any;
public doneSetupForm: any;
public showUpdateModal:any;
public isCreate:any;
submitted = false;

@ViewChild(FileUpload, { static: false }) file_image: FileUpload;
constructor(private fb: FormBuilder, injector: Injector) {
  super(injector);
}

ngOnInit(): void {
  this._api
    .get('api/loaisp/get-menu')
    .takeUntil(this.unsubscribe)
    .subscribe((res) => {
      this.loai = res;
    });
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for (let x of this.items) {
        x.money = x.quantity * x.dongia;
        this.total += x.quantity * x.dongia;
      }
    });
    this._api
    .get('api/thuonghieu/get-brand')
    .takeUntil(this.unsubscribe)
    .subscribe((res) => {
      this.thuonghieu= res;
    });
    this._api
    .get('api/thuonghieu/get-brand-data')
    .takeUntil(this.unsubscribe)
    .subscribe((res) => {
      this.loaith= res;
    });
    this.formsearch = this.fb.group({
      'tensp': [''],
      'dongia': [''],
    });
    this.search();
  }
  loadPage(page) {
    this._api.post('/api/sanpham/search-product',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.products = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });

  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/sanpham/search-product',{page: this.page, pageSize: this.pageSize, tensp: this.formsearch.get('tensp').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.products = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }
  get f() { return this.formdata.controls; }
  //form này lúc ấn submit thôi
    onSubmit(value) {
      this.submitted = true;
      if (this.formdata.invalid) {
        return;
      }
    }
  clearCart() {
    this._cart.clearCart();
    alert('Xóa thành công!');
  }
  addQty(item, quantity) {
    if (item.quantity >= quantity) {
      item.quantity = quantity;
      item.money = Number.parseInt(item.quantity) * item.dongia;
      this._cart.addQty(item);
    } else {
      alert('Số lượng không đủ!');
    }
  }
  

}