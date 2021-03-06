import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { NavController, ToastController  } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingServiceService } from '../loading-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  products:any;
  public nodata:string = null
  constructor(public loading: LoadingServiceService,public toastController: ToastController,public navCtrl: NavController ,public router:ActivatedRoute
    ,public restProvider: ServiceService) {
    //this.getProductDetails();
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
      if(!paramMap.has('p_name')){
        console.log("Didnot received p_name")
        return;
      }
      const p_name = paramMap.get('p_name');
      console.log(p_name)
      this.restProvider. getProductDetails(p_name)
      .then(data=>{
        this.products=data;
        if(this.products.length == 0)
        {
          this.presentToast()
          this.nodata = "No Data Found"
          this.loading.dismiss();
        }
        else{
          console.log(this.products);
          this.loading.dismiss();
        }
      });
     
    });
  }
}



  // getProductDetails()
  // {
  //   this.restProvider.getProductDetails()
  //   .then(data=>{
  //     this.products=data;
  //     console.log(this.products);
  //   });
  // }

