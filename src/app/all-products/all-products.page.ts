import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {
  products:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService) {
    this. getAllProducts();
   }

  ngOnInit() {
  }
  gotoProductdetails()
  {
    this.route.navigate(['/product-details']);
  }
  getAllProducts()
  {
     this.restProvider.getAllProducts()
     .then(data=>{
       this.products=data;
       console.log(this.products);
     });
  }

}
