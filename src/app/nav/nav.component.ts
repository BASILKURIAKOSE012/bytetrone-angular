import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
menuItems=[{display:'Home',link:'home'},{display:'Products',link:'products'},{
  display:'Add product',link:'addProduct'
}]
}
