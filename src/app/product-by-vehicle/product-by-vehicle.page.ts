import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { empty } from 'Ionic_TPL/node_modules/rxjs';


@Component({
  selector: 'app-product-by-vehicle',
  templateUrl: './product-by-vehicle.page.html',
  styleUrls: ['./product-by-vehicle.page.scss'],
})
export class ProductByVehiclePage implements OnInit {
  products:any;
  vehicle:any;
  constructor(public toastController: ToastController,private route: Router,public navCtrl: NavController, public restProvider: ServiceService,public router:ActivatedRoute) { 
   // this.getProductByVehicle();
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
        if(this.products.length == 0){
          this.presentToast()
        }
        else{
        console.log(this.products);
        }
      });

      this.restProvider.getVeh(v_name)
      .then(data=>{
        this.vehicle=data;
        console.log(this.vehicle);
      });
    });
  }
  
}


//   ngOnInit() {
//   }
//   gotoProductdetails()
//   {
//     this.route.navigate(['/product-details']);
//   }
 
//   getProductByVehicle()
//   {
    
//       this.restProvider.getProductByVehicle()
//       .then(data=>{
//         this.products=data;
//         console.log(this.products);
//       });
   
//   }
// }
