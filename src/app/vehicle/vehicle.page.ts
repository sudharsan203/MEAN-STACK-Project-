import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {
  vehicles:any;
  company:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService,public router:ActivatedRoute) {
    //this.getVehicle(name);
   
   }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('name')){
        console.log("Didnot received name")
        return;
      }
      const name = paramMap.get('name');
      console.log(name)
      this.restProvider.getCompanyById(name)
      .then(data=>{
        this.company=data;
        console.log(this.company);
      });
      const vname = paramMap.get('name');
      console.log(vname)
      this.restProvider.getVehicle(vname)
      .then(data=>{
        this.vehicles=data;
        console.log(this.vehicles)
      })
    });
   
  }
 
  
}
