import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ShopComponent,

  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,

  },

];

@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule

  ]
})
export class ShopModule { }
