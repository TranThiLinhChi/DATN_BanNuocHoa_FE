import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../Services/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-type-product',
  templateUrl: './type-product.component.html',
  styleUrls: ['./type-product.component.scss']
})
export class TypeProductComponent extends BaseComponent implements OnInit {

  loaisp:any;
  ct:any;

  spofloaisp:any;
  page: any;
  pageSize: any;
  totalItems:any;
  maloai:any;
  constructor(injector : Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.ct = {};

    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/sanpham/get-by-id/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
        this.ct = res;
        setTimeout(() => {
          this.loadScripts();
        });
      });
    });

    this._api.get('api/loaisp/get-menu').takeUntil(this.unsubscribe).subscribe(res => {this.loaisp = res;})

    this.spofloaisp = [];
    this.page = 1;
    this.pageSize = 9;
    this._route.params.subscribe(params => {
      this.maloai = params['id'];
      this._api.post('api/sanpham/search-category', {
        page: this.page,
        pageSize: this.pageSize,
        maloai: this.maloai}).takeUntil(this.unsubscribe).subscribe(res => {
        this.spofloaisp = res.data;
        this.totalItems = res.totalItems;
        }, err => { });
        });
  }
  loadPage(page) {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.post('api/sanpham/search-category', {
        page: page,
        pageSize: this.pageSize,
        maloai: id}).takeUntil(this.unsubscribe).subscribe(res => {
        this.spofloaisp = res.data;
        this.totalItems = res.totalItems;
        }, err => { });
   });
  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }

}
