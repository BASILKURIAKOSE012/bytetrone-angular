import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { priceCategoryValidator, priceEvenValidator } from '../products/validators/product-validators';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private productservice:ProductService , private router:Router ,private fb:FormBuilder) { }

  // productForm:FormGroup = new FormGroup({
    // "title": new FormControl("oppo"),
    // "price": new FormControl(),
    // "description": new FormControl(),
    // "category":new FormControl()


  // })
  @Input()item:string|undefined
  isValid=false;
  categories=[" ","SmartPhone","Laptop","Monitor"]
  productForm:FormGroup = this.fb.group({
    "title": ['',[Validators.required,Validators.minLength(3),Validators.maxLength(5)]],
    "price": ['',[Validators.required,Validators.max(1000000),priceEvenValidator()]],
    "description": [],
    "category":['Monitor',Validators.required],
"image":["../../../assets/oppo.jpg"]
  },{validator:priceCategoryValidator()})

  product:Product ={
    title:"",
    price:0,
    description:"",
    category:"",
    id:"",
    image:"../../../assets/oppo.jpg"
  
   
    

  }

  
name:string="hello"
  ngOnInit(): void {
  }
addProduct(){
  
  
//   if(this.product.title && this.product.price>0&&this.product.category&&this.product.description){
//   this.productservice.addProductNew(this.product);
//   }
//   else{
//     alert("enter valid details")
//   }
if(this.productForm.valid){
this.productservice.addProductNew(this.productForm.value)
this.router.navigate(["products"])
}
else{
  alert("invalid form")
}
}
isInvalid(field: string) {
    
  return this.productForm.get(field).invalid && (this.productForm.get(field).dirty || this.productForm.get(field).touched)
}
}
