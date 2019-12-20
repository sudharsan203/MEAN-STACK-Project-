import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  products:any;
  constructor(public navCtrl: NavController, public restProvider: ServiceService) {
    this.getProductDetails();
   }

  ngOnInit() {
  }

  getProductDetails()
  {
    this.restProvider.getProductDetails()
    .then(data=>{
      this.products=data;
      console.log(this.products);
    });
  }
}
