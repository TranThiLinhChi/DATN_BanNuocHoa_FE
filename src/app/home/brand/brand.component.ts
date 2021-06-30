import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../Services/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent extends BaseComponent implements OnInit{

  loaith:any;
  loaisp:any;
  ct:any;

  spofloaith:any;
  spofloaisp:any;
  page: any;
  pageSize: any;
  totalItems:any;
  mathuonghieu:any;
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

    this._api.get('api/thuonghieu/get-brand').takeUntil(this.unsubscribe).subscribe(res => {this.loaith= res;})
    this._api.get('api/thuonghieu/get-brand-data').takeUntil(this.unsubscribe).subscribe(res => {this.loaith= res;})
    this._api.get('api/loaisp/get-menu').takeUntil(this.unsubscribe).subscribe(res => {this.loaisp = res;})

    this.spofloaith = [];
    this.page = 1;
    this.pageSize = 9;
    this._route.params.subscribe(params => {
      this.mathuonghieu= params['id'];
      this._api.post('api/sanpham/search-brand', {
        page: this.page,
        pageSize: this.pageSize,
       mathuonghieu: this.mathuonghieu}).takeUntil(this.unsubscribe).subscribe(res => {
        this.spofloaith = res.data;
        this.totalItems = res.totalItems;
        }, err => { });
        });
  }
  loadPage(page) {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.post('api/sanpham/search-brand', {
        page: page,
        pageSize: this.pageSize,
        maloai: id}).takeUntil(this.unsubscribe).subscribe(res => {
        this.spofloaith = res.data;
        this.totalItems = res.totalItems;
        }, err => { });
   });
  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }

}