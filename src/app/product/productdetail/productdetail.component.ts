import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
hide:boolean=true;
  constructor(private productservice:ProductService) { }
  // @Input()
  //  selectedProduct_Id1:string="";
//   set selectedProduct_Id(id:string){
// if(id){
  
//     this.product=this.productservice.getProductById(id)
    
  
// }
//   }
@Output() childClicked = new EventEmitter<string>();
@Output() childClicked1= new EventEmitter<Product|null>();
product:Product;
  ngOnInit(): void {
  }

  // input chANGES CHEYUMBOL NGoNCHANGE CHANGE CHYUM
// ngOnChanges() {
//   console.log(this.selectedProduct_Id);
//   if(this.selectedProduct_Id){
//   this.product=this.productservice.getProductById(this.selectedProduct_Id)
  
// }
// }
showDetail(id:string){
  if(id){
    this.product = this.productservice.getProductById(id)
  }
}
onClick(){
  this.childClicked.emit("hello")
}
onEdit(){

  
this.childClicked1.emit(this.product)
this.hide=false;

}
}
