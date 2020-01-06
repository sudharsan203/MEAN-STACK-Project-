import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-pricelist-by-vehicle',
  templateUrl: './pricelist-by-vehicle.page.html',
  styleUrls: ['./pricelist-by-vehicle.page.scss'],
})
export class PricelistByVehiclePage implements OnInit {
  products:any;
  vehicle:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService,public router:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('v_name')){
        return;
      }
      const v_name = paramMap.get('v_name');
      console.log(v_name)
      this.restProvider.getProductByVehicle(v_name)
      .then(data=>{
        this.products=data;
        console.log(this.products);
      });

      this.restProvider.getVeh(v_name)
      .then(data=>{
        this.vehicle=data;
        console.log(this.vehicle);
      });
    });
  }
  
}
