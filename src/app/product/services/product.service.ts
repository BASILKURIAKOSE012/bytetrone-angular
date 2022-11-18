import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {v4 as uuidv4} from 'uuid'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productId:string;
  // products:Product[];
  products: Product[] = [
    new Product("1", "LENOVO", 1000, "Laptop","../../../assets/lenovo.jpg","This is Lenovo Laptop"),
    new Product("2", "SAMSUNG", 1000, "Smart Phone","../../../assets/samsung.jpg","This is Samsung Laptop"),
    new Product("3", "BENQ", 1000, "monitor","../../../assets/benq.jpg","This is Benq Laptop"),
    new Product("4", "DELL", 1000, "laptop","../../../assets/dell.jpg","This is Dell Laptop"),
    {
      id: "5",
      title: "Redmi",
      price: 3000,
      category: "smartphone",
      image: "../../../assets/redmi.jpg",
      description:"This is Redmi smartphone"

    }
    
  ]
  constructor(private router:Router, private http:HttpClient) { }
  public getProducts():Observable<Product[]> {

    return this.http.get<Product[]>('http://localhost:3000/products')

  }
  // getProducts(){
  //   return this.products
  // }
  getProductSummary(){
    return[{
      "category": "smartphone",
      "numbers":3
    },
    {
      "category": "laptop",
      "numbers":3
    }
    ]
  }
getProductById(productId:string):Product | undefined{
  return this.products.find(p=>p.id===productId)
}
addProductNew(product:Product){

  product.id=uuidv4();
  this.products.push(product);
  // this.router.navigate(['products']);
  this.router.navigateByUrl("products")

}
editProductNew(product:Product){
let index =this.products.indexOf(this.getProductById(product.id))
this.products[index]=product;
  // this.router.navigate(['products']);
  this.router.navigateByUrl("products")

}
}
