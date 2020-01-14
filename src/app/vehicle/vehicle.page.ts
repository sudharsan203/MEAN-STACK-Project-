import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController, ToastController  } from '@ionic/angular';
import { LoadingServiceService } from '../loading-service.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {
  vehicles:any;
  company:any;
  
  public nodata:string = null
  duty: string;
  constructor(public loading:LoadingServiceService,public toastController: ToastController,private route: Router,public navCtrl: NavController, public restProvider: ServiceService,public router:ActivatedRoute) {
    //this.getVehicle(name);
    this.duty = "light";

   }
  Vduty(string){
    this.duty = string;
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: ' No Data to display ',
      position: "bottom",
      duration: 1500
    });
    toast.present();
  }
  ngOnInit() {
    this.loading.present();
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
        if(this.vehicles.length == 0){
          this.presentToast()
          this.nodata = "No Data Found"
          this.loading.dismiss()
        }else{
        console.log(this.vehicles)
        }
      })
    });
   
  }
 
  
}
