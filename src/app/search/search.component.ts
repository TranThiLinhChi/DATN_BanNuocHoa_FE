import { Component, OnInit ,Injector,ViewChild} from '@angular/core';
import { BaseComponent } from '../Services/base-component';
import { takeUntil } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FormBuilder,Validators} from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import 'rxjs/add/operator/takeUntil';
declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends  BaseComponent implements OnInit {
  menus:any;
  menus1:any;
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
      }}
}


