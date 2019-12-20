import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {
  vehicles:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService) {
    this.getVehicle();
   }

  ngOnInit() {
  }
  gotoVehicleproduct()
  {
    this.route.navigate(['/product-by-vehicle']);
  }

  getVehicle()
  {
    
      this.restProvider.getVehicle()
      .then(data=>{
        this.vehicles=data;
        console.log(this.vehicles);
      });
   
  }
}
