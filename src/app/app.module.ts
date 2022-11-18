import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AsideComponent } from './aside/aside.component';
// import { ProductModule } from './product/product.module';
import { ProductModule } from './product/product.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AddProductsComponent } from './add-products/add-products.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AsideComponent,
    NavComponent,
    HomeComponent,
    AddProductsComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
