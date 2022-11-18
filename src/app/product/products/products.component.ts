import { Component, OnInit,ViewChild } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { AddProductsComponent } from 'src/app/add-products/add-products.component';
import { EditproductComponent } from '../editproduct/editproduct.component';
import { Product } from '../models/product';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  show:Product;
products:Product[]=[];
 
// @ViewChild(ProductdetailComponent) child: ProductdetailComponent
@ViewChild(ProductdetailComponent) child: ProductdetailComponent
@ViewChild(EditproductComponent) child2 : EditproductComponent
selectedProductId:string="";
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe({next:(result)=>{
      this.products=result
    }})
  }
  selectProduct(productid:string){
console.log(productid);
// this.selectedProductId=productid;
this.child.showDetail(productid)
  }

  OnchildClicked(msg){
    alert(msg)
  }
//  showEdit(productid1:string){


// this.show=productid1;
// console.log(this.show);

// this.child1.showDetails(productid1);

//  }
 Onchild2Clicked(productid1:Product){
  this.show=productid1;
  console.log(this.show);
  console.log(typeof(this.show));
  
  // this.child2.show1(this.show)
  // this.child2.showDetails(productid1);
  // if(this.show){
  //   this.child2.showDetails(productid1)
  // }else{
  //   console.log("hai");
    
  // }
  }
  showDetail1(id:string){
    console.log(id);
    

  }

}
