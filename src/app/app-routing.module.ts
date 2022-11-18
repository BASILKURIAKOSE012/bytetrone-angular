import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ProductsComponent } from './product/products/products.component';

const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent
  },
  {path:'products',
  component:ProductsComponent
  },{
path:'home',
component:HomeComponent
  },
  {
    path:'addProduct',
    component:AddproductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
