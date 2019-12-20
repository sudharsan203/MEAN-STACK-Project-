import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  gotoAllproducts()
  {
    this.route.navigate(['/all-products']);
  }
  gotoCompany()
  {
    this.route.navigate(['/company']);
  }
}
