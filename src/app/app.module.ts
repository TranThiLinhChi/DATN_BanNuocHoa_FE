import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './home/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PaginatorModule} from 'primeng/paginator';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    


  ],
  imports: [ //nhập
    BrowserModule,CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
        ReactiveFormsModule,
         NgbModule,
         PaginatorModule
  ],
  providers: [], //nhà cung cấp
  bootstrap: [AppComponent]
})
export class AppModule { }
