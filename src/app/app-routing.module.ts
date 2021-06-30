import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path:'home',loadChildren:()=>import('./home/home.module').then(x=>x.HomeModule)},

  //khi link là localhost:4200/home thì load home module ra, trong homemodule có các component con như detail, hone
   { path:'cart', component: CartComponent},
   { path: 'checkout',component: CheckoutComponent},
   { path:'login', component: LoginComponent},
  {
    path: 'search',
    component: SearchComponent
  },

];

@NgModule({
  declarations: [CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
