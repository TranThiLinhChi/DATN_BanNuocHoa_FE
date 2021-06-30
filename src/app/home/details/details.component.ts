import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../Services/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  loaisp:any;
  ct:any;
  spm: any;
  spofloaisp:any;
  constructor(injector : Injector) {
    super(injector);
   }

   ngOnInit(): void {
    this._api.get('api/SanPham/get-status').
    takeUntil(this.unsubscribe)
    .subscribe(res => {this.spm = res;})

    this.ct = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      
      this._api.get('api/sanpham/get-by-id/'+id).takeUntil(this.unsubscribe)
      .subscribe((res: any) => {
        this.ct = res;
        console.log(this.ct);
        this. loaisp = res.maloai;
        setTimeout(() => {
          this.loadScripts();
        });
        
        this._api.get('api/loaisp/get-menu').takeUntil(this.unsubscribe).subscribe(res => {this.loaisp = res;})
        console.log(id, this.loaisp);
      });
    });

    

    this.spofloaisp = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/sanpham/sp-get-by-loai/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
        this.spofloaisp = res;
        setTimeout(() => {
          this.loadScripts();
        });
      });
    });
  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
}
