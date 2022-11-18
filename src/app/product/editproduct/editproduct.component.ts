import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { priceCategoryValidator, priceEvenValidator } from '../products/validators/product-validators';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
hid:boolean=false;
  @Input()item:Product|undefined;
  constructor(private productservice:ProductService , private router:Router ,private fb:FormBuilder) {
  
  
    
   }
   
   categories=[" ","SmartPhone","Laptop","Monitor"]
  productForm:FormGroup = this.fb.group({
    "title": ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    "price": ['',[Validators.required,Validators.max(1000000),priceEvenValidator()]],
    "description": [],
    "category":['Monitor',Validators.required],
"image":["../../../assets/oppo.jpg"]
  },{validator:priceCategoryValidator()})

  // products:Product ={
  //   title:"",
  //   price:0,
  //   description:"",
  //   category:"",
  //   id:"",
  //   image:"../../../assets/oppo.jpg"
  
   
    

  // }
    

  ngOnInit(): void {
    // console.log(this.item);
  }
  product1:Product;

  
  editProduct(){
  
  
    //   if(this.product.title && this.product.price>0&&this.product.category&&this.product.description){
    //   this.productservice.addProductNew(this.product);
    //   }
    //   else{
    //     alert("enter valid details")
    //   }
    if(this.productForm.valid){
      let editedProduct :Product= this.productForm.value;
      
      
editedProduct.id=this.item.id;
    this.productservice.editProductNew(editedProduct)
    console.log(this.productForm.value);
    this.item=null;
    // this.router.navigate(["home"])
  this.hid=true
  setTimeout(show, 2000,this);

function show(currentObj) {
  currentObj.hid=false
}
    
    }
    else{
      alert("invalid form")
    }
    }
    isInvalid(field: string) {
    
      return this.productForm.get(field).invalid && (this.productForm.get(field).dirty || this.productForm.get(field).touched)
    }
    showDetails(productid :Product){
      // this.product1=productid;
      // console.log(this.product1);
      console.log(productid);
      
      // if(productid){
    
        
      //   this.product1 = this.productservice.getProductById(productid)
      //   console.log(this.product1.title);
        
      // }
    }
    show1(productid:Product){
    console.log("hi");
    
      
    }
ngOnChanges(){
  console.log(this.item);
  
    
      this.productForm.setValue ({
        "title": this.item.title,
        "category": this.item.category,
        "price": this.item.price,
        "description": this.item.description,
        "image": this.item.image
      

      })
      
    
  
}
cancelProduct(){
  this.item=null;
}

  }
 