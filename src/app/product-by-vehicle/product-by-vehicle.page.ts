import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-product-by-vehicle',
  templateUrl: './product-by-vehicle.page.html',
  styleUrls: ['./product-by-vehicle.page.scss'],
})
export class ProductByVehiclePage implements OnInit {
  products:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService) { 
    this.getProductByVehicle();
  }

  ngOnInit() {
  }
  gotoProductdetails()
  {
    this.route.navigate(['/product-details']);
  }
 
  getProductByVehicle()
  {
    
      this.restProvider.getProductByVehicle()
      .then(data=>{
        this.products=data;
        console.log(this.products);
      });
   
  }
}
