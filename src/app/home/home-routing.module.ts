import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { TypeProductComponent } from './type-product/type-product.component';
import { BrandComponent } from './brand/brand.component';



const routes: Routes = [
    //đây là file link của home module
  {path:'',component:HomeComponent},//link là localhost:4200/home
  { path:'details/:id',component: DetailsComponent},//link là localhost:4200/home/details
  { path:'type-product/:id',component: TypeProductComponent},
  { path:'brand/:id',component: BrandComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
