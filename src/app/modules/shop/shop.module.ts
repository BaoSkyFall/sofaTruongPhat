import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ShopComponent,

  },

];

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule

  ]
})
export class ShopModule { }
