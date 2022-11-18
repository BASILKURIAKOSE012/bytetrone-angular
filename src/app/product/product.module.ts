import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AppPipesPipe } from './pipes/app-pipes.pipe';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductdetailComponent,
    AddproductComponent,
    EditproductComponent,
    AppPipesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductModule { }
